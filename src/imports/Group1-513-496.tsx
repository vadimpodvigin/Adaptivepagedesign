import svgPaths from "./svg-ge5nv5v5ru";

function Help() {
  return (
    <div className="absolute left-[1392px] size-[16px] top-[32px]" data-name="Help">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Help">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <g id="Vector">
              <path d={svgPaths.p2d246af0} fill="#161616" />
              <path d={svgPaths.p374bb70} fill="#161616" />
              <path d={svgPaths.p6cf2d00} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Close">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Close">
            <rect fill="white" fillOpacity="0.01" height="24" style={{ mixBlendMode: "multiply" }} width="24" />
            <path d={svgPaths.p27099900} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuTrigger() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-0 p-[14px] size-[80px] top-0" data-name="Menu trigger">
      <div aria-hidden="true" className="absolute border-[#ededed] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Close />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white border-[#ededed] border-[0px_0px_1px] border-solid h-[80px] left-0 top-0 w-[1440px]" />
      <Help />
      <div className="absolute flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] left-[88px] not-italic text-[#161616] text-[24px] text-nowrap top-[40px] translate-y-[-50%]">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[normal]">
          CoreIgnite/<span className="text-[#7a23d9]">Docs</span>
        </p>
      </div>
      <MenuTrigger />
    </div>
  );
}