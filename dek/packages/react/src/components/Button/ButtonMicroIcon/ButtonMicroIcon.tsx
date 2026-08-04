"use client";

import { ElementRef, forwardRef, MouseEventHandler } from "react";
import { ButtonMicroIconProps } from "./ButtonMicroIcon.types";
import * as Styled from "./ButtonMicroIcon.styles";
import { FootnoteCircleFill } from "@fair/icons";

export const ButtonMicroIcon = forwardRef<
  ElementRef<typeof Styled.Button>,
  ButtonMicroIconProps
>(
  (
    {
      onClick,
      label = "Mehr Details",
      icon = <FootnoteCircleFill />,
      align = "top",
      ...rest
    }: ButtonMicroIconProps,
    ref,
  ) => {
    const handleClick: MouseEventHandler<ElementRef<"button">> = (event) => {
      event.stopPropagation();
      onClick?.(event);
    };

    return (
      <Styled.Button
        onClick={handleClick}
        aria-label={label}
        ref={ref}
        $align={align}
        type="button"
        {...rest}
      >
        {icon}
      </Styled.Button>
    );
  },
);
ButtonMicroIcon.displayName = "ButtonMicroIcon";
