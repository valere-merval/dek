import styled, { css } from "styled-components";
import { highContrast } from "../../../../../utils/accessibility";
import { Text } from "../../../../Typography/Text";

export const Root = styled(Text)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: ${theme.space["16"]} 0 ${theme.space["24"]} 0;

    ${highContrast} {
      outline: 1px solid transparent;
    }
  `,
);
