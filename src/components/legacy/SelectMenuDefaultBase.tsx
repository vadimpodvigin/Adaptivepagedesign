import svgPaths from "./svg-e8u49ewlma";

function TextOverflow() {
  return <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-clip shrink-0 z-[5]" data-name="Text overflow" />;
}

function Status() {
  return <div className="content-stretch flex gap-[8px] items-center shrink-0" data-name="Status" />;
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
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

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[4]" data-name="AI + Icons">
      <Status />
      <ChevronDown />
    </div>
  );
}

function SelectItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Select items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] isolate items-center px-[16px] py-[15px] relative w-full">
          <TextOverflow />
          <AiIcons />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectMenuDefaultBase() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="_Select menu default base">
      <SelectItems />
    </div>
  );
}