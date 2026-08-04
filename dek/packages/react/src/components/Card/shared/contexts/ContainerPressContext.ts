import { createContext, useContext } from "react";

export interface ContainerPressContextValue {
  registerAction: (fn: () => void) => void;
  registerTrigger: (enabled: boolean) => void;
  isTrigger: boolean;
}

export const ContainerPressContext =
  createContext<ContainerPressContextValue | null>(null);

export const useContainerPressContext = () => {
  const context = useContext(ContainerPressContext);
  if (!context)
    throw new Error(
      "useContainerPressContext must be used within a component using ContainerPressContext",
    );
  return context;
};
