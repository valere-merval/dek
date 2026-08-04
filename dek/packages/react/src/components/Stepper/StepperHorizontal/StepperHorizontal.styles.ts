import styled, { css } from "styled-components";
import { StepperList } from "../shared/Stepper.styles";
import { Divider } from "../../Divider";

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["20"]};
  `,
);

export const List = styled(StepperList)(
  ({ theme }) => css`
    position: relative;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.space["20"]};
  `,
);

export const Item = styled.li(
  ({ theme }) => css`
    all: unset;
    display: flex;
    gap: ${theme.space["20"]};
    z-index: 2;
  `,
);

export const Separator = styled(Divider)`
  position: absolute;
  margin: 0;
  z-index: 1;
  width: calc(100% - 2px);
  top: 50%;
  transform: translateY(-50%);
`;
