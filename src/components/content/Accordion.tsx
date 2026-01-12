import { useState } from "react";
import svgPaths from "../../assets/svg/svg-jajvlgyzue";

export interface AccordionItem {
  title: string;
  content: string;
  disabled?: boolean;
  defaultExpanded?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  color?: string; // Inherit from page color
}

// Chevron Down icon
function ChevronDown({ color = "#161616", isExpanded = false }: { color?: string; isExpanded?: boolean }) {
  return (
    <div 
      className={`relative shrink-0 size-[16px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
      data-name="Chevron--down"
    >
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Chevron--down">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
            <path d={svgPaths.p10dcabc0} fill={color} id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Single Accordion Item Component
function AccordionItemComponent({
  title,
  content,
  disabled = false,
  defaultExpanded = false,
  color = "#161616",
}: {
  title: string;
  content: string;
  disabled?: boolean;
  defaultExpanded?: boolean;
  color?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    if (!disabled) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Determine text color based on state
  const titleColor = disabled ? "#c6c6c6" : "#161616";
  const chevronColor = disabled ? "#c6c6c6" : color;

  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative w-full">
      {/* Top border */}
      <div
        aria-hidden="true"
        className="absolute border-[#e0e0e0] border-t border-solid inset-x-0 top-0 pointer-events-none h-px"
      />

      {/* Accordion Header */}
      <div
        className={`relative shrink-0 w-full ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${!disabled ? 'hover:bg-[#f4f4f4]' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isExpanded}
        aria-disabled={disabled}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[10px] relative w-full">
            {/* Title - grows to fill space, pushing chevron to the right */}
            <p
              className="basis-0 font-['IBM_Plex_Sans',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[0.16px]"
              style={{ color: titleColor }}
            >
              {title}
            </p>
            {/* Chevron - aligned to the right */}
            <ChevronDown color={chevronColor} isExpanded={isExpanded} />
          </div>
        </div>
      </div>

      {/* Accordion Content - Expandable */}
      {isExpanded && (
        <div className="w-full overflow-hidden">
          <div className="px-[16px] pb-[16px] pt-[4px]">
            <p className="font-['IBM_Plex_Sans',sans-serif] leading-[20px] not-italic text-[14px] tracking-[0.16px]" style={{ color: '#525252' }}>
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Main Accordion Component
export function Accordion({ items, color = "#161616" }: AccordionProps) {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start mix-blend-multiply relative w-full">
      {items.map((item, index) => (
        <AccordionItemComponent
          key={index}
          title={item.title}
          content={item.content}
          disabled={item.disabled}
          defaultExpanded={item.defaultExpanded}
          color={color}
        />
      ))}
      {/* Bottom border for the last item */}
      <div
        aria-hidden="true"
        className="border-[#e0e0e0] border-b border-solid w-full h-px"
      />
    </div>
  );
}