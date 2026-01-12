import { ListItem } from "../components/content/List";
import { Step, StepDirection } from "../components/content/Stepper";
import { CheckboxItem } from "../components/content/Checkbox";
import { AccordionItem } from "../components/content/Accordion";
import { NotificationProps } from "../components/content/Notification";
import { TabItem } from "../components/content/Tabs";

export interface CardData {
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
  notifications?: NotificationProps[];
  sideCardRef?: string;
  sideCardSpanEnd?: string;
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
    }>;
  };
  arrows?: Array<{
    direction: "down" | "left" | "right" | "up";
    targetCardId: string;
    rowIndex?: number;
  }>;
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
  codeSnippet?: {
    code: string;
    caption?: string;
  };
  tabs?: TabItem[];
  nestedcards?: Array<{
    title: string;
    subtext?: string;
  }>;
  arrows?: Array<{
    direction: "down" | "left" | "right" | "up";
    targetCardId: string;
    rowIndex?: number;
  }>;
}

export interface CardsData {
  workflow: import("./workflow").WorkflowData;
  cards: CardData[];
  sharedSideCards?: Record<string, SharedSideCard[]>;
}

