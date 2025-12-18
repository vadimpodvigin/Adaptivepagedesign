function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[14px]">
        <p className="leading-[normal]">Assets</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ededed] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative size-full">
          <Frame />
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#525252] text-[14px] w-full">Reserve (USD) $1,000</p>
        </div>
      </div>
    </div>
  );
}