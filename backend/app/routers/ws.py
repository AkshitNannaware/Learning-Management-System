from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.realtime import ws_manager

router = APIRouter(tags=["ws"])


@router.websocket("/ws/{room}")
async def websocket_room(websocket: WebSocket, room: str):
    await ws_manager.connect(room, websocket)
    try:
        while True:
            incoming = await websocket.receive_json()
            await ws_manager.broadcast(room, {"type": "echo", "data": incoming})
    except WebSocketDisconnect:
        ws_manager.disconnect(room, websocket)
