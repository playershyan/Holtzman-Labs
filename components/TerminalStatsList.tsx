"use client"

import React from 'react'

const STATS = [
  {id: 'uptime', label: 'Uptime (binary)', value: {bin: '1111011%', human: '99.9%'}},
  {id: 'prs', label: 'PRs merged / sprint', value: 32},
  {id: 'rizz', label: 'Rizz meter', value: 6.7},
  {id: 'meme', label: 'Meme index', value: 'Skibidi: 12'},
  {id: 'micro', label: 'Microfeatures shipped', value: 17},
  {id: 'editor', label: 'Editor split', value: 'vim 47% · VSCode 49%'},
  {id: 'p95', label: 'Build P95', value: '4.2s'},
  {id: 'css', label: 'CSS lines deleted', value: 1234}
]

function fmt(v:any){
  if (typeof v === 'number') return v.toLocaleString()
  if (typeof v === 'object' && v.bin) return `${v.bin} (${v.human})`
  return String(v)
}

export default function TerminalStatsList(){
  return (
    <div className="font-mono text-slate-200 text-base">
      {STATS.map((s, idx) => (
        <div key={s.id} className="terminal-line py-1">
          <span className="text-slate-400">{'>'} </span>
          <span className="text-slate-200">{s.label.replace(/\s\(.+\)/,'')}: </span>
          <span className="text-slate-300">{fmt(s.value)}</span>
        </div>
      ))}
    </div>
  )
}
