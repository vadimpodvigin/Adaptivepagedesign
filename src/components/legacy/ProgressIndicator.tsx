import svgPaths from "./svg-95r2qddasp";

function IncompleteNormal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Incomplete--normal">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Incomplete--normal">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={svgPaths.p1fe6580} fill="#0F62FE" />
              <path d={svgPaths.p115e8400} fill="#0F62FE" />
              <path d={svgPaths.p105bf140} fill="#0F62FE" />
              <path d={svgPaths.p17725600} fill="#0F62FE" />
              <path d={svgPaths.p3be55240} fill="#0F62FE" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start px-0 py-px relative shrink-0" data-name="Icon margin">
      <IncompleteNormal />
    </div>
  );
}

function ProgressIndicatorStepLabelBase() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[18px] items-start mix-blend-multiply overflow-clip relative shrink-0" data-name="_Progress indicator step label base">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Step</p>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Icon + Label">
      <IconMargin />
      <ProgressIndicatorStepLabelBase />
    </div>
  );
}

function OptionalLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Optional label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Optional label</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[16px] pt-[10px] relative w-full">
          <IconLabel />
          <OptionalLabel />
        </div>
      </div>
    </div>
  );
}

function MinWidth() {
  return <div className="h-[0.001px] shrink-0 w-[128px]" data-name="Min-width" />;
}

function ProgressIndicatorItem() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="_Progress indicator item">
      <div aria-hidden="true" className="absolute border-[#0f62fe] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Content />
      <MinWidth />
    </div>
  );
}

function CircleDash() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Circle-dash">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Circle-dash">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={svgPaths.p54db600} fill="#161616" />
              <path d={svgPaths.p136a6280} fill="#161616" />
              <path d={svgPaths.p1df8f200} fill="#161616" />
              <path d={svgPaths.p3511c200} fill="#161616" />
              <path d={svgPaths.p3b1beae0} fill="#161616" />
              <path d={svgPaths.pc006f00} fill="#161616" />
              <path d={svgPaths.p10619200} fill="#161616" />
              <path d={svgPaths.p1cc00140} fill="#161616" />
              <path d={svgPaths.p2584dc80} fill="#161616" />
              <path d={svgPaths.p38c15470} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="content-stretch flex items-start px-0 py-px relative shrink-0" data-name="Icon margin">
      <CircleDash />
    </div>
  );
}

function ProgressIndicatorStepLabelBase1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[18px] items-start mix-blend-multiply overflow-clip relative shrink-0" data-name="_Progress indicator step label base">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Step</p>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Icon + Label">
      <IconMargin1 />
      <ProgressIndicatorStepLabelBase1 />
    </div>
  );
}

function OptionalLabel1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Optional label">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[24px] pr-0 py-0 relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:Regular',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Optional label</p>
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[16px] pt-[10px] relative w-full">
          <IconLabel1 />
          <OptionalLabel1 />
        </div>
      </div>
    </div>
  );
}

function MinWidth1() {
  return <div className="h-[0.001px] shrink-0 w-[128px]" data-name="Min-width" />;
}

function ProgressIndicatorItem1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="_Progress indicator item">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Content1 />
      <MinWidth1 />
    </div>
  );
}

export default function ProgressIndicator() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Progress indicator">
      <ProgressIndicatorItem />
      {[...Array(3).keys()].map((_, i) => (
        <ProgressIndicatorItem1 key={i} />
      ))}
    </div>
  );
}