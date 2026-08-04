import styled, { css } from "styled-components";
import { Text } from "../../../Typography/Text";
import { StickyBoxBottom } from "../../Base/StickyBoxBottom";
import * as Collapsible from "@radix-ui/react-collapsible";

export const STICKYBOX_BOTTOM_CONTAINER_NAME = "sticky-box-bottom";

export const Root = styled(StickyBoxBottom.Root)(
  ({ theme }) => css`
    box-sizing: border-box;
    max-width: 375px;
    padding-top: ${theme.space["20"]};
    padding-right: ${theme.space["20"]};
    padding-bottom: ${theme.space["12"]};
    padding-left: ${theme.space["20"]};

    display: flex;
    flex-direction: column;
    gap: ${theme.space["20"]};
    container-type: inline-size;
    container-name: ${STICKYBOX_BOTTOM_CONTAINER_NAME};
    ${ButtonCircleWrapper} {
      display: block;
    }
    ${ButtonPrimaryWrapper} {
      display: none;
    }
    @container ${STICKYBOX_BOTTOM_CONTAINER_NAME} (inline-size > 315px) {
      ${ButtonCircleWrapper} {
        display: none;
      }
      ${ButtonPrimaryWrapper} {
        display: block;
        width: 100%;
      }
    }
  `,
);

export const ButtonCircleWrapper = styled.div`
  align-self: flex-end;
`;
export const ButtonPrimaryWrapper = styled.div`
  align-self: flex-end;
`;

export const SelectedTarifInfo = styled(Text)(
  ({ theme }) => css`
    margin-bottom: ${theme.space["04"]};
  `,
);

export const ButtonTrigger = styled(Collapsible.Trigger)``;

// distance cannot be implemented with gap due to restrictions on control over the dom caused by the use of the Radix Collapsible component
export const TriggerContainer = styled.div<{ $open: boolean }>(
  ({ theme, $open }) => css`
    margin-top: ${$open ? theme.space["20"] : 0};
    margin-bottom: ${$open ? theme.space["04"] : 0};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: ${theme.space["20"]};

    // TODO why does this not come from the original component?
    color: ${theme.color.InteractiveBlue};
  `,
);

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

export const TarifDisplay = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);
