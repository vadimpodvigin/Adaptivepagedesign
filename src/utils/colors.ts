import { WorkflowMetadata } from "../types";

/**
 * Get a color for a category based on its index in the list of all categories
 */
export const getCategoryColor = (
  category: string,
  allWorkflows: WorkflowMetadata[]
): string => {
  const colorList = [
    "#7A23D9",
    "#3BAB5A",
    "#4589FF",
    "#FF9D00",
    "#FF0000",
  ];
  const categories = Array.from(
    new Set(allWorkflows.map((w) => w.category))
  );
  const categoryIndex = categories.indexOf(category);
  return categoryIndex >= 0
    ? colorList[categoryIndex % colorList.length]
    : "#7A23D9";
};

