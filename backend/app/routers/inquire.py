
from fastapi import APIRouter, HTTPException, Depends, Request, Body
from app.db.mongo import get_database
from app.deps.auth import get_current_user
from typing import List
from datetime import datetime

router = APIRouter(prefix="/inquire", tags=["Inquire"])

# Public endpoint to receive newsletter subscriptions
@router.post("/newsletter")
async def submit_newsletter_subscription(payload: dict = Body(...)):
    db = await get_database()
    data = {
        "email": payload.get("email"),
        "created_at": datetime.utcnow(),
    }
    if not data["email"]:
        raise HTTPException(status_code=400, detail="Email is required")
    res = await db.newsletter_inquiries.insert_one(data)
    return {"success": True, "_id": str(res.inserted_id)}

# Helper: Only admin can access inquiries
async def admin_required(user=Depends(get_current_user)):
    if user["role"] != "admin":
        raise HTTPException(status_code=403, detail="Forbidden")
    return user

@router.get("/all")
async def get_all_inquiries(user=Depends(admin_required)):
    db = await get_database()
    contact_inquiries = [
        {**doc, "_id": str(doc["_id"])} async for doc in db.contact_inquiries.find({})
    ]
    newsletter_inquiries = [
        {**doc, "_id": str(doc["_id"])} async for doc in db.newsletter_inquiries.find({})
    ]
    return {
        "contact_inquiries": contact_inquiries,
        "newsletter_inquiries": newsletter_inquiries,
    }


# Public endpoint to receive contact inquiries
@router.post("/contact")
async def submit_contact_inquiry(request: Request):
    db = await get_database()
    data = await request.json()
    data["created_at"] = datetime.utcnow()
    res = await db.contact_inquiries.insert_one(data)
    return {"success": True, "_id": str(res.inserted_id)}
