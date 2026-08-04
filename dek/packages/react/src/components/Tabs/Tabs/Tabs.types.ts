import {
  TabsContentProps as ContentProps,
  TabsListProps as ListProps,
  TabsProps,
  TabsTriggerProps as TriggerProps,
} from "@radix-ui/react-tabs";

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type TabsRootProps = WithRequired<TabsProps, "defaultValue">;
export type TabsListProps = ListProps & {
  sticky?: boolean;
  trigger: TabsTriggerProps[];
};
export type TabsTriggerProps = TriggerProps;
export type TabsContentProps = ContentProps;
