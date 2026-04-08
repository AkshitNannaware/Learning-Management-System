# LMS Backend (FastAPI + MongoDB Atlas)

## Run locally

1. Create `.env` from `.env.example`
2. Install dependencies
   - `pip install -r requirements.txt`
3. Run API
   - `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`

## Core modules

- `app/core` - config and global settings
- `app/db` - MongoDB connection
- `app/deps` - auth dependencies, RBAC, tenant context
- `app/routers` - auth, LMS resources, websocket endpoints
- `app/services` - realtime and payments helpers
- `app/schemas` - request/response models

## Key APIs

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me`
- `POST /api/v1/lms/tenants`
- `POST /api/v1/lms/users`
- `POST /api/v1/lms/courses`
- `POST /api/v1/lms/live-classes`
- `POST /api/v1/lms/payments/order`
- `POST /api/v1/lms/payments/verify`
- `POST /api/v1/lms/payments/webhook`
- `WS /ws/{room}` for real-time updates
