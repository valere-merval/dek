import styled, { css } from "styled-components";

import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { getMixedColor } from "../../../../theme/mappings/color";

import { HeaderImageSize } from "./SelectionBoxOption.types";
import { RadioGroupOld } from "../../RadioGroupOld";
import { trimFont } from "../../../../theme/mappings/typography";
import { backgroundColorMap } from "../../CheckboxOld/mappings";
import { Checkbox } from "../../CheckboxOld";

export const RootWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      gap: ${theme.space[12]};
      ${up("md")} {
        gap: ${theme.space[16]};
      }
    `;
  }}
`;

export const ItemContainer = styled.label`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      align-items: flex-start;
      &:has(${PaymentContainer}) {
        align-items: center;
      }
      cursor: inherit;

      gap: ${theme.space[12]};
      ${up("md")} {
        gap: ${theme.space[16]};
      }
    `;
  }}
`;

export const HeaderImageWrapper = styled.div`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      background-color: ${theme.color.NeutralPrimaryWhite};
      display: flex;
      justify-content: center;
      padding: 2rem;

      margin-top: calc(0.4rem - ${theme.space[16]});
      margin-right: calc(0.4rem - ${theme.space[20]});
      margin-left: calc(0.4rem - ${theme.space[20]});
      margin-bottom: ${theme.space[16]};
      border-top-left-radius: ${theme.borderRadius["08"]};
      border-top-right-radius: ${theme.borderRadius["08"]};

      ${up("md")} {
        margin-top: calc(0.4rem - ${theme.space[20]});
        margin-right: calc(0.4rem - ${theme.space[24]});
        margin-left: calc(0.4rem - ${theme.space[24]});
        margin-bottom: ${theme.space[20]};
        border-top-left-radius: ${theme.borderRadius[12]};
        border-top-right-radius: ${theme.borderRadius[12]};
      }
    `;
  }}
`;

export const HeaderImage = styled.img<{
  $headerImageSize?: HeaderImageSize;
}>`
  ${({ theme, $headerImageSize = "medium" }) => {
    return css`
      height: calc(${theme.size["64"]} - 2px);
      max-width: 100%;

      ${$headerImageSize === "large" &&
      css`
        height: calc(${theme.size["96"]} - 2px);
      `}
    `;
  }}
`;

export const LabelContainer = styled.div<{
  $withDescriptionLabelOnly: boolean;
}>(
  ({ theme, $withDescriptionLabelOnly }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.space["12"]};

    // text in this position cannot be trimmed, therefore to center it perfectly it has to be moved by margin
    ${Label} {
      margin-top: -1px;

      ${up("md")} {
        margin-top: -2px;
      }

      &:has(${PaymentContainer}) {
        margin-top: 0 ${up("md")} {
          margin-top: 0;
        }
      }
    }
    // to avoid moving the labels tag inside the document,
    // it is shifted up on smaller viewports, this aligns it with the Radio/Checkbox
    ${$withDescriptionLabelOnly &&
    css`
      & ${LabelDescription} {
        display: inline-block;
        margin-top: 2px;

        ${up("md")} {
          margin-top: 0;
        }
      }
    `}
  `,
);

export const PriceContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: ${theme.space["08"]};
  `,
);

export const PaymentContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.space["08"]};
  `,
);

export const Label = styled.span<{
  $paymentLabel?: boolean;
}>(({ theme, $paymentLabel }) => {
  return css`
    ${$paymentLabel && trimFont("BodyBold16")};
    font: ${theme.typography.BodyBold16};
    ${textColorMixin(theme)};

    *:disabled + div & {
      color: ${theme.color.NeutralSecondary40};
    }

    ${up("md")} {
      ${$paymentLabel && trimFont("HeadlineBold20")};
      font: ${theme.typography.HeadlineBold20};
    }
  `;
});

export const Price = styled.span(
  ({ theme }) => css`
    text-align: right;
    white-space: nowrap;
    width: fit-content;

    font: ${theme.typography.TagBold16};
    ${textColorMixin(theme)};

    ${up("md")} {
      font: ${theme.typography.TagBold20};
    }

    *:disabled + div & {
      color: ${theme.color.NeutralSecondary40};
    }
  `,
);

export const LabelDescription = styled.span(
  ({ theme }) => css`
    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};

    ${up("md")} {
      font: ${theme.typography.BodyLight16};
    }

    *:disabled + div & {
      color: ${theme.color.NeutralSecondary40};
    }
  `,
);

export const RadioItem = styled(RadioGroupOld.Item)`
  flex-shrink: 0;
`;

export const CheckboxItem = styled(Checkbox.Root)(
  ({ theme }) => css`
    flex-shrink: 0;

    &:hover:enabled[data-state="checked"] {
      // as we avoided to use js to make the background blue for simplicity,
      // it is mandatory to restyle here as there is no way to determine the
      // true background color for the theme provider
      background-color: ${getMixedColor(
        theme,
        backgroundColorMap["blue"].hover,
      )}!important;
    }
  `,
);

interface PaymentOptionImageProps {
  $size?: string;
}

export const PaymentOptionImage = styled.div<PaymentOptionImageProps>(
  ({ theme, $size }) => css`
    border-radius: ${theme.borderRadius["04"]};
    border: 1px solid ${theme.color.NeutralSecondary60};
    background-color: ${theme.color.NeutralPrimaryWhite};
    height: ${theme.space["32"]};
    width: ${$size !== "small" ? theme.space["72"] : theme.space["48"]};
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      object-fit: contain;
    }
  `,
);

export const ImageContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["04"]};
  `,
);

export const LabelWrapper = styled.div(
  () => css`
    display: flex;
    align-items: baseline;
  `,
);
