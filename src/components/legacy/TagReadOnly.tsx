function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[16px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start />
      <End />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] pt-0 px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9f1853] text-[12px] text-nowrap tracking-[0.32px]">Tag</p>
      <Resizer />
    </div>
  );
}

function TagContent() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[4px] py-0 relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label />
    </div>
  );
}

export default function TagReadOnly() {
  return (
    <div className="bg-[#ffd6e8] content-stretch flex items-start relative rounded-[9px] size-full" data-name="Tag - Read-only">
      <TagContent />
    </div>
  );
}