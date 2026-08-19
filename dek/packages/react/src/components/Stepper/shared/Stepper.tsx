"use client";

import React, {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
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

export const StepperContext = createContext<StepperRootProps>(
  {} as StepperRootProps,
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
  return (
    <Styled.StepperList ref={ref} size={size} {...rest}>
      <StepperContext.Provider value={props}>
        {children}
      </StepperContext.Provider>
    </Styled.StepperList>
  );
});
Root.displayName = "Stepper.Root";

const Indicator = forwardRef<
  ElementRef<typeof Styled.StepperIndicator>,
  StepperIndicatorProps
>(({ state, step, checkout, a11yHidden, ...rest }, ref) => {
  const { size } = useContext(StepperContext);
  return (
    <Styled.IndicatorShell aria-hidden={a11yHidden ? "true" : undefined}>
      <Styled.StepperIndicator
        ref={ref}
        $size={size}
        $state={state}
        $checkout={checkout}
        {...rest}
      >
        {state === "completed" && <Check aria-hidden="true" />}
        {state === "error" && <Cross aria-hidden="true" />}
        {state === "pending" && <Clock aria-hidden="true" />}
      </Styled.StepperIndicator>
      {(state === "open" || state === "current") && (
        <Styled.IndicatorText
          $size={size}
          $checkout={checkout}
          aria-hidden="true"
          inert
        >
          {step}
        </Styled.IndicatorText>
      )}
    </Styled.IndicatorShell>
  );
});

Indicator.displayName = "Stepper.Indicator";

export const Content = forwardRef<
  ElementRef<typeof Styled.StepperContent>,
  StepperContentProps
>((props: StepperContentProps, ref) => {
  const { children, ...rest } = props;
  return (
    <Styled.StepperContent ref={ref} {...rest}>
      {children}
    </Styled.StepperContent>
  );
});

Content.displayName = "Stepper.Content";

export const Stepper = { Indicator, Root, Content };
export type { StepperItemState } from "./Stepper.types";
