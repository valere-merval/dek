import styled, { css } from "styled-components";
import { typographyMapping } from "./mappings";
import { backgroundTextColorMap } from "../../../theme/theme";
import { List } from "../../List";

export const BoldText = styled.span(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography[
      typographyMapping[theme.contextSpecific.brand].boldText
    ]};
  `,
);

export const Headline = styled.h3(
  ({ theme }) => css`
    all: unset;
    display: revert;
    font: ${theme.typography[
      typographyMapping[theme.contextSpecific.brand].headline
    ]};
    color: ${theme.color[
      backgroundTextColorMap[theme.contextSpecific.backgroundColor]
    ]};
  `,
);

export const ListRoot = styled(List.Root)(
  ({ theme }) => css`
    gap: ${theme.space[12]};
  `,
);
