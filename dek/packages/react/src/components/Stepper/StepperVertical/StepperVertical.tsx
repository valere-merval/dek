"use client";

import React, { ElementRef, forwardRef, useContext } from "react";
import { StepperItemProps, StepperRootProps } from "../shared";
import {
  StepContext,
  Stepper,
  StepperContext,
  StepperItemContext,
} from "../shared/Stepper";
import * as Styled from "./StepperVertical.styles";

const getNodeText = (node: React.ReactNode): string => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join(" ");
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    return getNodeText(element.props.children);
  }

  return "";
};

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
  const contentChildren = React.isValidElement(children)
    ? (children as React.ReactElement<{ children?: React.ReactNode }>).props
        .children
    : undefined;
  const title = getNodeText(
    React.Children.toArray(contentChildren)[0],
  ).trim();
  const position = step ? `Schritt ${step.index + 1} von ${step.total}` : "";
  const ariaLabel = [position, title].filter(Boolean).join(", ");
  return (
    <Styled.Item ref={ref} $state={state} size={size} aria-label={ariaLabel} {...rest}>
      <StepperItemContext.Provider value={props}>
        <Stepper.Indicator
          state={state}
          aria-hidden="true"
          step={(step?.index ?? 0) + 1}
        />
        {children}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
