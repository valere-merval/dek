"use client";

import { ElementRef, forwardRef } from "react";
import { Text } from "../../../Typography/Text";
import { FileOutline } from "@fair/icons";
import { BoxDevicePlanProps } from "./BoxDevicePlan.types";
import * as UniqueStyles from "./BoxDevicePlan.styles";
import * as StyleBase from "../shared/BoxDevice.styles";
import { Headline } from "../../../Typography/Headline";
import { ThemeProvider } from "../../../../theme/ThemeProvider";
import { Divider } from "../../../Divider";
import { BackgroundColor } from "../../../../theme/theme";
import { ButtonSecondary } from "../../../Button/ButtonSecondary";
import { BoxDeviceGrid } from "../shared/BoxDeviceGrid";
import { ColorVariants } from "../../../ColorVariants";
import { ButtonPrimaryForBox } from "../../shared/ButtonPrimaryForBox";
import { handleBoxClick } from "../../shared/ButtonPrimaryForBox/ButtonPrimaryForBox";
import { BillingPeriod } from "../../../../utils/pricing";
import { generateMemorySizeString } from "../shared/utils";
import { EnergyLabel } from "../../../EnergyLabel";

const Styled = { ...UniqueStyles, ...StyleBase };

BoxDeviceGrid.displayName = "BoxDevicePlan.Grid";
export const Item = forwardRef<
  ElementRef<typeof Styled.Box>,
  BoxDevicePlanProps
>(
  (
    {
      image,
      description,
      price,
      title,
      pibHref,
      buttonPrimaryProps,
      colors,
      memorySizes,
      backgroundColor = "darkGrey",
      headlineLevel = "h3",
      energyLabel,
      tabIndex,
      ...rest
    }: BoxDevicePlanProps, // TODO: Remove the redundant type when issue is resolved: https://github.com/reactjs/react-docgen/issues/883
    ref,
  ) => {
    const memorySizesString = generateMemorySizeString(memorySizes);

    return (
      <ThemeProvider backgroundColor={backgroundColor as BackgroundColor}>
        <Styled.ItemContainer ref={ref} tabIndex={tabIndex}>
          <Styled.Box
            $backgroundColor={backgroundColor}
            onClick={handleBoxClick(buttonPrimaryProps)}
            {...rest}
          >
            {energyLabel && (
              <StyleBase.EnergyLabelContainer>
                <EnergyLabel rating={energyLabel} />
              </StyleBase.EnergyLabelContainer>
            )}
            <Styled.ImageWrapper>{image}</Styled.ImageWrapper>
            <Styled.Content>
              <Styled.ContentTop>
                <Headline variant="bold" size="medium" as={headlineLevel}>
                  {title}
                </Headline>{" "}
                <Styled.ProductSpecs>
                  {memorySizes.length > 0 && (
                    <Styled.MemorySizes>{memorySizesString}</Styled.MemorySizes>
                  )}
                  <ColorVariants colors={colors} />
                </Styled.ProductSpecs>
              </Styled.ContentTop>
              <Styled.ContentBottom>
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
                <Divider
                  color={backgroundColor === "darkGrey" ? "black" : "lightGrey"}
                />
                <Styled.Price
                  size={{
                    mobile: "small",
                    desktop: "small",
                  }}
                  {...price}
                  billingPeriod={BillingPeriod.MONTHLY}
                />
                <Text variant="light" size="medium">
                  {description}
                </Text>
              </Styled.ContentBottom>
              <Styled.BoxDeviceButtonWrapper>
                <ButtonPrimaryForBox {...buttonPrimaryProps}>
                  Zum Gerät
                </ButtonPrimaryForBox>
              </Styled.BoxDeviceButtonWrapper>
            </Styled.Content>
          </Styled.Box>
        </Styled.ItemContainer>
      </ThemeProvider>
    );
  },
);
Item.displayName = "BoxDevicePlan.Item";

export const BoxDevicePlan = {
  Grid: BoxDeviceGrid,
  Item,
};
