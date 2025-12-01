import svgPaths from "./svg-cne0z3qkwz";

function ArrowDown() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="Arrow--down">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Arrow--down">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <path d={svgPaths.p2324eb80} fill="var(--fill-0, #525252)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <ArrowDown />
      <div className="absolute left-0 size-[40px] top-0" />
    </div>
  );
}