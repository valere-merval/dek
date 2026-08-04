"use client";

import { createContext, ElementRef, forwardRef, useContext } from "react";
import * as Styled from "./List.styles";
import {
  ListBodyProps,
  ListDescriptionProps,
  ListItemProps,
  ListRootProps,
} from "./List.types";

const ListContext = createContext<ListRootProps>({} as ListRootProps);

export const Root = forwardRef<ElementRef<typeof Styled.Root>, ListRootProps>(
  (props: ListRootProps, ref) => {
    const {
      children,
      size,
      "data-testid": testId,
      decorativeColor,
      ...rest
    } = props;
    return (
      <Styled.Root ref={ref} data-testid={testId} $size={size} {...rest}>
        <ListContext.Provider value={props}>{children}</ListContext.Provider>
      </Styled.Root>
    );
  },
);
Root.displayName = "List.Root";

const Item = forwardRef<ElementRef<typeof Styled.Item>, ListItemProps>(
  ({ children, "data-testid": testId, ...rest }, ref) => {
    const { size, decorativeColor } = useContext(ListContext);
    return (
      <Styled.Item ref={ref} data-testid={testId} $size={size} {...rest}>
        <Styled.BulletPointContainer>
          <Styled.BulletPoint $size={size} $decorativeColor={decorativeColor} />
        </Styled.BulletPointContainer>
        <Styled.ItemContent $size={size}>{children}</Styled.ItemContent>
      </Styled.Item>
    );
  },
);
Item.displayName = "List.Item";

const Body = forwardRef<ElementRef<typeof Styled.Body>, ListBodyProps>(
  ({ children, "data-testid": testId, ...rest }, ref) => {
    const { size } = useContext(ListContext);
    return (
      <Styled.Body ref={ref} data-testid={testId} $size={size} {...rest}>
        {children}
      </Styled.Body>
    );
  },
);
Body.displayName = "List.Body";

const Description = forwardRef<
  ElementRef<typeof Styled.Description>,
  ListDescriptionProps
>(({ children, "data-testid": testId, ...rest }, ref) => {
  const { size } = useContext(ListContext);
  return (
    <Styled.Description ref={ref} data-testid={testId} $size={size} {...rest}>
      {children}
    </Styled.Description>
  );
});
Description.displayName = "List.Description";

export const List = { Root, Item, Body, Description };
