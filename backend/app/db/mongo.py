from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from app.core.config import settings

client: AsyncIOMotorClient | None = None
db: AsyncIOMotorDatabase | None = None


async def connect_db() -> None:
    global client, db
    client = AsyncIOMotorClient(settings.mongo_uri)
    db = client[settings.mongo_db]
    await ensure_indexes()


async def close_db() -> None:
    if client:
        client.close()


async def ensure_indexes() -> None:
    if db is None:
        return
    await db.users.create_index([("email", 1)], unique=True)
    await db.users.create_index([("tenant_id", 1), ("role", 1)])
    await db.courses.create_index([("tenant_id", 1), ("created_at", -1)])
    await db.live_classes.create_index([("tenant_id", 1), ("start_at", 1)])
    await db.enrollments.create_index([("tenant_id", 1), ("student_id", 1)])
    await db.payments.create_index([("tenant_id", 1), ("created_at", -1)])
    await db.notifications.create_index([("user_id", 1), ("created_at", -1)])
