import { useEffect, useState } from "react";
import { useResizeWindow } from "../../../hooks/useResizeWindow";

export const useShowNavigation = (
  slideContainerRef: React.MutableRefObject<HTMLUListElement | null>,
) => {
  const [showNavigation, setShowNavigation] = useState<boolean>(true);

  const detectShowNavigation = () => {
    const slideContainer = slideContainerRef?.current;
    setShowNavigation(
      !!(
        slideContainer &&
        slideContainer.scrollWidth > slideContainer.clientWidth
      ),
    );
  };

  useEffect(() => {
    detectShowNavigation();
  }, [detectShowNavigation]);

  useResizeWindow(detectShowNavigation);

  return { showNavigation };
};
