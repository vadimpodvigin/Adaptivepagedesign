import svgPaths from "./svg-jajvlgyzue";

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px] z-[1]" data-name="Chevron--down">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Chevron--down">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AccordionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[10px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[2]">Title of accordion</p>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default function AccordionItem() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative size-full" data-name="Accordion item">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <AccordionHeader />
    </div>
  );
}