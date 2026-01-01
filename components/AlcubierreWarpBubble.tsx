export default function AlcubierreWarpBubble() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="800" height="400" fill="#000000" />

        {/* Grid lines showing spacetime - Compressed region (front) */}
        {Array.from({ length: 8 }, (_, i) => {
          const x = 50 + i * 15; // Compressed spacing
          return (
            <line
              key={`front-v-${i}`}
              x1={x}
              y1="50"
              x2={x}
              y2="350"
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}
        {Array.from({ length: 10 }, (_, i) => {
          const y = 50 + i * 30;
          return (
            <line
              key={`front-h-${i}`}
              x1="50"
              y1={y}
              x2="170"
              y2={y}
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}

        {/* Transition region (front to bubble) */}
        {Array.from({ length: 6 }, (_, i) => {
          const x = 170 + i * 25;
          return (
            <line
              key={`transition-front-${i}`}
              x1={x}
              y1="50"
              x2={x}
              y2="350"
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}

        {/* Central warp bubble - flat space */}
        <ellipse
          cx="400"
          cy="200"
          rx="80"
          ry="100"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="3"
        />
        <ellipse
          cx="400"
          cy="200"
          rx="70"
          ry="90"
          fill="rgba(139, 92, 246, 0.1)"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Grid inside bubble - flat/normal space */}
        {Array.from({ length: 5 }, (_, i) => {
          const x = 340 + i * 30;
          return (
            <line
              key={`bubble-v-${i}`}
              x1={x}
              y1="110"
              x2={x}
              y2="290"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="0.6"
            />
          );
        })}
        {Array.from({ length: 6 }, (_, i) => {
          const y = 110 + i * 36;
          return (
            <line
              key={`bubble-h-${i}`}
              x1="330"
              y1={y}
              x2="470"
              y2={y}
              stroke="#FFFFFF"
              strokeWidth="0.5"
              opacity="0.6"
            />
          );
        })}

        {/* Transition region (bubble to back) */}
        {Array.from({ length: 6 }, (_, i) => {
          const x = 480 + i * 30;
          return (
            <line
              key={`transition-back-${i}`}
              x1={x}
              y1="50"
              x2={x}
              y2="350"
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}

        {/* Grid lines showing spacetime - Expanded region (back) */}
        {Array.from({ length: 8 }, (_, i) => {
          const x = 660 + i * 18; // Expanded spacing
          return (
            <line
              key={`back-v-${i}`}
              x1={x}
              y1="50"
              x2={x}
              y2="350"
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}
        {Array.from({ length: 10 }, (_, i) => {
          const y = 50 + i * 30;
          return (
            <line
              key={`back-h-${i}`}
              x1="630"
              y1={y}
              x2="750"
              y2={y}
              stroke="#8B5CF6"
              strokeWidth="1"
              opacity="0.4"
            />
          );
        })}

        {/* Volume element boxes showing compression/expansion */}
        {/* Compressed volume (front) */}
        <rect
          x="80"
          y="180"
          width="20"
          height="40"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="2"
        />

        {/* Normal volume (bubble) */}
        <rect
          x="380"
          y="170"
          width="40"
          height="60"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* Expanded volume (back) */}
        <rect
          x="680"
          y="160"
          width="60"
          height="80"
          fill="none"
          stroke="#06B6D4"
          strokeWidth="2"
        />

        {/* Direction arrow */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#FFFFFF" />
          </marker>
        </defs>
        <line
          x1="100"
          y1="380"
          x2="700"
          y2="380"
          stroke="#FFFFFF"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <text x="380" y="395" fill="#FFFFFF" fontSize="14" textAnchor="middle">
          Direction of Travel
        </text>

        {/* Labels */}
        <text x="100" y="30" fill="#8B5CF6" fontSize="16" fontWeight="bold">
          Contracted Space
        </text>
        <text x="340" y="30" fill="#FFFFFF" fontSize="16" fontWeight="bold">
          Flat Space (Bubble)
        </text>
        <text x="620" y="30" fill="#8B5CF6" fontSize="16" fontWeight="bold">
          Expanded Space
        </text>

        {/* Volume element labels */}
        <text x="70" y="240" fill="#06B6D4" fontSize="12">
          Compressed
        </text>
        <text x="365" y="250" fill="#FFFFFF" fontSize="12">
          Normal
        </text>
        <text x="670" y="260" fill="#06B6D4" fontSize="12">
          Expanded
        </text>
      </svg>

      {/* Description */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-black mb-3">
          Alcubierre Warp Bubble
        </h3>
        <p className="text-gray-800 leading-relaxed max-w-2xl mx-auto">
          Visualization of volume element expansion and contraction within an Alcubierre
          warp drive. Space contracts in front of the bubble (compressed grid), remains
          flat within the bubble (normal spacing), and expands behind (expanded grid),
          enabling faster-than-light travel without violating relativity.
        </p>
      </div>
    </div>
  );
}
