"use client"

import React, {useState} from 'react'

export default function EditorPoll(){
  const [votes, setVotes] = useState({vim: 47, vscode: 49, nano: 3})
  const [voted, setVoted] = useState(false)

  const cast = (k:'vim'|'vscode'|'nano') => {
    if (voted) return
    setVotes((s) => ({...s, [k]: s[k] + 1}))
    setVoted(true)
  }

  const total = votes.vim + votes.vscode + votes.nano

  return (
    <div className="editor-poll mt-4 p-1 rounded-md">
      <div className="text-xs text-slate-400">Editor poll</div>
      <div className="mt-2 flex gap-2">
        <button className="px-3 py-1 rounded-md border border-white/6 text-xs" onClick={() => cast('vim')}>vim · {votes.vim}</button>
        <button className="px-3 py-1 rounded-md border border-white/6 text-xs" onClick={() => cast('vscode')}>VSCode · {votes.vscode}</button>
        <button className="px-3 py-1 rounded-md border border-white/6 text-xs" onClick={() => cast('nano')}>nano · {votes.nano}</button>
      </div>
      <div className="mt-3 text-xs text-slate-400">Results: <span className="font-mono">vim {Math.round((votes.vim/total)*100)}% · vscode {Math.round((votes.vscode/total)*100)}% · nano {Math.round((votes.nano/total)*100)}%</span></div>
    </div>
  )
}
