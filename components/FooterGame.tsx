
import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Play, RotateCcw } from 'lucide-react';

const GRID_SIZE = 20;
const SPEED = 100; // ms

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const FooterGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'GAMEOVER'>('START');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Game State Refs (for loop access)
  const snakeRef = useRef<Point[]>([{ x: 10, y: 10 }]);
  const foodRef = useRef<Point>({ x: 15, y: 10 });
  const dirRef = useRef<Direction>('RIGHT');
  const nextDirRef = useRef<Direction>('RIGHT');
  const gameLoopRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number, y: number } | null>(null);

  // Initialize High Score
  useEffect(() => {
    const saved = localStorage.getItem('costello_snake_hs');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Game Logic
  const spawnFood = () => {
    const gridW = 20; // 400px / 20
    const gridH = 15; // 300px / 20
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * gridW),
        y: Math.floor(Math.random() * gridH)
      };
      // Check if food spawned on snake
      // eslint-disable-next-line no-loop-func
      const onSnake = snakeRef.current.some(s => s.x === newFood.x && s.y === newFood.y);
      if (!onSnake) break;
    }
    foodRef.current = newFood;
  };

  const gameOver = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameState('GAMEOVER');
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('costello_snake_hs', score.toString());
    }
  };

  const startGame = () => {
    snakeRef.current = [{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }];
    dirRef.current = 'RIGHT';
    nextDirRef.current = 'RIGHT';
    setScore(0);
    setGameState('PLAYING');
    spawnFood();
    
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    gameLoopRef.current = window.setInterval(tick, SPEED);
  };

  const tick = () => {
    const head = { ...snakeRef.current[0] };
    dirRef.current = nextDirRef.current;

    switch (dirRef.current) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    // Wall Collision
    const gridW = 20;
    const gridH = 15;
    if (head.x < 0 || head.x >= gridW || head.y < 0 || head.y >= gridH) {
      gameOver();
      return;
    }

    // Self Collision
    if (snakeRef.current.some(s => s.x === head.x && s.y === head.y)) {
      gameOver();
      return;
    }

    const newSnake = [head, ...snakeRef.current];

    // Eat Food
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      setScore(s => s + 10);
      spawnFood();
      // Don't pop tail, so snake grows
    } else {
      newSnake.pop();
    }

    snakeRef.current = newSnake;
    draw();
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Grid (Subtle)
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += GRID_SIZE) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y <= canvas.height; y += GRID_SIZE) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

    // Draw Snake
    ctx.fillStyle = '#CCFF00'; // Neon
    snakeRef.current.forEach((segment, i) => {
        // Slightly smaller than grid for "block" look
        const pad = 1;
        ctx.fillRect(
            segment.x * GRID_SIZE + pad, 
            segment.y * GRID_SIZE + pad, 
            GRID_SIZE - (pad * 2), 
            GRID_SIZE - (pad * 2)
        );
        
        // Head highlight
        if (i === 0) {
            ctx.fillStyle = '#b3e600'; // Slightly darker/different neon for body
        }
    });

    // Draw Food
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(
        foodRef.current.x * GRID_SIZE + 4, 
        foodRef.current.y * GRID_SIZE + 4, 
        GRID_SIZE - 8, 
        GRID_SIZE - 8
    );
  };

  // Input Handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      
      if (key === ' ' && (gameState === 'START' || gameState === 'GAMEOVER')) {
        e.preventDefault();
        startGame();
        return;
      }

      if (gameState !== 'PLAYING') return;

      const current = dirRef.current;

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault();
      }

      if (key === 'ArrowUp' && current !== 'DOWN') nextDirRef.current = 'UP';
      if (key === 'ArrowDown' && current !== 'UP') nextDirRef.current = 'DOWN';
      if (key === 'ArrowLeft' && current !== 'RIGHT') nextDirRef.current = 'LEFT';
      if (key === 'ArrowRight' && current !== 'LEFT') nextDirRef.current = 'RIGHT';
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState]);

  // Touch Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    
    const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
    };

    const diffX = touchStartRef.current.x - touchEnd.x;
    const diffY = touchStartRef.current.y - touchEnd.y;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal
        if (Math.abs(diffX) > 30) { // Threshold
             if (diffX > 0 && dirRef.current !== 'RIGHT') nextDirRef.current = 'LEFT';
             else if (diffX < 0 && dirRef.current !== 'LEFT') nextDirRef.current = 'RIGHT';
        }
    } else {
        // Vertical
        if (Math.abs(diffY) > 30) {
            if (diffY > 0 && dirRef.current !== 'DOWN') nextDirRef.current = 'UP';
            else if (diffY < 0 && dirRef.current !== 'UP') nextDirRef.current = 'DOWN';
        }
    }
    
    touchStartRef.current = null;
  };

  // Initial Draw
  useEffect(() => {
    draw();
  }, []);

  // Redraw on state change (start/gameover screens)
  useEffect(() => {
      draw();
  }, [gameState]);

  return (
    <div 
        ref={containerRef}
        className="relative inline-block border border-concrete/20 bg-ink select-none touch-none w-full max-w-[400px]"
    >
      {/* Score Header */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-3 pointer-events-none z-10 text-concrete font-mono text-xs uppercase tracking-widest mix-blend-difference">
        <span>SNAKE_OS v1.0</span>
        <div className="flex gap-4">
            <span className="text-neon">HI: {highScore}</span>
            <span>SCORE: {score}</span>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={400}
        height={300}
        className="w-full h-auto block cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={gameState === 'START' ? startGame : undefined}
      />

      {/* Overlays */}
      {gameState === 'START' && (
        <div 
            onClick={startGame}
            className="absolute inset-0 bg-ink/80 flex flex-col items-center justify-center cursor-pointer hover:bg-ink/70 transition-colors backdrop-blur-sm"
        >
            <Play size={48} className="text-neon mb-4 animate-pulse" />
            <h3 className="text-2xl font-black uppercase text-white tracking-tighter mb-2">Ready?</h3>
            <p className="font-mono text-xs text-concrete/60 uppercase tracking-widest">Tap or Click to Start</p>
            <p className="font-mono text-[10px] text-concrete/40 uppercase tracking-widest mt-4">Arrows to Move • Space to Start</p>
        </div>
      )}

      {gameState === 'GAMEOVER' && (
        <div className="absolute inset-0 bg-ink/90 flex flex-col items-center justify-center backdrop-blur-sm z-20">
            <Trophy size={32} className="text-neon mb-4" />
            <h3 className="text-3xl font-black uppercase text-white tracking-tighter mb-2">Game Over</h3>
            <div className="flex flex-col items-center gap-1 mb-6">
                <span className="font-mono text-sm text-concrete uppercase tracking-widest">Final Score: <span className="text-white font-bold">{score}</span></span>
                {score >= highScore && score > 0 && <span className="font-mono text-[10px] text-neon uppercase tracking-widest blink">New Record!</span>}
            </div>
            
            <button 
                onClick={startGame}
                className="flex items-center gap-2 bg-neon text-ink px-6 py-2 font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors"
            >
                <RotateCcw size={14} />
                Try Again
            </button>
            <p className="font-mono text-[10px] text-concrete/40 uppercase tracking-widest mt-4 hidden sm:block">Press Space to Restart</p>
        </div>
      )}
    </div>
  );
};

export default FooterGame;
