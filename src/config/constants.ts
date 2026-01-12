// Application constants

export const SPECIAL_PAGES = {
  HOME: null,
  FAQS: '__FAQS__',
  EXAMPLE_CARDS: 'CoreIgnite Team: Add New Workflow',
} as const;

export const NON_WORKFLOW_PAGES = [
  SPECIAL_PAGES.HOME,
  SPECIAL_PAGES.FAQS,
  SPECIAL_PAGES.EXAMPLE_CARDS,
];
