import { useCallback, useEffect, useState } from "react";
import { useResizeWindow } from "../../../hooks/useResizeWindow";

const bleedSizeDefault = 6;
const edgeThreshold = 32;

export const useBleedSize = (
  slideContainerRef: React.MutableRefObject<HTMLUListElement | null>,
) => {
  const [bleedSizeLeft, setBleedSizeLeft] = useState<number>(0);
  const [bleedSizeRight, setBleedSizeRight] = useState<number>(0);

  const calculateBleedSize = useCallback(() => {
    const slideContainer = slideContainerRef?.current;
    const windowClientWidth =
      typeof window !== "undefined" && window.document.body.clientWidth;

    if (windowClientWidth && slideContainer) {
      const slideContainerRect = slideContainer.getBoundingClientRect();

      const containerLeft = slideContainerRect.left;
      if (containerLeft > 0 && containerLeft !== bleedSizeLeft) {
        if (containerLeft <= edgeThreshold) {
          setBleedSizeLeft(slideContainerRect.left);
        } else {
          setBleedSizeLeft(bleedSizeDefault);
        }
      }

      const containerRight = windowClientWidth - slideContainerRect.right;
      if (containerRight > 0 && containerRight !== bleedSizeRight) {
        if (containerRight <= edgeThreshold) {
          setBleedSizeRight(containerRight);
        } else {
          setBleedSizeRight(bleedSizeDefault);
        }
      }
    }
  }, [slideContainerRef]);

  useEffect(() => {
    calculateBleedSize();

    const slideContainer = slideContainerRef?.current;
    if (slideContainer) {
      const observer = new ResizeObserver(calculateBleedSize);
      observer.observe(slideContainer);

      return () => {
        observer.disconnect();
      };
    }
  }, [calculateBleedSize]);

  useResizeWindow(calculateBleedSize);

  return { bleedSizeLeft, bleedSizeRight };
};
