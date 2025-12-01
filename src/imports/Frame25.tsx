function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 size-[32px]">
      <div aria-hidden="true" className="absolute border border-[#7a23d9] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#7a23d9] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[24px]">
        <p className="leading-[normal]">Respond To Stripe</p>
      </div>
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Frame2 />
          <div className="bg-[#ededed] h-px shrink-0 w-full" />
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-neutral-600 w-full">Vestibulum non elit eget odio bibendum maximus. Donec volutpat nulla ante, at volutpat enim pulvinar molestie. Nullam quis neque vitae dui pretium lacinia. Aliquam euismod eros ut massa mattis bibendum. In nec pulvinar tellus.</p>
        </div>
      </div>
    </div>
  );
}