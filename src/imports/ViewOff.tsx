import svgPaths from "./svg-1157kohv19";

export default function ViewOff() {
  return (
    <div className="relative size-full" data-name="View--off">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="View--off">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <g id="Vector">
              <path d={svgPaths.pc76100} fill="#161616" />
              <path d={svgPaths.p27e1cf80} fill="#161616" />
              <path d={svgPaths.p1693c980} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}