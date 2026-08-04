import {
  TabList as AriaTabList,
  Tabs as AriaTabs,
  Tab as AriaTab,
  TabPanel as AriaTabPanel,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { containerUp } from "../../../utils/container";
import { backgroundColorMap } from "./mappings";
import { highContrast } from "../../../utils/accessibility";
import { disableUserSelect } from "../../../utils/userSelect";
import { backgroundColorMapping } from "../../../theme/theme";
export const TABLIST_CONTAINER_NAME = "tabs";

const containerBreakpoint = "768px";

export const Root = styled(AriaTabs)(
  () => css`
    container-name: ${TABLIST_CONTAINER_NAME};
    container-type: inline-size;
    display: flex;
  `,
);

export const FlexWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["16"]};
    width: 100%;
    ${containerUp(TABLIST_CONTAINER_NAME, containerBreakpoint)} {
      gap: ${theme.space["20"]};
    }
  `,
);

export const ListWrapper = styled.div<{ $sticky?: boolean }>(
  ({ theme, $sticky }) => css`
    display: flex;
    ${$sticky &&
    css`
      position: sticky;
      top: 0;
      padding-top: ${theme.space["08"]};
      padding-bottom: ${theme.space["16"]};
      background-color: ${theme.color[
        backgroundColorMapping[theme.contextSpecific.backgroundColor]
      ]};
      outline: 2px solid
        ${theme.color[
          backgroundColorMapping[theme.contextSpecific.backgroundColor]
        ]};
      ${highContrast()} {
        outline: none;
      }
      z-index: ${theme.zIndex["10"]};
    `}
  `,
);

export const List = styled(AriaTabList)(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: ${theme.space["08"]};
    border-radius: ${theme.borderRadius["20"]};

    ${containerUp(TABLIST_CONTAINER_NAME, containerBreakpoint)} {
      background-color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor]
          .backgroundColor
      ]};
      gap: 0;
      ${highContrast()} {
        border: 1px solid transparent;
      }
    }
  `,
);
export const Tab = styled(AriaTab)(
  ({ theme }) => css`
    all: unset;
    display: flex;

    height: ${theme.space["40"]};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${disableUserSelect()};

    padding: 0 ${theme.space["16"]};
    color: ${theme.color[
      backgroundColorMap[theme.contextSpecific.backgroundColor].color
    ]};

    border-radius: ${theme.borderRadius["20"]};
    font: ${theme.typography.LabelBold14};
    background-color: ${theme.color[
      backgroundColorMap[theme.contextSpecific.backgroundColor].backgroundColor
    ]};

    &:focus-visible {
      z-index: 1;
      ${theme.contextSpecific.focusStyles}
    }
    ${highContrast()} {
      border: 1px solid transparent;
      &:focus-visible {
        outline-color: AccentColor;
      }
    }

    ${containerUp(TABLIST_CONTAINER_NAME, containerBreakpoint)} {
      padding: 0 ${theme.space["20"]};
      font: ${theme.typography.LabelBold16};
      ${highContrast()} {
        border: none;
      }
    }

    &[data-selected] {
      background-color: ${theme.color.InteractiveBlue};
      color: ${theme.color.InteractiveBlack};

      ${highContrast()} {
        background-color: CanvasColor;
        border: 1px solid ActiveText;
        color: ActiveText;
      }
    }
  `,
);

export const Content = styled(AriaTabPanel)`
  min-height: 45dvh;

  ${containerUp(TABLIST_CONTAINER_NAME, containerBreakpoint)} {
    min-height: initial;
  }
`;
