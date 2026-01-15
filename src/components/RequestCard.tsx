import React, { useState, useEffect } from "react";
import * as yaml from "js-yaml";
import svgPathsRight from "../assets/svg/svg-gc1pv1i3ew";
import svgPathsLeft from "../assets/svg/svg-k2avt48rcz";
import { CodeSnippet } from "./content/CodeSnippet";
import { Tabs, TabItem } from "./content/Tabs";
import { Button } from "./common/Button";
import { Tag } from "./common/Tag";
import { List, ListItem } from "./content/List";
import {
  Notification,
  NotificationType,
  NotificationProps,
} from "./content/Notification";
import { Notifications } from "./content/Notifications";
import { Loading } from "./common/Loading";
import { CardSkeleton } from "./skeletons/CardSkeleton";
import { Table } from "./content/Table";
import { Stepper, Step, StepDirection } from "./content/Stepper";
import { CheckboxGroup, CheckboxItem } from "./content/Checkbox";
import { Accordion, AccordionItem } from "./content/Accordion";
import Network from "./legacy/Network";

// TypeScript type for card data structure
export interface CardData {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon?: string; // Optional icon for side cards
  tags?: Array<{ label: string; color?: string }>; // Optional tags
  list?: {
    type?: "ordered" | "unordered";
    items: ListItem[];
    nestedType?: "alpha" | "bullet";
  }; // Optional list
  table?: {
    headers: string[];
    rows: string[][];
  }; // Optional table
  stepper?: {
    steps: Step[];
    direction?: StepDirection;
  }; // Optional stepper
  checkboxGroup?: {
    title?: string;
    items: CheckboxItem[];
  }; // Optional checkbox group
  accordion?: AccordionItem[]; // Optional accordion
  notifications?: NotificationProps[]; // Optional notifications array
  sideCardRef?: string; // Reference to shared side cards
  sideCardSpanEnd?: string; // ID of the card where shared cards span should end
  buttons?: Array<{
    label: string;
    url: string;
    type?: "primary" | "tertiary";
  }>;
  codeSnippet?: {
    code: string;
    caption?: string;
  };
  tabs?: TabItem[];
  nestedcards?: Array<{
    title: string;
    subtext?: string;
  }>;
  sections?: {
    direction: "col" | "row";
    items: Array<{
      title: string;
      badge: string;
      description?: string;
      icon?: string; // Add icon support for section items
      tags?: Array<{ label: string; color?: string }>; // Optional tags for section items
      list?: {
        type?: "ordered" | "unordered";
        items: ListItem[];
        nestedType?: "alpha" | "bullet";
      }; // Optional list for section items
      table?: {
        headers: string[];
        rows: string[][];
      }; // Optional table for section items
      stepper?: {
        steps: Step[];
        direction?: StepDirection;
      }; // Optional stepper for section items
      checkboxGroup?: {
        title?: string;
        items: CheckboxItem[];
      }; // Optional checkbox group for section items
      accordion?: AccordionItem[]; // Optional accordion for section items
      notifications?: NotificationProps[]; // Optional notifications array for section items
      buttons?: Array<{
        label: string;
        url: string;
        type?: "primary" | "tertiary";
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
  arrows?: Array<{
    direction: "down" | "left" | "right" | "up";
    targetCardId: string;
    rowIndex?: number; // Optional: for right arrows, specifies vertical alignment (0 = top, 1 = middle, etc.)
  }>;
}

export interface WorkflowData {
  title: string;
  description: string;
  category: string; // "CoreFlow" | "CoreIgnite Setup" | custom string
  icon: string; // Support any IBM Carbon icon name
}

export interface SharedSideCard {
  id: string;
  title: string;
  badge: string;
  description: string;
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
  buttons?: Array<{
    label: string;
    url: string;
    type?: "primary" | "tertiary";
  }>;
  arrows?: Array<{
    direction: "down" | "left" | "right" | "up";
    targetCardId: string;
    rowIndex?: number;
  }>;
}

export interface CardsData {
  workflow: WorkflowData;
  cards: CardData[];
  sharedSideCards?: Record<string, SharedSideCard[]>; // Named groups of shared side cards
}

function NumberBadge({
  number,
  color = "#7a23d9",
}: {
  number: string;
  color?: string;
}) {
  if (!number) return null;

  return (
    <div
      className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[24px] px-[4px] py-[2px]"
      style={{ backgroundColor: color }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[1.5px] border-solid inset-0 pointer-events-none rounded-[100px]"
        style={{ borderColor: color }}
      />
      <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-white text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre font-['IBM_Plex_Mono',sans-serif] text-[16px]">
          {number}
        </p>
      </div>
    </div>
  );
}

function SectionNumberBadge({
  number,
  color = "#7a23d9",
}: {
  number: string;
  color?: string;
}) {
  // Calculate lighter border and text colors based on the theme color
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

  const borderColor = getLighterShade(color, 0.3);
  const textColor = color;

  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[100px] shrink-0 min-w-[32px] px-[8px] h-[32px]">
      <div
        aria-hidden="true"
        className="absolute border border-solid inset-0 pointer-events-none rounded-[100px]"
        style={{ borderColor }}
      />
      <div
        className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap"
        style={{ color: textColor }}
      >
        <p className="leading-[normal] whitespace-pre font-['IBM_Plex_Mono',monospace] text-[14px]">
          {number}
        </p>
      </div>
    </div>
  );
}

function ArrowDownGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--down"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="Arrow--down">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="24"
              width="24"
            />
            <path
              d={svgPathsRight.p2324eb80}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowUpGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--up"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="Arrow--up">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="16"
              width="16"
            />
            <path
              d={svgPathsLeft.p14ab8500}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowRightGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--right"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="Arrow--right">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="16"
              width="16"
            />
            <path
              d={svgPathsRight.pfec3600}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ArrowLeftGrey() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Arrow--left"
    >
      <div
        className="absolute inset-0"
        style={
          {
            "--fill-0": "rgba(82, 82, 82, 1)",
          } as React.CSSProperties
        }
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 16"
        >
          <g id="Arrow--left">
            <rect
              fill="white"
              fillOpacity="0.01"
              height="16"
              width="16"
            />
            <path
              d={svgPathsLeft.p3efc6f00}
              fill="var(--fill-0, #525252)"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NestedCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white relative shrink-0 w-full rounded-[8px] border border-[#ededed]">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <div
            className={`basis-0 content-stretch flex flex-col ${description ? "gap-[4px] items-start" : "items-start justify-center"} grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#525252]`}
          >
            <p className="font-['IBM_Plex_Sans',sans-serif] font-bold relative shrink-0 w-full text-[10px] md:text-[12px]">
              {title}
            </p>
            {description && (
              <p className="font-['IBM_Plex_Sans',sans-serif] relative shrink-0 w-full text-[10px] md:text-[12px]">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  badge,
  description,
  icon,
  tags,
  list,
  table,
  stepper,
  checkboxGroup,
  accordion,
  notifications,
  buttons,
  nestedcards,
  tabs,
  codeSnippet,
  color = "#7a23d9",
}: {
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
    type?: "primary" | "tertiary";
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
  color?: string;
}) {
  const hasNestedCards =
    nestedcards &&
    Array.isArray(nestedcards) &&
    nestedcards.length > 0;
  const hasTabs =
    tabs && Array.isArray(tabs) && tabs.length > 0;
  const hasCodeSnippet =
    codeSnippet && codeSnippet.code && codeSnippet.code.snippet;
  const hasButtons =
    buttons && Array.isArray(buttons) && buttons.length > 0;
  const hasNotifications =
    notifications &&
    Array.isArray(notifications) &&
    notifications.length > 0;
  const hasList = list && list.items && list.items.length > 0;
  const hasTable = table && table.rows && table.rows.length > 0;
  const hasStepper =
    stepper && stepper.steps && stepper.steps.length > 0;
  const hasCheckboxGroup =
    checkboxGroup &&
    checkboxGroup.items &&
    checkboxGroup.items.length > 0;
  const hasAccordion =
    accordion &&
    Array.isArray(accordion) &&
    accordion.length > 0;
  const hasTags =
    tags && Array.isArray(tags) && tags.length > 0;
  const shouldShowDivider =
    description ||
    hasNestedCards ||
    hasTabs ||
    hasCodeSnippet ||
    hasButtons ||
    hasNotifications ||
    hasList ||
    hasTable ||
    hasStepper ||
    hasCheckboxGroup ||
    hasAccordion ||
    hasTags;

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[12px] items-stretch p-4 md:p-[16px] rounded-[8px] border border-[#ededed] w-full min-w-0 h-full">
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
        {icon ? (
          <Network
            icon={icon as any}
            iconColor={color}
            className="!size-[24px] !m-0"
          />
        ) : (
          <SectionNumberBadge number={badge} color={color} />
        )}
        <div className="flex-1 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] md:text-[16px]">
          <p className="leading-[normal] font-['IBM_Plex_Sans',sans-serif] font-medium text-[#161616]">
            {title}
          </p>
        </div>
      </div>

      {shouldShowDivider && (
        <div className="bg-[#ededed] shrink-0 h-px w-full" />
      )}

      {description && (
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] md:text-[14px] text-neutral-600 w-full">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-[6px]">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              label={tag.label}
              color={tag.color}
            />
          ))}
        </div>
      )}

      {list && (
        <List
          type={list.type}
          items={list.items}
          nestedType={list.nestedType}
          inheritedColor={description ? "#737373" : undefined}
          inheritedFontSize={description ? "14px" : undefined}
          inheritedFontWeight={description ? "400" : undefined}
          inheritedFontFamily={
            description
              ? "IBM Plex Sans, sans-serif"
              : undefined
          }
          inheritedLineHeight={
            description ? "normal" : undefined
          }
          inheritedLetterSpacing={
            description ? "normal" : undefined
          }
        />
      )}

      {table && (
        <Table headers={table.headers} rows={table.rows} />
      )}

      {stepper && (
        <Stepper
          steps={stepper.steps}
          direction={stepper.direction}
          color={color}
        />
      )}

      {checkboxGroup && (
        <CheckboxGroup
          title={checkboxGroup.title}
          items={checkboxGroup.items}
          color={color}
        />
      )}

      {accordion && accordion.length > 0 && (
        <Accordion items={accordion} color={color} />
      )}

      {hasNotifications && (
        <Notifications notifications={notifications} />
      )}

      {hasButtons && (
        <div className="flex flex-wrap gap-[8px]">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              url={btn.url}
              type={btn.type}
              color={color}
            />
          ))}
        </div>
      )}

      {hasCodeSnippet && (
        <CodeSnippet
          code={codeSnippet.code.snippet}
          caption={codeSnippet.caption}
        />
      )}

      {hasTabs && (
        <Tabs
          tabs={tabs}
          color={color}
          renderContent={renderTabContent}
        />
      )}

      {hasNestedCards && (
        <div className="flex flex-col gap-[8px]">
          {nestedcards.map((card, index) => (
            <NestedCard
              key={index}
              title={card.title}
              description={card.subtext || ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface CardProps {
  title: string;
  badge: string;
  description: string;
  icon?: string; // Add icon support
  tags?: Array<{ label: string; color?: string }>; // Optional tags
  list?: {
    type?: "ordered" | "unordered";
    items: ListItem[];
    nestedType?: "alpha" | "bullet";
  }; // Optional list
  table?: {
    headers: string[];
    rows: string[][];
  }; // Optional table
  stepper?: {
    steps: Step[];
    direction?: StepDirection;
  }; // Optional stepper
  checkboxGroup?: {
    title?: string;
    items: CheckboxItem[];
  }; // Optional checkbox group
  accordion?: AccordionItem[]; // Optional accordion
  buttons?: Array<{
    label: string;
    url: string;
    type?: "primary" | "tertiary";
  }>;
  codeSnippet?: {
    code: string;
    caption?: string;
  };
  tabs?: TabItem[];
  nestedcards?: Array<{
    title: string;
    subtext?: string;
  }>;
  sections?: {
    direction: "col" | "row";
    items: Array<{
      title: string;
      badge: string;
      description?: string;
      icon?: string; // Add icon support for section items
      tags?: Array<{ label: string; color?: string }>; // Optional tags for section items
      list?: {
        type?: "ordered" | "unordered";
        items: ListItem[];
        nestedType?: "alpha" | "bullet";
      }; // Optional list for section items
      table?: {
        headers: string[];
        rows: string[][];
      }; // Optional table for section items
      stepper?: {
        steps: Step[];
        direction?: StepDirection;
      }; // Optional stepper for section items
      checkboxGroup?: {
        title?: string;
        items: CheckboxItem[];
      }; // Optional checkbox group for section items
      accordion?: AccordionItem[]; // Optional accordion for section items
      notifications?: NotificationProps[]; // Optional notifications array for section items
      buttons?: Array<{
        label: string;
        url: string;
        type?: "primary" | "tertiary";
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
  className?: string;
  color?: string;
  hugHeight?: boolean; // New prop to control height behavior
}

function Card({
  title,
  badge,
  description,
  icon,
  tags,
  list,
  table,
  stepper,
  checkboxGroup,
  accordion,
  notifications,
  buttons,
  codeSnippet,
  tabs,
  nestedcards,
  sections,
  className = "",
  color = "#7a23d9",
  hugHeight = true, // Default to hugging content for natural flex stretch
}: CardProps) {
  const hasNestedCards =
    nestedcards &&
    Array.isArray(nestedcards) &&
    nestedcards.length > 0;
  const hasSections =
    sections &&
    Array.isArray(sections.items) &&
    sections.items.length > 0;
  const hasCodeSnippet =
    codeSnippet && codeSnippet.code && codeSnippet.code.snippet;
  const hasTabs =
    tabs && Array.isArray(tabs) && tabs.length > 0;
  const hasButtons =
    buttons && Array.isArray(buttons) && buttons.length > 0;
  const hasNotifications =
    notifications &&
    Array.isArray(notifications) &&
    notifications.length > 0;
  const hasList = list && list.items && list.items.length > 0;
  const hasTable = table && table.rows && table.rows.length > 0;
  const hasStepper =
    stepper && stepper.steps && stepper.steps.length > 0;
  const hasCheckboxGroup =
    checkboxGroup &&
    checkboxGroup.items &&
    checkboxGroup.items.length > 0;
  const hasAccordion =
    accordion &&
    Array.isArray(accordion) &&
    accordion.length > 0;
  const hasTags =
    tags && Array.isArray(tags) && tags.length > 0;
  const shouldShowDivider =
    description ||
    hasNestedCards ||
    hasSections ||
    hasCodeSnippet ||
    hasTabs ||
    hasButtons ||
    hasNotifications ||
    hasList ||
    hasTable ||
    hasStepper ||
    hasCheckboxGroup ||
    hasAccordion ||
    hasTags;

  const heightClass = hugHeight ? "" : "h-full";

  return (
    <div
      className={`bg-white box-border content-stretch flex flex-col gap-[16px] items-stretch p-[16px] rounded-[8px] transition-shadow hover:shadow-md ${heightClass} max-w-full ${className}`}
    >
      <div className="content-stretch flex flex-row gap-[8px] items-center relative shrink-0 w-full">
        {icon ? (
          <Network
            icon={icon as any}
            iconColor={color}
            className="!size-[24px] !m-0"
          />
        ) : (
          <NumberBadge number={badge} color={color} />
        )}
        <div className="basis-0 flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#161616] text-[20px] md:text-[24px]">
          <p className="leading-[normal] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-medium">
            {title}
          </p>
        </div>
      </div>

      {shouldShowDivider && (
        <div className="bg-[#ededed] shrink-0 h-px w-full" />
      )}

      {description && (
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[16px] text-neutral-600 w-full">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-[6px] my-2">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              label={tag.label}
              color={tag.color}
            />
          ))}
        </div>
      )}

      {list && (
        <List
          type={list.type}
          items={list.items}
          nestedType={list.nestedType}
        />
      )}

      {table && (
        <Table headers={table.headers} rows={table.rows} />
      )}

      {stepper && (
        <Stepper
          steps={stepper.steps}
          direction={stepper.direction}
          color={color}
        />
      )}

      {checkboxGroup && (
        <CheckboxGroup
          title={checkboxGroup.title}
          items={checkboxGroup.items}
          color={color}
        />
      )}

      {accordion && accordion.length > 0 && (
        <Accordion items={accordion} color={color} />
      )}

      {notifications && notifications.length > 0 && (
        <Notifications notifications={notifications} />
      )}

      {hasButtons && (
        <div className="flex flex-wrap gap-[8px]">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              url={btn.url}
              type={btn.type}
              color={color}
            />
          ))}
        </div>
      )}

      {hasCodeSnippet && (
        <CodeSnippet
          code={codeSnippet.code.snippet}
          caption={codeSnippet.caption}
        />
      )}

      {hasTabs && (
        <Tabs
          tabs={tabs}
          color={color}
          renderContent={renderTabContent}
        />
      )}

      {hasNestedCards && (
        <div className="flex flex-col gap-[8px]">
          {nestedcards.map((card, index) => (
            <NestedCard
              key={index}
              title={card.title}
              description={card.subtext || ""}
            />
          ))}
        </div>
      )}

      {hasSections && (
        <div
          className={`flex ${sections.direction === "row" ? "flex-col sm:flex-row" : "flex-col"} gap-[16px]`}
        >
          {sections.items.map((section, index) => (
            <SectionCard
              key={index}
              title={section.title}
              badge={section.badge}
              description={section.description}
              icon={section.icon} // Add icon support for section items
              tags={section.tags} // Add tags support for section items
              list={section.list} // Add list support for section items
              table={section.table} // Add table support for section items
              stepper={section.stepper} // Add stepper support for section items
              checkboxGroup={section.checkboxGroup} // Add checkbox group support for section items
              accordion={section.accordion} // Add accordion support for section items
              notifications={section.notifications} // Add notifications support for section items
              buttons={section.buttons}
              nestedcards={section.nestedcards}
              tabs={section.tabs}
              codeSnippet={section.codeSnippet}
              color={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Helper function to render tab content
function renderTabContent(
  content: TabItem["content"],
  color: string,
): React.ReactNode {
  return (
    <>
      {content.description && (
        <p className="font-['IBM_Plex_Sans',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] md:text-[16px] text-neutral-600 w-full mt-[8px] mr-[0px] mb-[0px] ml-[0px]">
          {content.description}
        </p>
      )}

      {content.buttons && content.buttons.length > 0 && (
        <div className="flex flex-wrap gap-[8px]">
          {content.buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              url={btn.url}
              type={btn.type}
              color={color}
            />
          ))}
        </div>
      )}

      {content.codeSnippet && (
        <CodeSnippet
          code={content.codeSnippet.code}
          caption={content.codeSnippet.caption}
        />
      )}

      {content.nestedcards &&
        content.nestedcards.length > 0 && (
          <div className="flex flex-col gap-[8px]">
            {content.nestedcards.map((card, index) => (
              <NestedCard
                key={index}
                title={card.title}
                description={card.subtext || ""}
              />
            ))}
          </div>
        )}

      {content.sections &&
        content.sections.items &&
        content.sections.items.length > 0 && (
          <div
            className={`flex ${content.sections.direction === "row" ? "flex-col sm:flex-row" : "flex-col"} gap-[16px] pt-[8px]`}
          >
            {content.sections.items.map((section, index) => (
              <div
                key={index}
                className={
                  content.sections.direction === "row"
                    ? "w-full sm:flex-1"
                    : "w-full"
                }
              >
                <SectionCard
                  title={section.title}
                  badge={section.badge}
                  description={section.description}
                  icon={section.icon} // Add icon support for section items
                  tags={section.tags} // Add tags support for section items
                  list={section.list} // Add list support for section items
                  table={section.table} // Add table support for section items
                  stepper={section.stepper} // Add stepper support for section items
                  checkboxGroup={section.checkboxGroup} // Add checkbox group support for section items
                  accordion={section.accordion} // Add accordion support for section items
                  notifications={section.notifications} // Add notifications support for section items
                  buttons={section.buttons}
                  nestedcards={section.nestedcards}
                  tabs={section.tabs}
                  codeSnippet={section.codeSnippet}
                  color={color}
                />
              </div>
            ))}
          </div>
        )}
    </>
  );
}

// Static arrow component (non-interactive)
function StaticArrow({
  direction,
}: {
  direction: "down" | "left" | "right" | "up";
}) {
  let ArrowComponent;

  switch (direction) {
    case "down":
      ArrowComponent = ArrowDownGrey;
      break;
    case "up":
      ArrowComponent = ArrowUpGrey;
      break;
    case "left":
      ArrowComponent = ArrowLeftGrey;
      break;
    case "right":
      ArrowComponent = ArrowRightGrey;
      break;
  }

  const isVertical = direction === "up" || direction === "down";

  return (
    <div className="content-stretch size-[40px] flex-col flex isolate items-center justify-center overflow-clip shrink-0 bg-transparent">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center overflow-clip size-full">
          <div className="box-border content-stretch flex isolate items-center justify-center relative w-full">
            <div className="flex items-center justify-center shrink-0">
              <ArrowComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardWithArrowsProps {
  card: CardData;
  cardsById: Map<string, CardData>;
  isLastCard: boolean;
  color?: string;
  sharedSideCards?: Record<string, SharedSideCard[]>;
}

function CardWithArrows({
  card,
  cardsById,
  isLastCard,
  color = "#7a23d9",
  sharedSideCards = {},
}: CardWithArrowsProps) {
  // Helper function to check if a badge is a "main" badge (whole number like 1, 2, 1.0, 2.0)
  const isMainBadge = (badge: string): boolean => {
    if (!badge) return false;
    const num = parseFloat(badge);
    return !isNaN(num) && num === Math.floor(num);
  };

  // Helper function to find all cards that are part of the same span
  const getCardsInSpan = (startCard: CardData): CardData[] => {
    if (!startCard.sideCardRef) return [startCard];

    const spanCards: CardData[] = [];
    const visited = new Set<string>();

    // Find all cards with the same sideCardRef by traversing down arrows
    const traverse = (currentCard: CardData) => {
      if (!currentCard || visited.has(currentCard.id)) return;

      // Only include cards with the same sideCardRef
      if (currentCard.sideCardRef === startCard.sideCardRef) {
        visited.add(currentCard.id);
        spanCards.push(currentCard);

        // Continue traversing down arrows
        const downArrows = (currentCard.arrows || []).filter(
          (a) => a.direction === "down",
        );
        downArrows.forEach((arrow) => {
          const nextCard = cardsById.get(arrow.targetCardId);
          if (nextCard) {
            traverse(nextCard);
          }
        });
      }
    };

    traverse(startCard);
    return spanCards;
  };

  // Check if this card has shared side cards that should span vertically
  const hasSharedSideCards =
    card.sideCardRef &&
    sharedSideCards &&
    sharedSideCards[card.sideCardRef];

  // Get all cards in this span if this is a span start
  const cardsInSpan = hasSharedSideCards
    ? getCardsInSpan(card)
    : [card];
  const isSpanStart =
    hasSharedSideCards &&
    cardsInSpan.length > 0 &&
    cardsInSpan[0].id === card.id;
  const spanEndCard =
    cardsInSpan.length > 0
      ? cardsInSpan[cardsInSpan.length - 1]
      : null;

  // Check if this card is part of a span but not the start (these should be skipped)
  const isMiddleOfSpan =
    card.sideCardRef && !isSpanStart && cardsInSpan.length > 1;

  // If this card is in the middle of a span, don't render it (it's part of the spanning layout)
  if (isMiddleOfSpan) {
    return null;
  }

  // Check if this card has right arrows (which should be rendered in the right column)
  const hasRightArrows = (card.arrows || []).some(
    (a) => a.direction === "right",
  );

  // Use 50/50 layout if has right arrows
  const useTwoColumnLayout = hasRightArrows;

  // Calculate the span: find the card this should span to
  let spanToCardId: string | null = null;
  let shouldSpanVertically = false;

  if (hasSharedSideCards && isSpanStart) {
    // Use the last card in the span
    if (spanEndCard) {
      spanToCardId = spanEndCard.id;
      shouldSpanVertically = true;
    }
  }

  // Group arrows by direction
  const leftArrows = (card.arrows || []).filter(
    (a) => a.direction === "left",
  );

  // Collect all cards in the current horizontal row
  const allCardsInRow: CardData[] = [card];

  leftArrows.forEach((arrow) => {
    const targetCard = cardsById.get(arrow.targetCardId);
    if (targetCard) {
      allCardsInRow.push(targetCard);
    }
  });

  // Recursively collect all right arrow cards (excluding shared side cards for now)
  const collectRightCards = (sourceCard: CardData) => {
    const cardRightArrows = (sourceCard.arrows || []).filter(
      (a) => a.direction === "right",
    );
    cardRightArrows.forEach((arrow) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      if (targetCard) {
        // Don't add cards to allCardsInRow if we have spanning cards - they'll be rendered in the right column
        if (!hasSharedSideCards) {
          allCardsInRow.push(targetCard);
          collectRightCards(targetCard);
        }
      }
    });
  };

  collectRightCards(card);

  // Collect ALL down arrows from all cards in the horizontal row
  const allDownArrows: Array<{
    arrow: {
      direction: "down" | "left" | "right";
      targetCardId: string;
    };
    sourceCardId: string;
  }> = [];

  allCardsInRow.forEach((cardInRow) => {
    if (cardInRow.id) {
      // Only process if it's a real card (not a placeholder)
      const cardDownArrows =
        cardInRow.arrows?.filter(
          (a) => a.direction === "down",
        ) || [];
      cardDownArrows.forEach((arrow) => {
        const targetCard = cardsById.get(arrow.targetCardId);

        // If we're in spanning mode, skip down arrows to cards within the span
        if (shouldSpanVertically && targetCard) {
          const isTargetInSpan = cardsInSpan.some(
            (c) => c.id === targetCard.id,
          );
          if (isTargetInSpan && targetCard.id !== card.id) {
            return; // Skip arrows between cards in the same span
          }
        }

        allDownArrows.push({
          arrow,
          sourceCardId: cardInRow.id,
        });
      });
    }
  });

  // Count total cards in this row to determine if we need width constraints
  let totalCardsInRow = 1; // Start with main card
  totalCardsInRow += leftArrows.length; // Add left cards

  // Count right cards recursively
  const countRightCards = (sourceCard: CardData): number => {
    const cardRightArrows = (sourceCard.arrows || []).filter(
      (a) => a.direction === "right",
    );
    let count = 0;
    cardRightArrows.forEach((arrow) => {
      const targetCard = cardsById.get(arrow.targetCardId);
      if (targetCard) {
        count += 1;
        count += countRightCards(targetCard);
      }
    });
    return count;
  };
  totalCardsInRow += countRightCards(card);

  // DON'T add shared side cards to the count - they will span vertically and not affect this row's width

  // Build the horizontal row
  const renderHorizontalRow = () => {
    const elements: JSX.Element[] = [];

    const hasMultipleCards = totalCardsInRow > 1;

    // Left arrows and their cards
    leftArrows.forEach((arrow, idx) => {
      const targetCard = cardsById.get(arrow.targetCardId);

      if (targetCard) {
        // Cards take full width in their containers
        const cardWidthClass = "w-full";

        elements.push(
          <div
            key={`left-card-${idx}`}
            className={`${cardWidthClass} flex flex-col`}
          >
            <Card
              title={targetCard.title}
              badge={targetCard.badge}
              description={targetCard.description}
              icon={targetCard.icon}
              tags={targetCard.tags}
              list={targetCard.list}
              table={targetCard.table}
              stepper={targetCard.stepper}
              checkboxGroup={targetCard.checkboxGroup}
              accordion={targetCard.accordion}
              notifications={targetCard.notifications}
              buttons={targetCard.buttons}
              codeSnippet={targetCard.codeSnippet}
              tabs={targetCard.tabs}
              nestedcards={targetCard.nestedcards}
              sections={targetCard.sections}
              color={color}
              hugHeight={false}
            />
          </div>,
        );
      }

      elements.push(
        <div
          key={`left-arrow-${idx}`}
          className="flex items-center justify-center w-[24px] sm:w-[40px]"
        >
          <StaticArrow direction="left" />
        </div>,
      );
    });

    // Main card
    const mainCardWidthClass = "w-full";

    elements.push(
      <div
        key="main-card"
        className={`${mainCardWidthClass} flex flex-col`}
      >
        <Card
          title={card.title}
          badge={card.badge}
          description={card.description}
          icon={card.icon}
          tags={card.tags}
          list={card.list}
          table={card.table}
          stepper={card.stepper}
          checkboxGroup={card.checkboxGroup}
          accordion={card.accordion}
          notifications={card.notifications}
          buttons={card.buttons}
          codeSnippet={card.codeSnippet}
          tabs={card.tabs}
          nestedcards={card.nestedcards}
          sections={card.sections}
          color={color}
          hugHeight={false}
        />
      </div>,
    );

    // Right arrows - recursively collect all chained right cards
    const processRightArrows = (
      sourceCard: CardData,
      sourceCardId: string,
      startIdx: number = 0,
      depth: number = 0,
    ) => {
      // Skip processing right arrows if we're using two-column layout - they'll be rendered in the right column
      if (useTwoColumnLayout) {
        return;
      }

      const cardRightArrows = (sourceCard.arrows || []).filter(
        (a) => a.direction === "right",
      );

      cardRightArrows.forEach((arrow, idx) => {
        const targetCard = cardsById.get(arrow.targetCardId);

        // Only render arrow for the first right connection (depth 0), otherwise add margin
        if (depth === 0) {
          // Render the static arrow
          elements.push(
            <div
              key={`${sourceCardId}-right-arrow-${startIdx + idx}`}
              className="flex items-center justify-center w-[24px] sm:w-[40px]"
            >
              <StaticArrow direction="right" />
            </div>,
          );
        } else {
          // Add 4px gap instead of arrow
          elements.push(
            <div
              key={`${sourceCardId}-right-gap-${startIdx + idx}`}
              className="w-[4px]"
            />,
          );
        }

        // Render the card and process its right arrows recursively
        if (targetCard) {
          // Cards take full width in their containers
          const cardWidthClass = "w-full";

          elements.push(
            <div
              key={`${sourceCardId}-right-card-${startIdx + idx}`}
              className={`${cardWidthClass} flex flex-col`}
            >
              <Card
                title={targetCard.title}
                badge={targetCard.badge}
                description={targetCard.description}
                icon={targetCard.icon}
                tags={targetCard.tags}
                list={targetCard.list}
                table={targetCard.table}
                stepper={targetCard.stepper}
                checkboxGroup={targetCard.checkboxGroup}
                accordion={targetCard.accordion}
                notifications={targetCard.notifications}
                buttons={targetCard.buttons}
                codeSnippet={targetCard.codeSnippet}
                tabs={targetCard.tabs}
                nestedcards={targetCard.nestedcards}
                sections={targetCard.sections}
                color={color}
                hugHeight={false}
              />
            </div>,
          );

          // Recursively process this card's right arrows with increased depth
          processRightArrows(
            targetCard,
            targetCard.id,
            0,
            depth + 1,
          );
        }
      });
    };

    processRightArrows(card, card.id, 0, 0);

    // DON'T render shared side cards inline - they will be positioned absolutely to span rows

    return elements;
  };

  return (
    <div className={`w-full ${isLastCard ? "pb-[0px]" : ""}`}>
      {/* If we have spanning cards, use special grid layout */}
      {shouldSpanVertically && spanToCardId ? (
        <div className="flex flex-col w-full">
          {/* Flex layout for main cards + arrows + right column */}
          <div className="flex flex-row items-stretch w-full gap-0 overflow-x-auto">
            {/* Left: Main cards + Arrows combined */}
            <div className="flex flex-col gap-[24px] sm:gap-[40px] w-[90%] md:flex-1 shrink-0">
              {cardsInSpan.map((spanCard, index) => {
                const isLastInSpan =
                  index === cardsInSpan.length - 1;

                // Get shared cards info
                const sharedCardsGroup =
                  card.sideCardRef &&
                  sharedSideCards[card.sideCardRef]
                    ? sharedSideCards[card.sideCardRef]
                    : [];
                const sharedCardIds = new Set(
                  sharedCardsGroup.map((sc) => sc.id),
                );

                // Check if this specific card has right arrows to shared cards
                const rightArrows = (
                  spanCard.arrows || []
                ).filter((a) => a.direction === "right");
                const hasArrowToShared = rightArrows.some(
                  (arrow) => {
                    const targetCard = cardsById.get(
                      arrow.targetCardId,
                    );
                    return (
                      targetCard &&
                      sharedCardIds.has(targetCard.id)
                    );
                  },
                );

                // Check if THIS SPECIFIC card has side cards (pointing to non-shared cards)
                const thisCardHasSideCards = rightArrows.some(
                  (arrow) => {
                    const targetCard = cardsById.get(
                      arrow.targetCardId,
                    );
                    return (
                      targetCard &&
                      !sharedCardIds.has(targetCard.id)
                    );
                  },
                );

                // Show arrow if shared cards exist
                const showArrowToShared =
                  sharedCardsGroup.length > 0;

                // Determine arrow alignment for THIS card based on whether IT has side cards
                let arrowAlignment = "items-center"; // default: center when no sidecards
                if (showArrowToShared && thisCardHasSideCards) {
                  // When THIS card HAS side cards: align arrow to bottom
                  arrowAlignment = "items-end";
                }

                return (
                  <div
                    key={spanCard.id}
                    className={`flex flex-row gap-0 ${isLastInSpan ? "flex-1 min-h-0" : ""}`}
                  >
                    {/* Card */}
                    <div className="flex-1">
                      <Card
                        title={spanCard.title}
                        badge={spanCard.badge}
                        description={spanCard.description}
                        icon={spanCard.icon}
                        tags={spanCard.tags}
                        list={spanCard.list}
                        table={spanCard.table}
                        stepper={spanCard.stepper}
                        checkboxGroup={spanCard.checkboxGroup}
                        accordion={spanCard.accordion}
                        notifications={spanCard.notifications}
                        buttons={spanCard.buttons}
                        codeSnippet={spanCard.codeSnippet}
                        tabs={spanCard.tabs}
                        nestedcards={spanCard.nestedcards}
                        sections={spanCard.sections}
                        color={color}
                        hugHeight={!isLastInSpan}
                      />
                    </div>

                    {/* Arrow - shares height with card */}
                    <div
                      className={`flex ${arrowAlignment} justify-center w-[24px] sm:w-[40px] shrink-0`}
                    >
                      {showArrowToShared && (
                        <StaticArrow direction="right" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right column: Side cards + Shared cards */}
            <div className="flex flex-col w-[90%] md:flex-1 min-w-[90%] md:min-w-0 shrink-0 relative">
              {(() => {
                const elements: JSX.Element[] = [];

                // Get shared cards
                const sharedCardsGroup =
                  card.sideCardRef &&
                  sharedSideCards[card.sideCardRef]
                    ? sharedSideCards[card.sideCardRef]
                    : [];
                const sharedCardIds = new Set(
                  sharedCardsGroup.map((sc) => sc.id),
                );

                // Collect all right arrow cards, distinguishing side cards from shared cards
                const sideCards: Array<{
                  card: CardData;
                  sourceIndex: number;
                }> = [];
                cardsInSpan.forEach((spanCard, index) => {
                  const rightArrows = (
                    spanCard.arrows || []
                  ).filter((a) => a.direction === "right");
                  rightArrows.forEach((arrow) => {
                    const targetCard = cardsById.get(
                      arrow.targetCardId,
                    );
                    // Only include if it's NOT a shared card
                    if (
                      targetCard &&
                      !sharedCardIds.has(targetCard.id)
                    ) {
                      sideCards.push({
                        card: targetCard,
                        sourceIndex: index,
                      });
                    }
                  });
                });

                // Calculate card counts for adaptivity
                const topSideCardCount = sideCards.filter(sc => sc.sourceIndex === 0).length;
                const bottomSideCardCount = sideCards.filter(sc => sc.sourceIndex > 0).length;
                const sharedCardCount = sharedCardsGroup.length;

                // Determine width classes based on adaptivity rules
                let topSideCardWidthClass = "flex-1";
                let sharedCardContainerWidthClass = "flex-1";

                // Top side card vs shared cards adaptivity
                if (topSideCardCount === 1 && sharedCardCount === 2) {
                  topSideCardWidthClass = "w-full";
                } else if (topSideCardCount === 1 && sharedCardCount === 1) {
                  topSideCardWidthClass = "flex-1";
                  sharedCardContainerWidthClass = "flex-1";
                }

                // If shared cards need to adapt to match bottom side cards
                if (sharedCardCount === 1 && bottomSideCardCount === 2) {
                  sharedCardContainerWidthClass = "w-full";
                }

                // Render side card at top (if first card has a right arrow to a non-shared card)
                const topSideCard = sideCards.find(
                  (sc) => sc.sourceIndex === 0,
                );
                if (topSideCard) {
                  elements.push(
                    <div
                      key={`side-wrapper-${topSideCard.card.id}`}
                      className="flex flex-row gap-0 w-full"
                    >
                      {/* Arrow for side card - centered to side card height */}
                      <div className="w-[24px] sm:w-[40px] -ml-[24px] sm:-ml-[40px] flex items-center justify-center shrink-0">
                        <StaticArrow direction="right" />
                      </div>
                      <div className={topSideCardWidthClass}>
                        <Card
                          title={topSideCard.card.title}
                          badge={topSideCard.card.badge}
                          description={
                            topSideCard.card.description
                          }
                          icon={topSideCard.card.icon}
                          tags={topSideCard.card.tags}
                          list={topSideCard.card.list}
                          table={topSideCard.card.table}
                          stepper={topSideCard.card.stepper}
                          checkboxGroup={
                            topSideCard.card.checkboxGroup
                          }
                          accordion={topSideCard.card.accordion}
                          notifications={
                            topSideCard.card.notifications
                          }
                          buttons={topSideCard.card.buttons}
                          codeSnippet={
                            topSideCard.card.codeSnippet
                          }
                          tabs={topSideCard.card.tabs}
                          nestedcards={
                            topSideCard.card.nestedcards
                          }
                          sections={topSideCard.card.sections}
                          color={color}
                          hugHeight={false}
                        />
                      </div>
                    </div>,
                  );
                }

                // Add gap if we have top side card
                if (topSideCard) {
                  elements.push(
                    <div
                      key="gap-top"
                      className="h-[40px] shrink-0"
                    />,
                  );
                }

                // Render shared cards container (fills remaining space, cards inside split horizontally)
                if (sharedCardsGroup.length > 0) {
                  elements.push(
                    <div
                      key="shared-cards"
                      className={`flex flex-row gap-[4px] ${sharedCardContainerWidthClass} h-full min-h-0 min-w-[90%] md:min-w-0`}
                    >
                      {sharedCardsGroup.map((sharedCard) => (
                        <div
                          key={`shared-${sharedCard.id}`}
                          className="flex-1 h-full min-w-[90%] md:min-w-0"
                        >
                          <Card
                            title={sharedCard.title}
                            badge={sharedCard.badge}
                            description={sharedCard.description}
                            icon={sharedCard.icon}
                            tags={sharedCard.tags}
                            list={sharedCard.list}
                            table={sharedCard.table}
                            stepper={sharedCard.stepper}
                            checkboxGroup={
                              sharedCard.checkboxGroup
                            }
                            accordion={sharedCard.accordion}
                            notifications={
                              sharedCard.notifications
                            }
                            buttons={sharedCard.buttons}
                            color={color}
                            hugHeight={false}
                          />
                        </div>
                      ))}
                    </div>,
                  );
                }

                // Check for bottom side cards (from cards other than first)
                const bottomSideCards = sideCards.filter(
                  (sc) => sc.sourceIndex > 0,
                );
                if (bottomSideCards.length > 0) {
                  elements.push(
                    <div
                      key="gap-bottom"
                      className="h-[40px] shrink-0"
                    />,
                  );

                  // If we have 2 bottom cards and need to match 1 shared card above, render them side by side
                  if (bottomSideCardCount === 2 && sharedCardCount === 1) {
                    elements.push(
                      <div
                        key="bottom-side-cards-container"
                        className="flex flex-row gap-[4px] w-full"
                      >
                        {bottomSideCards.map((bottomSideCard, idx) => (
                          <div
                            key={`side-wrapper-bottom-${bottomSideCard.card.id}`}
                            className="flex flex-row gap-0 flex-1"
                          >
                            {/* Arrow for side card - centered to side card height */}
                            <div className="w-[24px] sm:w-[40px] -ml-[24px] sm:-ml-[40px] flex items-center justify-center shrink-0">
                              <StaticArrow direction="right" />
                            </div>
                            <div className="flex-1">
                              <Card
                                title={bottomSideCard.card.title}
                                badge={bottomSideCard.card.badge}
                                description={
                                  bottomSideCard.card.description
                                }
                                icon={bottomSideCard.card.icon}
                                tags={bottomSideCard.card.tags}
                                list={bottomSideCard.card.list}
                                table={bottomSideCard.card.table}
                                stepper={
                                  bottomSideCard.card.stepper
                                }
                                checkboxGroup={
                                  bottomSideCard.card
                                    .checkboxGroup
                                }
                                accordion={
                                  bottomSideCard.card.accordion
                                }
                                notifications={
                                  bottomSideCard.card
                                    .notifications
                                }
                                buttons={
                                  bottomSideCard.card.buttons
                                }
                                codeSnippet={
                                  bottomSideCard.card.codeSnippet
                                }
                                tabs={bottomSideCard.card.tabs}
                                nestedcards={
                                  bottomSideCard.card.nestedcards
                                }
                                sections={
                                  bottomSideCard.card.sections
                                }
                                color={color}
                                hugHeight={false}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  } else {
                    // Default rendering for bottom side cards (stacked vertically)
                    bottomSideCards.forEach(
                      (bottomSideCard, idx) => {
                        elements.push(
                          <div
                            key={`side-wrapper-bottom-${bottomSideCard.card.id}`}
                            className="flex flex-row gap-0 w-full"
                          >
                            {/* Arrow for side card - centered to side card height */}
                            <div className="w-[24px] sm:w-[40px] -ml-[24px] sm:-ml-[40px] flex items-center justify-center shrink-0">
                              <StaticArrow direction="right" />
                            </div>
                            <div className="flex-1">
                            <Card
                              title={bottomSideCard.card.title}
                              badge={bottomSideCard.card.badge}
                              description={
                                bottomSideCard.card.description
                              }
                              icon={bottomSideCard.card.icon}
                              tags={bottomSideCard.card.tags}
                              list={bottomSideCard.card.list}
                              table={bottomSideCard.card.table}
                              stepper={
                                bottomSideCard.card.stepper
                              }
                              checkboxGroup={
                                bottomSideCard.card
                                  .checkboxGroup
                              }
                              accordion={
                                bottomSideCard.card.accordion
                              }
                              notifications={
                                bottomSideCard.card
                                  .notifications
                              }
                              buttons={
                                bottomSideCard.card.buttons
                              }
                              codeSnippet={
                                bottomSideCard.card.codeSnippet
                              }
                              tabs={bottomSideCard.card.tabs}
                              nestedcards={
                                bottomSideCard.card.nestedcards
                              }
                              sections={
                                bottomSideCard.card.sections
                              }
                              color={color}
                              hugHeight={false}
                            />
                          </div>
                        </div>,
                      );
                    },
                  );
                  }
                }

                return elements;
              })()}
            </div>
          </div>

          {/* Continue with Card 3's down arrows if any */}
          {(() => {
            const targetCard = cardsById.get(spanToCardId!);
            if (!targetCard) return null;

            const card3DownArrows = (
              targetCard.arrows || []
            ).filter((a) => a.direction === "down");

            return card3DownArrows.map((arrow, index) => {
              const nextCard = cardsById.get(
                arrow.targetCardId,
              );
              if (!nextCard) return null;

              // Card3 is in a spanning grid layout, so it only uses 50% width (column 1 of the 3-column grid)
              // Therefore, the down arrow from card3 should always align with the narrower card3 width
              const card3IsHalfWidth = true; // Card3 is in column 1 of the grid

              // Check if next card (below) has right arrows
              const nextCardHasRightArrows = (
                nextCard.arrows || []
              ).some((a) => a.direction === "right");

              // Use narrower width if card3 is half-width OR if next card uses two-column layout
              const useNarrowWidth =
                card3IsHalfWidth || nextCardHasRightArrows;

              return (
                <div
                  key={`card3-down-${index}`}
                  className="flex flex-col w-full"
                >
                  {/* Arrow container - adjust width based on adjacent cards */}
                  {useNarrowWidth ? (
                    <div className="flex flex-row w-full gap-[24px] sm:gap-[40px]">
                      <div className="flex justify-center w-1/2">
                        <StaticArrow direction="down" />
                      </div>
                      <div className="w-1/2" />
                    </div>
                  ) : (
                    <div className="flex justify-center w-full">
                      <StaticArrow direction="down" />
                    </div>
                  )}
                  <CardWithArrows
                    card={nextCard}
                    cardsById={cardsById}
                    isLastCard={false}
                    color={color}
                    sharedSideCards={sharedSideCards}
                  />
                </div>
              );
            });
          })()}
        </div>
      ) : (
        <div className="flex flex-col items-stretch w-full">
          {/* Main row cards */}
          {useTwoColumnLayout ? (
            /* Two-column layout for cards with right arrows - supports multiple arrows at different vertical positions */
            (() => {
              // Group right arrows by rowIndex
              const rightArrows = (card.arrows || []).filter(
                (a) => a.direction === "right",
              );

              // Group arrows by rowIndex (default to sequential if no rowIndex specified)
              const arrowsByRow = new Map<
                number,
                typeof rightArrows
              >();
              rightArrows.forEach((arrow, index) => {
                const rowIdx =
                  arrow.rowIndex !== undefined
                    ? arrow.rowIndex
                    : index;
                if (!arrowsByRow.has(rowIdx)) {
                  arrowsByRow.set(rowIdx, []);
                }
                arrowsByRow.get(rowIdx)!.push(arrow);
              });

              const numRows = arrowsByRow.size;

              // Build sidecard rows
              const rowIndices = Array.from(
                arrowsByRow.keys(),
              ).sort((a, b) => a - b);

              // Calculate card counts per row for adaptivity
              const cardCountsByRow = new Map<number, number>();
              rowIndices.forEach((rowIdx) => {
                const arrows = arrowsByRow.get(rowIdx)!;
                let cardCount = 0;
                arrows.forEach((arrow) => {
                  const targetCard = cardsById.get(arrow.targetCardId);
                  if (targetCard) {
                    cardCount++;
                    // Count chained cards
                    const processChain = (card: CardData) => {
                      const rightArrows = (card.arrows || []).filter(
                        (a) => a.direction === "right",
                      );
                      rightArrows.forEach((rightArrow) => {
                        const chainedCard = cardsById.get(
                          rightArrow.targetCardId,
                        );
                        if (chainedCard) {
                          cardCount++;
                          processChain(chainedCard);
                        }
                      });
                    };
                    processChain(targetCard);
                  }
                });
                cardCountsByRow.set(rowIdx, cardCount);
              });

              return (
                <div className="flex flex-row items-stretch w-full gap-0 overflow-x-auto">
                  {/* Left: Main card */}
                  <div className="flex flex-row items-stretch w-[90%] md:flex-1 shrink-0">
                    {renderHorizontalRow()}
                  </div>

                  {/* Middle: Arrow column */}
                  <div className="flex flex-col justify-center w-[24px] sm:w-[40px] shrink-0">
                    <StaticArrow direction="right" />
                  </div>

                  {/* Right: Sidecard rows column */}
                  <div className="flex flex-col w-[90%] md:flex-1 min-w-[90%] md:min-w-0 shrink-0 gap-[24px] sm:gap-[40px]">
                    {rowIndices.map((rowIdx) => {
                      const arrows = arrowsByRow.get(rowIdx)!;

                      // Get all target cards for this row and process chained arrows
                      const allCardsInRow: CardData[] = [];
                      arrows.forEach((arrow) => {
                        const targetCard = cardsById.get(
                          arrow.targetCardId,
                        );
                        if (targetCard) {
                          allCardsInRow.push(targetCard);

                          // Recursively collect chained right arrows
                          const processChain = (
                            card: CardData,
                          ) => {
                            const rightArrows = (
                              card.arrows || []
                            ).filter(
                              (a) => a.direction === "right",
                            );
                            rightArrows.forEach(
                              (rightArrow) => {
                                const chainedCard =
                                  cardsById.get(
                                    rightArrow.targetCardId,
                                  );
                                if (chainedCard) {
                                  allCardsInRow.push(
                                    chainedCard,
                                  );
                                  processChain(chainedCard);
                                }
                              },
                            );
                          };
                          processChain(targetCard);
                        }
                      });

                      // Determine adaptive width for this row
                      const thisRowCardCount = cardCountsByRow.get(rowIdx) || 1;
                      const otherRowCardCounts = Array.from(cardCountsByRow.values()).filter((count, idx) => 
                        rowIndices[idx] !== rowIdx
                      );
                      
                      // Check if this row needs to adapt (1 card vs 2 cards in another row)
                      let rowWidthClass = "flex-1";
                      if (thisRowCardCount === 1 && otherRowCardCounts.some(count => count === 2)) {
                        rowWidthClass = "w-full";
                      } else if (thisRowCardCount === 2 && otherRowCardCounts.some(count => count === 1)) {
                        // 2 cards should split evenly
                        rowWidthClass = "flex-1";
                      }

                      return (
                        <div
                          key={`row-${rowIdx}`}
                          className={`flex ${rowWidthClass} flex-row items-stretch gap-[4px]`}
                        >
                          {allCardsInRow.map((targetCard) => (
                            <div
                              key={targetCard.id}
                              className="flex-1 flex flex-col"
                            >
                              <Card
                                title={targetCard.title}
                                badge={targetCard.badge}
                                description={
                                  targetCard.description
                                }
                                icon={targetCard.icon}
                                tags={targetCard.tags}
                                list={targetCard.list}
                                table={targetCard.table}
                                stepper={targetCard.stepper}
                                checkboxGroup={
                                  targetCard.checkboxGroup
                                }
                                accordion={targetCard.accordion}
                                notifications={
                                  targetCard.notifications
                                }
                                buttons={targetCard.buttons}
                                codeSnippet={
                                  targetCard.codeSnippet
                                }
                                tabs={targetCard.tabs}
                                nestedcards={
                                  targetCard.nestedcards
                                }
                                sections={targetCard.sections}
                                color={color}
                                hugHeight={false}
                              />
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()
          ) : (
            /* Standard full-width layout for cards without right arrows */
            <div className="flex flex-row items-stretch w-full">
              {renderHorizontalRow()}
            </div>
          )}
        </div>
      )}

      {/* Down arrows and their target cards */}
      {allDownArrows.map((item, index) => {
        const targetCard = cardsById.get(
          item.arrow.targetCardId,
        );

        // Count cards in THIS specific target card's row (not all down arrows combined)
        let targetRowCardCount = 0;

        if (targetCard) {
          // Count this card
          targetRowCardCount = 1;

          // Count its left arrows
          const targetLeftArrows = (
            targetCard.arrows || []
          ).filter((a) => a.direction === "left");
          targetRowCardCount += targetLeftArrows.length;

          // Count its right arrows recursively
          const countTargetRightCards = (
            sourceCard: CardData,
          ): number => {
            const cardRightArrows = (
              sourceCard.arrows || []
            ).filter((a) => a.direction === "right");
            let count = 0;
            cardRightArrows.forEach((arrow) => {
              const rightCard = cardsById.get(
                arrow.targetCardId,
              );
              if (rightCard) {
                count += 1;
                count += countTargetRightCards(rightCard);
              }
            });
            return count;
          };
          targetRowCardCount +=
            countTargetRightCards(targetCard);
        }

        // Check if source card (the card above the arrow) has right arrows (uses two-column layout)
        const sourceCard = cardsById.get(item.sourceCardId);
        const sourceHasRightArrows = (
          sourceCard?.arrows || []
        ).some((a) => a.direction === "right");

        // Check if target card (the card below the arrow) has right arrows (uses two-column layout)
        const targetHasRightArrows = (
          targetCard?.arrows || []
        ).some((a) => a.direction === "right");

        // Use narrower width if either card above or below uses two-column layout
        const useNarrowWidth =
          sourceHasRightArrows || targetHasRightArrows;

        return (
          <div
            key={`down-${item.sourceCardId}-${index}`}
            className="flex flex-col w-full"
          >
            {/* Arrow container - adjust width based on adjacent cards */}
            {useNarrowWidth ? (
              <div className="flex flex-row w-full gap-[24px] sm:gap-[40px]">
                <div className="flex justify-center w-1/2">
                  <StaticArrow direction="down" />
                </div>
                <div className="w-1/2" />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <StaticArrow direction="down" />
              </div>
            )}

            {targetCard && (
              <CardWithArrows
                card={targetCard}
                cardsById={cardsById}
                isLastCard={false}
                color={color}
                sharedSideCards={sharedSideCards}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

interface RequestCardProps {
  jsonUrl: string;
  onWorkflowDataLoaded?: (workflow: WorkflowData) => void;
  themeColor?: string;
}

export function RequestCard({
  jsonUrl,
  onWorkflowDataLoaded,
  themeColor = "#7a23d9",
}: RequestCardProps) {
  const [cardsData, setCardsData] = useState<CardsData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(jsonUrl, {
          cache: "reload",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch cards: ${response.status} ${response.statusText}`,
          );
        }

        const text = await response.text();

        let data;
        if (
          jsonUrl.endsWith(".yaml") ||
          jsonUrl.endsWith(".yml")
        ) {
          // Parse YAML - returns JS object
          data = yaml.load(text) as CardsData;
        } else {
          // Parse JSON - returns JS object
          data = JSON.parse(text) as CardsData;
        }

        // Validate that we have the expected structure
        if (
          !data ||
          !data.cards ||
          !Array.isArray(data.cards)
        ) {
          throw new Error(
            "Invalid data structure: missing 'cards' array",
          );
        }

        setCardsData(data);

        // Notify parent of workflow data
        if (data && data.workflow && onWorkflowDataLoaded) {
          onWorkflowDataLoaded(data.workflow);
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to load cards";
        setError(errorMessage);
        console.error("Error fetching cards:", err);
        console.error("URL attempted:", jsonUrl);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, [jsonUrl, onWorkflowDataLoaded]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loading size={40} color={themeColor} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pb-[64px] flex flex-col items-center justify-center py-12 gap-4">
        <div className="text-red-600 font-['IBM_Plex_Sans:SemiBold',sans-serif] text-lg">
          Failed to Load Workflow
        </div>
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif] text-sm max-w-[600px] text-center">
          {error.includes("indentation") ||
          error.includes("YAML")
            ? "The workflow file has formatting errors. Please check the YAML file for proper indentation."
            : error}
        </div>
      </div>
    );
  }

  if (
    !cardsData ||
    !cardsData.cards ||
    cardsData.cards.length === 0
  ) {
    return (
      <div className="pb-[64px] flex items-center justify-center py-12">
        <div className="text-neutral-600 font-['IBM_Plex_Sans:Regular',sans-serif]">
          No cards data available
        </div>
      </div>
    );
  }

  const cardsById = new Map<string, CardData>();
  cardsData.cards.forEach((card) =>
    cardsById.set(card.id, card),
  );

  return (
    <div>
      <CardWithArrows
        card={cardsData.cards[0]}
        cardsById={cardsById}
        isLastCard={true}
        color={themeColor}
        sharedSideCards={cardsData.sharedSideCards}
      />
    </div>
  );
}