from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from app.core.config import settings
from app.models.enums import Role

security = HTTPBearer(auto_error=True)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> dict:
    token = credentials.credentials
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        return payload
    except JWTError as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token") from exc


def require_roles(*allowed: Role):
    async def checker(user: dict = Depends(get_current_user)) -> dict:
        if user.get("role") not in [r.value for r in allowed]:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Insufficient role")
        return user

    return checker


async def get_tenant_id(user: dict = Depends(get_current_user)) -> str | None:
    tenant_id = user.get("tenant_id")
    # Keep requests functional even if older tokens were issued without tenant_id.
    # Tenant-scoped handlers can still apply additional checks where strict isolation is required.
    return tenant_id
