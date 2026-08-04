"use client";

import React, { ElementRef, forwardRef } from "react";
import { Text } from "../../../Typography/Text";
import * as Styled from "./StickyBoxBottomPlanSelection.styles";
import { StickyBoxBottom } from "../../Base/StickyBoxBottom";
import {
  PlanSelectionCartSharedContent,
  RadioItem,
  RadioRoot,
} from "../PlanSelectionCart";
import { StickyBoxBottomPlanSelectionProps } from "./StickyBoxBottomPlanSelection.types";
import { Divider } from "../../../Divider";
import {
  ButtonPrimary,
  ButtonPrimaryCircle,
} from "../../../Button/ButtonPrimary";
import { ArrowRight } from "@fair/icons";
import { formatPrice } from "../../../../utils/pricing";

/**
 Note: The open State of the `StickyBoxBottomPlanSelection.Root` Component has to be controlled by using state inside the parent component.
 This behavior is inherited from the Radix `Collapsible` component. Read more in their <a traget="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible">Dokumentation</a>.

 ```js
 const CollapsibleDemo = () => {
 const [open, setOpen] = React.useState(false);
 return (
 <Collapsible.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
 ```
 */
export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  StickyBoxBottomPlanSelectionProps
>(
  (
    {
      pibHref,
      open = false,
      children,
      selectedTitle,
      selectedContingent,
      selectedPrice,
      ...rest
    }: StickyBoxBottomPlanSelectionProps,
    ref,
  ) => {
    return (
      <Styled.Root {...rest} ref={ref} open={open} position="sticky" title="">
        <StickyBoxBottom.Content>
          <PlanSelectionCartSharedContent
            title={selectedTitle}
            pibHref={pibHref}
          >
            {children}
          </PlanSelectionCartSharedContent>
        </StickyBoxBottom.Content>
        <Styled.TriggerContainer $open={open}>
          <StickyBoxBottom.Trigger>
            <StickyBoxBottom.Icon
              label="Ändern"
              typographyProps={{
                variant: "BodyLight12",
                color: "inherit",
              }}
            />
          </StickyBoxBottom.Trigger>
          <Styled.LabelContainer>
            {!open && (
              <Styled.SelectedTarifInfo variant="light" size="medium">
                Dein vorausgewählter Tarif
              </Styled.SelectedTarifInfo>
            )}
            {open ? (
              <>
                <Styled.ButtonCircleWrapper>
                  <ButtonPrimaryCircle asChild aria-label="Übernehmen">
                    <Styled.ButtonTrigger>
                      <ArrowRight />
                    </Styled.ButtonTrigger>
                  </ButtonPrimaryCircle>
                </Styled.ButtonCircleWrapper>
                <Styled.ButtonPrimaryWrapper>
                  <ButtonPrimary asChild fullWidth>
                    <Styled.ButtonTrigger>Übernehmen</Styled.ButtonTrigger>
                  </ButtonPrimary>
                </Styled.ButtonPrimaryWrapper>
              </>
            ) : (
              <Styled.TarifDisplay>
                <Text size="large" variant="bold">
                  {selectedTitle}
                </Text>
                <Divider color="black" noGap />
                <Text size="small" variant="light">
                  {selectedContingent} für{" "}
                  {formatPrice(
                    selectedPrice.amount,
                    selectedPrice.billingPeriod,
                  )}{" "}
                  Tarifkosten
                </Text>
              </Styled.TarifDisplay>
            )}
          </Styled.LabelContainer>
        </Styled.TriggerContainer>
      </Styled.Root>
    );
  },
);
Root.displayName = "StickyBoxSidePlanSelection.Root";

RadioRoot.displayName = "StickyBoxSidePlanSelection.RadioGroup.Root";
RadioItem.displayName = "StickyBoxSidePlanSelection.RadioGroup.Item";

export const StickyBoxBottomPlanSelection = {
  Root,
  RadioGroup: {
    Root: RadioRoot,
    Item: RadioItem,
  },
};
