"use client";

import { ElementRef, forwardRef } from "react";
import {
  BoxPlanContingentProps,
  BoxPlanContingentRangeProps,
  BoxPlanPriceProps,
  BoxPlanPriceRangeProps,
  BoxPlanProps,
} from "./BoxPlan.types";
import * as Styled from "./BoxPlan.styles";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { FileOutline } from "@fair/icons";
import { Divider } from "../../Divider";
import { Typography } from "../../Typography/Typography";
import { HeadlineHighlighted } from "../../Typography/HeadlineHighlighted";
import { Price as DefaultPrice } from "../../Price/Price";
import { PriceRange as DefaultPriceRange } from "../../Price/PriceRange";
import { Contingent as DefaultContingent } from "../../Contingent/Contingent";
import { ContingentRange as DefaultContingentRange } from "../../Contingent/ContingentRange";
import { handleBoxClick } from "../shared/ButtonPrimaryForBox/ButtonPrimaryForBox";
import { List } from "../../List";

export const Item = forwardRef<ElementRef<typeof Styled.Box>, BoxPlanProps>(
  (
    {
      title: { text: titleText, color: titleColor },
      pibHref,
      contingent,
      usps,
      price,
      text,
      buttonPrimaryProps,
      buttonPrimaryLabel = "Zum Tarif",
      headlineLevel = "h3",
      ...rest
    }: BoxPlanProps, // TODO: Remove the redundant type when issue is resolved: https://github.com/reactjs/react-docgen/issues/883
    ref,
  ) => {
    return (
      <ThemeProvider backgroundColor="darkGrey">
        <Styled.Box
          promotionLabelColor="pink"
          onClick={handleBoxClick(buttonPrimaryProps)}
          ref={ref}
          {...rest}
        >
          <Styled.ContentWrapper>
            <Styled.Top>
              <HeadlineHighlighted
                size="small"
                decorativeColor={titleColor}
                as={headlineLevel}
              >
                {titleText}
              </HeadlineHighlighted>
              {text && <Typography variant="BodyBold16">{text}</Typography>}
              {usps && (
                <List.Root
                  decorativeColor={titleColor}
                  size="medium"
                  aria-label="Vorteile"
                >
                  {usps.map((usp) => (
                    <List.Item key={usp}>
                      <List.Description>{usp}</List.Description>
                    </List.Item>
                  ))}
                </List.Root>
              )}
            </Styled.Top>
            <Styled.Content>
              {contingent}
              <Styled.Footer>
                {pibHref && (
                  <ButtonSecondary
                    color="blue"
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
                {(pibHref || !!price) && <Divider color="black" />}
                {price}
                <Styled.ButtonPrimary {...buttonPrimaryProps}>
                  {buttonPrimaryLabel}
                </Styled.ButtonPrimary>
              </Styled.Footer>
            </Styled.Content>
          </Styled.ContentWrapper>
        </Styled.Box>
      </ThemeProvider>
    );
  },
);
Item.displayName = "BoxPlan.Item";

const Price = forwardRef<ElementRef<typeof DefaultPrice>, BoxPlanPriceProps>(
  (props, ref) => (
    <DefaultPrice
      {...props}
      ref={ref}
      size={{ mobile: "small", desktop: "small" }}
    />
  ),
);
Price.displayName = "BoxPlan.Price";

const PriceRange = forwardRef<
  ElementRef<typeof DefaultPriceRange>,
  BoxPlanPriceRangeProps
>((props: BoxPlanPriceRangeProps, ref) => (
  <DefaultPriceRange
    {...props}
    ref={ref}
    size={{ mobile: "small", desktop: "small" }}
  />
));
PriceRange.displayName = "BoxPlan.PriceRange";

const Contingent = forwardRef<
  ElementRef<typeof DefaultContingent>,
  BoxPlanContingentProps
>((props: BoxPlanContingentProps, ref) => (
  <DefaultContingent
    {...props}
    ref={ref}
    size={{ mobile: "medium", desktop: "medium" }}
  />
));
Contingent.displayName = "BoxPlan.Contingent";

const ContingentRange = forwardRef<
  ElementRef<typeof DefaultContingentRange>,
  BoxPlanContingentRangeProps
>((props: BoxPlanContingentRangeProps, ref) => (
  <DefaultContingentRange
    {...props}
    ref={ref}
    size={{ mobile: "medium", desktop: "medium" }}
  />
));
ContingentRange.displayName = "BoxPlan.ContingentRange";

export const BoxPlan = {
  Item,
  Price,
  PriceRange,
  Contingent,
  ContingentRange,
};
