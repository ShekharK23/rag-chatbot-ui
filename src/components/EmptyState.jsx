import React from 'react'
import { Cpu, Database, FileText, Layers, Zap } from 'lucide-react'

const CAPS = [
  { Icon: Database, cls: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/20',    label: 'Parts Lookup',  desc: 'Price, specs, availability' },
  { Icon: Zap,      cls: 'text-violet-400',  bg: 'bg-violet-500/10 border-violet-500/20', label: 'Smart Query',   desc: 'Filter, sort, compare'      },
  { Icon: FileText, cls: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20',label: 'Docs & Policy', desc: 'Manuals, procedures'         },
  { Icon: Layers,   cls: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20',   label: 'Hybrid Mode',   desc: 'Part + documentation'        },
]

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-600/20 border border-blue-500/20 flex items-center justify-center glow-blue">
          <Cpu size={24} className="text-blue-400" />
        </div>
      </div>
      <h2 className="font-display font-bold text-xl text-white mb-2">Parts Intelligence</h2>
      <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-8">
        Ask about parts, maintenance procedures, safety policies, or installation guides.
      </p>
      <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
        {CAPS.map(({ Icon, cls, bg, label, desc }) => (
          <div key={label} className={`glass rounded-xl p-3 border ${bg}`}>
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center mb-2 ${bg}`}>
              <Icon size={13} className={cls} />
            </div>
            <div className="text-xs font-medium text-slate-300">{label}</div>
            <div className="text-xs text-slate-600 mt-0.5">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}