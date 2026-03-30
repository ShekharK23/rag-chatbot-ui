import React from 'react'
import { Bot } from 'lucide-react'

export default function TypingIndicator() {
  return (
    <div className="flex gap-2.5 animate-fade-up">
      <div className="w-8 h-8 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center flex-shrink-0">
        <Bot size={13} className="text-violet-600" />
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm flex items-center gap-1.5">
        {[0,1,2].map(i => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400"
            style={{ animation: 'pulseDot 1.4s ease-in-out infinite', animationDelay: `${i*0.16}s` }} />
        ))}
      </div>
    </div>
  )
}