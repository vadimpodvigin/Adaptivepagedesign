import svgPaths from "./svg-133x2bgktb";

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Add">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p349d7700} fill="var(--fill-0, #0F62FE)" id="Vector" />
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
        <div className="box-border content-stretch flex isolate items-center pl-[16px] pr-[64px] py-[15px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre z-[2]">Button</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative size-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <ButtonContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0f62fe] border-solid inset-0 pointer-events-none" />
    </div>
  );
}