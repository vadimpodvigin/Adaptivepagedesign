import svgPaths from "../imports/svg-ge5nv5v5ru";
import overflowMenuPaths from "../imports/svg-ec4s719mx2";
import { X } from 'lucide-react';

function Help() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Help">
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
      className="bg-white content-stretch flex items-center justify-center p-[10.5px] size-[60px] cursor-pointer hover:bg-[#f4f4f4] transition-colors" 
      data-name="Menu trigger"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[#ededed] border-[1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <OverflowMenuHorizontal isOpen={isOpen} />
    </div>
  );
}

export function Header({ onMenuClick, isMenuOpen, onLogoClick }: { onMenuClick?: () => void; isMenuOpen?: boolean; onLogoClick?: () => void }) {
  return (
    <div className="w-full bg-white fixed top-0 left-0 right-0 z-20 border-[#ededed] border-[0px_0px_1px] border-solid h-[60px]">
      <div className="relative size-full">
        <MenuTrigger onClick={onMenuClick} isOpen={isMenuOpen} />
        
        <div 
          className="absolute flex flex-col font-['IBM_Plex_Mono:SemiBold',sans-serif] justify-center leading-[0] left-[68px] not-italic text-[#161616] text-[24px] text-nowrap top-[30px] translate-y-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={onLogoClick}
        >
          <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[normal]">
            CoreIgnite/<span className="text-[#7a23d9]">Docs</span>
          </p>
        </div>
        
        <div className="absolute right-[24px] top-[22px]">
          <Help />
        </div>
      </div>
    </div>
  );
}