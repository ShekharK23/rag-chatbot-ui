import React from 'react'
import { Bot, User, AlertCircle } from 'lucide-react'
import RouteBadge from './RouteBadge'
import ContextDrawer from './ContextDrawer'

const fmt = d => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

function UserMsg({ msg }) {
  return (
    <div className="flex justify-end gap-2.5 animate-fade-up">
      <div className="max-w-[72%]">
        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed shadow-md shadow-blue-200">
          {msg.content}
        </div>
        <p className="text-right text-xs text-slate-400 mt-1">{fmt(msg.timestamp)}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
        <User size={13} className="text-blue-600" />
      </div>
    </div>
  )
}

function AssistantMsg({ msg }) {
  return (
    <div className="flex gap-2.5 animate-fade-up">
      <div className="w-8 h-8 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Bot size={13} className="text-violet-600" />
      </div>
      <div className="max-w-[78%] min-w-0">
        <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
          {msg.route && (
            <div className="flex items-center gap-2 mb-2">
              <RouteBadge route={msg.route} />
              {msg.entity && (
                <span className="text-xs font-mono text-slate-400">
                  → <span className="text-slate-500">{msg.entity}</span>
                </span>
              )}
            </div>
          )}
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{msg.content}</p>
          <ContextDrawer context={msg.context} />
        </div>
        <p className="text-xs text-slate-400 mt-1">{fmt(msg.timestamp)}</p>
      </div>
    </div>
  )
}

function ErrorMsg({ msg }) {
  return (
    <div className="flex gap-2.5 animate-fade-up">
      <div className="w-8 h-8 rounded-full bg-red-100 border border-red-200 flex items-center justify-center flex-shrink-0">
        <AlertCircle size={13} className="text-red-500" />
      </div>
      <div className="bg-red-50 border border-red-200 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[78%]">
        <p className="text-sm text-red-600">{msg.content}</p>
      </div>
    </div>
  )
}

export default function Message({ msg }) {
  if (msg.role === 'user')      return <UserMsg msg={msg} />
  if (msg.role === 'assistant') return <AssistantMsg msg={msg} />
  return <ErrorMsg msg={msg} />
}