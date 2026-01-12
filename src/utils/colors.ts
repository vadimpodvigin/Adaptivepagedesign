// Color utility functions

import { WorkflowMetadata } from '../types';

export const COLOR_LIST = [
  '#7A23D9', // Purple - Default/Non-workflow pages
  '#3BAB5A', // Green
  '#4589FF', // Blue
  '#FF9D00', // Orange
  '#FF0000', // Red
];

export const DEFAULT_COLOR = '#7A23D9'; // Purple

export function getCategoryColor(category: string, allWorkflows: WorkflowMetadata[]): string {
  const categories = Array.from(
    new Set(allWorkflows.map((w) => w.category))
  );
  const categoryIndex = categories.indexOf(category);
  return categoryIndex >= 0
    ? COLOR_LIST[categoryIndex % COLOR_LIST.length]
    : DEFAULT_COLOR;
}
