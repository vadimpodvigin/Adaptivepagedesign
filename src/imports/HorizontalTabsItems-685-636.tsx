function TextOverflow() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[12px] tracking-[0.16px]">User-Composed Basket</p>
    </div>
  );
}

export default function HorizontalTabsItems() {
  return (
    <div className="relative size-full" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute border-[#7a23d9] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[11px] relative size-full">
          <TextOverflow />
        </div>
      </div>
    </div>
  );
}