import styled, { css, DefaultTheme } from "styled-components";
import * as AriaModal from "react-aria-components";
import { rgba } from "polished";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../../utils/accessibility";
import {
  backgroundColorMapping,
  backgroundTextColorMap,
} from "../../../theme/theme";

import { ButtonPrimaryCircle } from "../../Button/ButtonPrimary";
import { getScrollbarStyles } from "../../ScrollArea/ScrollArea.styles";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";
import { Button } from "react-aria-components";
import {
  defaultTextMapping,
  modalBackgroundColorMapping,
  modalTitleColorMapping,
} from "../shared/mappings";

export const MODAL_CONTAINER_NAME = "modal";

const getTitleBrandStyles = (theme: DefaultTheme) => {
  const brand = theme.contextSpecific.brand;
  switch (brand) {
    case "congstarApp":
      return css`
        text-transform: uppercase;
        font: ${theme.typography.CongstarAppDisplayLarge};

        ${up("md")} {
          font: ${theme.typography.CongstarAppDisplayExtraLarge};
        }
      `;

    case "ja":
      return css`
        font: ${theme.typography.JaDisplayLarge};
        ${up("md")} {
          font: ${theme.typography.JaDisplayExtraLarge};
        }
      `;

    case "penny":
      return css`
        font: ${theme.typography.PennyDisplayLarge};
        ${up("md")} {
          font: ${theme.typography.PennyDisplayExtraLarge};
        }
      `;

    default:
      return css`
        text-transform: uppercase;
        font: ${theme.typography.HeadlineBlack24};

        ${up("md")} {
          font: ${theme.typography.HeadlineBlack32};
        }
      `;
  }
};

export const Trigger = styled(Button)`
  cursor: pointer;
`;

export const Overlay = styled(AriaModal.ModalOverlay)<{
  $pageHeight: number;
}>(
  ({ theme, $pageHeight }) => css`
    @keyframes overlayShow {
      from {
        background-color: ${rgba(theme.color.NeutralPrimaryBlack, 0)};
      }
      to {
        background-color: ${rgba(theme.color.NeutralPrimaryBlack, 0.75)};
      }
    }

    width: 100vw;
    background-color: ${rgba(theme.color.NeutralPrimaryBlack, 0.75)};
    position: fixed;

    top: 0;
    right: 0;
    height: ${$pageHeight}px;
    left: 0;

    animation: overlayShow 150ms;
    z-index: calc(${theme.zIndex["120"]} - 1);
  `,
);

const getMobilePositioning = (
  pageHeight: number,
  visualViewportHeight: number,
  mobile: boolean,
  $fullHeight?: boolean,
) => {
  // virtual keyboard is open
  if (mobile && Math.round(visualViewportHeight) < pageHeight) {
    return css`
      top: 10px;
      bottom: auto;
      height: 100%;
      max-height: var(--visual-viewport-height);
    `;
  }
  return css`
    top: auto;
    bottom: 0;
    height: ${$fullHeight ? "90dvh" : "auto"};
    max-height: 90vh;
  `;
};

export const Modal = styled(AriaModal.Modal)<{
  $fullHeight?: boolean;
  $pageHeight: number;
  $visualViewportHeight: number;
}>(
  ({ theme, $fullHeight, $pageHeight, $visualViewportHeight }) => css`
    container-type: inline-size;
    container-name: ${MODAL_CONTAINER_NAME};
    z-index: ${theme.zIndex["120"]};
    border: 0;
    font: inherit;
    position: absolute;

    ${getMobilePositioning(
      $pageHeight,
      $visualViewportHeight,
      true,
      $fullHeight,
    )}
    left: 0;

    @keyframes contentShowDesktop {
      from {
        transform: scale(0.95);
      }
      to {
        transform: scale(1);
      }
    }

    @keyframes contentShowMobile {
      from {
        transform: translate(0, 100%);
      }
      to {
        transform: translate(0, 0);
      }
    }

    color: ${theme.color[
      backgroundTextColorMap[theme.contextSpecific.backgroundColor]
    ]};
    background-color: ${theme.color[
      backgroundColorMapping[
        modalBackgroundColorMapping[theme.contextSpecific.brand]
      ]
    ]};

    border-top-left-radius: ${theme.borderRadius["24"]};
    border-top-right-radius: ${theme.borderRadius["24"]};
    animation: contentShowMobile 300ms;
    box-shadow: ${theme.shadow.Opacity15Elevation5};
    box-sizing: border-box;
    width: 100%;

    ${highContrast()} {
      border: 2px solid transparent;
      overflow: hidden;
    }

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: ${theme.color[
        backgroundColorMapping[
          modalBackgroundColorMapping[theme.contextSpecific.brand]
        ]
      ]};

      ${up("md")} {
        height: 0;
        width: 0;
        display: none;
      }
    }

    ${up("md")} {
      ${getMobilePositioning(
        $pageHeight,
        $visualViewportHeight,
        false,
        $fullHeight,
      )}
      max-width: 975px;
      width: 95%;
      border-radius: ${theme.borderRadius["40"]};
      animation: contentShowDesktop 300ms;
      box-shadow: ${theme.shadow.Opacity15Elevation5};

      top: calc(var(--visual-viewport-height) / 2);
      left: 50%;
      bottom: auto;
      translate: -50% -50%;
    }
  `,
);

export const Dialog = styled(AriaModal.Dialog)(
  ({ theme }) => css`
    outline: none;
    max-height: inherit;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    position: relative;
    gap: ${theme.space["24"]};
    padding: ${theme.space["12"]} ${theme.space["32"]} 0 0;

    ${up("md")} {
      gap: ${theme.space["32"]};
      padding: ${theme.space["24"]} ${theme.space["40"]} 0 0;
    }
  `,
);

export const Title = styled(AriaModal.Heading)(
  ({ theme }) => css`
    all: unset;
    word-break: break-word;

    ${getTitleBrandStyles(theme)}
    color: ${theme.color[modalTitleColorMapping[theme.contextSpecific.brand]]};

    padding-left: ${theme.space["32"]};
    margin-top: ${theme.space["12"]};
    /* width of the close button */
    margin-right: ${theme.space["48"]};
    ${up("md")} {
      padding-left: ${theme.space["40"]};
      margin-top: ${theme.space["08"]};
      /* width of the close button */
      margin-right: ${theme.space["56"]};
    }
  `,
);

export const Description = styled.div<{ $paddingBottom: boolean }>(
  ({ theme, $paddingBottom }) => {
    const brand = theme.contextSpecific.brand;

    return css`
      all: unset;
      display: flex;
      flex-direction: column;
      ${textColorMixin(theme)};
      height: 100%;

      // scrollbar styling
      ${getScrollbarStyles(theme, true)}
      // the 6px margin-top is necessary to align the scrollbar with the content
      &::-webkit-scrollbar-track {
        margin: ${theme.space["06"]} 0;
      }
      margin-right: -${theme.space["16"]};
      overscroll-behavior: none;

      //  These styles are necessary to not cut of the outline of an element that is on top of this container
      margin-top: -${theme.space["08"]};
      padding-top: ${theme.space["08"]};
      //  These styles are necessary to not cut of the outline of an element that is on bottom of this container
      margin-bottom: -${theme.space["08"]};
      padding-bottom: ${theme.space["08"]};

      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
        // we need to calculate the offest because otherwise the outline will be outside of the modal (needs to be -3px)
        outline-offset: calc(-${theme.space["02"]} - ${theme.space["01"]});
      }

      font: ${theme.typography[defaultTextMapping[brand].mobile]};
      ${$paddingBottom &&
      css`
        padding-bottom: ${theme.space["32"]};
        margin-bottom: 0;
      `}

      ${up("md")} {
        font: ${theme.typography[defaultTextMapping[brand].desktop]};
        ${$paddingBottom &&
        css`
          padding-bottom: ${theme.space["40"]};
          margin-bottom: 0;
        `}
      }
    `;
  },
);

export const StepTrigger = styled.div(
  ({ theme }) => css`
    all: unset;

    cursor: pointer;
    padding-left: ${theme.space["32"]};
    ${up("md")} {
      padding-left: ${theme.space["40"]};
    }
  `,
);

export const ChildWrapper = styled.div(
  ({ theme }) => css`
    padding-left: ${theme.space["32"]};
    ${up("md")} {
      padding-left: ${theme.space["40"]};
    }
    // remove padding if StepTrigger is present
    &:has(${StepTrigger}) {
      padding-left: 0;
      ${up("md")} {
        padding-left: 0;
      }
    }
  `,
);

export const CloseButton = styled(ButtonPrimaryCircle)(
  ({ theme }) => css`
    /**
      increase css specificity adding the same class multiple times
    */
    && {
      position: absolute;
      top: ${theme.space["12"]};
      right: ${theme.space["12"]};

      ${up("md")} {
        top: ${theme.space["20"]};
        right: ${theme.space["20"]};
      }
    }
  `,
);
