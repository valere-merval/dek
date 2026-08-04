import { useState, useEffect } from "react";

export function useHasOverflow<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  const [hasOverflowOnXAxis, setHasOverflowOnXAxis] = useState(false);
  const [hasOverflowOnYAxis, setHasOverflowOnYAxis] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    const el = ref.current;

    const checkOverflow = () => {
      setHasOverflowOnXAxis(el.scrollWidth > el.clientWidth);
      setHasOverflowOnYAxis(el.scrollHeight > el.clientHeight);
    };

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { hasOverflowOnXAxis, hasOverflowOnYAxis };
}
