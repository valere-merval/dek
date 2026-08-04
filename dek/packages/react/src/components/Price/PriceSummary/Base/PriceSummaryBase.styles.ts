import styled, { css } from "styled-components";
import {
  mediaBreakpoints,
  up,
} from "../../../../theme/mappings/mediaBreakpoints";
import { Divider } from "../../../Divider";
import { ButtonPrimary } from "../../../Button/ButtonPrimary";
import { mainHeadlineMapping, priceInLineTextMapping } from "../mappings";
import { Headline } from "../../../Typography/Headline";
import { headlineColorMap } from "./mappings";
import { MessageStatus } from "../../../Input/shared/FieldMessages/FieldMessages.styles";

export const Root = styled.section`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      max-width: 100%;
      ${up("md")} {
        gap: ${theme.space[40]};
      }
      gap: ${theme.space[24]};
    `;
  }}
`;

export const MainContainer = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      ${up("md")} {
        gap: ${theme.space[32]};
      }
      gap: ${theme.space[16]};
    `;
  }}
`;

export const InnerContainer = styled(MainContainer)`
  ${({ theme }) => {
    return css`
      ${up("md")} {
        flex-direction: row;
        gap: ${theme.space[32]};
      }
      gap: ${theme.space[16]};
    `;
  }}
`;

export const MainHeadline = styled(Headline)`
  ${({ theme }) => {
    return css`
      display: flex;
      flex-direction: column;
      align-items: baseline;

      font: ${theme.typography[
        mainHeadlineMapping[theme.contextSpecific.brand].mobile
      ]};
      color: ${theme.color[headlineColorMap[theme.contextSpecific.brand]]};
      gap: ${theme.space["04"]};
      ${up("md")} {
        font: ${theme.typography[
          mainHeadlineMapping[theme.contextSpecific.brand].desktop
        ]};
        flex-direction: row;
        gap: ${theme.space["08"]};
      }
    `;
  }}
`;

export const ListContainer = styled(MainContainer)(
  ({ theme }) => css`
    gap: ${theme.space["12"]};
    ${up("md")} {
      gap: ${theme.space["20"]};
    }
  `,
);

export const List = styled.ul`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;
      flex-direction: column;
      // This workaround fixes the correct announcement and handling of lists and list items by screen readers.
      // As described in the accessibility section of https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility, CSS attributes can affect how screen readers interpret HTML semantics.
      // Therefore, list items with the 'list-style' or 'list-style-type' attribute set to 'none' are not interpreted as list items and lack the correct announcements (e.g. "bullet point <listitem text>") and keyboard accessibility.
      // source: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility
      // announcements examples: https://www.456bereastreet.com/lab/screen-readers-list-items/
      li::marker {
        font-size: 0;
      }
      ${up("md")} {
        gap: ${theme.space["08"]};
      }
      gap: ${theme.space["04"]};
    `;
  }}
`;

export const ListItem = styled.li(
  () => css`
    all: unset;
    display: list-item;
  `,
);

export const PriceText = styled(Headline)<{ $price?: boolean }>(
  ({ theme, $price }) => css`
    display: flex;
    justify-content: space-between;
    ${$price && theme.contextSpecific.brand === "congstarWeb"
      ? css`
          font: ${theme.typography["TagBold20"]};
          ${up("md")} {
            font: ${theme.typography["TagBold24"]};
          }
        `
      : css`
          font: ${theme.typography[
            priceInLineTextMapping[theme.contextSpecific.brand].mobile
          ]};
          ${up("md")} {
            font: ${theme.typography[
              priceInLineTextMapping[theme.contextSpecific.brand].desktop
            ]};
          }
        `}
  `,
);

export const HorizontalDivider = styled(Divider)`
  ${up("md")} {
    display: none;
  }
`;

export const VerticalDivider = styled(Divider)`
  @media (max-width: calc(${mediaBreakpoints["md"]} - 1px)) {
    display: none;
  }
`;

export const FooterContainer = styled(MainContainer)`
  ${({ theme }) => {
    return css`
      justify-content: space-between;
      gap: ${theme.space["20"]};
      align-items: flex-start;
      ${up("md")} {
        gap: ${theme.space["16"]};
        flex-direction: row;
        align-items: center;
      }
    `;
  }}
`;

export const Button = styled(ButtonPrimary)`
  white-space: nowrap;
  ${up("md")} {
    align-self: flex-end;
    width: fit-content;
  }
  width: 100%;
`;

// TODO: Incorporate into FieldMessages component
export const FieldMessageContainer = styled.div(
  () => css`
    display: contents;

    :has(${MessageStatus}) {
      display: block;
    }
  `,
);
