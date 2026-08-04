import React, { ElementRef, forwardRef } from "react";
import { StickyBoxSide } from "../Base/StickyBoxSide";
import * as Styled from "./PlanSelection.styles";
import { Text } from "../../Typography/Text";
import { FileOutline } from "@fair/icons";
import { Divider } from "../../Divider";
import { Headline } from "../../Typography/Headline";
import {
  PlanSelectionCartProps,
  PlanSelectionCartRadioItemProps,
  PlanSelectionCartRadioRootProps,
} from "./PlanSelectionCart.types";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { formatPrice } from "../../../utils/pricing";
import { RadioGroup } from "../../Input/RadioGroup/RadioGroup";

export const PlanSelectionCartSharedContent = forwardRef<
  ElementRef<typeof StickyBoxSide>,
  PlanSelectionCartProps
>(({ title, pibHref, children, ...rest }: PlanSelectionCartProps, ref) => {
  return (
    <Styled.CartContent {...rest} ref={ref}>
      <Styled.CartHeader>
        <Text size="medium" variant="light">
          Dein vorausgewählter Tarif
        </Text>
        <Headline size="medium" variant="bold" as="h3">
          {title}
        </Headline>
      </Styled.CartHeader>
      <Styled.FormContainer>{children}</Styled.FormContainer>
      <Styled.Footer>
        <ButtonSecondary asChild startIcon={<FileOutline />}>
          <a href={pibHref} target="_blank" rel="noreferrer">
            Produktinformationsblatt
          </a>
        </ButtonSecondary>
        <Divider noGap color="black" />
        <Text size="medium" variant="light">
          Monatliche Tarifkosten ohne Gerät. Im nächsten Schritt kannst du den
          Tarif im Detail ansehen und flexibel anpassen.
        </Text>
      </Styled.Footer>
    </Styled.CartContent>
  );
});
PlanSelectionCartSharedContent.displayName = "StickyBoxSidePlanSelection.Root";

export const RadioRoot = forwardRef<
  ElementRef<typeof StickyBoxSide>,
  PlanSelectionCartRadioRootProps
>((props: PlanSelectionCartRadioRootProps, ref) => {
  return (
    <Styled.RadioRoot
      ref={ref}
      itemGapSize={{
        vertical: { mobile: "16", desktop: "16" },
      }}
      {...props}
    />
  );
});
RadioRoot.displayName = "RadioGroup.Root";

export const RadioItem = forwardRef<
  ElementRef<typeof RadioGroup.Item>,
  PlanSelectionCartRadioItemProps
>(({ price, contingent, ...rest }: PlanSelectionCartRadioItemProps, ref) => {
  const content = (
    <Styled.RadioLabelContainer>
      <Styled.LabelText>
        <Text variant="bold" size="large">
          {contingent}
        </Text>
      </Styled.LabelText>
      <Styled.Price>
        {formatPrice(price.amount, price.billingPeriod)}
      </Styled.Price>
    </Styled.RadioLabelContainer>
  );
  return (
    <RadioGroup.Item ref={ref} {...rest}>
      {content}
    </RadioGroup.Item>
  );
});
RadioItem.displayName = "StickyBoxSidePlanSelection.Item";
