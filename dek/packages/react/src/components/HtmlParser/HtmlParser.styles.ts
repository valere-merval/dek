import styled from "styled-components";

export const Root = styled.div`
  //  We can't use flexbox gap here, because flexbox identifies text (no html tag) as a Text-Node and will set a gap between them.
  /**
    increase css specificity by adding the same class multiple times
  */
  &&& > * + * {
    margin-top: ${({ theme }) => theme.space["08"]};
  }
`;
