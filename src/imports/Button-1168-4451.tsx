import svgPaths from "./svg-7n3wi5itg7";

function Logout() {
  return (
    <div className="relative shrink-0 size-[16px] z-[1]" data-name="Logout">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Logout">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <g id="Vector">
              <path d={svgPaths.p2a978500} fill="#525252" />
              <path d={svgPaths.p27bc9a80} fill="#525252" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center overflow-clip px-[16px] py-[11px] relative shrink-0" data-name="Button content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] text-nowrap tracking-[0.16px] z-[2]">Logout</p>
      <Logout />
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply overflow-clip relative rounded-[4px] size-full" data-name="Button">
      <ButtonContent />
    </div>
  );
}