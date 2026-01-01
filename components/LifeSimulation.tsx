'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function LifeSimulation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [running, setRunning] = useState(true)
  const [intervalMs, setIntervalMs] = useState(240)
  const colsRef = useRef<number>(0)
  const rowsRef = useRef<number>(0)
  const gridRef = useRef<Uint8Array | null>(null)
  const timerRef = useRef<number | null>(null)

  function makeGrid(cols: number, rows: number, rand = true) {
    const grid = new Uint8Array(cols * rows)
    if (rand) {
      for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < 0.12 ? 1 : 0
    }
    return grid
  }

  function stepGrid(grid: Uint8Array, cols: number, rows: number) {
    const out = new Uint8Array(grid.length)
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let n = 0
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue
            const rr = (r + dr + rows) % rows
            const cc = (c + dc + cols) % cols
            n += grid[rr * cols + cc]
          }
        }
        const idx = r * cols + c
        if (grid[idx]) {
          out[idx] = n === 2 || n === 3 ? 1 : 0
        } else {
          out[idx] = n === 3 ? 1 : 0
        }
      }
    }
    return out
  }

  function resizeCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const devicePixelRatio = window.devicePixelRatio || 1
    canvas.width = Math.floor(rect.width * devicePixelRatio)
    canvas.height = Math.floor(rect.height * devicePixelRatio)

    // decide grid size based on canvas dimensions
    const cell = 8 * (devicePixelRatio > 1 ? 1 : 1)
    const cols = Math.max(16, Math.floor(canvas.width / (cell)))
    const rows = Math.max(10, Math.floor(canvas.height / (cell)))
    colsRef.current = cols
    rowsRef.current = rows
    gridRef.current = makeGrid(cols, rows, true)
    draw()
  }

  function draw() {
    const canvas = canvasRef.current
    const grid = gridRef.current
    if (!canvas || !grid) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const devicePixelRatio = window.devicePixelRatio || 1
    const cellSize = Math.floor((canvas.width / colsRef.current))

    // background
    ctx.fillStyle = '#051227'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // draw cells
    ctx.fillStyle = '#8B5CF6'
    for (let r = 0; r < rowsRef.current; r++) {
      for (let c = 0; c < colsRef.current; c++) {
        const idx = r * colsRef.current + c
        if (grid[idx]) {
          ctx.fillRect(c * cellSize, r * cellSize, cellSize - 1, cellSize - 1)
        }
      }
    }
  }

  function tick() {
    if (!gridRef.current) return
    gridRef.current = stepGrid(gridRef.current, colsRef.current, rowsRef.current)
    draw()
  }

  useEffect(() => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (running) timerRef.current = window.setInterval(tick, intervalMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [running, intervalMs])

  function randomize() {
    if (!colsRef.current || !rowsRef.current) return
    gridRef.current = makeGrid(colsRef.current, rowsRef.current, true)
    draw()
  }

  function clearGrid() {
    if (!colsRef.current || !rowsRef.current) return
    gridRef.current = new Uint8Array(colsRef.current * rowsRef.current)
    draw()
  }

  return (
    <div className="p-3 bg-[#020617] rounded-md">
      <div className="relative">
        <canvas ref={canvasRef} className="w-full h-40 rounded-md block" />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button onClick={() => setRunning((s) => !s)} className="px-3 py-1 rounded-md bg-gray-800 text-sm text-white">
          {running ? 'Pause' : 'Run'}
        </button>
        <button onClick={randomize} className="px-3 py-1 rounded-md bg-gray-800 text-sm text-white">Randomize</button>
        <button onClick={clearGrid} className="px-3 py-1 rounded-md bg-gray-800 text-sm text-white">Clear</button>

        <div className="ml-auto text-xs text-gray-400">Conway's Game of Life — emergent behavior</div>
      </div>
    </div>
  )
}
