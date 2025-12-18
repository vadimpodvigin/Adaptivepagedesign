import { useState } from "react";

export interface TabItem {
  label: string;
  description?: string;
}

interface TabsProps {
  tabs: TabItem[];
  color?: string;
}

export function Tabs({ tabs, color = '#7a23d9' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  // Calculate lighter border color based on the theme color
  const getLighterShade = (hexColor: string, opacity: number) => {
    const hex = hexColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const inactiveBorderColor = getLighterShade(color, 0.3);

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Tabs">
      {/* Tab Labels */}
      <div className="content-stretch flex items-start relative shrink-0 overflow-x-auto w-full" data-name="Tabs Labels">
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[11px] relative shrink-0 bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
              data-name="_Horizontal tabs items"
            >
              <div
                aria-hidden="true"
                className="absolute border-solid inset-0 pointer-events-none"
                style={{
                  borderWidth: '0px 0px 2px',
                  borderColor: isActive ? color : inactiveBorderColor,
                }}
              />
              <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
                <p
                  className={`leading-[18px] not-italic relative shrink-0 text-[14px] text-nowrap tracking-[0.16px] ${
                    isActive 
                      ? "font-['IBM_Plex_Sans:SemiBold',sans-serif] text-black" 
                      : "font-['IBM_Plex_Sans:Regular',sans-serif] text-[#525252]"
                  }`}
                >
                  {tab.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div
        className="min-h-[200px] relative shrink-0 w-full p-[16px]"
        data-name="Tab Content"
        style={{
          borderColor: inactiveBorderColor,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none"
          style={{
            borderColor: inactiveBorderColor,
          }}
        />
        {tabs[activeTab].description && (
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative text-[#525252] text-[14px] md:text-[16px]">
            {tabs[activeTab].description}
          </p>
        )}
      </div>
    </div>
  );
}
