function LabelMargin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[8px] pt-0 px-0 relative" data-name="Label margin">
      <p className="css-4hzbpn font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full">Password</p>
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
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[6]" data-name="Text overflow">
      <p className="css-g0mm18 flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[14px] text-ellipsis tracking-[0.16px]">&nbsp;</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TextInputDefault() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative size-full" data-name="Text input - Default">
      <LabelCharacterCount />
      <TextInput />
    </div>
  );
}