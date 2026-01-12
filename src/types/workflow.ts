export interface WorkflowData {
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface WorkflowMetadata extends WorkflowData {
  url: string;
  name: string;
}

