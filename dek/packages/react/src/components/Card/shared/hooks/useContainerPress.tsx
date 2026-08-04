import {
  HTMLAttributes,
  PointerEvent as ReactPointerEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePress } from "react-aria";
import { isInteractiveElement } from "../utils/isInteractiveElement";
import { ContainerPressContextValue } from "../contexts/ContainerPressContext";

interface UseContainerPressReturn {
  pressProps: HTMLAttributes<HTMLElement>;
  contextValue: ContainerPressContextValue;
  isTrigger: boolean;
}

export const useContainerPress = (): UseContainerPressReturn => {
  const actionRef = useRef<(() => void) | null>(null);
  const isTriggerRef = useRef<boolean>(false);
  const interactionSourceRef = useRef<HTMLElement | null>(null);

  const [isTrigger, setIsTrigger] = useState(false);

  const registerAction = useCallback((fn: () => void) => {
    actionRef.current = fn;
  }, []);

  const registerTrigger = useCallback((enabled: boolean) => {
    isTriggerRef.current = enabled;
    setIsTrigger(enabled);
  }, []);
  const { pressProps } = usePress({
    onPress: () => {
      if (!isTriggerRef.current) return;
      if (isInteractiveElement(interactionSourceRef.current)) return;
      actionRef.current?.();
    },
  });

  const combinedPressProps = useMemo(() => {
    if (!isTrigger) return {};
    return {
      ...pressProps,
      onPointerDown: (e: ReactPointerEvent<HTMLElement>) => {
        interactionSourceRef.current = e.target as HTMLElement;
        pressProps.onPointerDown?.(e);
      },
    };
  }, [pressProps, isTrigger]);

  const contextValue = useMemo(
    () => ({ registerAction, registerTrigger, isTrigger }),
    [registerAction, registerTrigger, isTrigger],
  );

  return {
    pressProps: combinedPressProps,
    contextValue,
    isTrigger,
  };
};
