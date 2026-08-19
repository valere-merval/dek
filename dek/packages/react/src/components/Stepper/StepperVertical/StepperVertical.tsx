"use client";

import React, {
  ElementRef,
  ReactNode,
  cloneElement,
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
import { stepStatusToTextMap } from "../shared/mappings";

const injectIdIntoHeadline = (
  children: ReactNode,
  id: string,
): ReactNode => {
  let headlineInjected = false;

  const visit = (node: ReactNode): ReactNode => {
    if (
      headlineInjected ||
      !isValidElement<{ children?: ReactNode; id?: string }>(node)
    ) {
      return node;
    }

    const typeName =
      typeof node.type === "string"
        ? node.type
        : (node.type as { displayName?: string; name?: string }).displayName ??
          (node.type as { displayName?: string; name?: string }).name;

    if (typeName === "Headline") {
      headlineInjected = true;
      return cloneElement(node, { id });
    }

    if (!node.props.children) {
      return node;
    }

    const nextChildren = React.Children.map(node.props.children, visit);

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
  const titleId = useId();
  const labelId = useId();
  const ariaLabel = step
    ? `Schritt ${step.index + 1} von ${step.total}, ${stepStatusToTextMap[state]},`
    : undefined;
  const labelledChildren = injectIdIntoHeadline(children, titleId);
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
          tabIndex={0}
          aria-labelledby={`${labelId} ${titleId}`}
          step={(step?.index ?? 0) + 1}
        />
        <Styled.VisuallyHidden id={labelId}>{ariaLabel}</Styled.VisuallyHidden>
        {labelledChildren}
      </StepperItemContext.Provider>
    </Styled.Item>
  );
});

Item.displayName = "StepperVertical.Item";

export const StepperVertical = { Root, Item };
