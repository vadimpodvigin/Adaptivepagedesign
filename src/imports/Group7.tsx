import svgPaths from "./svg-lh0nwa88ds";

function Frame() {
  return (
    <div className="bg-[#7a23d9] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]">
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame />
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[18px]">
        <p className="leading-[normal]">Mint Digital Asset</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[175px] items-start left-0 p-[16px] rounded-[8px] top-[40px] w-[580px]">
      <Frame1 />
      <div className="bg-[#ededed] h-px shrink-0 w-full" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#525252] text-[16px] w-full">Vestibulum non elit eget odio bibendum maximus. Donec volutpat nulla ante, at volutpat enim pulvinar molestie. Nullam quis neque vitae dui pretium lacinia. Aliquam euismod eros ut massa mattis bibendum. In nec pulvinar tellus.</p>
    </div>
  );
}

function Money() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Money">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Money">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <g id="Vector">
              <path d="M22.5 16.5H1.5V18H22.5V16.5Z" fill="#161616" />
              <path d="M22.5 19.5H1.5V21H22.5V19.5Z" fill="#161616" />
              <path d={svgPaths.p15ee6e30} fill="#161616" />
              <path d={svgPaths.p395db900} fill="#161616" />
              <path d={svgPaths.p30d26030} fill="#161616" />
              <path d={svgPaths.p1be6300} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Caret--right">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Caret--right">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <path d="M6 4L11 8L6 12V4Z" fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AssemblyCluster() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Assembly--cluster">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Assembly--cluster">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <g id="Vector">
              <path d={svgPaths.p33c917f0} fill="var(--fill-0, #161616)" />
              <path d={svgPaths.p275aecf0} fill="var(--fill-0, #161616)" />
              <path d={svgPaths.p3af1350} fill="var(--fill-0, #161616)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Money />
      <CaretRight />
      <AssemblyCluster />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame5 />
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[18px]">
        <p className="leading-[normal]">Mint</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[175px] items-start left-[912px] p-[16px] rounded-[8px] top-[40px] w-[288px]">
      <Frame6 />
    </div>
  );
}

function Fragments() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Fragments">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Fragments">
            <rect fill="white" fillOpacity="0.01" height="24" width="24" />
            <path d={svgPaths.p35828980} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Fragments />
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[18px]">
        <p className="leading-[normal]">Digital Asset Plugin (example: Ripple)</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[620px] p-[16px] rounded-[8px] top-[40px] w-[288px]">
      <Frame7 />
      <div className="bg-[#ededed] h-px shrink-0 w-full" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#525252] text-[16px] w-full">{`Pellentesque sit amet nunc sodales, condimentum metus ac, porttitor libero. `}</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[620px] top-[40px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative size-[24px]" data-name="Arrow--down">
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

function Group() {
  return (
    <div className="absolute contents left-[580px] top-[40px]">
      <div className="absolute flex items-center justify-center left-[588px] size-[24px] top-[114px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <ArrowDown />
        </div>
      </div>
      <div className="absolute h-[175px] left-[580px] top-[40px] w-[40px]" />
    </div>
  );
}

function ArrowDown1() {
  return (
    <div className="absolute left-[588px] size-[24px] top-[8px]" data-name="Arrow--down">
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

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <ArrowDown1 />
      <div className="absolute h-[40px] left-0 top-0 w-[1200px]" />
    </div>
  );
}

function ArrowDown2() {
  return (
    <div className="absolute left-[588px] size-[24px] top-[223px]" data-name="Arrow--down">
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

function Group3() {
  return (
    <div className="absolute contents left-0 top-[215px]">
      <ArrowDown2 />
      <div className="absolute h-[40px] left-0 top-[215px] w-[1200px]" />
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <Frame4 />
      <Group1 />
      <Group />
      <Group2 />
      <Group3 />
    </div>
  );
}