import React from 'react'
import { Database, FileText, Layers, Zap } from 'lucide-react'

const MAP = {
  PARTS_DB:     { label: 'Parts DB',     cls: 'text-blue-700 bg-blue-50 border border-blue-200',       Icon: Database },
  PARTS_SQL:    { label: 'Parts SQL',    cls: 'text-violet-700 bg-violet-50 border border-violet-200', Icon: Zap      },
  COMPANY_DOCS: { label: 'Company Docs', cls: 'text-emerald-700 bg-emerald-50 border border-emerald-200', Icon: FileText },
  BOTH:         { label: 'Hybrid',       cls: 'text-amber-700 bg-amber-50 border border-amber-200',    Icon: Layers   },
}

export default function RouteBadge({ route }) {
  if (!route) return null
  const { label, cls, Icon } = MAP[route] || { label: route, cls: 'text-slate-600 bg-slate-100 border border-slate-200', Icon: Database }
  return (
    <span className={`route-badge ${cls}`}>
      <Icon size={9} />
      {label}
    </span>
  )
}