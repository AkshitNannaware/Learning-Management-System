from datetime import datetime, timezone
from bson import ObjectId
from fastapi import APIRouter, Depends, HTTPException
from app.db import mongo
from app.deps.auth import get_current_user
from app.schemas.auth import LoginRequest, RegisterRequest, TokenResponse
from app.utils.security import create_access_token, hash_password, verify_and_update_password

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=TokenResponse)
async def register(payload: RegisterRequest):
    if mongo.db is None:
        raise HTTPException(status_code=500, detail="Database not initialized")
    existing = await mongo.db.users.find_one({"email": payload.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")

    user = {
        "full_name": payload.full_name,
        "email": payload.email,
        "password_hash": hash_password(payload.password),
        "role": payload.role.value,
        "tenant_id": payload.tenant_id,
        "is_active": True,
        "created_at": datetime.now(timezone.utc),
    }
    res = await mongo.db.users.insert_one(user)
    token = create_access_token(
        {"sub": str(res.inserted_id), "role": payload.role.value, "tenant_id": payload.tenant_id}
    )
    return TokenResponse(access_token=token, role=payload.role, tenant_id=payload.tenant_id)


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginRequest):
    if mongo.db is None:
        raise HTTPException(status_code=500, detail="Database not initialized")
    user = await mongo.db.users.find_one({"email": payload.email, "is_active": True})
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    ok, new_hash = verify_and_update_password(payload.password, user["password_hash"])
    if not ok:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if new_hash:
        await mongo.db.users.update_one(
            {"_id": user["_id"]},
            {"$set": {"password_hash": new_hash, "updated_at": datetime.now(timezone.utc)}},
        )
    token = create_access_token(
        {"sub": str(user["_id"]), "role": user["role"], "tenant_id": user.get("tenant_id")}
    )
    return TokenResponse(access_token=token, role=user["role"], tenant_id=user.get("tenant_id"))


@router.get("/me")
async def me(current_user=Depends(get_current_user)):
    if mongo.db is None:
        raise HTTPException(status_code=500, detail="Database not initialized")
    user = await mongo.db.users.find_one({"_id": ObjectId(current_user["sub"])})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["_id"] = str(user["_id"])
    user.pop("password_hash", None)
    return user
