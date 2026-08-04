"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import {
  BoxDevicePriceSecondaryInfo,
  BoxDevicePriceSecondaryInfoComplex,
  BoxDeviceProps,
  BringbackMultiPrice,
  BringbackPrices,
  BringbackSingularPrice,
} from "./BoxDevice.types";
import * as Styled from "./BoxDevice.styles";
import { ForwardTradeInInfoBubble } from "./BoxDevice.styles";
import * as StyleBase from "../shared/BoxDevice.styles";
import { Headline } from "../../../Typography/Headline";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { ColorVariants } from "../../../ColorVariants";
import { Divider } from "../../../Divider";
import { BackgroundColor } from "../../../../theme/theme";
import { BoxDeviceGrid } from "../shared/BoxDeviceGrid";
import { ButtonPrimaryForBox } from "../../shared/ButtonPrimaryForBox";
import { handleBoxClick } from "../../shared/ButtonPrimaryForBox/ButtonPrimaryForBox";
import { formatPrice } from "../../../../utils/pricing";
import { generateMemorySizeString } from "../shared/utils";
import { Bringback, FileOutline } from "@fair/icons";
import { ButtonSecondary } from "../../../Button/ButtonSecondary";
import { EnergyLabel } from "../../../EnergyLabel";

BoxDeviceGrid.displayName = "BoxDevice.Grid";

const getSecondaryInfo = (priceSecondaryInfo: BoxDevicePriceSecondaryInfo) => {
  if ("text" in priceSecondaryInfo) {
    return priceSecondaryInfo.text;
  } else {
    return (
      <>
        {priceSecondaryInfo.prefix} {formatPrice(priceSecondaryInfo.price)}
        &nbsp;
        {priceSecondaryInfo.strikeThroughPrice &&
          priceSecondaryInfo.price < priceSecondaryInfo.strikeThroughPrice && (
            <PriceStrikeThrough price={priceSecondaryInfo.strikeThroughPrice} />
          )}
        {priceSecondaryInfo.suffix && priceSecondaryInfo.suffix}
      </>
    );
  }
};

const isBringbackSingularPrice = (
  price: BoxDevicePriceSecondaryInfoComplex | BringbackPrices,
): price is BringbackSingularPrice => {
  return (
    "bringbackInformation" in price &&
    typeof price.bringbackInformation === "string" &&
    price.bringbackInformation !== ""
  );
};

const isBringbackMultiPrice = (
  price: BoxDevicePriceSecondaryInfoComplex | BringbackPrices,
): price is BringbackMultiPrice => {
  return "bringbackPrices" in price && Array.isArray(price.bringbackPrices);
};

const parsePrice = (
  price: BoxDevicePriceSecondaryInfoComplex | BringbackPrices,
): {
  defaultPrice?: BoxDevicePriceSecondaryInfoComplex;
  bringbackSingularPrice?: BringbackSingularPrice;
  bringbackMultiPrice?: BringbackMultiPrice;
} => {
  if (isBringbackSingularPrice(price)) {
    return {
      bringbackSingularPrice: price,
      defaultPrice: price as BoxDevicePriceSecondaryInfoComplex,
    };
  } else if (isBringbackMultiPrice(price)) {
    return {
      bringbackMultiPrice: price,
    };
  } else {
    return {
      defaultPrice: price as BoxDevicePriceSecondaryInfoComplex,
    };
  }
};

const MultiPriceRow = (priceComplex: BoxDevicePriceSecondaryInfoComplex) => {
  return (
    <Styled.MultiPriceRow>
      {priceComplex.prefix && <>{priceComplex.prefix}&nbsp;</>}
      <Styled.ActualPrice>{formatPrice(priceComplex.price)}</Styled.ActualPrice>
      {/* The price will be rendered with a tag font, which has a smaller line height then the body font for prefix, strikeThrough and suffix. Therefore the white space will be rendered with the body font as well */}
      &nbsp;
      {priceComplex.suffix && priceComplex.suffix}
    </Styled.MultiPriceRow>
  );
};

export const Item = forwardRef<
  ElementRef<typeof StyleBase.Box>,
  BoxDeviceProps
>(
  (
    {
      image,
      price,
      priceSecondaryInfo,
      title,
      colors,
      memorySizes,
      pibHref,
      buttonPrimaryProps,
      backgroundColor = "darkGrey",
      headlineLevel = "h3",
      energyLabel,
      tabIndex,
      ...rest
    }: BoxDeviceProps, // TODO: Remove the redundant type when issue is resolved: https://github.com/reactjs/react-docgen/issues/883
    ref,
  ) => {
    const memorySizeString = generateMemorySizeString(memorySizes);
    const { defaultPrice, bringbackMultiPrice, bringbackSingularPrice } =
      parsePrice(price);

    return (
      <ThemeProvider backgroundColor={backgroundColor as BackgroundColor}>
        <StyleBase.ItemContainer ref={ref} tabIndex={tabIndex}>
          <StyleBase.Box
            $backgroundColor={backgroundColor}
            onClick={handleBoxClick(buttonPrimaryProps)}
            {...rest}
          >
            {energyLabel && (
              <StyleBase.EnergyLabelContainer>
                <EnergyLabel rating={energyLabel} />
              </StyleBase.EnergyLabelContainer>
            )}
            <StyleBase.ImageWrapper>{image}</StyleBase.ImageWrapper>
            <Styled.Content>
              <Styled.ContentTop>
                <Headline variant="bold" size="medium" as={headlineLevel}>
                  {title}
                </Headline>
                <Styled.ProductSpecs>
                  {memorySizes.length > 0 && (
                    <StyleBase.MemorySizes>
                      {memorySizeString}
                    </StyleBase.MemorySizes>
                  )}
                  <ColorVariants colors={colors} />
                </Styled.ProductSpecs>
              </Styled.ContentTop>
              <Styled.ContentBottom>
                {(bringbackMultiPrice || bringbackSingularPrice) && (
                  <ForwardTradeInInfoBubble aria-hidden>
                    <Bringback />
                  </ForwardTradeInInfoBubble>
                )}
                {defaultPrice && (
                  <Styled.PriceRow>
                    {defaultPrice.prefix && <>{defaultPrice.prefix}&nbsp;</>}
                    <Styled.ActualPrice>
                      {formatPrice(defaultPrice.price)}
                    </Styled.ActualPrice>
                    {/* The price will be rendered with a tag font, which has a smaller line height then the body font for prefix, strikeThrough and suffix. Therefore the white space will be rendered with the body font as well */}
                    &nbsp;
                    {defaultPrice.strikeThroughPrice &&
                      defaultPrice.price < defaultPrice.strikeThroughPrice && (
                        <PriceStrikeThrough
                          price={defaultPrice.strikeThroughPrice}
                        />
                      )}
                    {defaultPrice.suffix && defaultPrice.suffix}
                  </Styled.PriceRow>
                )}
                {bringbackSingularPrice && (
                  <Styled.BringbackSuffix>
                    {bringbackSingularPrice.bringbackInformation}
                  </Styled.BringbackSuffix>
                )}
                {bringbackMultiPrice && (
                  <Styled.MultiPriceRowWrapper>
                    <MultiPriceRow
                      {...bringbackMultiPrice.bringbackPrices[0]}
                    />
                    <Styled.MultiDivider orientation="vertical" color="black" />
                    <MultiPriceRow
                      {...bringbackMultiPrice.bringbackPrices[1]}
                    />
                  </Styled.MultiPriceRowWrapper>
                )}

                {priceSecondaryInfo && (
                  <>
                    <Divider
                      aria-hidden
                      color={
                        backgroundColor === "darkGrey" ? "black" : "lightGrey"
                      }
                    />
                    <Styled.SecondaryPrice>
                      {getSecondaryInfo(priceSecondaryInfo)}
                    </Styled.SecondaryPrice>
                  </>
                )}
              </Styled.ContentBottom>
              <ButtonPrimaryForBox {...buttonPrimaryProps}>
                Zum Gerät
              </ButtonPrimaryForBox>
              {pibHref && (
                <ButtonSecondary
                  color={backgroundColor === "darkGrey" ? "blue" : "black"}
                  asChild
                  startIcon={<FileOutline />}
                >
                  <a
                    onClick={(event) => event.stopPropagation()}
                    href={pibHref}
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    Produktinformationsblatt
                  </a>
                </ButtonSecondary>
              )}
            </Styled.Content>
          </StyleBase.Box>
        </StyleBase.ItemContainer>
      </ThemeProvider>
    );
  },
);
Item.displayName = "BoxDevice.Item";

export const PriceStrikeThrough = ({ price }: { price: number }) => (
  <Styled.StrikeThroughRoot>
    {"statt "}
    <Styled.StrikeThrough>{formatPrice(price)}</Styled.StrikeThrough>
    <>&nbsp;</>
  </Styled.StrikeThroughRoot>
);
PriceStrikeThrough.displayName = "PriceStrikeThrough";

const Skeleton = forwardRef<
  ElementRef<typeof StyleBase.Skeleton>,
  ComponentPropsWithoutRef<"div">
>((props: ComponentPropsWithoutRef<"div">, ref) => {
  return <StyleBase.Skeleton ref={ref} {...props} />;
});
Skeleton.displayName = "BoxDevice.Skeleton";

export const BoxDevice = {
  Grid: BoxDeviceGrid,
  Item,
  Skeleton,
};
