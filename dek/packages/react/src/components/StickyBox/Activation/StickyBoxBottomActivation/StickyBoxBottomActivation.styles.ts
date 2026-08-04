import styled, { css } from "styled-components";
import { Activation } from "../Activation";
import * as Styled from "../../Base/Shared.styles";
import { backgroundColorMapping } from "../../../../theme/theme";
import { stickyBoxBackgroundColorMapping, triggerMapping } from "../mappings";
import { Divider } from "../../../Divider";

export const StickyBoxBottomActivationWrapper = styled(Activation.Root)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space[12]};
    z-index: calc(${theme.zIndex["110"]} - 1);
  `}
`;

export const Root = styled(Styled.Root)`
  ${({ theme }) => css`
    background-color: ${theme.color[
      backgroundColorMapping[
        stickyBoxBackgroundColorMapping[theme.contextSpecific.brand]
      ]
    ]};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[24]};
`;

export const Trigger = styled(Styled.Trigger)`
  ${({ theme }) => css`
    color: ${theme.color[triggerMapping[theme.contextSpecific.brand].color]};
  `}
`;

export const DividerLine = styled(Divider)`
  ${({ theme }) =>
    theme.contextSpecific.brand !== "congstarWeb" &&
    css`
      margin-top: ${theme.space["08"]};
    `}
`;

export const ButtonPrimaryWrapper = styled.div`
  width: 100%;
`;

export const ShoppingCartBaseActivation = styled(Styled.ShoppingCartBase)`
  gap: ${({ theme }) => theme.space[24]};
`;

export const SpaceBetweenContainer = styled(Styled.SpaceBetweenContainer)`
  flex-wrap: nowrap;
`;
