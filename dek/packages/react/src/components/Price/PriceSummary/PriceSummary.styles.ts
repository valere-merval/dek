import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { Text } from "../../Typography/Text";
import { List } from "./Base/PriceSummaryBase.styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: inherit;
`;

export const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const UnorderedList = styled(List)`
  ${({ theme }) => {
    return css`
      ${up("md")} {
        gap: ${theme.space["16"]};
      }
      gap: ${theme.space["08"]};
    `;
  }}
`;

export const OrderedList = styled.ol`
  ${({ theme }) => {
    return css`
      all: unset;
      display: flex;
      flex-direction: column;
      li::marker {
        font-size: 0;
      }
      li:first-child {
        ${up("md")} {
          padding-top: ${theme.size["08"]};
        }
        padding-top: ${theme.size["04"]};
      }
      li:last-child {
        ${up("md")} {
          padding-bottom: 0;
        }
        padding-bottom: ${theme.size["04"]};
      }
    `;
  }}
`;

export const PriceInLineText = styled(Text)`
  display: flex;
  justify-content: space-between;
`;
