import svgPaths from "../imports/svg-subwhh4f0y";

interface LoadingProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export function Loading({ 
  size = 40, 
  strokeWidth = 5,
  color = "currentColor" 
}: LoadingProps) {
  // Calculate the viewBox based on the original size (88) and scale factor
  const originalSize = 88;
  const viewBoxSize = originalSize;
  
  return (
    <div 
      className="inline-block" 
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
      }}
    >
      <svg 
        className="block size-full" 
        fill="none" 
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        style={{
          animation: 'spin 1.4s linear infinite',
        }}
      >
        <defs>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              
              @keyframes dash {
                0% {
                  stroke-dasharray: 1, 200;
                  stroke-dashoffset: 0;
                }
                50% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -35;
                }
                100% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -124;
                }
              }
            `}
          </style>
        </defs>
        <path 
          d={svgPaths.p3d287ac0} 
          stroke={color}
          strokeWidth={strokeWidth * (originalSize / size)}
          strokeLinecap="round"
          style={{
            animation: 'dash 1.4s ease-in-out infinite',
          }}
        />
      </svg>
    </div>
  );
}