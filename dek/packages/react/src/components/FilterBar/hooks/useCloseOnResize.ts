import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useResizeWindow } from "../../../hooks/useResizeWindow";

export const useCloseOnResize = (
  isOpen: boolean,
  shouldClose: (clientWidth: number) => boolean,
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [open, setOpen] = useState(isOpen);

  const handleResize = useCallback(() => {
    const clientWidth =
      typeof window !== "undefined" && window.document.body.clientWidth;
    if (open && clientWidth && shouldClose(clientWidth)) {
      setOpen(false);
    }
  }, [open, setOpen]);

  useResizeWindow(handleResize);

  return [open, setOpen];
};
