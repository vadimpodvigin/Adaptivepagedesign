import svgPaths from "../imports/svg-7hyl6ocycq";

interface WorkflowTileProps {
  title: string;
  icon: 'piggy-bank' | 'fragments' | 'finance' | 'money' | 'book' | 'application-mobile' | 'user-profile';
  iconColor?: string;
  onClick?: () => void;
}

export function WorkflowTile({ title, icon, iconColor = '#7A23D9', onClick }: WorkflowTileProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'piggy-bank':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Piggy-bank">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <path d={svgPaths.p8435000} fill={iconColor} />
                <path d={svgPaths.p3f8b1c00} fill={iconColor} />
              </g>
            </g>
          </svg>
        );
      case 'fragments':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Fragments">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <path d={svgPaths.p4e1fc00} fill={iconColor} id="Vector" />
            </g>
          </svg>
        );
      case 'finance':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Finance">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <path d={svgPaths.p1691f900} fill={iconColor} />
                <path d={svgPaths.p2eae9ac0} fill={iconColor} />
              </g>
            </g>
          </svg>
        );
      case 'money':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Money">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <path d={svgPaths.p2d715800} fill={iconColor} />
                <path d={svgPaths.p37abfc00} fill={iconColor} />
                <path d={svgPaths.p18f584c0} fill={iconColor} />
                <path d={svgPaths.p3bbf0000} fill={iconColor} />
                <path d={svgPaths.p205ea800} fill={iconColor} />
                <path d={svgPaths.p209cac80} fill={iconColor} />
              </g>
            </g>
          </svg>
        );
      case 'book':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Book">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <path d={svgPaths.p33ce5600} fill={iconColor} />
                <path d={svgPaths.p25575880} fill={iconColor} />
                <path d={svgPaths.pef3de00} fill={iconColor} />
                <path d={svgPaths.p1f67b300} fill={iconColor} />
                <path d={svgPaths.p1acccd00} fill={iconColor} />
                <path d={svgPaths.p31f6e300} fill={iconColor} />
                <path d={svgPaths.p3009a100} fill={iconColor} />
              </g>
            </g>
          </svg>
        );
      case 'application-mobile':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Application--mobile">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <path d={svgPaths.p1cb91800} fill={iconColor} />
                <path d={svgPaths.p5cff300} fill={iconColor} />
                <path d={svgPaths.p337c94f0} fill={iconColor} />
                <path d={svgPaths.p3c50c180} fill={iconColor} />
                <path d={svgPaths.p2af54d00} fill={iconColor} />
                <path d={svgPaths.p8cd4ef8} fill={iconColor} />
              </g>
            </g>
          </svg>
        );
      case 'user-profile':
        return (
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="User-profile">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <g id="Vector">
                <circle cx="10" cy="7" r="2.5" stroke={iconColor} strokeWidth="1.5" fill="none" />
                <path d="M10 11C6.686 11 4 13.686 4 17" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <path d="M10 11C13.314 11 16 13.686 16 17" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </g>
            </g>
          </svg>
        );
    }
  };

  return (
    <div
      className={`bg-white content-stretch flex flex-col h-[120px] isolate items-start relative shrink-0 w-full max-w-[308px] ${
        onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : 'cursor-default'
      }`}
      onClick={onClick}
    >
      <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full z-[8]">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start pl-[16px] pr-[8px] py-[16px] relative w-full">
              <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full font-[IBM_Plex_Sans]">
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[48px] items-end justify-end relative shrink-0 w-full z-[5]">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-center mix-blend-multiply overflow-clip p-[3px] relative shrink-0 size-[48px]">
          <div className="relative shrink-0 size-[20px]">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              {renderIcon()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}