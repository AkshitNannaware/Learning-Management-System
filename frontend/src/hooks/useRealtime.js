import { useEffect, useRef } from 'react'
import { createRoomSocket } from '../lib/api'

export default function useRealtime(room, onMessage) {
  const onMessageRef = useRef(onMessage)
  onMessageRef.current = onMessage

  useEffect(() => {
    if (!room) return undefined
    let ws
    const timer = window.setTimeout(() => {
      ws = createRoomSocket(room)
      ws.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data)
          onMessageRef.current?.(payload)
        } catch {
          // ignore malformed messages
        }
      }
    }, 0)

    return () => {
      window.clearTimeout(timer)
      if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
        ws.close()
      }
    }
  }, [room])
}
