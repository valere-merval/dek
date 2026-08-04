import styled, { css, keyframes } from "styled-components";
import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronUp } from "@fair/icons";
import { highContrastBorder } from "../../../../utils/accessibility";

export const Root = styled(Collapsible.Root)<{
  position: "fixed" | "sticky";
}>(
  ({ position, theme }) => css`
    all: unset;
    display: revert;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.color.NeutralShape20};
    color: ${theme.color.NeutralPrimaryWhite};
    border-top-left-radius: ${theme.borderRadius[24]};
    border-top-right-radius: ${theme.borderRadius[24]};
    z-index: ${theme.zIndex["110"]};
    box-shadow: ${theme.shadow.Opacity50Elevation3};
    position: ${position};
    ${highContrastBorder()}
  `,
);

export const DimmedBackground = styled(Collapsible.Root)(
  ({ theme }) => css`
    all: unset;
    display: revert;
    position: fixed;

    // 'inset' is not supported in older browsers, so we use top, right, bottom and left instead
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: calc(${theme.zIndex["110"]} - 1);

    &[data-state="open"] {
      opacity: 1;
      transition: opacity 225ms ease-in-out 0ms;
      visibility: visible;
    }

    &[data-state="closed"] {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 225ms ease-in-out 0ms,
        visibility 0s ease-in-out 225ms;
    }
  `,
);

export const ArrowIcon = styled(ChevronUp)`
  width: ${(props) => props.theme.size[24]};
  height: ${(props) => props.theme.size[24]};
  transition: transform 300ms ease-in-out;
`;

export const Trigger = styled(Collapsible.Trigger)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &[data-state="open"] ${ArrowIcon} {
    transform: rotate(180deg);
  }
`;

const openAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-collapsible-content-height);
  }
`;

const closeAnimation = keyframes`
  from {
    height: var(--radix-collapsible-content-height);
  }
  to {
    height: 0;
  }
`;

export const Content = styled(Collapsible.Content)`
  overflow-y: auto;
  // to prevent cutting off focus outlines
  padding: 0 ${({ theme }) => theme.space["08"]};
  margin: 0 -${({ theme }) => theme.space["08"]};

  &[data-state="open"] {
    animation: ${openAnimation} 300ms ease-out;
  }

  &[data-state="closed"] {
    animation: ${closeAnimation} 300ms ease-out;
  }
`;
