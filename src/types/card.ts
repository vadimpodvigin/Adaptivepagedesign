// Card-related type definitions

export interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
}

export interface NestedField {
  title?: string;
  description?: string;
  code?: string;
  checkboxes?: CheckboxItem[];
}

export interface CardField {
  title: string;
  description?: string;
  code?: string;
  checkboxes?: CheckboxItem[];
  nested?: NestedField[];
}

export interface CardData {
  title: string;
  description?: string;
  fields?: CardField[];
  code?: string;
  checkboxes?: CheckboxItem[];
}

export interface SideCardData {
  title: string;
  description?: string;
  code?: string;
  checkboxes?: CheckboxItem[];
}

export interface ClassicCardData {
  title: string;
  description?: string;
  code?: string;
  checkboxes?: CheckboxItem[];
  fields?: CardField[];
}

export interface MotherCardData {
  classic?: ClassicCardData;
  side?: SideCardData[];
}

export interface StepData {
  label?: string;
  title?: string;
  description?: string;
  mother?: MotherCardData[];
  cards?: CardData[];
}

export interface WorkflowData {
  name: string;
  category?: string;
  title?: string;
  description?: string;
  steps: StepData[];
}
