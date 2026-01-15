import svgPaths from "./svg-jbv9pku346";

function OverflowMenuHorizontal() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Overflow-menu--horizontal">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Overflow-menu--horizontal">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <g id="Vector">
              <path d={svgPaths.p28385680} fill="#161616" />
              <path d={svgPaths.p11e47970} fill="#161616" />
              <path d={svgPaths.p25e8ad00} fill="#161616" />
            </g>
            <g id="Vector_2">
              <path d={svgPaths.pc6a3100} fill="#161616" />
              <path d={svgPaths.p3605a200} fill="#161616" />
              <path d={svgPaths.p282027f0} fill="#161616" />
            </g>
            <g id="Vector_3">
              <path d={svgPaths.p24092800} fill="#161616" />
              <path d={svgPaths.p4279900} fill="#161616" />
              <path d={svgPaths.p1de8f070} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuButton() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[39px]" data-name="Menu Button">
      <OverflowMenuHorizontal />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[10.5px] relative shrink-0">
      <MenuButton />
    </div>
  );
}

function SiteTitle() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0" data-name="Site Title">
      <div className="flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[0px] whitespace-nowrap">
        <p className="leading-[normal] text-[14px] whitespace-pre">
          CoreIgnite/<span className="text-[#7a23d9]">Docs</span>
        </p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <Frame5 />
      <SiteTitle />
    </div>
  );
}

function HelpButton() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Help Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Help Button">
          <g id="Vector">
            <path d={svgPaths.pc953140} fill="var(--fill-0, #161616)" />
            <path d={svgPaths.p1bdf2550} fill="var(--fill-0, #161616)" />
            <path d={svgPaths.p3422c700} fill="var(--fill-0, #161616)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="aspect-[22/22] content-stretch flex h-full items-center justify-center relative shrink-0">
      <HelpButton />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border-[#ededed] border-b border-solid inset-0 pointer-events-none" />
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[4px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#525252] text-[16px] text-center whitespace-pre">Enter password...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#7a23d9] content-stretch flex flex-col items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-pre">Submit</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[440px]">
      <div className="content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip px-[63px] py-[64px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-pre">CoreIgnite Docs</p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content] whitespace-pre-wrap">{`This site is password protected. `}</p>
        <Frame3 />
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[40px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-0 py-[40px] relative shrink-0 w-[1440px]" data-name="Footer">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#525252] text-[12px] text-center w-full whitespace-pre-wrap">© 2025 CoreIgnite. All Rights Reserved</p>
    </div>
  );
}

export default function SiteFrameHeaderFooter() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-center justify-between relative size-full" data-name="Site Frame (Header + Footer)">
      <Frame1 />
      <Frame />
      <Footer />
    </div>
  );
}