'use client'

import React, { useState } from 'react'

type Line = { id: number; text?: string; klass?: string; component?: React.ReactNode }

const DEMO_COMMANDS = [
  { cmd: 'help', label: 'help' },
  { cmd: 'status', label: 'status' },
  { cmd: 'stack', label: 'stack' },
  { cmd: 'about', label: 'about' },
  { cmd: 'fortune', label: 'fortune' },
  { cmd: 'uuid', label: 'uuid' },
  { cmd: 'hire', label: 'hire' },
]

const ORIGINAL_COMMANDS = [
  {
    cmd: 'status',
    out: `✓ Accepting new projects\n✓ Response time: < 4 hours\n✓ Based in Colombo 🇱🇰\n✓ Engineering over obedience`
  },
  {
    cmd: 'stack',
    out: `Next.js • TypeScript • PostgreSQL • Vercel\nWe adapt. But we push back on bad tech choices.`
  },
  {
    cmd: 'about',
    out: `We don't say yes to bad ideas. We build software to last.\n→ /about for full philosophy`
  },
  {
    cmd: 'hire',
    out: `hello@holtzmanlabs.com\nWe turn down ~60% of inquiries. We're selective.\n→ /contact for project scoping`
  },
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
    { id: 1, text: 'Welcome to Holtzman Labs. Type `help` to see commands or try the buttons below.' },
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
    } else if (command === 'help') {
      output = `Available commands:
• status - Check our availability
• stack - See our tech stack
• about - Our philosophy (one-liner)
• hire - Get in touch
• fortune - Random dev wisdom
• uuid - Generate a UUID
• encode <text> - Base64 encode
• decode <base64> - Base64 decode
• color - Random hex color
• format-json <json> - Format JSON`
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

  function handleDemoClick(cmd: string) {
    // Clear terminal and run fresh command for better UX
    setLines([])
    setNextId(1)
    setTimeout(() => runCommand(cmd), 100)
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
            <div key={ln.id} className={ln.klass ?? ''} style={{ whiteSpace: 'pre-line' }}>
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
          placeholder="try: status, stack, or help"
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
              onClick={() => handleDemoClick(d.cmd)}
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
