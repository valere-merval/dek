"use client";

import React, { ElementRef, forwardRef, ReactNode } from "react";
import {
  Button,
  ButtonSecondaryLabel,
  IconTextWrapper,
} from "./ButtonSecondary.styles";
import { ButtonSecondaryProps } from "./ButtonSecondary.types";

interface ChildrenWrapperProps {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}
export const ChildrenWrapper = ({
  children,
  startIcon,
  endIcon,
  className,
}: ChildrenWrapperProps) => {
  const hasChildren = React.Children.count(children) > 0;
  return (
    <IconTextWrapper className={className}>
      {startIcon}
      {hasChildren && (
        <ButtonSecondaryLabel $shouldTrimFont={!!startIcon || !!endIcon}>
          {children}
        </ButtonSecondaryLabel>
      )}
      {endIcon}
    </IconTextWrapper>
  );
};

export const ButtonSecondary = forwardRef<
  ElementRef<typeof Button>,
  ButtonSecondaryProps
>(({ children, startIcon, endIcon, ...rest }: ButtonSecondaryProps, ref) => (
  <Button
    ref={ref}
    type={!rest.asChild ? "button" : undefined}
    childrenWrapperFunction={(subChildren: ReactNode) => (
      <ChildrenWrapper startIcon={startIcon} endIcon={endIcon}>
        {subChildren}
      </ChildrenWrapper>
    )}
    {...rest}
  >
    {children}
  </Button>
));
ButtonSecondary.displayName = "ButtonSecondary";
