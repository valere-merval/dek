import styled, { css } from "styled-components";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { Divider as BaseDivider } from "../../Divider";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";
import {
  ButtonSecondaryLabel,
  IconTextWrapper,
} from "../../Button/ButtonSecondary/ButtonSecondary.styles";
import { typoMap } from "./mappings";
import { CardLinkListButtonProps } from "./CardLinkList.types";
import { CardFilled } from "../CardFilled";

export const Root = styled(CardFilled.Root)``;

export const Button = styled(ButtonSecondary)<CardLinkListButtonProps>(({
  theme,
}) => {
  return css`
    display: flex;
    width: 100%;
    & ${IconTextWrapper} {
      justify-content: space-between;
      width: 100%;
    }
    & ${ButtonSecondaryLabel} {
      font: ${theme.typography[typoMap[theme.contextSpecific.brand].mobile]};
      ${textColorMixin(theme)};
      text-wrap: initial;
    }
  `;
});

export const Divider = styled(BaseDivider)(
  ({ theme }) => css`
    margin: ${theme.space["02"]} 0;
    &:last-child {
      display: none;
    }
  `,
);

export const List = styled.ul(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;
    padding: ${theme.space["08"]} 0;
    /*     This workaround fixes the correct announcement and handling of lists and list items by screen readers.
     As described in the accessibility section of https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility, CSS attributes can affect how screen readers interpret HTML semantics.
     Therefore, list items with the 'list-style' or 'list-style-type' attribute set to 'none' are not interpreted as list items and lack the correct announcements (e.g. "bullet point <listitem text>") and keyboard accessibility.
     source: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility
     announcements examples: https://www.456bereastreet.com/lab/screen-readers-list-items/*/
    li::marker {
      font-size: 0;
    }
    ${ListItem}:first-of-type {
      padding-top: ${theme.space["02"]};
    }
    gap: ${theme.space["08"]};
  `,
);

export const ListItem = styled.li``;
