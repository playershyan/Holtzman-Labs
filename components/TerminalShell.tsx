"use client"

import React from 'react'
import Link from 'next/link'
import TerminalStatsList from './TerminalStatsList'
import EditorPoll from './EditorPoll'
import TeamGrid from './TeamGrid'
import ValuesBand from './ValuesBand'

const ASCII_BIG = `╔███████ ╔██████ ╔█████      ╔██    ╔██   ╔███ ╔█████ ╔███   ╔███╔███████╔████████  ╔██ ╔██████ ╔██  ╔██
╚════╗██╔██══╗██╔██══╗██     ║██    ║██  ╔████╔██══╗██║████ ╔████╚╗███══╝╚══╗██══╝  ║██╔██═══╗██║██  ║██
╔███████╚╗██████║███████     ║██    ║██ ╔██╗██║███████║██╗████╗██ ╚╗███     ║██     ║██║██   ║██║███████
║██════╝╔██══╗██║██══╗██     ║██    ║██╔██╝║██║██══╗██║██╚╗██╝║██  ╚╗███    ║██     ║██║██   ║██║██══╗██
║███████╚╗██████║██  ║██╔███████    ║████╝ ║██║██  ║██║██ ╚═╝ ║██╔███████   ║██╔███████╚╗██████╝║██  ║██
╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝    ╚═══╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝`

export default function TerminalShell(){
  return (
    <div className="terminal-shell mx-auto my-12">
      <div className="terminal-shell-inner">
        <div className="terminal-controls flex items-center gap-4 mb-4">
          <div className="ascii-logo">
            <pre className="m-0 ascii-big">{ASCII_BIG}</pre>
          </div>

          <div className="ml-auto flex items-center gap-3 terminal-nav">
            <Link href="/" className="terminal-link">Home</Link>
            <Link href="/siteStats" className="terminal-link">Site Stats</Link>
            <Link href="/pricing" className="terminal-link">Pricing</Link>
            <Link href="/contact" className="terminal-link">Contact</Link>
            <span className="blink-caret">█</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="terminal-section">
              <div className="terminal-section-title">Intro</div>
              <div className="mt-2 terminal-line text-slate-300">Not corporate. Not boring. Curious kids with too much rizz and too little sleep. Prototype fast, measure, then meme. <strong>And we don't ask for advance payment. We are that confident!</strong></div>
            </div>

            <div className="my-4 terminal-ascii">{`   __  ___    _    ____  _   _ 
  / / |__ \  / \  | __ )| | | |
 / /    ) | / _ \ |  _ \| | | |
/ /_   / / / ___ \| |_) | |_| |
|____| /_/ /_/   \_\____/ \___/`}</div>

            <div className="terminal-section mt-4">
              <div className="terminal-section-title">Values</div>
              <div className="mt-2"><ValuesBand /></div>
            </div>

            <div className="terminal-section mt-4">
              <div className="terminal-section-title">Team</div>
              <div className="mt-2"><TeamGrid /></div>
            </div>

            <div className="terminal-section mt-4">
              <div className="terminal-section-title">Stats</div>
              <div className="mt-2"><TerminalStatsList /></div>
            </div>
          </div>

          <div>
            <div className="mb-4"><EditorPoll /></div>
            <div className="text-xs text-slate-400 mt-6">P.S. The feed is paused — fewer logs, fewer spammies.</div>
          </div>
        </div>

      </div>
    </div>
  )
}
