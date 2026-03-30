import React from 'react'
import { Cpu, Database, FileText, Layers, Zap } from 'lucide-react'

const CAPS = [
  { Icon: Database, bg: 'bg-blue-50 border-blue-200',    ic: 'text-blue-600',    label: 'Parts Lookup',  desc: 'Price, specs, availability' },
  { Icon: Zap,      bg: 'bg-violet-50 border-violet-200',ic: 'text-violet-600',  label: 'Smart Query',   desc: 'Filter, sort, compare'      },
  { Icon: FileText, bg: 'bg-emerald-50 border-emerald-200',ic:'text-emerald-600', label: 'Docs & Policy', desc: 'Manuals, procedures'         },
  { Icon: Layers,   bg: 'bg-amber-50 border-amber-200',  ic: 'text-amber-600',   label: 'Hybrid Mode',   desc: 'Part + documentation'        },
]

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-200">
          <Cpu size={24} className="text-white" />
        </div>
      </div>
      <h2 className="font-display font-bold text-xl text-slate-800 mb-2">Parts Intelligence</h2>
      <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-8">
        Ask about parts, maintenance procedures, safety policies, or installation guides.
      </p>
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
        {CAPS.map(({ Icon, bg, ic, label, desc }) => (
          <div key={label} className={`rounded-xl p-3 border bg-white ${bg.split(' ')[1]}`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 border ${bg}`}>
              <Icon size={13} className={ic} />
            </div>
            <div className="text-xs font-medium text-slate-700">{label}</div>
            <div className="text-xs text-slate-400 mt-0.5">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}