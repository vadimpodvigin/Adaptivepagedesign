function AiSpacer() {
  return (
    <div className="relative self-stretch shrink-0 w-0" data-name="AI spacer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.79757e-06 64.001">
        <g id="AI spacer">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
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
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start />
      <End />
    </div>
  );
}

function IconMargin() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pb-[30px] pl-[16px] pr-[8px] pt-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Header</p>
          <IconMargin />
        </div>
      </div>
    </div>
  );
}

function Col() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 1">
      <Resizer />
      <Content />
    </div>
  );
}

function Start1() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End1() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start1 />
      <End1 />
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pb-[30px] pl-[16px] pr-[8px] pt-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Header</p>
          <IconMargin1 />
        </div>
      </div>
    </div>
  );
}

function Col1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 2">
      <Resizer1 />
      <Content1 />
    </div>
  );
}

function Start2() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End2() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start2 />
      <End2 />
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pb-[30px] pl-[16px] pr-[8px] pt-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Header</p>
          <IconMargin2 />
        </div>
      </div>
    </div>
  );
}

function Col2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 3">
      <Resizer2 />
      <Content2 />
    </div>
  );
}

function Start3() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End3() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start3 />
      <End3 />
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pb-[30px] pl-[16px] pr-[8px] pt-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Header</p>
          <IconMargin3 />
        </div>
      </div>
    </div>
  );
}

function Col3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 4">
      <Resizer3 />
      <Content3 />
    </div>
  );
}

function Start4() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End4() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start4 />
      <End4 />
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] pb-[30px] pl-[16px] pr-[8px] pt-[16px] relative w-full">
          <p className="basis-0 font-['IBM_Plex_Sans:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Header</p>
          <IconMargin4 />
        </div>
      </div>
    </div>
  );
}

function Col4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 5">
      <Resizer4 />
      <Content4 />
    </div>
  );
}

function DataTableHeaderRowItem() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-start relative shrink-0 w-full z-[5]" data-name="Data table header row item">
      <AiSpacer />
      <Col />
      <Col1 />
      <Col2 />
      <Col3 />
      <Col4 />
    </div>
  );
}

function AiSpacer1() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="AI spacer">
      <div className="flex h-[64px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[64px]" data-name="Spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Spacer" opacity="0"></g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Start5() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End5() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start5 />
      <End5 />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text group">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">Content</p>
    </div>
  );
}

function AiSlugText() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="AI slug + Text">
      <TextGroup />
    </div>
  );
}

function Content5() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] pb-[30px] pt-[16px] px-[16px] relative w-full">
          <AiSlugText />
        </div>
      </div>
    </div>
  );
}

function Col5() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 1">
      <Resizer5 />
      <Content5 />
    </div>
  );
}

function Start6() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End6() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start6 />
      <End6 />
    </div>
  );
}

function TextGroup1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text group">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">Content</p>
    </div>
  );
}

function AiSlugText1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="AI slug + Text">
      <TextGroup1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] pb-[30px] pt-[16px] px-[16px] relative w-full">
          <AiSlugText1 />
        </div>
      </div>
    </div>
  );
}

function Col6() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 2">
      <Resizer6 />
      <Content6 />
    </div>
  );
}

function Start7() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End7() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start7 />
      <End7 />
    </div>
  );
}

function TextGroup2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text group">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">Content</p>
    </div>
  );
}

function AiSlugText2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="AI slug + Text">
      <TextGroup2 />
    </div>
  );
}

function Content7() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] pb-[30px] pt-[16px] px-[16px] relative w-full">
          <AiSlugText2 />
        </div>
      </div>
    </div>
  );
}

function Col7() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 3">
      <Resizer7 />
      <Content7 />
    </div>
  );
}

function Start8() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End8() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer8() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start8 />
      <End8 />
    </div>
  );
}

function TextGroup3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text group">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">Content</p>
    </div>
  );
}

function AiSlugText3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="AI slug + Text">
      <TextGroup3 />
    </div>
  );
}

function Content8() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] pb-[30px] pt-[16px] px-[16px] relative w-full">
          <AiSlugText3 />
        </div>
      </div>
    </div>
  );
}

function Col8() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 4">
      <Resizer8 />
      <Content8 />
    </div>
  );
}

function Start9() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End9() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer9() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[160px] items-start mix-blend-multiply relative shrink-0" data-name="Resizer">
      <Start9 />
      <End9 />
    </div>
  );
}

function TextGroup4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text group">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-full">Content</p>
    </div>
  );
}

function AiSlugText4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="AI slug + Text">
      <TextGroup4 />
    </div>
  );
}

function Content9() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Content">
      <div className="min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-h-[inherit] pb-[30px] pt-[16px] px-[16px] relative w-full">
          <AiSlugText4 />
        </div>
      </div>
    </div>
  );
}

function Col9() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0)] content-stretch flex flex-col grow items-start min-h-px min-w-px mix-blend-multiply relative self-stretch shrink-0" data-name="Col 5">
      <Resizer9 />
      <Content9 />
    </div>
  );
}

function DataTableRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[5]" data-name="Data table row">
      <AiSpacer1 />
      <Col5 />
      <Col6 />
      <Col7 />
      <Col8 />
      <Col9 />
    </div>
  );
}

function DataTableBodyRowItem() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col isolate items-start mix-blend-multiply relative shrink-0 w-full" data-name="Data table body row item">
      <DataTableRow />
      <div className="absolute bg-[#c6c6c6] h-px left-0 right-[-110px] top-0 z-[2]" data-name="Divider" />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[4]" data-name="Body">
      {[...Array(5).keys()].map((_, i) => (
        <DataTableBodyRowItem key={i} />
      ))}
    </div>
  );
}

export default function DataTable() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative size-full" data-name="Data table">
      <DataTableHeaderRowItem />
      <Body />
    </div>
  );
}