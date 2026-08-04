import styled, { css } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import { backgroundColorMap } from "./mappings";
import { TabsRootProps } from "./Tabs.types";
import { backgroundColorMapping } from "../../../theme/theme";
import { disableUserSelect } from "../../../utils/userSelect";

export const TABS_CONTAINER_NAME = "tabs";

const containerBreakpoints: Record<string, `${string}px`> = {
  md: "768px",
};

export const Root = styled(Tabs.Root)<TabsRootProps>`
  all: unset;
  container-type: inline-size;
  container-name: ${TABS_CONTAINER_NAME};
  width: 100%;
  display: block;
`;

export const FlexContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["16"]};

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      gap: ${theme.space["20"]};
    }
  `,
);

export const ListContainer = styled.div<{
  $sticky: boolean;
}>(
  ({ theme, $sticky }) => css`
    height: ${theme.size["48"]};

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      height: auto;
      display: flex;
      justify-content: center;
    }

    ${$sticky &&
    css`
      position: sticky;
      top: 0;
      padding-top: ${theme.space["08"]};
      padding-bottom: ${theme.space["16"]};
      background-color: ${theme.color[
        backgroundColorMapping[theme.contextSpecific.backgroundColor]
      ]};
      z-index: ${theme.zIndex["10"]};
    `}
  `,
);

export const SelectList = styled(Tabs.List)<{
  $isOpen: boolean;
}>(
  ({ theme, $isOpen }) => css`
    all: unset;
    position: relative;
    box-sizing: border-box;
    padding: ${theme.space["04"]} ${theme.space["48"]};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: ${theme.borderRadius["24"]};
    cursor: pointer;
    z-index: ${theme.zIndex["10"]};
    color: ${theme.color.InteractiveBlack};
    background-color: ${theme.color.InteractiveBlue};
    box-shadow: ${theme.shadow.Opacity15Elevation2};

    ${!$isOpen &&
    css`
      color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor].color
      ]};
      background-color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor]
          .backgroundColor
      ]};
      box-shadow: none;
      height: ${theme.size["48"]};
    `}

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      display: none;
    }
  `,
);

export const SelectTrigger = styled(Tabs.Trigger)<{
  $isOpen: boolean;
}>(
  ({ theme, $isOpen }) => css`
    all: unset;
    height: ${theme.size["40"]};
    ${disableUserSelect()};
    text-align: center;

    font: ${theme.typography.BodyLight16};
    &[aria-selected="true"] {
      font: ${theme.typography.BodyBold16};
    }

    ${!$isOpen &&
    css`
      &[aria-selected="false"] {
        display: none;
      }
    `};

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      display: none;
    }
  `,
);

export const Indicator = styled.button<{
  $isOpen: boolean;
}>(
  ({ theme, $isOpen }) => css`
    all: unset;
    position: absolute;
    top: ${theme.space[12]};
    left: ${theme.space[16]};

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      display: none;
    }

    & svg {
      width: ${theme.space["24"]};
      height: ${theme.space["24"]};
      color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor].indicatorColor
      ]};

      ${$isOpen &&
      css`
        transform: rotate(180deg);
        color: ${theme.color.InteractiveBlack};
      `}
    }
  `,
);

export const TabList = styled(Tabs.List)(
  ({ theme }) => css`
    display: none;

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      all: unset;
      display: flex;
      border-radius: ${theme.borderRadius["20"]};
      height: ${theme.space["40"]};
      background-color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor]
          .backgroundColor
      ]};
    }
  `,
);

export const TabTrigger = styled(Tabs.Trigger)(
  ({ theme }) => css`
    display: none;

    @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
      "md"
    ]}) {
      all: unset;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      ${disableUserSelect()};
      border-radius: inherit;
      font: ${theme.typography.LabelBold16};
      padding: 0 ${theme.space["20"]};
      color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor].color
      ]};
      background-color: ${theme.color[
        backgroundColorMap[theme.contextSpecific.backgroundColor]
          .backgroundColor
      ]};

      &[data-state="active"] {
        background-color: ${theme.color.InteractiveBlue};
        color: ${theme.color.InteractiveBlack};
      }
    }
  `,
);

export const Content = styled(Tabs.Content)`
  min-height: 45dvh;

  @container ${TABS_CONTAINER_NAME} (inline-size > ${containerBreakpoints[
    "md"
  ]}) {
    min-height: auto;
  }
`;
