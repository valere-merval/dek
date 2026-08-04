import styled, { css } from "styled-components";
import { Headline as BaseHeadline } from "../../../Typography/Headline";
import {
  headlineColorMap,
  headlineTypoMap,
  paddingBottomMap,
} from "./mappings";

export const Root = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.space["12"]};
    padding-bottom: ${theme.space[
      paddingBottomMap[theme.contextSpecific.brand]
    ]};
  `,
);

export const Headline = styled(BaseHeadline)(
  ({ theme }) => css`
    flex: 1;
    font: ${theme.typography[
      headlineTypoMap[theme.contextSpecific.brand].mobile
    ]};
    color: ${theme.color[headlineColorMap[theme.contextSpecific.brand]]};
  `,
);
