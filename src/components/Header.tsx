import svgPaths from "../imports/svg-ge5nv5v5ru";
import overflowMenuPaths from "../imports/svg-4l2a964jjw";
import { X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

function Help() {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative shrink-0 size-[16px]" data-name="Help" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Help">
            <rect fill="white" fillOpacity="0.01" height="16" width="16" />
            <g id="Vector">
              <path d={svgPaths.p2d246af0} fill="#161616" />
              <path d={svgPaths.p374bb70} fill="#161616" />
              <path d={svgPaths.p6cf2d00} fill="#161616" />
            </g>
          </g>
        </svg>
      </div>
      {showTooltip && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-[#161616] text-white text-[12px] rounded whitespace-nowrap pointer-events-none z-50">
          tooltip
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-[#161616]" />
        </div>
      )}
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Close">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Close">
            <rect fill="white" fillOpacity="0.01" height="24" style={{ mixBlendMode: "multiply" }} width="24" />
            <path d={svgPaths.p27099900} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function OverflowMenuHorizontal({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="relative size-[24px]" data-name="Overflow-menu--horizontal">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          {isOpen ? (
            <g id="Close">
              <rect fill="white" fillOpacity="0.01" height="24" width="24" />
              <path d={svgPaths.p27099900} fill="#161616" id="Vector" />
            </g>
          ) : (
            <g id="Overflow-menu--horizontal">
              <rect fill="white" fillOpacity="0.01" height="24" width="24" />
              <g id="Vector">
                <path d={overflowMenuPaths.p28385680} fill="#161616" />
                <path d={overflowMenuPaths.p11e47970} fill="#161616" />
                <path d={overflowMenuPaths.p25e8ad00} fill="#161616" />
              </g>
              <g id="Vector_2">
                <path d={overflowMenuPaths.pc6a3100} fill="#161616" />
                <path d={overflowMenuPaths.p3605a200} fill="#161616" />
                <path d={overflowMenuPaths.p282027f0} fill="#161616" />
              </g>
              <g id="Vector_3">
                <path d={overflowMenuPaths.p24092800} fill="#161616" />
                <path d={overflowMenuPaths.p4279900} fill="#161616" />
                <path d={overflowMenuPaths.p1de8f070} fill="#161616" />
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

function MenuTrigger({ onClick, isOpen }: { onClick?: () => void; isOpen?: boolean }) {
  return (
    <div 
      className="bg-white content-stretch flex items-center justify-center p-[10.5px] size-[60px] cursor-pointer hover:bg-[#f4f4f4] transition-colors relative" 
      data-name="Menu trigger"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[#ededed] border-solid border-b inset-0 pointer-events-none" />
      <OverflowMenuHorizontal isOpen={isOpen} />
    </div>
  );
}

export function Header({ onMenuClick, isMenuOpen, onLogoClick, themeColor = "#7a23d9" }: { onMenuClick?: () => void; isMenuOpen?: boolean; onLogoClick?: () => void; themeColor?: string }) {
  return (
    <div className="w-full bg-white fixed top-0 left-0 right-0 z-20 border-[#ededed] border-[0px_0px_1px] border-solid h-[60px]">
      <div className="relative size-full">
        <MenuTrigger onClick={onMenuClick} isOpen={isMenuOpen} />
        
        {/* Logo on the left */}
        <div 
          className="absolute left-[60px] top-1/2 -translate-y-1/2 flex items-center cursor-pointer"
          onClick={onLogoClick}
        >
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px] text-[#161616] font-[IBM_Plex_Mono] font-bold">
            CoreIgnite/<span style={{ color: "#7A23D9" }}>Docs</span>
          </p>
        </div>
        
        <div className="absolute right-[24px] top-[22px]">
          <Help />
        </div>
      </div>
    </div>
  );
}