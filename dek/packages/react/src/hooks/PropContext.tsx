import { createContext, useContext } from "react";

export const createPropContext = <T extends object>(defaultValue: T) => {
  const PropContext = createContext<T>(defaultValue);
  const usePropContext = () => useContext(PropContext);

  return {
    PropContextProvider: PropContext.Provider,
    usePropContext,
  };
};
