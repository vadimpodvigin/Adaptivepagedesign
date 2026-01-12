import svgPaths from "./svg-k16lngyc97";
import svgPathsIcons from "./svg-7hyl6ocycq";
import * as CarbonIcons from "@carbon/icons-react";

interface NetworkProps {
  icon?: string;
  iconColor?: string;
  className?: string;
}

export default function Network({ icon = 'fragments', iconColor = '#7A23D9', className }: NetworkProps) {
  // Try to get icon from @carbon/icons-react
  // Carbon icons are in PascalCase, so we need to handle different naming conventions
  const getCarbonIcon = (iconName: string) => {
    // Try exact match first (PascalCase)
    if ((CarbonIcons as any)[iconName]) {
      return (CarbonIcons as any)[iconName];
    }
    
    // Try with size suffix (Carbon icons come in different sizes, default to 24)
    const iconName24 = iconName.endsWith('24') ? iconName : `${iconName}24`;
    if ((CarbonIcons as any)[iconName24]) {
      return (CarbonIcons as any)[iconName24];
    }
    
    // Convert kebab-case or snake_case to PascalCase
    const pascalCase = iconName
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
    
    if ((CarbonIcons as any)[pascalCase]) {
      return (CarbonIcons as any)[pascalCase];
    }
    
    const pascalCase24 = `${pascalCase}24`;
    if ((CarbonIcons as any)[pascalCase24]) {
      return (CarbonIcons as any)[pascalCase24];
    }
    
    return null;
  };

  const CarbonIcon = getCarbonIcon(icon);
  
  if (CarbonIcon) {
    return (
      <div className={`relative size-[32px] mt-[0px] mr-[8px] mb-[0px] ml-[0px] ${className || ''}`} data-name="Network">
        <CarbonIcon size={24} fill={iconColor} className="size-full" />
      </div>
    );
  }

  // Fallback to custom SVG icons
  const renderIcon = () => {
    switch (icon) {
      case 'piggy-bank':
        return (
          <>
            <path d={svgPathsIcons.p8435000} fill={iconColor} />
            <path d={svgPathsIcons.p3f8b1c00} fill={iconColor} />
          </>
        );
      case 'fragments':
        return <path d={svgPathsIcons.p4e1fc00} fill={iconColor} />;
      case 'finance':
        return (
          <>
            <path d={svgPathsIcons.p1691f900} fill={iconColor} />
            <path d={svgPathsIcons.p2eae9ac0} fill={iconColor} />
          </>
        );
      case 'money':
        return (
          <>
            <path d={svgPathsIcons.p2d715800} fill={iconColor} />
            <path d={svgPathsIcons.p37abfc00} fill={iconColor} />
            <path d={svgPathsIcons.p18f584c0} fill={iconColor} />
            <path d={svgPathsIcons.p3bbf0000} fill={iconColor} />
            <path d={svgPathsIcons.p205ea800} fill={iconColor} />
            <path d={svgPathsIcons.p209cac80} fill={iconColor} />
          </>
        );
      case 'book':
        return (
          <>
            <path d={svgPathsIcons.p33ce5600} fill={iconColor} />
            <path d={svgPathsIcons.p25575880} fill={iconColor} />
            <path d={svgPathsIcons.pef3de00} fill={iconColor} />
            <path d={svgPathsIcons.p1f67b300} fill={iconColor} />
            <path d={svgPathsIcons.p1acccd00} fill={iconColor} />
            <path d={svgPathsIcons.p31f6e300} fill={iconColor} />
            <path d={svgPathsIcons.p3009a100} fill={iconColor} />
          </>
        );
      case 'application-mobile':
        return (
          <>
            <path d={svgPathsIcons.p1cb91800} fill={iconColor} />
            <path d={svgPathsIcons.p5cff300} fill={iconColor} />
            <path d={svgPathsIcons.p337c94f0} fill={iconColor} />
            <path d={svgPathsIcons.p3c50c180} fill={iconColor} />
            <path d={svgPathsIcons.p2af54d00} fill={iconColor} />
            <path d={svgPathsIcons.p8cd4ef8} fill={iconColor} />
          </>
        );
      case 'user-profile':
        return (
          <>
            <circle cx="16" cy="11.2" r="4" stroke={iconColor} strokeWidth="2.4" fill="none" />
            <path d="M16 17.6C10.6976 17.6 6.4 22.6976 6.4 28" stroke={iconColor} strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M16 17.6C21.3024 17.6 25.6 22.6976 25.6 28" stroke={iconColor} strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </>
        );
      default:
        // Default to fragments icon if nothing matches
        return <path d={svgPathsIcons.p4e1fc00} fill={iconColor} />;
    }
  };

  return (
    <div className={`relative size-[32px] mt-[0px] mr-[8px] mb-[0px] ml-[0px] ${className || ''}`} data-name="Network">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            {renderIcon()}
          </g>
        </g>
      </svg>
    </div>
  );
}
