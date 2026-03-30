import React from 'react'
import { Cpu, Database, FileText, Layers, Zap, Circle, Trash2 } from 'lucide-react'

const ROUTES = [
  { key: 'PARTS_DB',     label: 'Parts DB',     Icon: Database, cls: 'text-blue-500'    },
  { key: 'PARTS_SQL',    label: 'Parts SQL',    Icon: Zap,      cls: 'text-violet-500'  },
  { key: 'COMPANY_DOCS', label: 'Company Docs', Icon: FileText, cls: 'text-emerald-500' },
  { key: 'BOTH',         label: 'Hybrid',       Icon: Layers,   cls: 'text-amber-500'   },
]

export default function Sidebar({ messages, onClear }) {
  const counts  = messages.reduce((acc, m) => { if (m.route) acc[m.route] = (acc[m.route]||0)+1; return acc }, {})
  const queries = messages.filter(m => m.role === 'user').length
  const answers = messages.filter(m => m.role === 'assistant').length

  return (
    <aside className="w-60 flex-shrink-0 flex flex-col p-4 gap-4 bg-white border-r border-slate-200 shadow-sm">

      {/* Logo */}
      <div className="flex items-center gap-2.5 px-0.5 pt-1">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md shadow-blue-200">
          <Cpu size={15} className="text-white" />
        </div>
        <div>
          <p className="font-display font-bold text-sm text-slate-800 leading-tight">Parts Intelligence</p>
          <p className="text-xs text-slate-400">RAG Chatbot v1.0</p>
        </div>
      </div>

      {/* Status */}
      <div className="rounded-xl p-3 bg-slate-50 border border-slate-200">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">API</span>
          <span className="flex items-center gap-1 text-xs text-emerald-600">
            <Circle size={5} fill="currentColor" className="animate-pulse" />
            Online
          </span>
        </div>
        <p className="text-xs text-slate-500 font-mono">localhost:8000</p>
        <p className="text-xs text-slate-400 font-mono mt-0.5">Gemma 3:1B · Ollama</p>
      </div>

      {/* Session stats */}
      <div className="rounded-xl p-3 bg-slate-50 border border-slate-200">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Session</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[['Queries', queries], ['Answers', answers]].map(([l, v]) => (
            <div key={l} className="bg-white rounded-lg p-2 text-center border border-slate-100 shadow-sm">
              <p className="text-lg font-display font-bold text-slate-800">{v}</p>
              <p className="text-xs text-slate-400">{l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2 pt-2 border-t border-slate-200">
          {ROUTES.map(({ key, label, Icon, cls }) => (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Icon size={11} className={cls} />
                <span className="text-xs text-slate-500">{label}</span>
              </div>
              <span className="text-xs font-mono text-slate-400">{counts[key] || 0}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="rounded-xl p-3 bg-slate-50 border border-slate-200">
        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">Stack</p>
        {[
          ['LLM',       'Gemma 3:1B'],
          ['Vector DB', 'ChromaDB'],
          ['SQL DB',    'PostgreSQL'],
          ['Embeddings','MiniLM-L6'],
          ['Framework', 'FastAPI'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between py-0.5">
            <span className="text-xs text-slate-400">{k}</span>
            <span className="text-xs font-mono text-slate-600">{v}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onClear}
        className="mt-auto flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors py-2 rounded-lg hover:bg-red-50"
      >
        <Trash2 size={12} />
        Clear conversation
      </button>
    </aside>
  )
}