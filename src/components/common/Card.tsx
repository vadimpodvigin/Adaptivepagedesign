import React from 'react';
import { Tag } from './Tag';
import { List } from './List';
import { Table } from './Table';
import { Stepper } from './Stepper';
import { Checkbox } from './Checkbox';
import { Accordion } from './Accordion';
import { Notifications } from './Notifications';
import { Button } from './Button';
import { CodeSnippet } from './CodeSnippet';
import { Tabs } from './Tabs';
import Network from '../imports/Network';

interface CardProps {
  title?: string;
  badge?: string;
  description?: string;
  icon?: string;
  tags?: Array<{ label: string; color?: string }>;
  list?: {
    ordered?: boolean;
    items: Array<{
      text: string;
      nested?: {
        ordered?: boolean;
        items: string[];
      };
    }>;
  };
  table?: {
    headers: string[];
    rows: Array<Record<string, string | number>>;
  };
  stepper?: {
    currentStep: number;
    steps: Array<{
      label: string;
      description?: string;
      status?: 'complete' | 'current' | 'incomplete' | 'error';
    }>;
    orientation?: 'vertical' | 'horizontal';
  };
  checkboxGroup?: {
    legend?: string;
    options: Array<{
      id: string;
      label: string;
      checked?: boolean;
    }>;
  };
  accordion?: {
    items: Array<{
      title: string;
      content: string;
    }>;
  };
  notifications?: Array<{
    kind: 'error' | 'info' | 'info-square' | 'success' | 'warning' | 'warning-alt';
    title: string;
    subtitle?: string;
    caption?: string;
    hideCloseButton?: boolean;
    lowContrast?: boolean;
  }>;
  buttons?: Array<{
    label: string;
    kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    disabled?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right';
  }>;
  codeSnippet?: {
    code: string;
    type?: 'single' | 'multi';
    language?: string;
    showMoreText?: string;
    showLessText?: string;
    wrapText?: boolean;
  };
  tabs?: {
    tabs: Array<{
      label: string;
      content: string;
    }>;
  };
  nestedcards?: {
    cards: any[];
  };
  sections?: Array<{
    title?: string;
    content?: string;
    tags?: Array<{ label: string; color?: string }>;
    list?: {
      ordered?: boolean;
      items: Array<{
        text: string;
        nested?: {
          ordered?: boolean;
          items: string[];
        };
      }>;
    };
    table?: {
      headers: string[];
      rows: Array<Record<string, string | number>>;
    };
    stepper?: {
      currentStep: number;
      steps: Array<{
        label: string;
        description?: string;
        status?: 'complete' | 'current' | 'incomplete' | 'error';
      }>;
      orientation?: 'vertical' | 'horizontal';
    };
    checkboxGroup?: {
      legend?: string;
      options: Array<{
        id: string;
        label: string;
        checked?: boolean;
      }>;
    };
    accordion?: {
      items: Array<{
        title: string;
        content: string;
      }>;
    };
    notifications?: Array<{
      kind: 'error' | 'info' | 'info-square' | 'success' | 'warning' | 'warning-alt';
      title: string;
      subtitle?: string;
      caption?: string;
      hideCloseButton?: boolean;
      lowContrast?: boolean;
    }>;
    buttons?: Array<{
      label: string;
      kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger--tertiary' | 'danger--ghost';
      size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
      disabled?: boolean;
      icon?: string;
      iconPosition?: 'left' | 'right';
    }>;
    codeSnippet?: {
      code: string;
      type?: 'single' | 'multi';
      language?: string;
      showMoreText?: string;
      showLessText?: string;
      wrapText?: boolean;
    };
    tabs?: {
      tabs: Array<{
        label: string;
        content: string;
      }>;
    };
    nestedcards?: {
      cards: any[];
    };
  }>;
  color: { bg: string; text: string; border: string };
  hugHeight?: boolean;
}

export const Card: React.FC<CardProps> = ({
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
  color,
  hugHeight = true,
}) => {
  return (
    <div
      className={`bg-white rounded-[8px] border-l-[3px] p-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] ${!hugHeight ? 'h-full' : ''}`}
      style={{ borderLeftColor: color.border }}
    >
      {/* Header with icon, title, and badge */}
      {(title || badge) && (
        <div className="flex items-start gap-[8px] mb-[12px]">
          {icon && (
            <div className="flex-shrink-0 mt-[2px]">
              <Network icon={icon} iconColor={color.text} className="w-[20px] h-[20px]" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {title && (
              <h3 className="text-[16px] font-[IBM_Plex_Sans] text-[#161616] break-words">
                {title}
              </h3>
            )}
          </div>
          {badge && (
            <div
              className="flex-shrink-0 px-[8px] py-[2px] rounded-[12px] text-[12px] font-[IBM_Plex_Sans]"
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-[14px] font-[IBM_Plex_Sans] text-[#525252] mb-[12px] whitespace-pre-wrap">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-[8px] mb-[12px]">
          {tags.map((tag, index) => (
            <Tag key={index} label={tag.label} color={tag.color} />
          ))}
        </div>
      )}

      {/* List */}
      {list && <List items={list.items} ordered={list.ordered} className="mb-[12px]" />}

      {/* Table */}
      {table && <Table headers={table.headers} rows={table.rows} className="mb-[12px]" />}

      {/* Stepper */}
      {stepper && (
        <Stepper
          currentStep={stepper.currentStep}
          steps={stepper.steps}
          orientation={stepper.orientation}
          className="mb-[12px]"
        />
      )}

      {/* Checkbox Group */}
      {checkboxGroup && (
        <div className="mb-[12px]">
          {checkboxGroup.legend && (
            <legend className="text-[14px] font-[IBM_Plex_Sans] text-[#161616] mb-[8px]">
              {checkboxGroup.legend}
            </legend>
          )}
          <div className="flex flex-col gap-[8px]">
            {checkboxGroup.options.map((option) => (
              <Checkbox
                key={option.id}
                id={option.id}
                label={option.label}
                checked={option.checked || false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Accordion */}
      {accordion && <Accordion items={accordion.items} className="mb-[12px]" />}

      {/* Notifications */}
      {notifications && notifications.length > 0 && (
        <Notifications notifications={notifications} className="mb-[12px]" />
      )}

      {/* Buttons */}
      {buttons && buttons.length > 0 && (
        <div className="flex flex-wrap gap-[8px] mb-[12px]">
          {buttons.map((button, index) => (
            <Button
              key={index}
              kind={button.kind}
              size={button.size}
              disabled={button.disabled}
              icon={button.icon}
              iconPosition={button.iconPosition}
            >
              {button.label}
            </Button>
          ))}
        </div>
      )}

      {/* Code Snippet */}
      {codeSnippet && (
        <CodeSnippet
          code={codeSnippet.code}
          type={codeSnippet.type}
          language={codeSnippet.language}
          showMoreText={codeSnippet.showMoreText}
          showLessText={codeSnippet.showLessText}
          wrapText={codeSnippet.wrapText}
          className="mb-[12px]"
        />
      )}

      {/* Tabs */}
      {tabs && <Tabs tabs={tabs.tabs} className="mb-[12px]" />}

      {/* Nested Cards */}
      {nestedcards && nestedcards.cards && nestedcards.cards.length > 0 && (
        <div className="flex flex-col gap-[12px] mb-[12px]">
          {nestedcards.cards.map((nestedCard: any, index: number) => (
            <Card key={index} {...nestedCard} color={color} hugHeight={false} />
          ))}
        </div>
      )}

      {/* Sections */}
      {sections && sections.length > 0 && (
        <div className="flex flex-col gap-[16px]">
          {sections.map((section, index) => (
            <div key={index} className="border-t border-[#E0E0E0] pt-[12px] first:border-t-0 first:pt-0">
              {section.title && (
                <h4 className="text-[14px] font-[IBM_Plex_Sans] text-[#161616] mb-[8px]">
                  {section.title}
                </h4>
              )}
              {section.content && (
                <p className="text-[14px] font-[IBM_Plex_Sans] text-[#525252] mb-[8px]">
                  {section.content}
                </p>
              )}
              {section.tags && section.tags.length > 0 && (
                <div className="flex flex-wrap gap-[8px] mb-[8px]">
                  {section.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} label={tag.label} color={tag.color} />
                  ))}
                </div>
              )}
              {section.list && <List items={section.list.items} ordered={section.list.ordered} className="mb-[8px]" />}
              {section.table && <Table headers={section.table.headers} rows={section.table.rows} className="mb-[8px]" />}
              {section.stepper && (
                <Stepper
                  currentStep={section.stepper.currentStep}
                  steps={section.stepper.steps}
                  orientation={section.stepper.orientation}
                  className="mb-[8px]"
                />
              )}
              {section.checkboxGroup && (
                <div className="mb-[8px]">
                  {section.checkboxGroup.legend && (
                    <legend className="text-[14px] font-[IBM_Plex_Sans] text-[#161616] mb-[8px]">
                      {section.checkboxGroup.legend}
                    </legend>
                  )}
                  <div className="flex flex-col gap-[8px]">
                    {section.checkboxGroup.options.map((option) => (
                      <Checkbox
                        key={option.id}
                        id={option.id}
                        label={option.label}
                        checked={option.checked || false}
                      />
                    ))}
                  </div>
                </div>
              )}
              {section.accordion && <Accordion items={section.accordion.items} className="mb-[8px]" />}
              {section.notifications && section.notifications.length > 0 && (
                <Notifications notifications={section.notifications} className="mb-[8px]" />
              )}
              {section.buttons && section.buttons.length > 0 && (
                <div className="flex flex-wrap gap-[8px] mb-[8px]">
                  {section.buttons.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      kind={button.kind}
                      size={button.size}
                      disabled={button.disabled}
                      icon={button.icon}
                      iconPosition={button.iconPosition}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              )}
              {section.codeSnippet && (
                <CodeSnippet
                  code={section.codeSnippet.code}
                  type={section.codeSnippet.type}
                  language={section.codeSnippet.language}
                  showMoreText={section.codeSnippet.showMoreText}
                  showLessText={section.codeSnippet.showLessText}
                  wrapText={section.codeSnippet.wrapText}
                  className="mb-[8px]"
                />
              )}
              {section.tabs && <Tabs tabs={section.tabs.tabs} className="mb-[8px]" />}
              {section.nestedcards && section.nestedcards.cards && section.nestedcards.cards.length > 0 && (
                <div className="flex flex-col gap-[12px] mb-[8px]">
                  {section.nestedcards.cards.map((nestedCard: any, nestedIndex: number) => (
                    <Card key={nestedIndex} {...nestedCard} color={color} hugHeight={false} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};