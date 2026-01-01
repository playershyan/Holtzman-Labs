'use client'

import React, { useState } from 'react'
import SpaceInvaders from './SpaceInvaders'

type Line = { id: number; text?: string; klass?: string; component?: React.ReactNode }

const DEMO_COMMANDS = [
  { cmd: 'help', label: 'help' },
  { cmd: 'fortune', label: 'fortune' },
  { cmd: 'invaders', label: 'invaders' },
  { cmd: 'life', label: 'life' },
  { cmd: 'matrix', label: 'matrix' },
  { cmd: 'uuid', label: 'uuid' },
  { cmd: 'color', label: 'color' },
]

const ORIGINAL_COMMANDS = [
  { cmd: 'status', out: 'All systems nominal — no incidents reported.' },
  { cmd: 'build --release', out: 'Build succeeded in 3.4s — artifacts: app-v1.2.0.tgz' },
  { cmd: 'analyze --deep', out: 'Static analysis: 0 critical issues, 2 warnings. See report at /reports/analysis-2026-01-01.html' },
  { cmd: 'deploy production', out: 'Deploy staged to production ✓ 2026-01-01T00:00:00Z' },
]

const FORTUNES = [
  "💡 The best code is no code at all.",
  "🚀 Ship fast, iterate faster.",
  "🐛 It's not a bug, it's an undocumented feature.",
  "☕ Coffee: turning code into software since 1995.",
  "🎯 Premature optimization is the root of all evil. - Donald Knuth",
  "🔧 Make it work, make it right, make it fast.",
  "📚 Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "🎨 Code is like humor. When you have to explain it, it's bad.",
  "⚡ The only way to go fast is to go well. - Robert C. Martin",
  "🌟 Simplicity is the soul of efficiency.",
  "🎭 First, solve the problem. Then, write the code.",
  "🔮 The best error message is the one that never shows up.",
  "🎪 Debugging is twice as hard as writing code in the first place.",
  "🌈 Programs must be written for people to read, and only incidentally for machines to execute.",
  "🎯 Talk is cheap. Show me the code. - Linus Torvalds",
]

export default function TerminalPlayground({ autoRunCmd }: { autoRunCmd?: string }) {
  const [lines, setLines] = useState<Line[]>([
    { id: 1, text: 'Welcome to the Holtzman Labs terminal playground. Type `help` to see available commands or try a demo below.' },
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

    // Parse command and arguments
    const parts = cmd.trim().split(' ')
    const command = parts[0]
    const args = parts.slice(1).join(' ')

    let output = ''

    // Handle special commands
    if (command === 'fortune') {
      output = FORTUNES[Math.floor(Math.random() * FORTUNES.length)]
    } else if (command === 'uuid') {
      output = generateUUID()
    } else if (command === 'encode') {
      output = args ? btoa(args) : 'Usage: encode <text>'
    } else if (command === 'decode') {
      try {
        output = args ? atob(args) : 'Usage: decode <base64>'
      } catch {
        output = 'Error: Invalid base64 string'
      }
    } else if (command === 'color') {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
      output = `${randomColor} ■■■■■`
    } else if (command === 'format-json') {
      try {
        const parsed = JSON.parse(args)
        output = JSON.stringify(parsed, null, 2)
      } catch {
        output = 'Error: Invalid JSON. Usage: format-json {"key":"value"}'
      }
    } else if (command === 'matrix') {
      runMatrixRain(idNow)
      return
    } else if (command === 'life') {
      runGameOfLife(idNow)
      return
    } else if (command === 'invaders') {
      runSpaceInvaders(idNow)
      return
    } else if (command === 'help') {
      output = `Available commands:
• fortune - Get a random dev quote
• invaders - Play Space Invaders game
• uuid - Generate a UUID
• encode <text> - Base64 encode
• decode <base64> - Base64 decode
• color - Random hex color
• format-json <json> - Format JSON
• matrix - Matrix rain animation
• life - Conway's Game of Life
• status, build --release, analyze --deep, deploy production`
    } else {
      // Find demo command output or fallback
      const demo = ORIGINAL_COMMANDS.find((d) => d.cmd === cmd) || null
      output = demo ? demo.out : `Command not recognized: ${cmd}. Type 'help' for available commands.`
    }

    // Simulate a brief response delay
    setTimeout(() => {
      setLines((l) => [...l, { id: idNow + 1, text: output }])
      setIsRunning(false)
      setNextId((n) => n + 1)
    }, 500 + Math.random() * 600)
  }

  function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  function runMatrixRain(startId: number) {
    const frames = [
      '█ ▓ ░ █ ▓ ░ █ ▓ ░',
      '░ █ ▓ ░ █ ▓ ░ █ ▓',
      '▓ ░ █ ▓ ░ █ ▓ ░ █',
      '█ ▓ ░ █ ▓ ░ █ ▓ ░',
      '░ █ ▓ ░ █ ▓ ░ █ ▓',
      '▓ ░ █ ▓ ░ █ ▓ ░ █',
      '█ ▓ ░ █ ▓ ░ █ ▓ ░',
      '░ █ ▓ ░ █ ▓ ░ █ ▓',
    ]

    let frameIndex = 0
    const interval = setInterval(() => {
      if (frameIndex >= frames.length) {
        clearInterval(interval)
        setLines((l) => [...l, { id: startId + frameIndex + 2, text: 'Matrix rain complete.' }])
        setIsRunning(false)
        setNextId((n) => n + frameIndex + 3)
        return
      }

      setLines((l) => [...l, { id: startId + frameIndex + 1, text: frames[frameIndex], klass: 'text-green-400' }])
      setNextId((n) => n + 1)
      frameIndex++
    }, 200)
  }

  function runGameOfLife(startId: number) {
    // Initialize a small grid with a glider pattern
    const width = 20
    const height = 8
    let grid = Array(height).fill(0).map(() => Array(width).fill(0))

    // Glider pattern
    grid[1][2] = 1
    grid[2][3] = 1
    grid[3][1] = 1
    grid[3][2] = 1
    grid[3][3] = 1

    const generations = 15
    let currentGen = 0

    const interval = setInterval(() => {
      if (currentGen >= generations) {
        clearInterval(interval)
        setLines((l) => [...l, { id: startId + currentGen + 2, text: 'Game of Life simulation complete.' }])
        setIsRunning(false)
        setNextId((n) => n + currentGen + 3)
        return
      }

      const display = grid.map(row => row.map(cell => cell ? '█' : '·').join(' ')).join('\n')
      setLines((l) => [...l, { id: startId + currentGen + 1, text: `Generation ${currentGen + 1}:\n${display}`, klass: 'text-cyan-400' }])
      setNextId((n) => n + 1)

      // Calculate next generation
      const newGrid = grid.map((row, y) =>
        row.map((cell, x) => {
          const neighbors = countNeighbors(grid, x, y, width, height)
          if (cell === 1) {
            return neighbors === 2 || neighbors === 3 ? 1 : 0
          } else {
            return neighbors === 3 ? 1 : 0
          }
        })
      )
      grid = newGrid
      currentGen++
    }, 400)
  }

  function countNeighbors(grid: number[][], x: number, y: number, width: number, height: number): number {
    let count = 0
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue
        const nx = (x + dx + width) % width
        const ny = (y + dy + height) % height
        count += grid[ny][nx]
      }
    }
    return count
  }

  function runSpaceInvaders(startId: number) {
    setLines((l) => [...l, { id: startId + 1, component: <SpaceInvaders key={startId + 1} /> }])
    setIsRunning(false)
    setNextId((n) => n + 2)
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
            <div key={ln.id} className={ln.klass ?? ''}>
              {ln.component ? ln.component : ln.text}
            </div>
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
              {d.label || d.cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
