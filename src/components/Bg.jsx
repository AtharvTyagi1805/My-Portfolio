import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Bg = ({ darkMode }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [darkMode]);

  const createSymbolGrid = () => {
    if (!dimensions.width || !dimensions.height) return [];

    const symbols = [
      "</>",
      "{}",
      "()",
      "[]",
      ";",
      "=>",
      "fn()",
      "class",
      "const",
      "import",
      "export",
      "return",
    ];
    const grid = [];
    const cols = Math.floor(dimensions.width / 80);
    const rows = Math.floor(dimensions.height / 80);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        grid.push({
          id: `${x}-${y}`,
          x: x * 80 + 20,
          y: y * 80 + 20,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          size: 10 + Math.random() * 10,
          opacity: 0.1 + Math.random() * 0.1,
          delay: Math.random() * 2,
        });
      }
    }

    return grid;
  };

  const symbolGrid = createSymbolGrid();

  const createCircuitPaths = () => {
    if (!dimensions.width || !dimensions.height) return [];

    const paths = [];
    const pathCount = Math.floor((dimensions.width + dimensions.height) / 300);

    for (let i = 0; i < pathCount; i++) {
      const startX = Math.random() * dimensions.width;
      const startY = Math.random() * dimensions.height;
      const segments = [];
      const segmentCount = 3 + Math.floor(Math.random() * 4);

      let currentX = startX;
      let currentY = startY;

      for (let j = 0; j < segmentCount; j++) {
        const length = 50 + Math.random() * 200;
        const angle = Math.random() * Math.PI * 2;
        const endX = currentX + Math.cos(angle) * length;
        const endY = currentY + Math.sin(angle) * length;

        segments.push({
          startX: currentX,
          startY: currentY,
          endX,
          endY,
        });

        currentX = endX;
        currentY = endY;
      }

      paths.push({
        id: `path-${i}`,
        segments,
        dashOffset: Math.random() * 20,
        animationDuration: 10 + Math.random() * 20,
      });
    }

    return paths;
  };

  const circuitPaths = createCircuitPaths();

  return (
    <div
      ref={containerRef}
      className={`
        fixed inset-0 -z-50 overflow-hidden
        bg-[#f5f5f5] dark:bg-[#121212]
        transition-colors duration-500
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 font-mono ${
              darkMode ? "text-indigo-400/20" : "text-indigo-700/20"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 14 + 10}px`,
              opacity: 0.7,
            }}
            initial={{ y: -100 }}
            animate={{ y: "100vh" }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-30">
        {circuitPaths.map((path) => (
          <g key={path.id}>
            {path.segments.map((segment, idx) => (
              <motion.line
                key={`${path.id}-${idx}`}
                x1={segment.startX}
                y1={segment.startY}
                x2={segment.endX}
                y2={segment.endY}
                stroke={darkMode ? "#6366f1" : "#4f46e5"}
                strokeWidth="1"
                strokeDasharray="10,5"
                initial={{ strokeDashoffset: path.dashOffset }}
                animate={{ strokeDashoffset: path.dashOffset - 20 }}
                transition={{
                  duration: path.animationDuration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
            {path.segments.map((segment, idx) => (
              <circle
                key={`dot-${path.id}-${idx}`}
                cx={segment.endX}
                cy={segment.endY}
                r="2"
                fill={darkMode ? "#818cf8" : "#4f46e5"}
              />
            ))}
          </g>
        ))}
      </svg>

      <div className="absolute inset-0">
        {symbolGrid.map((symbol) => (
          <motion.div
            key={symbol.id}
            className={`absolute font-mono ${
              darkMode ? "text-indigo-400/30" : "text-indigo-700/30"
            }`}
            style={{
              left: symbol.x,
              top: symbol.y,
              fontSize: `${symbol.size}px`,
              opacity: symbol.opacity,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [symbol.opacity, symbol.opacity * 1.5, symbol.opacity],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut",
            }}
          >
            {symbol.symbol}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-700/10"></div>
      </div>

      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
        {[...Array(400)].map((_, i) => (
          <div
            key={`grid-${i}`}
            className={`border ${
              darkMode ? "border-indigo-900/20" : "border-indigo-100/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Bg;
