"use client";

import { ElementRef, forwardRef, MouseEventHandler, ReactNode } from "react";
import {
  Button,
  CenteredLoaderSpinner,
  IconTextWrapper,
  ButtonLabel,
} from "./ButtonPrimary.styles";
import {
  ButtonPrimaryProps,
  ChildrenWrapperProps,
} from "./ButtonPrimary.types";

const ChildrenWrapper = ({
  children,
  $startIcon,
  $endIcon,
  $isLoading,
  $size,
}: ChildrenWrapperProps) => {
  return (
    <IconTextWrapper
      $startIcon={$startIcon}
      $endIcon={$endIcon}
      $isLoading={$isLoading}
      $size={$size}
    >
      {$startIcon}
      <ButtonLabel>
        {$isLoading ? <span aria-label="Lädt...">{children}</span> : children}
      </ButtonLabel>
      {$endIcon}
    </IconTextWrapper>
  );
};

export const ButtonPrimary = forwardRef<
  ElementRef<typeof Button>,
  ButtonPrimaryProps
>(
  (
    {
      children,
      isLoading,
      fullWidth,
      size = "medium",
      variant = "primary",
      startIcon,
      endIcon,
      onClick,
      ...rest
    }: ButtonPrimaryProps,
    ref,
  ) => {
    const handleClick: MouseEventHandler<ElementRef<typeof Button>> = (
      event,
    ) => {
      if (rest.disabled || isLoading) {
        event.preventDefault();
      } else if (onClick) {
        onClick(event);
      }
    };

    return (
      <Button
        ref={ref}
        $fullWidth={fullWidth}
        $isLoading={isLoading}
        $startIcon={!!startIcon}
        $endIcon={!!endIcon}
        onClick={handleClick}
        $variant={variant}
        size={size}
        childrenWrapperFunction={(subChildren: ReactNode) => (
          <>
            {isLoading && <CenteredLoaderSpinner />}
            <ChildrenWrapper
              $startIcon={startIcon}
              $endIcon={endIcon}
              $size={size}
              $isLoading={isLoading}
            >
              {subChildren}
            </ChildrenWrapper>
          </>
        )}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);
ButtonPrimary.displayName = "ButtonPrimary";
