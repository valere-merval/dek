"use client";

import React, { ElementRef, forwardRef } from "react";
import { ButtonPaymentProps } from "./ButtonPayment.types";
import * as Styled from "./ButtonPayment.styles";
import {
  mapPaymentMethodToAltText,
  mapPaymentMethodToIcon,
} from "../../PaymentIcon/utils/mapPaymentMethodToIcon";
import { IconTextWrapper } from "./ButtonPayment.styles";

export const ButtonPayment = forwardRef<
  ElementRef<typeof Styled.Button>,
  ButtonPaymentProps
>(
  (
    { paymentMethod, fullWidth, size = "medium", ...rest }: ButtonPaymentProps,
    ref,
  ) => {
    return (
      <Styled.Button
        ref={ref}
        aria-label={`Weiter zu ${paymentMethod}`}
        $fullWidth={fullWidth}
        size={size}
        {...rest}
      >
        <IconTextWrapper $size={size}>
          <img
            src={mapPaymentMethodToIcon[paymentMethod]["light"]}
            alt={mapPaymentMethodToAltText[paymentMethod]}
            aria-hidden
          />
        </IconTextWrapper>
      </Styled.Button>
    );
  },
);
ButtonPayment.displayName = "ButtonPayment";
