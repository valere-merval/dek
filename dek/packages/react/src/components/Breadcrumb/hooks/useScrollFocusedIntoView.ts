import { RefObject, useCallback } from "react";

function computeTargetScrollLeft(
  container: HTMLElement,
  focusedEl: HTMLElement,
  pinnedEl: HTMLElement | null,
): number {
  const containerRect = container.getBoundingClientRect();
  const focusedRect = focusedEl.getBoundingClientRect();
  const pinnedRect = pinnedEl?.getBoundingClientRect();

  const currentScrollLeft = container.scrollLeft;
  const viewportWidth = containerRect.width;

  const focusedLeft = focusedRect.left - containerRect.left + currentScrollLeft;
  const focusedRight =
    focusedRect.right - containerRect.left + currentScrollLeft;
  const pinnedRight = pinnedRect
    ? pinnedRect.right - containerRect.left + currentScrollLeft
    : focusedRight;

  let target = currentScrollLeft;

  // 1. Primary constraint: focused item must be fully visible.
  if (focusedRight - target > viewportWidth) {
    target = focusedRight - viewportWidth;
  } else if (focusedLeft < target) {
    target = focusedLeft;
  }

  // 2. Secondary: reveal the pinned element too, without clipping the focused one.
  if (pinnedRect) {
    const neededForPinned = pinnedRight - viewportWidth;
    const maxTarget = focusedLeft;
    if (neededForPinned > target) {
      target = Math.min(neededForPinned, maxTarget);
    }
  }

  const maxScrollLeft = container.scrollWidth - container.clientWidth;
  return Math.max(0, Math.min(target, maxScrollLeft));
}

export function useScrollFocusedIntoView<
  TContainer extends HTMLElement = HTMLDivElement,
  TPinned extends HTMLElement = HTMLLIElement,
>(
  containerRef: RefObject<TContainer | null>,
  pinnedRef: RefObject<TPinned | null>,
  skipPinned = false,
) {
  return useCallback(
    (event: React.FocusEvent<TContainer>) => {
      const container = containerRef.current;
      const focusedEl = event.target as HTMLElement;
      const pinnedEl = skipPinned ? null : pinnedRef.current;

      if (!container || !focusedEl) return;

      const target = computeTargetScrollLeft(container, focusedEl, pinnedEl);
      container.scrollTo({ left: target, behavior: "smooth" });
    },
    [containerRef, pinnedRef, skipPinned],
  );
}
