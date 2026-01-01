"use client"

import React, {useEffect, useState} from 'react'

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

function useCount(target:number, duration=900){
  const [n, setN] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }

    let start = 0
    const steps = Math.max(6, Math.floor(duration / 50))
    const increment = Math.max(1, Math.floor(target / steps))
    let mounted = true

    const tick = () => {
      start += increment
      if (!mounted) return
      if (start >= target) { setN(target); return }
      setN(start)
      setTimeout(tick, 50)
    }

    tick()
    return () => { mounted = false }
  }, [target, duration])

  return n
}

function fmt(n:number){
  return n.toLocaleString()
}

export default function NerdyStats(){
  return (
    <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {STATS.map((s) => (
        <StatCard key={s.id} stat={s} />
      ))}
    </div>
  )
}

function StatCard({stat}:{stat:any}){
  const val = stat.value
  const count = typeof val === 'number' ? useCount(val, 900) : null
  return (
    <div className="stat-card p-4 rounded-md bg-gradient-to-r from-[#061025] to-[#02101a] border border-white/6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <div className="text-xs text-slate-400">{stat.label}</div>
          <div className="mt-1 text-2xl font-bold text-white countup">
            {count !== null ? fmt(count) : (typeof val === 'object' ? <span className="font-mono">{val.bin} <span className="text-slate-400 ml-2">({val.human})</span></span> : <span>{val}</span>)}
          </div>
        </div>
        <div className="stat-badge">{stat.id === 'rizz' ? `${stat.value}/10` : (stat.id === 'meme' ? '🔥' : '•')}</div>
      </div>
    </div>
  )
}
