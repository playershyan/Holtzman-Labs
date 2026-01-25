'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const START_LINES = [
  '[init] powering up engines…] 🔌',
  '[local] building: feature/rocket-burn → success ✅',
  '[ci] linting… ok',
  '[deploy-sim] staging push: simulated',
]

export default function EngineRoom(){
  const [lines, setLines] = useState<string[]>(START_LINES)

  const ASCII_LINES = [
    "  _   _       _   _                            ",
    " | | | | __ _| |_| |__   ___  _ __   ___ _ __ ",
    " | |_| |/ _` | __| '_ \\ / _ \\| '_ \\ / _ \\ '__|",
    " |  _  | (_| | |_| | | | (_) | | | |  __/ |   ",
    " |_| |_|\\__,_|\\__|_| |_|\\___/|_| |_|\\___|_|   "
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setLines((s) => {
        const next = s.slice(-8)
        const choices = [
          '[test] all green ✓',
          '[perf] bundle trimmed —7% 🔥',
          '[ux] microinteraction added',
          '[ops] DB backup ok',
          '[build] optimized images',
          '[buzz] redbull: consumed',
          '[pizza] slice: acquired 🍕',
        ]
        next.push(choices[Math.floor(Math.random() * choices.length)])
        return next
      })
    }, 1800)

    return () => clearInterval(t)
  }, [])

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-gradient-to-b from-[#05030a] to-[#071026] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="ascii mb-6">
              <pre className="m-0">
                {ASCII_LINES.map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </pre>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">Engine Room — we ship, obsessively</h2>
            <p className="text-gray-300 mb-6">We are a sleep-deprived cohort of engineers fueled by caffeine, curiosity, and reckless optimism. We prototype fast, test harder, and obsess over details that make products sing.</p>

            <div className="flex gap-3 items-center mb-6">
              <div className="badge">🍕 Pizza-friendly</div>
              <div className="badge">⚡ Rapid prototyping</div>
              <div className="badge">🧪 A/B for breakfast</div>
            </div>

            <div className="flex gap-3">
              <Link href="/siteStats" className="gradient-cta px-4 py-2 font-semibold inline-flex items-center">Try a live demo</Link>
              <Link href="/contact" className="px-4 py-2 border border-white/10 rounded-md text-sm">Get an estimate</Link>
            </div>
          </div>

          <div>
            <div className="bg-[#020417] rounded-md p-4 font-mono text-sm shadow-lg">
              <div className="terminal-header mb-3 flex items-center gap-2">
                <span className="dot bg-red-400" />
                <span className="dot bg-amber-300" />
                <span className="dot bg-green-400" />
                <div className="ml-auto text-xs text-gray-500">engine-room@holtzman</div>
              </div>

              <div className="terminal-feed h-48 overflow-y-auto pr-2">
                {lines.map((ln, i) => (
                  <div key={i} className="py-0.5 text-gray-200">{ln}</div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <button className="px-3 py-1 rounded-md bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-xs font-semibold">Feed the engine</button>
                <button className="px-3 py-1 rounded-md bg-gray-800 text-xs">Boost</button>
                <div className="ml-auto text-xs text-gray-500">status: <span className="text-green-400">nominal</span></div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">P.S. These logs are fictional, but the vibes are real.</div>
          </div>
        </div>
      </div>
    </section>
  )
}