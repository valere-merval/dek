import styled, { css } from "styled-components";
import { StickyBoxSide } from "../../../Base/StickyBoxSide/StickyBoxSide.styles";

export const PostpaidStickyBoxSide = styled(StickyBoxSide)(
  ({ theme }) => css`
    gap: ${theme.space[16]};
  `,
);
