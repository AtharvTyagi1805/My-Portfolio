import { useState, useEffect, useRef } from "react";
import "./snake.css";

const Game = () => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);

  const gridSize = 20;
  const canvasSize = 400;
  const initialSnake = [{ x: 9, y: 9 }];
  const initialDirection = { x: 0, y: 0 };

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState(initialDirection);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * (canvasSize / gridSize)),
      y: Math.floor(Math.random() * (canvasSize / gridSize)),
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!isRunning) return;

    const interval = setInterval(() => {
      const newSnake = [...snake];
      const head = {
        x:
          (snake[0].x + direction.x + canvasSize / gridSize) %
          (canvasSize / gridSize),
        y:
          (snake[0].y + direction.y + canvasSize / gridSize) %
          (canvasSize / gridSize),
      };

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setScore(score + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      if (checkCollision(newSnake)) {
        setIsRunning(false);
        alert("Game Over");
        setSnake(initialSnake);
        setDirection({ x: 0, y: 0 });
        setScore(0);
        return;
      }

      setSnake(newSnake);

      ctx.clearRect(0, 0, canvasSize, canvasSize);

      ctx.fillStyle = "#0f0";
      newSnake.forEach((segment) =>
        ctx.fillRect(
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize,
          gridSize
        )
      );

      ctx.fillStyle = "#f00";
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }, 100);

    return () => clearInterval(interval);
  }, [snake, food, direction, isRunning]);

  const checkCollision = (snake) => {
    const [head, ...body] = snake;
    return body.some((segment) => segment.x === head.x && segment.y === head.y);
  };

  const handleKeyDown = (e) => {
    const map = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
    };
    const newDir = map[e.key];
    if (newDir) setDirection(newDir);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleStart = () => {
    setSnake(initialSnake);
    setDirection({ x: 1, y: 0 });
    setIsRunning(true);
  };

  return (
    <section className="min-h-screen text-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-[500px] bg-[#111] p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center space-y-6">
        <h2 className="text-4xl font-berkshire relative group text-center">
          Take a Break
          <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
        </h2>

        {isRunning && (
          <div className="text-left w-full text-sm font-belleza font-semibold">
            Score: {score}
          </div>
        )}

        <div className="relative w-full flex justify-center items-center">
          <canvas
            ref={canvasRef}
            width={canvasSize}
            height={canvasSize}
            className={`rounded-xl border border-white/20 transition duration-300 ${
              !isRunning ? "blur-sm brightness-75" : ""
            }`}
          />

          {!isRunning && (
            <button
              onClick={handleStart}
              className="absolute text-xl font-bold px-6 py-3 bg-white text-black rounded-full border-2 border-white group transition hover:bg-black hover:text-white"
            >
              <span className="relative group">
                Start Game
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Game;
