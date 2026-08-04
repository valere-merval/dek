import { TabsProps } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export interface AppTabsProps extends WithRequired<TabsProps, "defaultValue"> {
  ariaLabel: string;
  tabs: Tab[];
}
