import styled, { css } from "styled-components";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../../../utils/accessibility";
import { Headline } from "../../../Typography/Headline";
import { Text } from "../../../Typography/Text";
import { Switch } from "../../Switch/Switch";

export const CardContainer = styled.div(
  ({ theme }) => css`
    all: unset;

    position: relative;

    padding: ${theme.space["16"]} ${theme.space["20"]};
    ${up("md")} {
      padding: ${theme.space["20"]} ${theme.space["24"]};
    }

    border-radius: ${theme.borderRadius["16"]};
    background-color: ${theme.color["NeutralShape80"]};
    &:has(button[aria-invalid]) {
      border: 2px solid ${theme.color["StatusOnLightError"]};
    }
    ${highContrast()} {
      border: 2px solid transparent;
    }

    &:has(${SwitchRoot}:focus-visible) {
      outline: 2px solid ${theme.color.NeutralPrimaryBlack};
      outline-offset: ${theme.space["04"]};
      ${SwitchRoot} {
        outline: none;
      }
    }

    &:has([data-state="checked"]) {
      background-color: ${theme.color["InteractiveBlue"]};
      ${SwitchRoot} {
        background-color: ${theme.color["InteractiveBlack"]};
        ${highContrast()} {
          background-color: CanvasText;
        }
      }
    }

    &:hover:not(:has(button:disabled)) {
      background-color: oklch(
        from ${theme.color["NeutralShape80"]} l c h / ${theme.opacity.Degree75}
      );
      ${SwitchRoot} {
        background-color: oklch(
          from ${theme.color["InteractiveBlack"]} l c h /
            ${theme.opacity.Degree15}
        );
      }
      &:has(button[aria-invalid]):not(:has([data-state="checked"])) {
        ${SwitchRoot} {
          background-color: oklch(
            from ${theme.color["StatusOnLightError"]} l c h /
              ${theme.opacity.Degree15}
          );
        }
      }
      &:has([data-state="checked"]) {
        background-color: oklch(
          from ${theme.color["InteractiveBlue"]} l c h /
            ${theme.opacity.Degree75}
        );
        ${SwitchRoot} {
          background-color: ${theme.color["InteractiveBlack"]};
          ${highContrast()} {
            background-color: CanvasText;
          }
        }
      }
    }
  `,
);

export const Label = styled.label<{ $disabled?: boolean }>(
  ({ $disabled }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    position: absolute;
    inset: 0;
    ${$disabled &&
    css`
      cursor: not-allowed;
    `}
  `,
);

export const ContentContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["06"]};
  `,
);

export const Header = styled(Headline)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => css`
    ${$disabled &&
    css`
      color: ${theme.color.NeutralSecondary40};
    `}
  `,
);

export const DescriptionIconContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.space["16"]};
    ${up("md")} {
      gap: ${theme.space["20"]};
    }
  `,
);

export const Description = styled(Text)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => css`
    ${$disabled &&
    css`
      color: ${theme.color.NeutralSecondary40};
    `}
  `,
);

export const MoreDetailsWrapper = styled.div(
  ({ theme }) => css`
    z-index: ${theme.zIndex["10"]};
    width: fit-content;
    ${up("md")} {
      button {
        font: ${theme.typography["BodyLight16"]};
      }
    }
  `,
);

export const SwitchContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.space["12"]};
    margin-top: ${theme.space["16"]};
  `,
);

export const SwitchRoot = styled(Switch.Root)<{ $disabled?: boolean }>(
  ({ theme }) => css`
    background-color: ${theme.color["NeutralShape80"]};
  `,
);

export const SwitchLabel = styled(Switch.Label)<{ $disabled?: boolean }>(
  ({ theme, $disabled }) => css`
    ${$disabled &&
    css`
      color: ${theme.color.NeutralSecondary40};
    `}
  `,
);
