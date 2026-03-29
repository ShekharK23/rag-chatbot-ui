import { useState, useCallback } from 'react'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading]   = useState(false)

  const sendMessage = useCallback(async (query) => {
    if (!query.trim() || loading) return

    setMessages(prev => [...prev, {
      id: Date.now(), role: 'user', content: query, timestamp: new Date()
    }])
    setLoading(true)

    try {
      const res  = await fetch(`/ask?query=${encodeURIComponent(query)}`)
      if (!res.ok) throw new Error(`Server error ${res.status}`)
      const data = await res.json()
      setMessages(prev => [...prev, {
        id:        Date.now() + 1,
        role:      'assistant',
        content:   data.answer,
        route:     data.route,
        entity:    data.entity,
        context:   data.context,
        timestamp: new Date(),
      }])
    } catch (err) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1, role: 'error', content: err.message, timestamp: new Date()
      }])
    } finally {
      setLoading(false)
    }
  }, [loading])

  const clearMessages = useCallback(() => setMessages([]), [])

  return { messages, loading, sendMessage, clearMessages }
}