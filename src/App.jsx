import React, { useEffect, useRef } from 'react'
import { useChat } from './hooks/useChat'
import Sidebar from './components/Sidebar'
import Message from './components/Message'
import TypingIndicator from './components/TypingIndicator'
import ChatInput from './components/ChatInput'
import SuggestedQueries from './components/SuggestedQueries'
import EmptyState from './components/EmptyState'

export default function App() {
  const { messages, loading, sendMessage, clearMessages } = useChat()
  const bottomRef   = useRef(null)
  const hasMessages = messages.length > 0

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div className="h-screen flex overflow-hidden" style={{ background: '#f4f6fb' }}>

      {/* Subtle dot grid */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7d2e8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.45,
        }}
      />

      {/* Soft ambient blobs */}
      <div className="fixed top-0 left-1/3 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-violet-100/50 rounded-full blur-3xl pointer-events-none" />

      <Sidebar messages={messages} onClear={clearMessages} />

      <main className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="flex-shrink-0 border-b border-slate-200 px-6 py-3 flex items-center justify-between bg-white/80 backdrop-blur-sm shadow-sm">
          <div>
            <h1 className="font-display font-semibold text-sm text-slate-800">Conversation</h1>
            <p className="text-xs text-slate-400">RAG pipeline · 4 routes</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-emerald-600 font-mono">Ready</span>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          {hasMessages ? (
            <div className="px-6 py-5 space-y-4 max-w-4xl mx-auto w-full">
              {messages.map(msg => <Message key={msg.id} msg={msg} />)}
              {loading && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>
          ) : (
            <EmptyState />
          )}
        </div>

        {!hasMessages && <SuggestedQueries onSelect={sendMessage} />}

        {/* Input */}
        <div className="flex-shrink-0 border-t border-slate-200 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto w-full">
            <ChatInput onSend={sendMessage} loading={loading} />
          </div>
        </div>
      </main>
    </div>
  )
}
