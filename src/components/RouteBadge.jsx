import React from 'react'
import { Database, FileText, Layers, Zap } from 'lucide-react'

const MAP = {
  PARTS_DB:     { label: 'Parts DB',     cls: 'text-blue-300 bg-blue-500/10 border border-blue-500/20',     Icon: Database },
  PARTS_SQL:    { label: 'Parts SQL',    cls: 'text-violet-300 bg-violet-500/10 border border-violet-500/20', Icon: Zap      },
  COMPANY_DOCS: { label: 'Company Docs', cls: 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/20', Icon: FileText },
  BOTH:         { label: 'Hybrid',       cls: 'text-amber-300 bg-amber-500/10 border border-amber-500/20',   Icon: Layers   },
}

export default function RouteBadge({ route }) {
  if (!route) return null
  const { label, cls, Icon } = MAP[route] || { label: route, cls: 'text-slate-400 bg-slate-800/40 border border-slate-700/40', Icon: Database }
  return (
    <span className={`route-badge ${cls}`}>
      <Icon size={9} />
      {label}
    </span>
  )
}