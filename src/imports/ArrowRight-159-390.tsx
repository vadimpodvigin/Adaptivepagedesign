import svgPaths from "./svg-tpds4j7iyw";

export default function ArrowRight() {
  return (
    <div className="relative size-full" data-name="Arrow--right">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(82, 82, 82, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Arrow--right">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <path d={svgPaths.pfec3600} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}