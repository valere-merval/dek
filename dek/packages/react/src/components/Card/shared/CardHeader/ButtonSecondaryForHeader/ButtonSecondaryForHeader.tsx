import React, { ElementRef, forwardRef } from "react";
import { ButtonSecondaryForCardProps } from "./ButtonSecondaryForHeader.types";
import * as Styled from "./ButtonSecondaryForHeader.styles";
import { ArrowRight } from "@fair/icons";

export const handleButtonSecondaryForCardClick =
  ({ href, onClick }: ButtonSecondaryForCardProps) =>
  () => {
    if (href) {
      window.open(href, "_parent");
    } else if (onClick) {
      onClick();
    }
  };

export const ButtonSecondaryForHeader = forwardRef<
  ElementRef<typeof Styled.Button>,
  ButtonSecondaryForCardProps
>(
  (
    {
      href,
      renderAnchor,
      onClick,
      endIcon = <ArrowRight aria-hidden />,
      children,
      ...rest
    }: ButtonSecondaryForCardProps,
    ref,
  ) => {
    if (href) {
      return (
        <Styled.Button ref={ref} endIcon={endIcon} {...rest} asChild>
          <a href={href}>{children}</a>
        </Styled.Button>
      );
    }

    if (renderAnchor) {
      return (
        <Styled.Button ref={ref} endIcon={endIcon} {...rest} asChild>
          {renderAnchor({ children })}
        </Styled.Button>
      );
    }

    return (
      <Styled.Button
        ref={ref}
        {...rest}
        endIcon={endIcon}
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
      >
        {children}
      </Styled.Button>
    );
  },
);
ButtonSecondaryForHeader.displayName = "ButtonSecondaryForCard";
