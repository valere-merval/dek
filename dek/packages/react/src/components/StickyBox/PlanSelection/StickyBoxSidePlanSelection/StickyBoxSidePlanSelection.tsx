"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./StickyBoxSidePlanSelection.styles";
import { StickyBoxSide } from "../../Base/StickyBoxSide";
import { StickyBoxSidePlanSelectionProps } from "./StickyBoxSidePlanSelection.types";
import {
  PlanSelectionCartSharedContent,
  RadioItem,
  RadioRoot,
} from "../PlanSelectionCart";

export const Root = forwardRef<
  ElementRef<typeof StickyBoxSide>,
  StickyBoxSidePlanSelectionProps
>(
  (
    {
      selectedTitle,
      pibHref,
      children,
      ...rest
    }: StickyBoxSidePlanSelectionProps,
    ref,
  ) => {
    return (
      <Styled.Root {...rest} ref={ref}>
        <PlanSelectionCartSharedContent pibHref={pibHref} title={selectedTitle}>
          {children}
        </PlanSelectionCartSharedContent>
      </Styled.Root>
    );
  },
);
Root.displayName = "StickyBoxSidePlanSelection.Root";

RadioRoot.displayName = "StickyBoxSidePlanSelection.RadioGroup.Root";
RadioItem.displayName = "StickyBoxSidePlanSelection.RadioGroup.Item";

export const StickyBoxSidePlanSelection = {
  Root,
  RadioGroup: {
    Root: RadioRoot,
    Item: RadioItem,
  },
};
