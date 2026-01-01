'use client'

import React, { useEffect, useRef, useState } from 'react'

// Game constants
const COLS = 40
const ROWS = 20
const CELL_SIZE = 16
const MAX_SHOTS = 3
const SHOT_SPEED = 50 // ms per cell
const INVADER_SPEED = 2000 // ms per move

interface Invader {
  x: number
  y: number
}

interface Shot {
  x: number
  y: number
  exploding: boolean
}

export default function SpaceInvaders() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing')
  const [score, setScore] = useState(0)

  // Game state refs (don't trigger re-renders)
  const playerXRef = useRef(COLS / 2)
  const invadersRef = useRef<Invader[]>([])
  const shotsRef = useRef<Shot[]>([])
  const directionRef = useRef(1) // 1 = right, -1 = left
  const lastInvaderMoveRef = useRef(Date.now())
  const animationFrameRef = useRef<number | null>(null)
  const keysRef = useRef<Set<string>>(new Set())

  // Initialize invaders (7 in a single row)
  function initGame() {
    invadersRef.current = []
    for (let i = 0; i < 7; i++) {
      invadersRef.current.push({
        x: 5 + i * 5,
        y: 2
      })
    }
    shotsRef.current = []
    playerXRef.current = COLS / 2
    directionRef.current = 1
    lastInvaderMoveRef.current = Date.now()
    setGameState('playing')
    setScore(0)
  }

  // Update shots
  function updateShots() {
    const now = Date.now()
    shotsRef.current = shotsRef.current.filter(shot => {
      if (shot.exploding) {
        return false // Remove exploding shots
      }
      shot.y -= 1
      return shot.y >= 0 // Remove shots that went off screen
    })
  }

  // Update invaders
  function updateInvaders() {
    const now = Date.now()
    if (now - lastInvaderMoveRef.current < INVADER_SPEED) return

    lastInvaderMoveRef.current = now

    const invaders = invadersRef.current
    if (invaders.length === 0) return

    let moveDown = false

    // Check boundaries
    if (directionRef.current === 1) {
      const maxX = Math.max(...invaders.map(inv => inv.x))
      if (maxX >= COLS - 1) {
        directionRef.current = -1
        moveDown = true
      }
    } else {
      const minX = Math.min(...invaders.map(inv => inv.x))
      if (minX <= 0) {
        directionRef.current = 1
        moveDown = true
      }
    }

    // Move invaders
    if (moveDown) {
      invaders.forEach(inv => inv.y += 1)
    } else {
      invaders.forEach(inv => inv.x += directionRef.current)
    }
  }

  // Collision detection
  function checkCollisions() {
    const invaders = invadersRef.current
    const shots = shotsRef.current

    for (let i = shots.length - 1; i >= 0; i--) {
      const shot = shots[i]
      for (let j = invaders.length - 1; j >= 0; j--) {
        const invader = invaders[j]
        if (shot.x === invader.x && shot.y === invader.y) {
          // Hit!
          shot.exploding = true
          invaders.splice(j, 1)
          setScore(s => s + 10)
          break
        }
      }
    }
  }

  // Check win/lose conditions
  function checkGameState() {
    if (invadersRef.current.length === 0) {
      setGameState('won')
      return true
    }
    const maxY = Math.max(...invadersRef.current.map(inv => inv.y))
    if (maxY >= ROWS - 1) {
      setGameState('lost')
      return true
    }
    return false
  }

  // Handle input
  function handleKeyDown(e: KeyboardEvent) {
    if (gameState !== 'playing') return

    keysRef.current.add(e.key)

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      shoot()
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    keysRef.current.delete(e.key)
  }

  function shoot() {
    if (shotsRef.current.length >= MAX_SHOTS) return

    shotsRef.current.push({
      x: Math.floor(playerXRef.current),
      y: ROWS - 2,
      exploding: false
    })
  }

  function processInput() {
    if (keysRef.current.has('ArrowLeft')) {
      playerXRef.current = Math.max(0, playerXRef.current - 0.5)
    }
    if (keysRef.current.has('ArrowRight')) {
      playerXRef.current = Math.min(COLS - 1, playerXRef.current + 0.5)
    }
  }

  // Draw on canvas
  function draw() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const devicePixelRatio = window.devicePixelRatio || 1
    const cellSize = CELL_SIZE * devicePixelRatio

    // Background (transparent, use canvas style instead)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#020417'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw player (cyan accent)
    ctx.fillStyle = '#06b6d4' // cyan-500 (terminal accent)
    const playerPixelX = Math.floor(playerXRef.current * cellSize)
    const playerPixelY = (ROWS - 1) * cellSize
    ctx.fillRect(playerPixelX, playerPixelY, cellSize - 2, cellSize - 2)

    // Draw invaders (purple accent)
    ctx.fillStyle = '#7C3AED' // violet-600 (terminal accent)
    invadersRef.current.forEach(inv => {
      ctx.fillRect(inv.x * cellSize, inv.y * cellSize, cellSize - 2, cellSize - 2)
    })

    // Draw shots (amber/orange)
    shotsRef.current.forEach(shot => {
      if (shot.exploding) {
        ctx.fillStyle = '#F97316' // orange-500
      } else {
        ctx.fillStyle = '#ffd6a6' // matching terminal ascii color
      }
      ctx.fillRect(shot.x * cellSize, shot.y * cellSize, cellSize - 2, cellSize - 2)
    })
  }

  // Game loop
  function gameLoop() {
    if (gameState !== 'playing') return

    processInput()
    updateShots()
    updateInvaders()
    checkCollisions()
    if (!checkGameState()) {
      draw()
      animationFrameRef.current = requestAnimationFrame(gameLoop)
    }
  }

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const devicePixelRatio = window.devicePixelRatio || 1
    canvas.width = COLS * CELL_SIZE * devicePixelRatio
    canvas.height = ROWS * CELL_SIZE * devicePixelRatio

    initGame()
    draw()
  }, [])

  // Start game loop
  useEffect(() => {
    if (gameState === 'playing') {
      animationFrameRef.current = requestAnimationFrame(gameLoop)
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [gameState])

  // Keyboard listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [gameState])

  return (
    <div className="terminal-section">
      <div className="terminal-section-title">Space Invaders</div>

      <div className="relative mt-2">
        <canvas
          ref={canvasRef}
          className="w-full rounded-md block"
          style={{
            imageRendering: 'pixelated',
            maxWidth: `${COLS * CELL_SIZE}px`,
            aspectRatio: `${COLS} / ${ROWS}`,
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        />

        {gameState !== 'playing' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-md">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                {gameState === 'won' ? (
                  <span className="text-emerald-400">You Won!</span>
                ) : (
                  <span className="text-red-400">Game Over</span>
                )}
              </div>
              <div className="text-slate-300 mb-4 font-mono">Score: {score}</div>
              <button
                onClick={initGame}
                className="px-4 py-2 rounded-md text-white text-sm font-semibold transition-colors"
                style={{
                  background: 'linear-gradient(90deg, #7C3AED, #06b6d4)',
                }}
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center gap-3 flex-wrap terminal-line text-sm">
        <div className="font-mono text-cyan-400">Score: {score}</div>
        <button
          onClick={initGame}
          className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 text-xs transition-colors border border-white/10"
        >
          Restart
        </button>

        <div className="ml-auto text-xs text-slate-400">
          ← → to move • Space to shoot
        </div>
      </div>
    </div>
  )
}
