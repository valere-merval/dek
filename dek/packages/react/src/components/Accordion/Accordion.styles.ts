import styled, { css } from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "@fair/icons";
import { svgColorMap, typoMap } from "./mappings";
import { AccordionWrapperProps } from "./Accordion.types";
import { rotateUpsideDown } from "../../animations/rotateUpsideDown";
import { up } from "../../theme/mappings/mediaBreakpoints";
import { textColorMixin } from "../Typography/themeBackgroundColorMapping";
import { ConvertToTransient } from "../propTypes";
import { highContrast } from "../../utils/accessibility";
import { SizeVariant } from "../../theme/mappings/size";
import { trimFont } from "../../theme/mappings/typography";
import { SpaceVariant } from "../../theme/mappings/space";
import { Divider } from "../Divider";

const chevronSize: SizeVariant = "24";
const chevronGap: SpaceVariant = "08";

export const Root = styled(Accordion.Root)(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;

    gap: ${theme.space["08"]};
  `,
);

export const ContentBody = styled.div<{
  $isIndented?: boolean;
  $additionalTopPadding?: boolean;
}>(
  ({ theme, $isIndented, $additionalTopPadding }) => css`
    padding-top: ${theme.space[$additionalTopPadding ? "12" : "04"]};
    padding-bottom: ${theme.space["08"]};

    ${$isIndented &&
    css`
      padding-left: calc(
        ${theme.space[chevronSize]} + ${theme.space[chevronGap]}
      );
    `}
  `,
);

export const ContentOverflow = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    padding: ${theme.space["08"]};
    margin: -${theme.space["08"]};
  `,
);

export const Content = styled(Accordion.Content)<{
  $animationsEnabled?: boolean;
}>`
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  /*
   * The animation is only enabled after the first paint to avoid a layout
   * shift for initially open items: a CSS @keyframes animation starts
   * automatically on first paint, which on SSR runs before hydration and
   * slides the open content in from height 0 (see radix-ui/primitives#2891).
   * Once enabled, Radix' inline animationName:none keeps initially open items
   * from re-triggering until the user actually toggles them.
   */
  ${({ $animationsEnabled }) =>
    $animationsEnabled &&
    css`
      &[data-state="open"] {
        animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
      }

      &[data-state="closed"] {
        animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
      }
    `}
`;

export const TextWrapper = styled.span<
  ConvertToTransient<AccordionWrapperProps, "size">
>(({ theme, $size }) => {
  const brandTypoMap = typoMap[theme.contextSpecific.brand];
  return css`
    all: unset;
    ${textColorMixin(theme)};
    font: ${theme.typography[brandTypoMap[$size || "medium"].label]};
    ${up("md")} {
      font: ${theme.typography[brandTypoMap[$size || "large"].label]};
    }
  `;
});

export const PriceWrapper = styled.span<
  ConvertToTransient<AccordionWrapperProps, "size">
>(({ theme, $size }) => {
  const brandTypoMap = typoMap[theme.contextSpecific.brand];
  return css`
    all: unset;
    ${textColorMixin(theme)};
    font: ${theme.typography[brandTypoMap[$size || "medium"].price]};
    ${trimFont(brandTypoMap[$size || "medium"].price)}
    ${up("md")} {
      font: ${theme.typography[brandTypoMap[$size || "large"].price]};
      ${trimFont(brandTypoMap[$size || "large"].price)}
    }
  `;
});

export const InfoWrapper = styled.span<
  ConvertToTransient<AccordionWrapperProps, "size">
>(({ theme, $size }) => {
  const brandTypoMap = typoMap[theme.contextSpecific.brand];
  return css`
    all: unset;
    ${textColorMixin(theme)};
    font: ${theme.typography[brandTypoMap[$size || "medium"].info]};
    ${trimFont(brandTypoMap[$size || "medium"].info)}
    ${up("md")} {
      font: ${theme.typography[brandTypoMap[$size || "large"].info]};
      ${trimFont(brandTypoMap[$size || "large"].info)}
    }
  `;
});

export const Trigger = styled(Accordion.Trigger)`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;
      background-color: inherit;
      padding: 0;
      border: none;
      justify-content: space-between;
      gap: ${theme.space[chevronGap]};
      align-items: center;
      cursor: pointer;
    `;
  }}
`;

export const HeaderContainer = styled.div<
  ConvertToTransient<AccordionWrapperProps, "size">
>(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0;
    flex-wrap: nowrap;
    width: 100%;
    align-items: center;

    &:has(${Trigger}:focus-visible) {
      ${theme.contextSpecific.focusStyles}
      border-radius: ${theme.borderRadius["08"]};
    }
  `,
);

export const Chevron = styled(ChevronDown)`
  ${({ theme }) => {
    return css`
      min-width: ${theme.size[chevronSize]};
      height: ${theme.size[chevronSize]};
      color: ${theme.color[svgColorMap[theme.contextSpecific.backgroundColor]]};

      ${rotateUpsideDown};
      transform: rotate(-90deg);
      ${Trigger}[data-state="open"] & {
        transform: rotate(0);
      }

      ${highContrast()} {
        color: ButtonText;
      }
    `;
  }}
`;

export const RowDivider = styled(Divider)`
  &:last-child {
    display: none;
  }
`;
