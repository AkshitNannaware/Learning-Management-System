# LMS Backend (FastAPI + MongoDB Atlas)

## Run locally

### Windows PowerShell

1. Open a terminal in `backend/`
2. Create a virtual environment if needed
   - `python -m venv venv`
3. Activate the environment
   - `venv\Scripts\Activate`
4. Install dependencies
   - `pip install -r requirements.txt`
5. Create `.env` from `.env.example` and set your MongoDB and auth values
6. Start the API
   - `uvicorn app.main:app --reload --host 0.0.0.0 --port 8000`

### Access

- API: `http://localhost:8000`
- OpenAPI docs: `http://localhost:8000/docs`

### Notes

- If MongoDB is not running or the Atlas URI is invalid, the server may start but requests will fail.
- If you prefer Docker, run the project from the root with `docker-compose.yml` instead of starting the backend manually.

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
