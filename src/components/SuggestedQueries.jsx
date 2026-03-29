import React from 'react'

const SUGGESTIONS = [
  { label: 'Price of P1001',          query: 'What is the price of P1001?'              },
  { label: 'Out of stock parts',      query: 'Which parts are out of stock?'             },
  { label: 'Install Actuator Motor',  query: 'How do I install the Actuator Motor?'      },
  { label: 'PPE requirements',        query: 'What safety equipment should workers wear?' },
  { label: 'All hydraulic parts',     query: 'Show me all hydraulic parts'               },
  { label: 'Bearing maintenance',     query: 'How should ball bearings be maintained?'   },
  { label: 'Most expensive part',     query: 'What is the most expensive part?'          },
  { label: 'LOTO procedure',          query: 'What is the lockout-tagout procedure?'     },
]

export default function SuggestedQueries({ onSelect }) {
  return (
    <div className="px-6 pb-4">
      <p className="text-xs text-slate-700 font-mono uppercase tracking-wider mb-2">Try asking</p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map(s => (
          <button
            key={s.query}
            onClick={() => onSelect(s.query)}
            className="text-xs px-3 py-1.5 rounded-full glass glass-hover text-slate-500 hover:text-slate-200 transition-all duration-200"
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}