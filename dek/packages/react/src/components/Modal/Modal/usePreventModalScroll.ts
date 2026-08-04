import { useEffect } from "react";

const onVisualScroll =
  (modalRef: React.RefObject<HTMLDivElement | null>) => () => {
    if (modalRef?.current) {
      if (document.documentElement.scrollTop !== 0) {
        document.documentElement.scrollTo({ top: 0, behavior: "instant" });
      }

      const visualViewportOffset = window?.visualViewport?.offsetTop || 0;
      if (visualViewportOffset !== 0) {
        modalRef.current.style.top = `${visualViewportOffset + 10}px`;
      }
    }
  };

export const usePreventModalScroll = (
  modalRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    window?.visualViewport?.addEventListener(
      "scroll",
      onVisualScroll(modalRef),
    );

    return () => {
      window?.visualViewport?.removeEventListener(
        "scroll",
        onVisualScroll(modalRef),
      );
    };
  }, []);
};
