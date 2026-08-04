import styled, { css } from "styled-components";
import { Headline as HeadlineBase } from "../../Typography/Headline";
import { textColorMixin } from "../../Typography/themeBackgroundColorMapping";

export const Headline = styled(HeadlineBase)(
  ({ theme }) => css`
    margin: 0;
    font: ${theme.typography["HeadlineBold20"]};
    ${textColorMixin(theme)}
  `,
);

export const CardPriceOverviewContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[12]};
  `,
);

export const CardPriceOverviewDescriptionContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);
