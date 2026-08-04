import { CollectionChildren } from "@react-types/shared";

export const checkHasItems = <T extends object>(items?: Iterable<T>) =>
  !!items && Array.isArray(items) && items.length > 0;

export const isAnyListAvailable = <T extends object>(
  hasChildrenAsFunction: boolean,
  children: CollectionChildren<T>,
  items?: Iterable<T>,
  defaultItems?: Iterable<T>,
) => {
  const isAsyncListAvailable = () => {
    const hasItems = checkHasItems(items);
    const hasDefaultItems = checkHasItems(defaultItems);

    // The list is available if either items or defaultItems are provided, and children is a function
    return (hasItems || hasDefaultItems) && hasChildrenAsFunction;
  };

  const isStaticListAvailable = () =>
    !items && !defaultItems && !!children && typeof children !== "function";

  return isAsyncListAvailable() || isStaticListAvailable();
};
