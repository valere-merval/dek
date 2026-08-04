import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Key } from "react-aria-components";

export interface Tab {
  value: string;
  title: string;
  content: ReactNode;
}
export interface TabListProps extends ComponentPropsWithoutRef<"div"> {
  tabs: Tab[];
  sticky?: boolean;
  defaultValue?: string;
  selectedKey?: Key;
  onSelectionChange?: (key: Key) => void;
}
