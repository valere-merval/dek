"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./SelectionBoxOption.styles";
import { LabelBoxed } from "../LabelBoxed";
import {
  PaymentOptionImage,
  SelectionBoxCheckboxProps,
  SelectionBoxItemProps,
  SelectionBoxRadioProps,
  SelectionBoxRootProps,
} from "./SelectionBoxOption.types";
import { SelectionBoxGrid as Grid } from "../Grid/SelectionBoxGrid";
import {
  BillingPeriod,
  formatBillingPeriod,
  formatPrice,
} from "../../../../utils/pricing";
import { RadioGroupOld } from "../../RadioGroupOld";
import {
  useFieldMessages,
  UseFieldMessagesInputProps,
} from "../../shared/FieldMessages";
import { createPropContext } from "../../../../hooks/PropContext";
import * as TextFieldShared from "../../shared/TextField.styles";

Grid.displayName = "SelectionBoxOption.Grid";

const { usePropContext, PropContextProvider } =
  createPropContext<UseFieldMessagesInputProps>(
    {} as UseFieldMessagesInputProps,
  );

const {
  usePropContext: useAriaLabelContext,
  PropContextProvider: AriaLabelContextProvider,
} = createPropContext<{ ariaLabel?: string }>({} as { ariaLabel?: string });

/**
 * @deprecated Please use the dedicated SelectionBoxRadio, SelectionBoxCheckbox, and SelectionBoxPayment components instead.
 */

const Root = forwardRef<ElementRef<typeof LabelBoxed>, SelectionBoxRootProps>(
  (
    { children, name, messages, style, className, headerImage, ...rest },
    ref,
  ) => {
    const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
      messages,
      name,
    );

    return (
      <TextFieldShared.InputContainer
        {...wrapperProps}
        style={style}
        className={className}
      >
        <PropContextProvider value={inputProps}>
          <LabelBoxed
            ref={ref}
            style={{ height: "100%", width: "100%" }}
            {...rest}
          >
            {headerImage && (
              <Styled.HeaderImageWrapper data-testid="header-image">
                <Styled.HeaderImage
                  data-testid="header-image"
                  $headerImageSize={headerImage.size}
                  src={headerImage.src}
                  alt={headerImage.alt ? headerImage.alt : ""}
                />
              </Styled.HeaderImageWrapper>
            )}
            <Styled.RootWrapper>{children}</Styled.RootWrapper>
          </LabelBoxed>
          <FieldMessages />
        </PropContextProvider>
      </TextFieldShared.InputContainer>
    );
  },
);
Root.displayName = "SelectionBoxOption.Root";

const Item = forwardRef<
  ElementRef<typeof Styled.ItemContainer>,
  SelectionBoxItemProps
>(
  (
    {
      label,
      billingPeriod,
      children,
      labelDescription,
      price,
      moreDetails,
      paymentOptionImages,
      ...rest
    },
    ref,
  ) => {
    let content;

    if (price !== undefined) {
      content = (
        <Price label={label} price={price} billingPeriod={billingPeriod} />
      );
    } else if (paymentOptionImages !== undefined) {
      content = (
        <PaymentOption
          label={label}
          paymentOptionImages={paymentOptionImages}
        />
      );
    } else {
      content = (
        <Styled.LabelWrapper>
          <Styled.Label>{label}</Styled.Label>
        </Styled.LabelWrapper>
      );
    }

    // Set aria-label from label or labelDescription to reduce copy&paste redundancy for consumers.
    // Only works for strings. This is considered a workaround for now and might be changed with
    // the upcoming SelectionBoxOption refactoring.
    const ariaLabel =
      label ||
      (typeof labelDescription === "string" ? labelDescription : undefined);

    return (
      <AriaLabelContextProvider value={{ ariaLabel: ariaLabel }}>
        <Styled.ItemContainer ref={ref} {...rest}>
          {children}
          <Styled.LabelContainer $withDescriptionLabelOnly={!label}>
            <div>
              {content}
              {paymentOptionImages === undefined && (
                <Styled.LabelDescription>
                  {labelDescription}
                </Styled.LabelDescription>
              )}
            </div>
            {moreDetails}
          </Styled.LabelContainer>
        </Styled.ItemContainer>
      </AriaLabelContextProvider>
    );
  },
);
Item.displayName = "SelectionBoxOption.Item";

const Price = ({
  label,
  price,
  billingPeriod,
}: {
  label?: string;
  price: number;
  billingPeriod?: BillingPeriod;
}) => {
  return (
    <Styled.PriceContainer>
      <Styled.Label>{label}</Styled.Label>
      {typeof price !== "undefined" && (
        <Styled.Price>
          {formatPrice(price)}{" "}
          {billingPeriod && formatBillingPeriod(billingPeriod)}
        </Styled.Price>
      )}
    </Styled.PriceContainer>
  );
};

const PaymentOption = ({
  label,
  paymentOptionImages,
}: {
  label?: string;
  paymentOptionImages: PaymentOptionImage[];
}) => {
  if (paymentOptionImages.length === 0) {
    return null;
  }

  return (
    <Styled.PaymentContainer>
      <Styled.Label $paymentLabel>{label}</Styled.Label>
      <Styled.ImageContainer>
        {paymentOptionImages.map((image, index) => (
          <Styled.PaymentOptionImage
            key={index}
            $size={paymentOptionImages.length > 1 ? "small" : undefined}
          >
            <img src={image.src} alt={image.alt ? image.alt : ""} />
          </Styled.PaymentOptionImage>
        ))}
      </Styled.ImageContainer>
    </Styled.PaymentContainer>
  );
};

const Radio = forwardRef<
  ElementRef<typeof Styled.RadioItem>,
  SelectionBoxRadioProps
>((props: SelectionBoxRadioProps, ref) => {
  const inputProps = usePropContext();
  const { ariaLabel } = useAriaLabelContext();

  return (
    <Styled.RadioItem
      ref={ref}
      aria-label={ariaLabel}
      {...inputProps}
      {...props}
    />
  );
});
Radio.displayName = "SelectionBoxOption.RadioGroupOld.Item";
RadioGroupOld.Root.displayName = "SelectionBoxOption.RadioGroupOld.Root";

const Checkbox = forwardRef<
  ElementRef<typeof Styled.CheckboxItem>,
  SelectionBoxCheckboxProps
>((props: SelectionBoxCheckboxProps, ref) => {
  const inputProps = usePropContext();
  const { ariaLabel } = useAriaLabelContext();

  return (
    <Styled.CheckboxItem
      ref={ref}
      aria-label={ariaLabel}
      {...inputProps}
      {...props}
    />
  );
});
Checkbox.displayName = "SelectionBoxOption.Checkbox";

export const SelectionBoxOption = {
  Grid,
  Item,
  Checkbox,
  RadioGroup: {
    Root: RadioGroupOld.Root,
    Item: Radio,
  },
  Root,
};
