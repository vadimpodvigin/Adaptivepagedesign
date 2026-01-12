import { useState } from "react";
import { ListItem } from "./List";
import { Step, StepDirection } from "./Stepper";
import { CheckboxItem } from "./Checkbox";
import { AccordionItem } from "./Accordion";
import { NotificationProps } from "./Notification";

export interface TabItem {
  label: string;
  content: {
    description?: string;
    buttons?: Array<{
      label: string;
      url: string;
      type?: 'primary' | 'tertiary';
    }>;
    sections?: {
      direction: "col" | "row";
      items: Array<{
        title: string;
        badge: string;
        description?: string;
        icon?: string;
        tags?: Array<{ label: string; color?: string }>;
        list?: {
          type?: "ordered" | "unordered";
          items: ListItem[];
          nestedType?: "alpha" | "bullet";
        };
        table?: {
          headers: string[];
          rows: string[][];
        };
        stepper?: {
          steps: Step[];
          direction?: StepDirection;
        };
        checkboxGroup?: {
          title?: string;
          items: CheckboxItem[];
        };
        accordion?: AccordionItem[];
        notifications?: NotificationProps[];
        buttons?: Array<{
          label: string;
          url: string;
          type?: 'primary' | 'tertiary';
        }>;
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
              className="flex-1 content-stretch flex items-center justify-center px-[16px] py-[11px] relative bg-transparent cursor-pointer hover:bg-[#f4f4f4] transition-colors"
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
                  className={`font-['IBM_Plex_Sans',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] tracking-[0.16px] w-full text-center ${
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
        className="relative shrink-0 w-full gap-2"
        data-name="Tab Content"
      >
        {renderContent(tabs[activeTab].content, color)}
      </div>
    </div>
  );
}
