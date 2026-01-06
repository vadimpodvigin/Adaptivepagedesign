import svgPaths from "./svg-fn6hlpras0";

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] text-nowrap tracking-[0.32px]">Group label</p>
    </div>
  );
}

function CheckboxChecked() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="Checkbox--checked">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <g id="Vector">
              <path d={svgPaths.pce6f280} fill="#161616" fillOpacity="0.25" />
              <path d={svgPaths.p19969e00} fill="#161616" fillOpacity="0.25" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxChecked1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="Checkbox--checked">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <path d={svgPaths.p1968240} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Checkbox group">
      <CheckboxChecked />
      <CheckboxChecked1 />
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Checkbox label</p>
    </div>
  );
}

function IconValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <CheckboxGroup />
      <ValueMargin />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0" data-name="Checkbox">
      <Label />
      <IconValue />
    </div>
  );
}

function CheckboxChecked2() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="Checkbox--checked">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <g id="Vector">
              <path d={svgPaths.pce6f280} fill="#161616" fillOpacity="0.25" />
              <path d={svgPaths.p19969e00} fill="#161616" fillOpacity="0.25" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxChecked3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[20px]" data-name="Checkbox--checked">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox--checked">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <path d={svgPaths.p1968240} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Checkbox group">
      <CheckboxChecked2 />
      <CheckboxChecked3 />
    </div>
  );
}

function ValueMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Checkbox label</p>
    </div>
  );
}

function IconValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <CheckboxGroup1 />
      <ValueMargin1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0" data-name="Checkbox">
      <IconValue1 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Checkbox">
            <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
            <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" fillOpacity="0.25" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ValueMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px]">Checkbox label</p>
    </div>
  );
}

function IconValue2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <Checkbox2 />
      <ValueMargin2 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative shrink-0" data-name="Checkbox">
      <IconValue2 />
    </div>
  );
}

export default function CheckboxGroup2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[8px] items-start mix-blend-multiply relative size-full" data-name="Checkbox group">
      <Checkbox />
      <Checkbox1 />
      <Checkbox3 />
    </div>
  );
}