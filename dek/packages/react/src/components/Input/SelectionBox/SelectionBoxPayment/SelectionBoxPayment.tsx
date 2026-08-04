"use client";

import { forwardRef, ElementRef } from "react";
import { RadioGroup } from "../../RadioGroup";
import {
  SelectionBoxPaymentGroupProps,
  SelectionBoxPaymentItemProps,
} from "./SelectionBoxPayment.types";
import { SelectionBoxRadio } from "../SelectionBoxRadio";
import * as Styled from "./SelectionBoxPayment.styles";
import * as LabelWrapperStyles from "../shared/LabelWrapper/LabelWrapper.styles";
import { PaymentIcon } from "../../../PaymentIcon";

const Group = forwardRef<
  ElementRef<typeof RadioGroup.Root>,
  SelectionBoxPaymentGroupProps
>(({ children, ...rest }: SelectionBoxPaymentGroupProps, ref) => {
  return (
    <SelectionBoxRadio.Group {...rest} ref={ref} noGrid>
      {children}
    </SelectionBoxRadio.Group>
  );
});
Group.displayName = "SelectionBoxPayment.Group";

const Item = forwardRef<
  ElementRef<typeof SelectionBoxRadio.Item>,
  SelectionBoxPaymentItemProps
>(({ value, label, paymentMethods }: SelectionBoxPaymentItemProps, ref) => {
  const LabelElement = (
    <Styled.Container>
      <LabelWrapperStyles.Label>{label}</LabelWrapperStyles.Label>
      <Styled.ImageContainer>
        {paymentMethods?.map((method) => (
          <PaymentIcon
            paymentMethod={method}
            key={method}
            size={paymentMethods.length > 1 ? "small" : "medium"}
          />
        ))}
      </Styled.ImageContainer>
    </Styled.Container>
  );

  return (
    <Styled.PaymentItemWrapper>
      <SelectionBoxRadio.Item value={value} label={LabelElement} ref={ref} />
    </Styled.PaymentItemWrapper>
  );
});
Item.displayName = "SelectionBoxPayment.Item";

export const SelectionBoxPayment = {
  Group,
  Item,
};
