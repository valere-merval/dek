"use client";

import React, {
  ElementRef,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useContext,
} from "react";
import { StepperItemProps, StepperRootProps } from "../shared";
import {
  StepContext,
  Stepper,
  StepperContext,
  StepperItemContext,
} from "../shared/Stepper";
import * as Styled from "./StepperVertical.styles";
import { stepStatusToTextMap } from "../shared/mappings";

const extractText = (children: ReactNode): string => {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (React.isValidElement<{ children?: ReactNode }>(child)) {
        return extractText(child.props.children ?? null);
      }
      return "";
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

const extractHeadlineText = (children: ReactNode): string => {
  const nodes = React.Children.toArray(children);

  for (const node of nodes) {
    if (!React.isValidElement(node)) {
      continue;
    }

    const typeName =
      typeof node.type === "string"
        ? node.type
        : (node.type as { displayName?: string; name?: string }).displayName ??
          (node.type as { displayName?: string; name?: string }).name;

    if (typeName === "Headline") {
      return extractText((node.props as { children?: ReactNode }).children ?? null);
    }

    const nested = extractHeadlineText(
      (node.props as { children?: ReactNode }).children ?? null,
    );
    if (nested) {
      return nested;
    }
  }

  return "";
};

const makeHeadlinePlain = (
  children: ReactNode,
): ReactNode => {
  let headlineAdjusted = false;

  const visit = (node: ReactNode): ReactNode => {
    if (
      headlineAdjusted ||
      !isValidElement<{ children?: ReactNode; as?: string }>(node)
    ) {
      return node;
    }

    const typeName =
      typeof node.type === "string"
        ? node.type
        : (node.type as { displayName?: string; name?: string }).displayName ??
          (node.type as { displayName?: string; name?: string }).name;

    if (typeName === "Headline") {
      headlineAdjusted = true;
      return cloneElement(node, { as: "div" });
    }

    const nodeChildren = (node.props as { children?: ReactNode }).children;

    if (!nodeChildren) {
      return node;
    }

    const nextChildren = React.Children.map(nodeChildren, visit);

    if (nextChildren === node.props.children) {
      return node;
    }

    return cloneElement(node, undefined, nextChildren);
  };

  return React.Children.map(children, visit);
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
  const title = extractHeadlineText(children);
  const plainChildren = makeHeadlinePlain(children);
  const ariaLabel = step
    ? `Schritt ${step.index + 1} von ${step.total}, ${stepStatusToTextMap[state]}, ${title}`
    : undefined;
  return (
    <Styled.Item
      ref={ref}
      $state={state}
      size={size}
      {...rest}
    >
      <StepperItemContext.Provider value={props}>
        <Stepper.Indicator
          state={state}
          role="img"
          tabIndex={0}
          aria-label={ariaLabel}
          suppressStepTextA11y
          step={(step?.index ?? 0) + 1}
        />
        {plainChildren}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
