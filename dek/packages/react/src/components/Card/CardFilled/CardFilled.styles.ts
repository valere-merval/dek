import styled, { css, DefaultTheme } from "styled-components";
import { Card } from "../shared/Card";
import { LabelPromoted } from "../../Typography/LabelPromoted";
import { ConvertToTransient } from "../../propTypes";
import {
  CardFilledColor,
  CardFilledHeaderImageSize,
  CardFilledProps,
} from "./CardFilled.types";
import { CardSize } from "../shared/Card.types";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { CardOptionMap } from "../shared/mapping";
import {
  backgroundColorMapping,
  footerDividerColorMapping,
  headerImageBackgroundColorMapping,
} from "./mappings";
import { highContrast } from "../../../utils/accessibility";

export const Root = styled(Card.Root)<
  ConvertToTransient<CardFilledProps, "backgroundColor"> & {
    $isClickable: boolean;
  }
>(
  ({ theme, $backgroundColor, $isClickable }) => css`
    background: ${theme.color[backgroundColorMapping[$backgroundColor]]};
    position: relative;
    display: flex;
    flex-direction: column;

    ${$isClickable
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: auto;
        `}
  `,
);

const sharedStyles = (
  $size: CardSize,
  theme: DefaultTheme,
  isFooter: boolean,
) => {
  return css`
    background-color: ${theme.color[
      footerDividerColorMapping[theme.contextSpecific.brand][
        theme.contextSpecific.backgroundColor as CardFilledColor
      ]
    ]};

    margin: ${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
      ]} -${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingX
      ]};
    padding: ${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
      ]}
      ${theme.space[
        CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingX
      ]};
    padding-top: calc(
      ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
        ]} +
        ${theme.space["08"]}
    );

    ${up("md")} {
      margin: ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
        ]} -${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingX
        ]};
      padding: ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
        ]}
        ${theme.space[
          CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingX
        ]};
      padding-top: calc(
        ${theme.space[
            CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
          ]} +
          ${theme.space["08"]}
      );
    }

    // only use negative margin bottom if it is a footer
    ${isFooter
      ? css`
          margin-bottom: -${theme.space[
              CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
            ]};
          ${up("md")} {
            margin-bottom: -${theme.space[
                CardOptionMap[theme.contextSpecific.brand][$size].desktop
                  .paddingY
              ]};
          }
        `
      : css`
          margin-bottom: ${theme.space[
            CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
          ]};
          ${up("md")} {
            margin-bottom: ${theme.space[
              CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
            ]};
          }
        `}
  `;
};

export const Footer = styled.div<{
  $size: CardSize;
}>(
  ({ theme, $size }) => css`
    ${sharedStyles($size, theme, true)};

    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  `,
);

export const Divider = styled.div<{ $size: CardSize }>(
  ({ theme, $size }) => css`
    ${sharedStyles($size, theme, false)};
  `,
);

export const PromotionTop = styled(LabelPromoted)`
  ${({ theme }) => {
    return css`
      position: absolute;
      top: -1rem;

      right: ${theme.space[20]};
      ${up("md")} {
        right: ${theme.space[24]};
      }
      ${highContrast()} {
        outline: 1px solid transparent;
      }
    `;
  }}
`;

export const HeaderImageWrapper = styled.div<{
  $headerImageSize: CardFilledHeaderImageSize;
  $size: CardSize;
  $headerImageSidePaddingCorrection?: boolean;
}>`
  ${({ theme, $headerImageSize, $size, $headerImageSidePaddingCorrection }) => {
    return css`
      box-sizing: border-box;
      background-color: ${theme.color[
        headerImageBackgroundColorMapping[theme.contextSpecific.backgroundColor]
      ]};
      display: flex;
      justify-content: center;
      padding: ${theme.space[20]};

      margin-top: calc(
        ${theme.space[
            CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingY
          ]} *
          -1 + ${theme.space["04"]}
      );
      margin-right: calc(
        ${theme.space[
            CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingX
          ]} *
          -1 + ${theme.space["04"]}
      );
      margin-left: calc(
        ${theme.space[
            CardOptionMap[theme.contextSpecific.brand][$size].mobile.paddingX
          ]} *
          -1 + ${theme.space["04"]}
      );
      ${$headerImageSidePaddingCorrection &&
      theme.contextSpecific.brand === "congstarWeb"
        ? css`
            margin-right: calc(
              ${theme.space[20]} * -1 + ${theme.space["04"]}
            );
            margin-left: calc(
              ${theme.space[20]} * -1 + ${theme.space["04"]}
            );

            ${up("md")} {
              margin-right: calc(
                ${theme.space[
                    CardOptionMap[theme.contextSpecific.brand][$size].desktop
                      .paddingX
                  ]} *
                  -1 + ${theme.space["04"]}
              );
              margin-left: calc(
                ${theme.space[
                    CardOptionMap[theme.contextSpecific.brand][$size].desktop
                      .paddingX
                  ]} *
                  -1 + ${theme.space["04"]}
              );
            }
          `
        : ``}
      ${up("md")} {
        margin-top: calc(
          ${theme.space[
              CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingY
            ]} *
            -1 + ${theme.space["04"]}
        );
        margin-right: calc(
          ${theme.space[
              CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingX
            ]} *
            -1 + ${theme.space["04"]}
        );
        margin-left: calc(
          ${theme.space[
              CardOptionMap[theme.contextSpecific.brand][$size].desktop.paddingX
            ]} *
            -1 + ${theme.space["04"]}
        );
      }
      border-top-left-radius: calc(
        var(--card-border-radius) - ${theme.space["04"]}
      );
      border-top-right-radius: calc(
        var(--card-border-radius) - ${theme.space["04"]}
      );

      margin-bottom: ${theme.space[16]};
      ${up("md")} {
        margin-bottom: ${theme.space[20]};
      }

      img {
        height: calc(${theme.size["64"]});
        max-width: 100%;

        ${$headerImageSize === "large" &&
        css`
          height: calc(${theme.size["96"]});
        `}
      }
    `;
  }}
`;
