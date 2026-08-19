"use client";

import React, { ElementRef, forwardRef, useContext } from "react";
import { StepperItemProps, StepperRootProps } from "../shared";
import {
  StepContext,
  Stepper,
  StepperContext,
  StepperItemContext,
} from "../shared/Stepper";
import { getAriaLabel } from "../shared/utils";
import * as Styled from "./StepperVertical.styles";

export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  StepperRootProps
>((props: StepperRootProps, ref) => {
  const { children, size, ...rest } = props;
  const childrenArray = React.Children.toArray(children);
  const total = childrenArray.length;

  return (
    <Styled.Root ref={ref} {...rest}>
      <StepperContext.Provider value={props}>
        {childrenArray.map((child, index) => {
          const contextValue = { index, total };
          return (
            <StepContext.Provider value={contextValue} key={index}>
              {child}
            </StepContext.Provider>
          );
        })}
      </StepperContext.Provider>
    </Styled.Root>
  );
});

Root.displayName = "StepperVertical.Root";

export const Item = forwardRef<
  ElementRef<typeof Styled.Item>,
  StepperItemProps
>((props: StepperItemProps, ref) => {
  const { children, state = "open", ...rest } = props;
  const { size } = useContext(StepperContext);
  const step = useContext(StepContext);
  const ariaLabel = getAriaLabel(step, state);
  const contentElement = React.isValidElement(children)
    ? (children as React.ReactElement<{ children?: React.ReactNode }>)
    : undefined;
  const content = contentElement
    ? React.cloneElement(contentElement, {
        children: React.Children.toArray(contentElement.props.children).map(
          (child, index) => {
            if (index === 0 && React.isValidElement(child)) {
              return React.cloneElement(
                child as React.ReactElement<{ as?: "div" }>,
                {
                  as: "div",
                },
              );
            }

            return child;
          },
        ),
      })
    : children;
  return (
    <Styled.Item ref={ref} $state={state} size={size} {...rest}>
      <StepperItemContext.Provider value={props}>
        <Stepper.Indicator
          state={state}
          role="img"
          aria-label={ariaLabel}
          step={(step?.index ?? 0) + 1}
        />
        {content}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
