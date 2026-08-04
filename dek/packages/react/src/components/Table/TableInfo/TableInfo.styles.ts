import styled, { css } from "styled-components";
import { TableBasic } from "../shared";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { Divider } from "../../Divider";
import { Text } from "../../Typography/Text";

export const Root = styled(TableBasic.Root)(() => css``);

export const Body = styled(TableBasic.RowGroup)(() => css``);

export const Head = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: ${theme.space["12"]};
    ${up("md")} {
      gap: ${theme.space["16"]};
    }
  `,
);

export const Row = styled(TableBasic.Row)(
  ({ theme }) => css`
    display: grid;
    padding: ${theme.space["16"]} 0;
    row-gap: ${theme.space["04"]};

    ${up("md")} {
      grid-template-columns: 1fr 1fr;
      padding: ${theme.space["24"]} 0;
    }

    &:last-of-type {
      padding-bottom: 0;
    }
  `,
);

export const RowDivider = styled(Divider)`
  &:last-child {
    display: none;
  }
`;

export const RowHead = styled(TableBasic.RowHead)(() => css``);

export const RowHeadText = styled(Text)(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["08"]};
  `,
);

export const Cell = styled(TableBasic.Cell)``;
