"use client";

import React, { forwardRef, ElementRef, useRef } from "react";
import {
  CardLinkListButtonProps,
  CardLinkListHeaderProps,
  CardLinkListListProps,
  CardLinkListRootProps,
} from "./CardLinkList.types";
import * as Styled from "./CardLinkList.styles";
import { ArrowRight } from "@fair/icons";
import { CardHeader as BaseCardHeader } from "../shared/CardHeader";

export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  CardLinkListRootProps
>(({ children, ...props }, ref) => {
  return (
    <Styled.Root backgroundColor="darkGrey" size="small" ref={ref} {...props}>
      {children}
    </Styled.Root>
  );
});
Root.displayName = "CardLinkList.Root";

const List = forwardRef<ElementRef<typeof Styled.List>, CardLinkListListProps>(
  ({ children, ...props }, ref) => {
    const childRefs = useRef<(HTMLElement | null)[]>([]);

    const childrenWithRefs = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return (
          <>
            <Styled.ListItem
              ref={(element: HTMLElement | null) => {
                childRefs.current[index] = element;
              }}
            >
              {child}
            </Styled.ListItem>
            <Styled.Divider color="black" aria-hidden />
          </>
        );
      }
    });

    return (
      <Styled.List {...props} ref={ref}>
        {childrenWithRefs}
      </Styled.List>
    );
  },
);
List.displayName = "CardLinkList.List";

const Button = forwardRef<
  ElementRef<typeof Styled.Button>,
  CardLinkListButtonProps
>(({ endIcon = <ArrowRight aria-hidden />, ...props }, ref) => {
  return <Styled.Button endIcon={endIcon} {...props} ref={ref} />;
});
Button.displayName = "CardLinkList.Button";

const Header = forwardRef<
  ElementRef<typeof BaseCardHeader>,
  CardLinkListHeaderProps
>((props, ref) => {
  return <BaseCardHeader ref={ref} {...props} />;
});
Header.displayName = "CardLinkList.Header";

export const CardLinkList = { Root, List, Button, Header };
