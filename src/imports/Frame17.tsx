import svgPaths from "./svg-gn62blm1fl";

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[18px]">
        <p className="leading-[normal]">Login</p>
      </div>
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[8px] pt-0 px-0 relative shrink-0" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full">Password</p>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer() {
  return (
    <div className="content-stretch flex items-start opacity-0 relative shrink-0 w-[0.001px]" data-name="Resizer">
      <Start />
      <End />
    </div>
  );
}

function LabelCharacterCount() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <LabelMargin />
      <Resizer />
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative shrink-0 z-[6]" data-name="Text overflow">
      <p className="basis-0 font-['IBM_Plex_Sans:Regular',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a8a8a8] text-[14px] text-nowrap tracking-[0.16px]">&nbsp;</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInputDefault() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start min-w-[64px] mix-blend-multiply relative shrink-0 w-full" data-name="Text input - Default">
      <LabelCharacterCount />
      <TextInput />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="content-stretch flex isolate items-center overflow-clip px-[16px] py-[11px] relative shrink-0" data-name="Button content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.16px] z-[2]">Submit</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7a23d9] content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function Help() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Help">
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

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Button />
      <Help />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] size-full">
      <Frame2 />
      <TextInputDefault />
      <Frame />
    </div>
  );
}