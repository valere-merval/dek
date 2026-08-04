"use client";

import React, { ElementRef, forwardRef } from "react";
import { ButtonPrimary } from "../../../Button/ButtonPrimary";
import {
  ButtonPrimaryForBoxHref,
  ButtonPrimaryForBoxOnClick,
  ButtonPrimaryForBoxProps,
} from "./ButtonPrimaryForBox.types";

export const handleBoxClick =
  ({ href, onClick }: ButtonPrimaryForBoxHref | ButtonPrimaryForBoxOnClick) =>
  () => {
    if (href) {
      window.open(href, "_parent");
    } else if (onClick) {
      onClick();
    }
  };

export const ButtonPrimaryForBox = forwardRef<
  ElementRef<typeof ButtonPrimary>,
  ButtonPrimaryForBoxProps
>(
  (
    {
      href,
      renderAnchor,
      onClick,
      children,
      ...rest
    }: ButtonPrimaryForBoxProps,
    ref,
  ) => {
    if (href) {
      return (
        <ButtonPrimary ref={ref} {...rest} fullWidth asChild>
          <a href={href}>{children}</a>
        </ButtonPrimary>
      );
    }

    if (renderAnchor) {
      return (
        <ButtonPrimary ref={ref} {...rest} fullWidth asChild>
          {renderAnchor({ children })}
        </ButtonPrimary>
      );
    }

    return (
      <ButtonPrimary
        ref={ref}
        {...rest}
        fullWidth
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
      >
        {children}
      </ButtonPrimary>
    );
  },
);
ButtonPrimaryForBox.displayName = "ButtonPrimaryForBox";
