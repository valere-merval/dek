"use client";

import React, { forwardRef, ElementRef } from "react";
import { CardOutlinedProps } from "./CardOutlined.types";
import * as Styled from "./CardOutlined.styles";

export const CardOutlined = forwardRef<
  ElementRef<typeof Styled.Root>,
  CardOutlinedProps
>((props: CardOutlinedProps, ref) => {
  return <Styled.Root ref={ref} {...props} />;
});
CardOutlined.displayName = "CardOutlined";
