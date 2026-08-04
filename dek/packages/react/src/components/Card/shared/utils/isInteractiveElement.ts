const INTERACTIVE_SELECTORS = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "[role='button']",
  "[role='link']",
  "[role='checkbox']",
  "[role='menuitem']",
  "[tabindex]:not([tabindex='-1'])",
];

export const isInteractiveElement = (element: Element | null): boolean => {
  if (!element) return false;

  return INTERACTIVE_SELECTORS.some(
    (selector) => element.closest(selector) !== null,
  );
};
