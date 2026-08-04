import styled from "styled-components";

export const Content = styled.div(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.space["20"]};
  `,
);
