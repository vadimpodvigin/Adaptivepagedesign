import svgPaths from "./svg-xpebenqrq1";

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#7a23d9] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a23d9] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[24px]">
        <p className="leading-[normal]">Stripe Request</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] items-start left-[120px] p-[24px] rounded-[8px] top-[171px] w-[1200px]">
      <Frame2 />
      <div className="bg-[#ededed] h-px shrink-0 w-full" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-600 w-full">Nunc at convallis dui. Suspendisse consectetur accumsan turpis et venenatis. Duis imperdiet ante ut felis condimentum ultrices. Vivamus auctor viverra ultrices. Vestibulum ac justo eget sapien tincidunt consequat. Proin tempor sem in purus faucibus facilisis.</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[5]" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre">CoreFlow (Stripe Payment Workflow)</p>
    </div>
  );
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
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 z-[4]" data-name="AI + Icons">
      <ChevronDown />
    </div>
  );
}

function SelectItems() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Select items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] isolate items-center px-[16px] py-[15px] relative w-full">
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

function SelectMenuDefaultBase() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Select menu default base">
      <SelectItems />
    </div>
  );
}

function SelectDefault() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[281px] mix-blend-multiply top-[33px] w-[320px]" data-name="Select - Default">
      <SelectMenuDefaultBase />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Add">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p349d7700} fill="var(--fill-0, #393939)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 translate-y-[-50%] z-[1]" data-name="Icon">
      <Add />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex isolate items-center pl-[16px] pr-[64px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre z-[2]">Export</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] left-[1197px] mix-blend-multiply top-[33px]" data-name="Button">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <ButtonContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#393939] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Add">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p349d7700} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <Add1 />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex isolate items-center p-[12px] relative w-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#7a23d9] content-stretch flex flex-col items-start left-[700px] overflow-clip top-[339px]" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[rgba(255,255,255,0.95)] relative size-full" data-name="1">
      <Frame1 />
      <div className="absolute flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] justify-center leading-[0] left-[120px] not-italic text-[#161616] text-[32px] text-nowrap top-[53px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">CoreIgnite</p>
      </div>
      <div className="absolute bg-[#c6c6c6] h-px left-0 top-[106px] w-[1440px]" />
      <SelectDefault />
      <Button />
      <Button1 />
    </div>
  );
}