"use client";

import React, { ElementRef, forwardRef, useEffect, useState } from "react";
import { Typography } from "../../../Typography/Typography";
import * as Styled from "./StickyBoxBottom.styles";
import {
  StickyBoxBottomIconProps,
  StickyBoxBottomProps,
  StickyBoxBottomTriggerProps,
} from "./StickyBoxBottom.types";
import { ThemeProvider } from "../../../../theme/ThemeProvider";

/**
 Note: All Components that inherit from the `StickyBoxBottom` base component use the `Collapsible` component of Radix.
 For further information regarding the options inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible">Documentation</a>
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  StickyBoxBottomProps
>(
  (
    {
      position = "fixed",
      boxProps,
      children,
      open,
      onOpenChange,
      backgroundColor = "darkGrey",
      ...rest
    }: StickyBoxBottomProps,
    ref,
  ) => {
    const [isOpen, setOpen] = useState(!!open);

    const handleOpen = (openState: boolean) => {
      setOpen(openState);
      onOpenChange?.(openState);
    };

    useEffect(() => {
      if (open && isOpen !== open) {
        setOpen(open);
      }
    }, [open]);

    return (
      <>
        <Styled.DimmedBackground
          open={isOpen}
          onClick={() => handleOpen(false)}
          data-testid="shopping-cart-base-dimmedBG"
        />
        <Styled.Root
          data-testid="shopping-cart-base-root"
          ref={ref}
          position={position}
          {...rest}
          open={isOpen}
          onOpenChange={handleOpen}
        >
          <ThemeProvider backgroundColor={backgroundColor}>
            <div {...boxProps}>{children}</div>
          </ThemeProvider>
        </Styled.Root>
      </>
    );
  },
);

Root.displayName = "StickyBoxBottom.Root";

const Trigger = forwardRef<
  ElementRef<typeof Styled.Trigger>,
  StickyBoxBottomTriggerProps
>(({ children, ...rest }: StickyBoxBottomTriggerProps, ref) => (
  <Styled.Trigger {...rest} ref={ref} data-testid="shopping-cart-base-trigger">
    {children}
  </Styled.Trigger>
));

Trigger.displayName = "StickyBoxBottom.Trigger";

const Content = forwardRef<
  ElementRef<typeof Styled.Content>,
  StickyBoxBottomProps
>(({ boxProps, children, ...rest }: StickyBoxBottomProps, ref) => (
  <Styled.Content {...rest} ref={ref} data-testid="shopping-cart-base-content">
    <div {...boxProps}>{children}</div>
  </Styled.Content>
));

Content.displayName = "StickyBoxBottom.Content";

const Icon = ({ label, typographyProps }: StickyBoxBottomIconProps) => {
  return (
    <>
      <Styled.ArrowIcon />
      <Typography variant="LabelBold14" as="span" {...typographyProps}>
        {label}
      </Typography>
    </>
  );
};

export const StickyBoxBottom = {
  Root,
  Trigger,
  Content,
  Icon,
};
