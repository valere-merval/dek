import { CheckCircleOutline, CrossCircleOutline } from "@fair/icons";
import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { backgroundColorMapping } from "../../../theme/theme";
import { Text } from "../../Typography/Text";
import { Headline } from "../../Typography/Headline";
import { truncateText } from "../../../theme/mappings/typography";
import { highContrast } from "../../../utils/accessibility";
import { ButtonSecondary } from "../../Button/ButtonSecondary";

export const Root = styled.div(
  ({ theme }) => css`
    all: unset;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${theme.color[
      backgroundColorMapping[theme.contextSpecific.backgroundColor]
    ]};
    padding: ${theme.space["16"]} ${theme.space["20"]};
    border-radius: ${theme.borderRadius[16]};
    justify-content: space-between;
    gap: ${theme.space["08"]};

    ${highContrast()} {
      border: 2px solid transparent;
    }

    ${up("md")} {
      max-height: unset;
      box-shadow: none;
      padding: ${theme.space["32"]};
      gap: ${theme.space["20"]};
    }
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: ${theme.space["04"]};
    justify-content: center;
    ${up("md")} {
      gap: ${theme.space["12"]};
    }
  `,
);

export const SuccessIcon = styled(CheckCircleOutline)(
  ({ theme }) => css`
    color: ${theme.color.StatusOnDarkSuccess};
  `,
);

export const ErrorIcon = styled(CrossCircleOutline)(
  ({ theme }) => css`
    color: ${theme.color.StatusOnDarkError};
  `,
);

export const HeadlineTruncated = styled(Headline)(
  () => css`
    ${truncateText}
  `,
);

export const TextDescription = styled(Text)(
  () => css`
    overflow: visible !important;
    white-space: break-spaces !important;
    ${up("md")} {
      transform: translateY(1px);
    }
    ${truncateText};
  `,
);

export const Button = styled(ButtonSecondary)(
  () => css`
    width: fit-content;
  `,
);

export const Description = styled.div(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex-direction: row;
    gap: ${theme.space["08"]};

    svg {
      min-height: ${theme.space["20"]};
      min-width: ${theme.space["20"]};
      position: relative;
      transform: translateY(2px);
      ${up("md")} {
        transform: translateY(4px);
      }
      ${highContrast()} {
        color: CanvasText;
      }
    }
  `,
);
