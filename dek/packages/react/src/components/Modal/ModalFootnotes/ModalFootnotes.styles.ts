import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { Modal } from "../Modal";
import { defaultTextMapping, modalTitleColorMapping } from "../shared/mappings";
import { Headline } from "../../Typography/Headline";
import { itemHeadlineMapping } from "./mappings";

export const FootnoteWrapper = styled(Modal.Description)(({ theme }) => {
  const brand = theme.contextSpecific.brand;

  return css`
    display: flex;

    font: ${theme.typography[defaultTextMapping[brand].mobile]};

    flex-direction: column;
    gap: ${theme.space["24"]};

    ${up("md")} {
      font: ${theme.typography[defaultTextMapping[brand].desktop]};
      gap: ${theme.space["32"]};
    }
  `;
});

export const FootnoteItem = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};

    ${up("md")} {
      gap: ${theme.space["12"]};
    }
  `,
);

export const FootnoteItemHeadline = styled(Headline)`
  ${({ theme }) => {
    return css`
      color: ${theme.color[
        modalTitleColorMapping[theme.contextSpecific.brand]
      ]};
      font: ${theme.typography[
        itemHeadlineMapping[theme.contextSpecific.brand].mobile
      ]};

      ${up("md")} {
        font: ${theme.typography[
          itemHeadlineMapping[theme.contextSpecific.brand].desktop
        ]};
      }
    `;
  }}
`;
