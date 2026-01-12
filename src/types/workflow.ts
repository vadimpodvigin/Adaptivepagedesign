// Workflow-related type definitions

import { WorkflowData } from './card';

export interface WorkflowMetadata extends WorkflowData {
  url: string;
  name: string; // Used as the key/identifier
}
