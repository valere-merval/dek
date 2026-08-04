import styled, { css } from "styled-components";
import * as Tabs from "@radix-ui/react-tabs";
import { AppTabsOptionMap } from "./mappings";
import { highContrastBorder } from "../../../utils/accessibility";

export const Root = styled(Tabs.Root)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["24"]};
  `,
);

export const TabsList = styled(Tabs.List)(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    height: ${theme.space["32"]};
    border-radius: ${theme.space["08"]};
    box-sizing: border-box;
    padding: ${theme.space["02"]};

    background-color: ${theme.color[
      AppTabsOptionMap[theme.contextSpecific.brand].tabList.backgroundColor
    ]};
  `,
);

export const TabTrigger = styled(Tabs.Trigger)(
  ({ theme }) => css`
    all: unset;
    text-align: center;
    border: none;
    background: none;
    border-radius: ${theme.space["06"]};
    width: 100%;
    font: ${theme.typography[
      AppTabsOptionMap[theme.contextSpecific.brand].trigger.inactiveFont
    ]};
    cursor: pointer;

    color: ${theme.color[
      AppTabsOptionMap[theme.contextSpecific.brand].trigger.inactiveTextColor
    ]};

    &[data-state="active"] {
      font: ${theme.typography[
        AppTabsOptionMap[theme.contextSpecific.brand].trigger.activeFont
      ]};

      color: ${theme.color[
        AppTabsOptionMap[theme.contextSpecific.brand].trigger.activeTextColor
      ]};

      background-color: ${theme.color[
        AppTabsOptionMap[theme.contextSpecific.brand].trigger
          .activeBackgroundColor
      ]};
    }

    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
    }

    ${highContrastBorder()}
  `,
);

export const TabContent = styled(Tabs.Content)(
  ({ theme }) => css`
    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
      border-radius: ${theme.size["02"]};
    }
  `,
);
