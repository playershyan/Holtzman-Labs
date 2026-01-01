'use client'

import React, { useState } from 'react'

type Line = { id: number; text: string; klass?: string }

const DEMO_COMMANDS = [
  { cmd: 'status', out: 'All systems nominal — no incidents reported.' },
  { cmd: 'build --release', out: 'Build succeeded in 3.4s — artifacts: app-v1.2.0.tgz' },
  { cmd: 'analyze --deep', out: 'Static analysis: 0 critical issues, 2 warnings. See report at /reports/analysis-2026-01-01.html' },
  { cmd: 'deploy production', out: 'Deploy staged to production ✓ 2026-01-01T00:00:00Z' },
]

export default function TerminalPlayground({ autoRunCmd }: { autoRunCmd?: string }) {
  const [lines, setLines] = useState<Line[]>([
    { id: 1, text: 'Welcome to the Holtzman Labs terminal playground. Try a demo command or type `status`.' },
  ])
  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(2)
  const [isRunning, setIsRunning] = useState(false)
  const outputRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    // Auto-scroll to bottom on new lines
    const el = outputRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
  }, [lines])

  function runCommand(cmd: string) {
    if (!cmd.trim()) return
    const idNow = nextId
    setNextId((n) => n + 1)
    setLines((l) => [...l, { id: idNow, text: `$ ${cmd}`, klass: 'text-indigo-400' }])
    setIsRunning(true)

    // Find demo command output or fallback
    const demo = DEMO_COMMANDS.find((d) => d.cmd === cmd) || null
    const output = demo ? demo.out : `Command not recognized: ${cmd}`

    // Simulate a brief response delay
    setTimeout(() => {
      setLines((l) => [...l, { id: idNow + 1, text: output }])
      setIsRunning(false)
      setNextId((n) => n + 1)
    }, 500 + Math.random() * 600)
  }

  // Auto-run a single demo command when used as a hero if requested
  React.useEffect(() => {
    if (!autoRunCmd) return
    const timeout = setTimeout(() => runCommand(autoRunCmd), 420)
    return () => clearTimeout(timeout)
  }, [autoRunCmd])

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const cmd = input.trim()
    if (!cmd) return
    runCommand(cmd)
    setInput('')
  }

  return (
    <div className="terminal-playground w-full rounded-xl border border-gray-800 bg-[#0b0f14] shadow-xl overflow-hidden">
      <div className="px-4 py-3 bg-gradient-to-r from-[#0f1724] to-[#07101a] flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden />
        <div className="h-3 w-3 rounded-full bg-amber-300" aria-hidden />
        <div className="h-3 w-3 rounded-full bg-green-400" aria-hidden />
        <div className="ml-auto text-xs text-gray-400">holtzman@labs:~</div>
      </div>

      <div ref={outputRef} className="p-4 font-mono text-sm text-gray-200 overflow-y-auto" style={{ minHeight: 240 }}>
        <div className="space-y-2">
          {lines.map((ln) => (
            <div key={ln.id} className={ln.klass ?? ''}>{ln.text}</div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-4 pb-4 pt-2 bg-[#07101a] flex gap-3 items-center">
        <input
          aria-label="Terminal input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command (e.g., status)"
          className="flex-1 bg-transparent outline-none text-gray-200 font-mono text-sm placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="rounded-md bg-gradient-to-r from-indigo-600 to-sky-500 px-3 py-1 text-sm font-medium text-white disabled:opacity-60"
          disabled={isRunning}
        >
          {isRunning ? 'Running…' : 'Run'}
        </button>
      </form>

      <div className="px-4 pb-4 pt-2 bg-[#07101a] border-t border-[#0b1220]">
        <div className="flex flex-wrap gap-2">
          {DEMO_COMMANDS.map((d) => (
            <button
              key={d.cmd}
              onClick={() => runCommand(d.cmd)}
              className="text-xs rounded-md px-2 py-1 bg-gradient-to-r from-[#0f1724] to-[#07101a] text-gray-200 hover:opacity-95 ring-1 ring-[#0b1220]"
            >
              {d.cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
