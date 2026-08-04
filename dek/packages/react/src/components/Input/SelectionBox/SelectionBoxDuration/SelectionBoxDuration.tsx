"use client";

import React, { ElementRef, forwardRef } from "react";
import * as Styled from "./SelectionBoxDuration.styles";
import { LabelBoxed } from "../LabelBoxed";
import {
  SelectionBoxDurationPriceProps,
  SelectionBoxDurationPricesProps,
  SelectionBoxDurationRadioItemProps,
  SelectionBoxDurationRootProps,
  SelectionBoxDurationTotalPriceProps,
} from "./SelectionBoxDuration.types";
import { SelectionBoxGrid } from "../Grid/SelectionBoxGrid";
import { formatPrice } from "../../../../utils/pricing";
import { RadioGroupOld } from "../../RadioGroupOld";

// this workaround allows components imported into separate files to display different display names, this is important for the storybook code samples
const Grid: typeof SelectionBoxGrid = forwardRef((props, ref) => (
  <SelectionBoxGrid {...props} {...ref} />
));
Grid.displayName = "SelectionBoxDuration.Grid";

/**
 * @deprecated Please use the SelectionBoxRadio with the dedicated duration property instead.
 */

const Root = forwardRef<
  ElementRef<typeof LabelBoxed>,
  SelectionBoxDurationRootProps
>(({ children, moreDetails, ...rest }: SelectionBoxDurationRootProps, ref) => {
  return (
    <LabelBoxed ref={ref} {...rest}>
      <Styled.DurationWrapper>
        {children}
        {moreDetails && (
          <Styled.MoreDetailsWrapper>{moreDetails}</Styled.MoreDetailsWrapper>
        )}
      </Styled.DurationWrapper>
    </LabelBoxed>
  );
});
Root.displayName = "SelectionBoxDuration.Root";

const RadioItem = forwardRef<
  ElementRef<typeof Styled.RadioItem>,
  SelectionBoxDurationRadioItemProps
>(({ children, ...rest }: SelectionBoxDurationRadioItemProps, ref) => {
  return (
    <Styled.ItemWrapper>
      <Styled.RadioItem ref={ref} {...rest} />
      <Styled.RadioLabelText>{children}</Styled.RadioLabelText>
    </Styled.ItemWrapper>
  );
});
RadioItem.displayName = "SelectionBoxDuration.RadioGroup.Item";

// this workaround allows components imported into separate files to display different display names, this is important for the storybook code samples
const RadioRoot: typeof RadioGroupOld.Root = forwardRef((props, ref) => (
  <RadioGroupOld.Root {...props} {...ref} />
));
RadioRoot.displayName = "SelectionBoxDuration.RadioGroup.Root";

const Divider = forwardRef<ElementRef<typeof Styled.Separator>>(
  (props, ref) => {
    return <Styled.Separator color="black" ref={ref} {...props} />;
  },
);
Divider.displayName = "SelectionBoxDuration.Divider";

export const Prices = forwardRef<
  ElementRef<typeof Styled.Prices>,
  SelectionBoxDurationPricesProps
>((props: SelectionBoxDurationPricesProps, ref) => {
  return <Styled.Prices ref={ref} {...props} />;
});
Prices.displayName = "SelectionBoxDuration.Prices";

const Price = forwardRef<
  ElementRef<typeof Styled.Price>,
  SelectionBoxDurationPriceProps
>(
  (
    {
      price,
      priceLabel,
      strikeThroughPrice,
      ...rest
    }: SelectionBoxDurationPriceProps,
    ref,
  ) => {
    return (
      <Styled.Price ref={ref} {...rest}>
        <Styled.PriceLabel>{priceLabel}</Styled.PriceLabel>
        <Styled.PriceText>
          {formatPrice(price, undefined, { useCentsForSmallValues: true })}
          {strikeThroughPrice && price < strikeThroughPrice && (
            <>
              &nbsp;
              <Styled.StrikeThroughPrice>
                {"statt "}
                <del>
                  {formatPrice(strikeThroughPrice, undefined, {
                    useCentsForSmallValues: true,
                  })}
                </del>
                <>&nbsp;</>
              </Styled.StrikeThroughPrice>
            </>
          )}
        </Styled.PriceText>
      </Styled.Price>
    );
  },
);
Price.displayName = "SelectionBoxDuration.Price";

const TotalPrice = forwardRef<
  ElementRef<typeof Styled.TotalPrice>,
  SelectionBoxDurationTotalPriceProps
>(
  (
    {
      price,
      priceLabel,
      strikeThroughPrice,
      ...rest
    }: SelectionBoxDurationTotalPriceProps,
    ref,
  ) => {
    return (
      <Styled.TotalPrice ref={ref} {...rest}>
        <Styled.TotalPriceDescription>
          <Styled.TotalPriceText>
            {formatPrice(price, undefined, { useCentsForSmallValues: true })}
          </Styled.TotalPriceText>
          {strikeThroughPrice && price < strikeThroughPrice && (
            <>
              &nbsp;
              <Styled.StrikeThroughPrice>
                {"statt "}
                <del>
                  {formatPrice(strikeThroughPrice, undefined, {
                    useCentsForSmallValues: true,
                  })}
                </del>
                <>&nbsp;</>
              </Styled.StrikeThroughPrice>
            </>
          )}{" "}
          <span>{priceLabel}</span>
        </Styled.TotalPriceDescription>
      </Styled.TotalPrice>
    );
  },
);
TotalPrice.displayName = "SelectionBoxDuration.TotalPrice";

export const SelectionBoxDuration = {
  Grid,
  Root,
  RadioGroup: {
    Root: RadioRoot,
    Item: RadioItem,
  },
  Price,
  Prices,
  TotalPrice,
  Divider,
};
