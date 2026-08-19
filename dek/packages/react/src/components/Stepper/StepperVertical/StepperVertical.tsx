"use client";

import React, { ElementRef, forwardRef, useContext, useId } from "react";
import { StepperItemProps, StepperRootProps } from "../shared";
import {
  StepContext,
  Stepper,
  StepperContext,
  StepperItemContext,
} from "../shared/Stepper";
import * as Styled from "./StepperVertical.styles";

type A11yContentElementProps = {
  children?: React.ReactNode;
  id?: string;
  "aria-hidden"?: boolean;
};

const interactiveElementNames = new Set([
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
]);

const getElementName = (element: React.ReactElement): string => {
  if (typeof element.type === "string") {
    return element.type;
  }

  return (
    (element.type as React.ComponentType).displayName ||
    (element.type as React.ComponentType).name ||
    ""
  );
};

const isInteractiveElement = (node: React.ReactNode): boolean => {
  if (!React.isValidElement(node)) {
    return false;
  }

  if (typeof node.type === "string") {
    return interactiveElementNames.has(node.type);
  }

  return /^Button|^Link/.test(getElementName(node));
};

const shouldHideFromA11y = (node: React.ReactNode): boolean => {
  if (!React.isValidElement(node)) {
    return false;
  }

  if (isInteractiveElement(node)) {
    return false;
  }

  const elementName = getElementName(node);
  return elementName === "Text" || elementName === "Headline";
};

const hideNodeFromA11y = (node: React.ReactNode): React.ReactNode => {
  if (node === null || node === undefined || typeof node === "boolean") {
    return node;
  }

  if (typeof node === "string" || typeof node === "number") {
    return <span aria-hidden="true">{node}</span>;
  }

  if (Array.isArray(node)) {
    return node.map(hideNodeFromA11y);
  }

  if (!React.isValidElement(node)) {
    return node;
  }

  if (isInteractiveElement(node)) {
    return node;
  }

  const element = node as React.ReactElement<A11yContentElementProps>;

  if (shouldHideFromA11y(node)) {
    return React.cloneElement(element, {
      "aria-hidden": true,
    });
  }

  return React.cloneElement(element, {
    children: React.Children.toArray(element.props.children).map(
      hideNodeFromA11y,
    ),
  });
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
  const titleId = useId();
  const contentElement = React.isValidElement(children)
    ? (children as React.ReactElement<A11yContentElementProps>)
    : undefined;
  const content = contentElement
    ? React.cloneElement(contentElement, {
        children: React.Children.toArray(contentElement.props.children).map(
          (child, index) => {
            if (index === 0 && React.isValidElement(child)) {
              return React.cloneElement(
                child as React.ReactElement<{ id?: string }>,
                {
                  id: titleId,
                },
              );
            }

            return hideNodeFromA11y(child);
          },
        ),
      })
    : children;
  return (
    <Styled.Item
      ref={ref}
      $state={state}
      size={size}
      aria-labelledby={titleId}
      {...rest}
    >
      <StepperItemContext.Provider value={props}>
        <Stepper.Indicator
          state={state}
          aria-hidden="true"
          step={(step?.index ?? 0) + 1}
        />
        {content}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
