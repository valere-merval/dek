import styled from "styled-components";

export const DetailTextItem = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[12]};
  flex-direction: column;
`;

export const DetailTextParagraph = styled.p`
  margin: 0;
`;
