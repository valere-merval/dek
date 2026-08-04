"use client";

import React, { forwardRef, ElementRef } from "react";
import { IconTileProps } from "./IconTile.types";
import * as Styled from "./IconTile.styles";

export const IconTile = forwardRef<
  ElementRef<typeof Styled.Root>,
  IconTileProps
>(
  (
    {
      icon,
      color = "purple",
      variant = "filled",
      size = { minAvailableSpace: "medium", maxAvailableSpace: "medium" },
      containerQueryConfiguration,
      ...rest
    }: IconTileProps,
    ref,
  ) => {
    return (
      <Styled.Root
        ref={ref}
        $color={color}
        $size={size}
        $variant={variant}
        $containerQueryConfiguration={containerQueryConfiguration}
        role="presentation"
        aria-hidden
        {...rest}
      >
        {icon}
      </Styled.Root>
    );
  },
);
IconTile.displayName = "IconTile";
