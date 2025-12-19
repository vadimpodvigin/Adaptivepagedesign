import svgPaths from "./svg-tv6jofgkbo";

function Numbers() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start mix-blend-multiply overflow-clip pl-0 pr-[16px] py-0 relative self-stretch shrink-0" data-name="Numbers">
      <div className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-nowrap tracking-[0.32px]">
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p className="mb-0">10</p>
        <p className="mb-0">11</p>
        <p className="mb-0">12</p>
        <p className="mb-0">13</p>
        <p className="mb-0">14</p>
        <p className="mb-0">15</p>
        <p className="mb-0">16</p>
        <p className="mb-0">17</p>
        <p className="mb-0">18</p>
        <p className="mb-0">19</p>
        <p className="mb-0">20</p>
        <p className="mb-0">21</p>
        <p className="mb-0">22</p>
        <p className="mb-0">23</p>
        <p className="mb-0">24</p>
        <p className="mb-0">25</p>
        <p>26</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1px_0px_0px_0px_#c6c6c6]" />
    </div>
  );
}

function Snippet() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative self-stretch shrink-0" data-name="Snippet">
      <div className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-nowrap tracking-[0.32px]">
        <p className="mb-0">{`toggleState = (element, evt) => {`}</p>
        <p className="mb-0">{`  const data = element.dataset;`}</p>
        <p className="mb-0">{`  const label = (data.label) ?data.label : '';`}</p>
        <p className="mb-0">{`  const previousValue = (data.previousValue) ?`}</p>
        <p className="mb-0">{`    data.previousValue : '';`}</p>
        <p className="mb-0">{`   const initialEvt = evt;`}</p>
        <p className="mb-0">{`   this.changeState({`}</p>
        <p className="mb-0">{`    group: data.event,`}</p>
        <p className="mb-0">{`    element,`}</p>
        <p className="mb-0">{`    label,`}</p>
        <p className="mb-0">{`    previousValue,`}</p>
        <p className="mb-0">{`    initialEvt,`}</p>
        <p className="mb-0">{`toggleState = (element, evt) => {`}</p>
        <p className="mb-0">{`  const data = element.dataset;`}</p>
        <p className="mb-0">{`  const label = (data.label) ?data.label : '';`}</p>
        <p className="mb-0">{`  const previousValue = (data.previousValue) ?`}</p>
        <p className="mb-0">{`    data.previousValue : '';`}</p>
        <p className="mb-0">{`   const initialEvt = evt;`}</p>
        <p className="mb-0">{`   this.changeState({`}</p>
        <p className="mb-0">{`    group: data.event,`}</p>
        <p className="mb-0">{`    element,`}</p>
        <p className="mb-0">{`    label,`}</p>
        <p className="mb-0">{`    previousValue,`}</p>
        <p className="mb-0">{`    initialEvt,`}</p>
        <p className="mb-0">{`  });`}</p>
        <p>{` }`}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-start min-h-px min-w-px overflow-clip pb-[15px] pt-[16px] px-0 relative shrink-0" data-name="Content">
      <Numbers />
      <Snippet />
    </div>
  );
}

function GradientVariable() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex isolate items-start relative size-full" data-name="Gradient (Variable)">
      <div className="absolute bg-gradient-to-r from-[#f4f4f4] inset-0 to-[rgba(244,244,244,0)] z-[4]" data-name="Gradient - White Theme" />
    </div>
  );
}

function GradientWrapper() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-end right-0 top-0 w-[72px]" data-name="Gradient wrapper">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px mix-blend-multiply relative shrink-0 w-full">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-full">
          <GradientVariable />
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Copy">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Copy">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <g id="Vector">
              <path d={svgPaths.p35c00080} fill="#161616" />
              <path d={svgPaths.p2aaf9200} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <Copy />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[8px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Tooltip">
      <Button />
    </div>
  );
}

function CodeSnippetTooltip() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative shrink-0" data-name="_Code snippet tooltip">
      <Tooltip />
    </div>
  );
}

function IconButtonMargin() {
  return (
    <div className="content-stretch flex items-start p-[8px] relative shrink-0" data-name="Icon button margin">
      <CodeSnippetTooltip />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Chevron--up">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Chevron--up">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p23aae480} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 translate-y-[-50%] z-[1]" data-name="Icon">
      <ChevronUp />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px] z-[3]">Show less</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function CodeSnippetGhostButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative shrink-0" data-name="_Code snippet ghost button">
      <Button1 />
    </div>
  );
}

function ButtonOverflow() {
  return (
    <div className="content-stretch flex flex-col items-end justify-between relative self-stretch shrink-0 w-[0.001px]" data-name="Button overflow">
      <IconButtonMargin />
      <div className="basis-0 grow min-h-px min-w-px opacity-0 shrink-0 w-[47px]" data-name="Spacer" />
      <CodeSnippetGhostButton />
    </div>
  );
}

export default function CodeSnippetMultiLine() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="Code snippet - Multi-line">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-0 relative size-full">
          <Content />
          <GradientWrapper />
          <ButtonOverflow />
        </div>
      </div>
    </div>
  );
}