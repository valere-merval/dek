"use client";

import React, { forwardRef, ElementRef, ReactNode, useContext } from "react";
import * as Styled from "./StepperCheckout.styles";
import {
  StepperCheckoutItemProps,
  StepperCheckoutRootProps,
} from "./StepperCheckout.types";
import { StepperHorizontal } from "../StepperHorizontal";
import { StepContext } from "../shared/Stepper";
import { getAriaLabel } from "../shared/utils";
import { useTheme } from "styled-components";
import { getSeparatorColor } from "../shared/mappings";

export const Root = forwardRef<
  ElementRef<typeof StepperHorizontal.Root>,
  StepperCheckoutRootProps
>((props: StepperCheckoutRootProps, ref) => {
  const { children, ...rest } = props;
  return (
    <StepperHorizontal.Root ref={ref} {...rest}>
      {children}
    </StepperHorizontal.Root>
  );
});

Root.displayName = "StepperCheckout.Root";

export const List = forwardRef<
  ElementRef<typeof Styled.List>,
  { children: ReactNode }
>(({ children, ...rest }, ref) => {
  const theme = useTheme();
  const separatorColor = getSeparatorColor(theme);
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;

  return (
    <Styled.List ref={ref} {...rest}>
      {childrenArray.map((child, index) => {
        const contextValue = { index, total };
        return (
          <StepContext.Provider value={contextValue} key={index}>
            {child}
          </StepContext.Provider>
        );
      })}
      <Styled.Separator color={separatorColor} />
    </Styled.List>
  );
});
List.displayName = "StepperCheckout.List";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  StepperCheckoutItemProps
>((props: StepperCheckoutItemProps, ref) => {
  const { children, state = "open", label, hideLabel, link, ...rest } = props;
  const step = useContext(StepContext);
  const stepAriaLabel = `${getAriaLabel(step, state)}, ${label}`;
  const isClickable = state === "completed" && !!link;

  return (
    <Styled.Item ref={ref} {...rest}>
      {isClickable ? (
        <Styled.Link href={link} aria-label={stepAriaLabel}>
          <Styled.Indicator
            state={state}
            aria-hidden
            step={(step?.index ?? 0) + 1}
            checkout
          />
        </Styled.Link>
      ) : (
        <Styled.Indicator
          state={state}
          aria-label={stepAriaLabel}
          step={(step?.index ?? 0) + 1}
          checkout
        />
      )}

      {!hideLabel && (
        <Styled.Label
          forwardedAs="label"
          variant={state == "current" ? "bold" : "light"}
          size="large"
          aria-hidden
        >
          {label}
        </Styled.Label>
      )}
    </Styled.Item>
  );
});

Item.displayName = "StepperCheckout.Item";

export const StepperCheckout = { Root, List, Item };
