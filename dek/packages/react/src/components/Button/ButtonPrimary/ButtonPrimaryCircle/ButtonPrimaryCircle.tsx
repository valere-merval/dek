"use client";

import { ElementRef, forwardRef, MouseEventHandler } from "react";
import { Button, Slot } from "./ButtonPrimaryCircle.styles";
import { ButtonPrimaryCircleProps } from "./ButtonPrimaryCircle.types";

export const ButtonPrimaryCircle = forwardRef<
  ElementRef<typeof Button>,
  ButtonPrimaryCircleProps
>(
  (
    { asChild, variant, children, onClick, ...rest }: ButtonPrimaryCircleProps,
    ref,
  ) => {
    const handleClick: MouseEventHandler<ElementRef<typeof Button>> = (
      event,
    ) => {
      if (rest.disabled) {
        event.preventDefault();
      } else if (onClick) {
        onClick(event);
      }
    };

    if (asChild) {
      return (
        <Slot ref={ref} $variant={variant} onClick={handleClick} {...rest}>
          {children}
        </Slot>
      );
    }

    return (
      <Button
        ref={ref}
        $variant={variant}
        isDisabled={rest.disabled}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
ButtonPrimaryCircle.displayName = "ButtonPrimaryCircle";
