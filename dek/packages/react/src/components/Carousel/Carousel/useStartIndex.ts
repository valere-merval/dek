import { useCallback, useEffect } from "react";

export const useStartIndex = (
  childrenCount: number,
  slideContainerRef: React.MutableRefObject<HTMLUListElement | null>,
  setSelectedIndex: (selectedIndex: number) => void,
  startIndex?: number,
) => {
  const scrollToWithoutFocus = useCallback(
    (index: number) => {
      const slideContainer = slideContainerRef?.current;
      if (slideContainer) {
        const slideWidth = slideContainer.scrollWidth / childrenCount;
        const containerWidth = slideContainer.clientWidth;
        // // The slide should be centered, therefore half of the container width needs to be subtracted and half of the slide width needs to be added
        slideContainer.scrollTo({
          left: slideWidth * index - containerWidth / 2 + slideWidth / 2,
          behavior: "instant",
        });
        setSelectedIndex(index);
      }
    },
    [childrenCount, setSelectedIndex],
  );

  useEffect(() => {
    if (typeof startIndex !== "undefined") {
      // does not set the focus on start, because then the page would scroll to the carousel on render
      scrollToWithoutFocus(startIndex);
    }
  }, [scrollToWithoutFocus, startIndex]);
};
