"use client";

import React, { ElementRef, forwardRef, ReactNode, useContext } from "react";
import * as Styled from "./StepperHorizontal.styles";
import { StepContext, Stepper, StepperContext } from "../shared/Stepper";
import { StepperItemProps, StepperRootProps } from "../shared";
import { getAriaLabel } from "../shared/utils";
import { useTheme } from "styled-components";
import { getSeparatorColor } from "../shared/mappings";

export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  StepperRootProps
>((props: StepperRootProps, ref) => {
  const { children, size, ...rest } = props;
  return (
    <Styled.Root ref={ref} {...rest}>
      <StepperContext.Provider value={props}>
        {children}
      </StepperContext.Provider>
    </Styled.Root>
  );
});

Root.displayName = "StepperHorizontal.Root";

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
List.displayName = "StepperHorizontal.List";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  StepperItemProps
>((props: StepperItemProps, ref) => {
  const { children, state = "open", ...rest } = props;
  const step = useContext(StepContext);
  const ariaLabel = getAriaLabel(step, state);
  return (
    <Styled.Item ref={ref} {...rest}>
      <Stepper.Indicator
        state={state}
        role="img"
        aria-label={ariaLabel}
        step={(step?.index ?? 0) + 1}
      />
      {children}
    </Styled.Item>
  );
});

Item.displayName = "StepperHorizontal.Item";

export const StepperHorizontal = { Root, List, Item };
