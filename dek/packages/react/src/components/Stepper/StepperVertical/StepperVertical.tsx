"use client";

import React, {
  cloneElement,
  ElementRef,
  forwardRef,
  isValidElement,
  useContext,
  useId,
} from "react";
import { StepperItemProps, StepperRootProps } from "../shared";
import {
  StepContext,
  Stepper,
  StepperContext,
  StepperItemContext,
} from "../shared/Stepper";
import * as Styled from "./StepperVertical.styles";
import { getAriaLabel } from "../shared/utils";

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
  const titleId = useId();
  const shouldLinkTitle = state === "current";
  const currentContent = shouldLinkTitle && isValidElement(children)
    ? (() => {
        const contentElement =
          children as React.ReactElement<{ children?: React.ReactNode }>;
        return cloneElement(contentElement as React.ReactElement<any>, {
          children: React.Children.toArray(contentElement.props.children).map(
            (child, index) => {
              if (index === 0 && isValidElement(child)) {
                return cloneElement(child as React.ReactElement<any>, {
                  id: titleId,
                } as any);
              }

              if (index === 0) {
                return child;
              }

              if (isValidElement(child)) {
                return cloneElement(child as React.ReactElement<any>, {
                  "aria-hidden": true,
                } as any);
              }

              return <span aria-hidden="true">{child}</span>;
            },
          ),
        } as any);
      })()
    : children;
  return (
    <Styled.Item ref={ref} $state={state} size={size} {...rest}>
      <StepperItemContext.Provider value={props}>
        <Stepper.Indicator
          state={state}
          role="group"
          aria-label={ariaLabel}
          aria-describedby={shouldLinkTitle ? titleId : undefined}
          hideValue={shouldLinkTitle}
          step={(step?.index ?? 0) + 1}
        />
        {currentContent}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
