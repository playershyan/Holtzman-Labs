"use client"

import React, {useEffect, useRef, useState} from 'react'

const LINES = [
  'pizza: slice acquired 🍕',
  'rizz++',
  'skibidi: mention',
  'deploy: green',
  'coffee: 2 cups',
  'glider: spawned',
]

export default function TerminalFeed(){
  const [lines, setLines] = useState<string[]>([])
  const iRef = useRef(0)
  useEffect(() => {
    const id = setInterval(() => {
      setLines((s) => (s.length > 20 ? [...s.slice(-19), LINES[iRef.current++ % LINES.length]] : [...s, LINES[iRef.current++ % LINES.length]]))
    }, 1200)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="bg-[#020417] rounded-md p-3 font-mono text-sm shadow-sm">
      <div className="terminal-header mb-2 flex items-center gap-2">
        <span className="dot bg-red-400" />
        <span className="dot bg-amber-300" />
        <span className="dot bg-green-400" />
        <div className="ml-auto text-xs text-gray-500">engine-room@holtzman</div>
      </div>
      <div style={{height: 110}} className="overflow-auto terminal-feed pr-2 text-slate-300">
        {lines.length === 0 ? <div className="text-slate-500">warming up...</div> : lines.map((l, i) => <div key={i} className="py-0.5">{`> ${l}`}</div>)}
      </div>
    </div>
  )
}
