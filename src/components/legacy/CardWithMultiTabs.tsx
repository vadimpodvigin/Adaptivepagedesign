function Frame() {
  return (
    <div className="bg-[#7a23d9] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[24px]">
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame />
      <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[18px]">
        <p className="leading-[normal]">Card Title</p>
      </div>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.16px]">Tab label</p>
    </div>
  );
}

function HorizontalTabsItems() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[11px] relative shrink-0" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute border-[#7a23d9] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <TextOverflow />
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] text-nowrap tracking-[0.16px]">Tab label</p>
    </div>
  );
}

function HorizontalTabsItems1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[11px] relative shrink-0" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute border-[#e5d3f8] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <TextOverflow1 />
    </div>
  );
}

function TabsLabels() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tabs Labels">
      <HorizontalTabsItems />
      {[...Array(3).keys()].map((_, i) => (
        <HorizontalTabsItems1 key={i} />
      ))}
    </div>
  );
}

function TabContent() {
  return (
    <div className="h-[200px] min-h-[200px] relative shrink-0 w-[690px]" data-name="Tab Content">
      <div aria-hidden="true" className="absolute border border-[#e5d3f8] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Tabs">
      <TabsLabels />
      <TabContent />
    </div>
  );
}

export default function CardWithMultiTabs() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Card with Multi-tabs">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Frame1 />
          <div className="bg-[#ededed] h-px shrink-0 w-full" />
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#525252] text-[16px] w-[min-content]">Suspendisse consectetur accumsan turpis et venenatis. Duis imperdiet ante ut felis condimentum ultrices. Vivamus auctor viverra ultrices. Vestibulum ac justo eget sapien tincidunt consequat. Proin tempor sem in purus faucibus facilisis.</p>
          <Tabs />
        </div>
      </div>
    </div>
  );
}