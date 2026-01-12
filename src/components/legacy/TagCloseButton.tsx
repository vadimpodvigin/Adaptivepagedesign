import svgPaths from "./svg-o3g83747ob";

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Close">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p9429980} fill="var(--fill-0, #6929C4)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function TagCloseButton() {
  return (
    <div className="bg-[#e8daff] relative rounded-[9px] size-full" data-name="_Tag close button">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Close />
        </div>
      </div>
    </div>
  );
}