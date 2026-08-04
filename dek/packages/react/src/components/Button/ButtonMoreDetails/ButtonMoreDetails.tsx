"use client";

import { ElementRef, forwardRef, MouseEventHandler } from "react";
import { ButtonMoreDetailsProps } from "./ButtonMoreDetails.types";
import * as Styled from "./ButtonMoreDetails.styles";

export const ButtonMoreDetails = forwardRef<
  ElementRef<"button">,
  ButtonMoreDetailsProps
>(
  (
    {
      onClick,
      linkText,
      size = "medium",
      inheritFont,
      ...rest
    }: ButtonMoreDetailsProps,
    ref,
  ) => {
    const handleClick: MouseEventHandler<ElementRef<typeof Styled.Button>> = (
      event,
    ) => {
      event.stopPropagation();
      onClick?.(event);
    };

    return (
      <Styled.Button
        onClick={handleClick}
        ref={ref}
        type="button"
        {...rest}
        {...(inheritFont
          ? { $size: undefined, $inheritFont: true }
          : { $size: size, $inheritFont: undefined })}
      >
        {linkText ? linkText : "Mehr Details"}
      </Styled.Button>
    );
  },
);
ButtonMoreDetails.displayName = "ButtonMoreDetails";
