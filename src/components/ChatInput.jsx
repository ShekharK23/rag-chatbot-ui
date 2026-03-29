import React, { useState, useRef, useEffect } from 'react'
import { Send, Loader2 } from 'lucide-react'

export default function ChatInput({ onSend, loading }) {
  const [value, setValue] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.style.height = 'auto'
    ref.current.style.height = Math.min(ref.current.scrollHeight, 120) + 'px'
  }, [value])

  const submit = () => {
    if (!value.trim() || loading) return
    onSend(value.trim())
    setValue('')
  }

  return (
    <div className="p-4">
      <div className={`glass rounded-2xl flex items-end gap-3 px-4 py-3 transition-all duration-200 focus-within:border-blue-500/40 focus-within:glow-sm`}>
        <textarea
          ref={ref}
          rows={1}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit() } }}
          disabled={loading}
          placeholder="Ask about parts, specs, policies, or installation guides..."
          className="flex-1 bg-transparent text-sm text-slate-200 placeholder-slate-700 resize-none outline-none leading-relaxed"
        />
        <button
          onClick={submit}
          disabled={!value.trim() || loading}
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed enabled:bg-blue-600 enabled:hover:bg-blue-500 enabled:hover:scale-105 enabled:shadow-lg enabled:shadow-blue-900/30"
        >
          {loading
            ? <Loader2 size={14} className="text-white animate-spin" />
            : <Send size={14} className="text-white" />
          }
        </button>
      </div>
      <p className="text-center text-xs text-slate-800 mt-1.5">Enter to send · Shift+Enter for new line</p>
    </div>
  )
}