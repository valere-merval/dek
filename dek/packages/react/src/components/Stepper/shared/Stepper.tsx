"use client";

import React, {
  createContext,
  cloneElement,
  ElementRef,
  forwardRef,
  isValidElement,
  useContext,
  useId,
} from "react";
import { Check, Clock, Cross } from "@fair/icons";
import * as Styled from "./Stepper.styles";
import {
  StepInformation,
  StepperContentProps,
  StepperIndicatorProps,
  StepperItemProps,
  StepperRootProps,
} from "./Stepper.types";

type StepperContextValue = StepperRootProps & {
  contentIdPrefix: string;
};

export const StepperContext = createContext<StepperContextValue>(
  {} as StepperContextValue,
);

export const StepperItemContext = createContext<StepperItemProps>(
  {} as StepperItemProps,
);

export const StepContext = createContext<StepInformation>(undefined);

export const Root = forwardRef<
  ElementRef<typeof Styled.StepperList>,
  StepperRootProps
>((props: StepperRootProps, ref) => {
  const { children, size, ...rest } = props;
  const contentIdPrefix = useId();
  return (
    <Styled.StepperList ref={ref} size={size} {...rest}>
      <StepperContext.Provider value={{ ...props, contentIdPrefix }}>
        {children}
      </StepperContext.Provider>
    </Styled.StepperList>
  );
});
Root.displayName = "Stepper.Root";

const Indicator = forwardRef<
  ElementRef<typeof Styled.StepperIndicator>,
  StepperIndicatorProps
>(({ state, children, step, checkout, ...rest }, ref) => {
  const { size, contentIdPrefix } = useContext(StepperContext);
  const stepContentTitleId = step
    ? `${contentIdPrefix}-step-${step}-title`
    : undefined;
  return (
    <Styled.StepperIndicator
      ref={ref}
      role="group"
      $size={size}
      $state={state}
      aria-describedby={stepContentTitleId}
      {...rest}
    >
      {state === "completed" && <Check aria-hidden="true" />}
      {state === "error" && <Cross aria-hidden="true" />}
      {state === "pending" && <Clock aria-hidden="true" />}
      {(state === "open" || state === "current") && (
        <Styled.IndicatorText
          $size={size}
          $checkout={checkout}
          aria-hidden="true"
        >
          {step}
        </Styled.IndicatorText>
      )}
    </Styled.StepperIndicator>
  );
});

Indicator.displayName = "Stepper.Indicator";

export const Content = forwardRef<
  ElementRef<typeof Styled.StepperContent>,
  StepperContentProps
>((props: StepperContentProps, ref) => {
  const { children, id, ...rest } = props;
  const { contentIdPrefix } = useContext(StepperContext);
  const step = useContext(StepContext);
  const stepContentId =
    id ??
    (step
      ? `${contentIdPrefix}-step-${step.index + 1}-content`
      : undefined);
  const stepContentTitleId = step
    ? `${contentIdPrefix}-step-${step.index + 1}-title`
    : undefined;
  const childrenArray = React.Children.toArray(children);
  const enhancedChildren = childrenArray.map((child, index) => {
    if (index === 0 && stepContentTitleId && isValidElement(child)) {
      return cloneElement(child, { id: stepContentTitleId });
    }
    return child;
  });
  return (
    <Styled.StepperContent ref={ref} id={stepContentId} {...rest}>
      {enhancedChildren}
    </Styled.StepperContent>
  );
});

Content.displayName = "Stepper.Content";

export const Stepper = { Indicator, Root, Content };
export type { StepperItemState } from "./Stepper.types";
