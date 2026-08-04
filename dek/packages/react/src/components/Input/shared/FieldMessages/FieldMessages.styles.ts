import styled, { css } from "styled-components";
import { MessageStatus as BaseMessageStatus } from "../../../Message/MessageStatus";

export const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["06"]};
  `,
);

export const MessageStatus = styled(BaseMessageStatus)(() => css``);
