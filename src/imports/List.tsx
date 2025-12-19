function ListItem() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] mix-blend-multiply not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full" data-name="List item">
      <p className="relative self-stretch shrink-0 w-[13px]">1.</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 w-full" data-name="List item">
      <div className="size-full">
        <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] not-italic pl-[24px] pr-0 py-0 relative text-[#161616] text-[14px] tracking-[0.16px] w-full">
          <p className="relative self-stretch shrink-0 w-[13px]">a.</p>
          <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
        </div>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 w-full" data-name="List item">
      <div className="size-full">
        <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] not-italic pl-[24px] pr-0 py-0 relative text-[#161616] text-[14px] tracking-[0.16px] w-full">
          <p className="relative self-stretch shrink-0 w-[13px]">b.</p>
          <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
        </div>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 w-full" data-name="List item">
      <div className="size-full">
        <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] not-italic pl-[24px] pr-0 py-0 relative text-[#161616] text-[14px] tracking-[0.16px] w-full">
          <p className="relative self-stretch shrink-0 w-[13px]">c.</p>
          <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
        </div>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] mix-blend-multiply not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full" data-name="List item">
      <p className="relative self-stretch shrink-0 w-[13px]">2.</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start leading-[20px] mix-blend-multiply not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full" data-name="List item">
      <p className="relative self-stretch shrink-0 w-[13px]">3.</p>
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">List item text</p>
    </div>
  );
}

export default function List() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative size-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}