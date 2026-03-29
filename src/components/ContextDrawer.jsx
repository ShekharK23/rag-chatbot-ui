import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Code2 } from 'lucide-react'

export default function ContextDrawer({ context }) {
  const [open, setOpen] = useState(false)
  if (!context || context === 'No relevant context found.') return null
  return (
    <div className="mt-3 border-t border-white/5 pt-3">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors"
      >
        <Code2 size={11} />
        <span className="font-mono">View retrieved context</span>
        {open ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
      </button>
      {open && (
        <pre className="mt-2 text-xs font-mono text-slate-500 whitespace-pre-wrap leading-relaxed bg-black/30 rounded-lg p-3 overflow-x-auto border border-white/5 animate-fade-up">
          {context}
        </pre>
      )}
    </div>
  )
}