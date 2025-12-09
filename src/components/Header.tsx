import svgPaths from "../imports/svg-xpebenqrq1";
import svgPathsExport from "../imports/svg-nw3uj3yd84";
import { useState } from 'react';

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(141, 141, 141, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Chevron--down">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #8d8d8d)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("CoreFlow (Mint Digital Asset)");
  
  const options = [
    "CoreFlow (Mint Digital Asset)",
    "CoreFlow (Stripe Payment Workflow)",
    "CoreIgnite User Account Creation",
    "New Core Banking Space Activation"
  ];
  
  return (
    <div className="relative w-full">
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="h-[40px] relative shrink-0 w-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[16px] h-[40px] isolate items-center px-[16px] py-[15px] relative w-full">
              <div className="basis-0 content-stretch flex grow h-[18px] items-start min-h-px min-w-px overflow-clip relative shrink-0 z-[5]">
                <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] text-nowrap tracking-[0.16px] whitespace-pre truncate">{selected}</p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 z-[4]">
                <ChevronDown />
              </div>
              <div className="absolute bg-[#f4f4f4] inset-0 z-[1]">
                <div aria-hidden="true" className="absolute border-[#8d8d8d] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-[42px] w-full bg-white shadow-lg z-20">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-[16px] py-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px] tracking-[0.16px] text-[#161616] hover:bg-[#e0e0e0] cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                  // Trigger navigation
                  const event = new CustomEvent('workflowChange', { detail: { workflow: option } });
                  window.dispatchEvent(event);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function AddIcon({ isHovered }: { isHovered: boolean }) {
  const fillColor = isHovered ? "rgba(110, 110, 110, 1)" : "rgba(57, 57, 57, 1)";
  const fallbackColor = isHovered ? "#6e6e6e" : "#393939";
  
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Export">
      <div className="absolute inset-0 transition-colors" style={{ "--fill-0": fillColor } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Export">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <g id="Vector" className="transition-colors">
              <path d={svgPathsExport.p3c308100} fill={`var(--fill-0, ${fallbackColor})`} />
              <path d={svgPathsExport.p320bb780} fill={`var(--fill-0, ${fallbackColor})`} />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function ExportButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleDownload = () => {
    window.open('https://raw.githubusercontent.com/vadimpodvigin/Corelgnite_test/f2fe940dbf86a5d49364c7d454def1f1c04d3818/CoreIgnite%20Architecture%2011.jpg', '_blank');
  };
  
  return (
    <div 
      className="bg-[rgba(255,255,255,0)] mix-blend-multiply relative h-[40px] w-full cursor-pointer transition-colors" 
      data-name="Button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDownload}
    >
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative shrink-0 w-full" data-name="Button content">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex isolate items-center pl-[16px] pr-[64px] py-[11px] relative w-full">
              <p className={`font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px] whitespace-pre z-[2] transition-colors ${isHovered ? 'text-[#6e6e6e]' : 'text-[#393939]'}`}>Export</p>
              <div className="absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 translate-y-[-50%] z-[1]" data-name="Icon">
                <AddIcon isHovered={isHovered} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none transition-colors ${isHovered ? 'border-[#6e6e6e]' : 'border-[#393939]'}`} />
    </div>
  );
}

export function Header() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <a 
            href="/" 
            className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[#161616] text-[24px] md:text-[32px] cursor-pointer hover:opacity-80 transition-opacity"
          >
            <p className="leading-[normal] whitespace-pre">CoreIgnite</p>
          </a>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 md:ml-auto">
            <div className="w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]">
              <CustomSelect />
            </div>
            
            <div className="w-full sm:w-auto sm:ml-auto">
              <ExportButton />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#c6c6c6] h-px w-full" />
    </div>
  );
}