import { useState } from "react";

export interface TabItem {
  label: string;
  content: {
    description?: string;
    button?: {
      label: string;
      url: string;
    };
    sections?: {
      direction: "col" | "row";
      items: Array<{
        title: string;
        badge: string;
        description?: string;
        button?: {
          label: string;
          url: string;
        };
        nestedcards?: Array<{
          title: string;
          subtext?: string;
        }>;
        tabs?: TabItem[];
        codeSnippet?: {
          code: string;
          caption?: string;
        };
      }>;
    };
    nestedcards?: Array<{
      title: string;
      subtext?: string;
    }>;
    codeSnippet?: {
      code: string;
      caption?: string;
    };
  };
}

interface TabsProps {
  tabs: TabItem[];
  color?: string;
  renderContent: (
    content: TabItem["content"],
    color: string,
  ) => React.ReactNode;
}

export function Tabs({
  tabs,
  color = "#7a23d9",
  renderContent,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  // Calculate lighter border color based on the theme color
  const getLighterShade = (
    hexColor: string,
    opacity: number,
  ) => {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const inactiveBorderColor = getLighterShade(color, 0.3);

  return (
    <div
      className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      data-name="Tabs"
    >
      {/* Tab Labels */}
      <div
        className="content-stretch flex items-end relative shrink-0 overflow-x-auto w-full"
        data-name="Tabs Labels"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex-1 content-stretch flex items-center justify-center px-[16px] py-[11px] relative bg-transparent cursor-pointer hover:bg-gray-50 transition-colors"
              data-name="_Horizontal tabs items"
            >
              <div
                aria-hidden="true"
                className="absolute border-solid inset-0 pointer-events-none"
                style={{
                  borderWidth: "0px 0px 2px",
                  borderColor: isActive
                    ? color
                    : inactiveBorderColor,
                }}
              />
              <div
                className="content-stretch flex items-start relative shrink-0 w-full"
                data-name="Text overflow"
              >
                <p
                  className={`font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] tracking-[0.16px] w-full text-center ${
                    isActive
                      ? "text-[#161616]"
                      : "text-[#525252]"
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
        className="min-h-[200px] relative shrink-0 w-full p-[24px] gap-2"
        data-name="Tab Content"
        style={{
          borderColor: inactiveBorderColor,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none w-full gap-2"
        />
        {renderContent(tabs[activeTab].content, color)}
      </div>
    </div>
  );
}