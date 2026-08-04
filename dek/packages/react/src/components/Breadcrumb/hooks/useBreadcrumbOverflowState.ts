import { RefObject, useCallback, useRef, useSyncExternalStore } from "react";

interface BreadcrumbOverflowSnapshot {
  hideCurrentSegment: boolean;
  isScrollable: boolean;
}

const EMPTY_SNAPSHOT: BreadcrumbOverflowSnapshot = {
  hideCurrentSegment: false,
  isScrollable: false,
};

export function useBreadcrumbOverflowState(
  scrollRef: RefObject<HTMLElement | null>,
  listRef: RefObject<HTMLElement | null>,
  currentItemRef: RefObject<HTMLElement | null>,
  breadcrumbId: string,
  expanded: boolean,
  segmentCount: number,
): BreadcrumbOverflowSnapshot {
  const store = useRef<{
    value: BreadcrumbOverflowSnapshot;
    breadcrumbId: string | undefined;
    cachedFullWidth: number;
    cachedCurrentItemWidth: number;
    isCurrentHidden: boolean;
  }>({
    value: EMPTY_SNAPSHOT,
    breadcrumbId: undefined,
    cachedFullWidth: 0,
    cachedCurrentItemWidth: 0,
    isCurrentHidden: false,
  });

  const getSnapshot = useCallback(() => store.current.value, []);

  const getServerSnapshot = useCallback(() => EMPTY_SNAPSHOT, []);

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const scrollArea = scrollRef.current;
      const list = listRef.current;
      if (!scrollArea || !list) return () => {};

      const currentStore = store.current;

      if (currentStore.breadcrumbId !== breadcrumbId) {
        currentStore.breadcrumbId = breadcrumbId;
        currentStore.isCurrentHidden = false;
      }

      const measure = () => {
        const liveContentWidth = list.scrollWidth;

        if (!currentStore.isCurrentHidden) {
          currentStore.cachedCurrentItemWidth =
            currentItemRef.current?.offsetWidth ?? 0;
        }

        const fullWidth = currentStore.isCurrentHidden
          ? liveContentWidth + currentStore.cachedCurrentItemWidth
          : liveContentWidth;

        const hideCurrentSegment =
          !expanded && segmentCount >= 2 && fullWidth > scrollArea.clientWidth;

        const projectedWidth = hideCurrentSegment
          ? currentStore.isCurrentHidden
            ? liveContentWidth
            : fullWidth - currentStore.cachedCurrentItemWidth
          : fullWidth;

        const isScrollable = projectedWidth > scrollArea.clientWidth;

        currentStore.isCurrentHidden = hideCurrentSegment;

        const next: BreadcrumbOverflowSnapshot = {
          hideCurrentSegment,
          isScrollable,
        };
        const prev = currentStore.value;
        if (
          prev.hideCurrentSegment !== next.hideCurrentSegment ||
          prev.isScrollable !== next.isScrollable
        ) {
          currentStore.value = next;
          onStoreChange();
        }
      };

      measure();

      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(scrollArea);
      resizeObserver.observe(list);
      return () => resizeObserver.disconnect();
    },
    [breadcrumbId, expanded, segmentCount, scrollRef, listRef, currentItemRef],
  );

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
