import svgPaths from "./svg-subwhh4f0y";

function LoadingBase() {
  return (
    <div className="relative shrink-0 size-[88px]" data-name="_Loading base">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88.0001 88.0001">
          <g id="_Loading base">
            <rect fill="white" fillOpacity="0.01" height="88" style={{ mixBlendMode: "multiply" }} width="88" />
            <path d={svgPaths.p3d287ac0} id="Ellipse" stroke="var(--stroke-0, #0F62FE)" strokeWidth="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LoadingAnimation() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_Loading animation">
      <LoadingBase />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start mix-blend-multiply relative size-full" data-name="Loading">
      <LoadingAnimation />
    </div>
  );
}