import svgPaths from "./svg-k7jjb7zmtn";

function StatusIconInformationTrueFalse() {
  return (
    <div className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative shrink-0 size-[20px]" data-name="Status icon/Information/True/False">
      <div className="absolute bg-white inset-1/4" data-name="Fill" />
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Information--filled">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <path d={svgPaths.p2ac4270} fill="var(--fill-0, #0043CE)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[14px] px-0 relative self-stretch shrink-0" data-name="Icon margin">
      <StatusIconInformationTrueFalse />
    </div>
  );
}

function TitleMessage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Title + Message">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[18px] not-italic px-[16px] py-[15px] relative text-[#161616] text-[14px] tracking-[0.16px] w-full">
          <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] relative shrink-0 w-full">Title</p>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 w-full">Message</p>
        </div>
      </div>
    </div>
  );
}

export default function NotificationInline() {
  return (
    <div className="bg-[#edf5ff] relative size-full" data-name="Notification - Inline">
      <div aria-hidden="true" className="absolute border border-[rgba(0,67,206,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-0 relative size-full">
          <IconMargin />
          <TitleMessage />
          <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-0">
            <div className="flex-none h-px rotate-[90deg] w-[68px]">
              <div className="relative size-full" data-name="Border">
                <div className="absolute inset-[-3px_0_0_0]" style={{ "--stroke-0": "rgba(0, 67, 206, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 3">
                    <line id="Border" stroke="var(--stroke-0, #0043CE)" strokeWidth="3" x2="68" y1="1.5" y2="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}