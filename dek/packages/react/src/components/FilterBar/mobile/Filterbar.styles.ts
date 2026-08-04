import styled, { css } from "styled-components";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { ChevronDown } from "@fair/icons";
import { ButtonPrimary, ButtonPrimaryCircle } from "../../Button/ButtonPrimary";
import { rotateUpsideDown } from "../../../animations/rotateUpsideDown";
import { highContrast, highContrastBorder } from "../../../utils/accessibility";
import { getFocusStyles } from "../../../theme/theme";
import { Accordion } from "../../Accordion";

export const Root = styled.div<{ $sticky?: boolean }>(
  ({ theme, $sticky }) => css`
    all: unset;
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;

    ${highContrastBorder()};
    ${highContrast()} {
      border-radius: ${theme.borderRadius["12"]};
    }
    ${$sticky &&
    css`
      position: sticky;
      top: 20px;
      box-shadow: ${theme.shadow.Opacity50Elevation2};
    `}

    ${up("md")} {
      display: none;
    }
  `,
);

export const Fieldset = styled.fieldset`
  all: unset;
  border: none;
  width: 100%;
  display: block;
`;

const FilterBaseButton = styled.button(
  ({ theme }) => css`
    all: unset;
    display: flex;
    flex: 1;
    align-items: center;
    gap: ${theme.space["08"]};
    justify-content: center;

    color: ${theme.color.InteractiveBlue};
    font: ${theme.typography.LabelBold16};
    cursor: pointer;
    position: relative;

    background-color: ${theme.color.NeutralShape20};
    padding: ${theme.space["08"]} ${theme.space["24"]};

    &:focus-visible {
      ${getFocusStyles("darkGrey")};
      z-index: 1;
    }
  `,
);

export const FilterButton = styled(FilterBaseButton)(
  ({ theme }) => css`
    border-top-left-radius: ${theme.borderRadius["12"]};
    border-bottom-left-radius: ${theme.borderRadius["12"]};
  `,
);

export const SortingButton = styled(FilterBaseButton)(
  ({ theme }) => css`
    border-top-right-radius: ${theme.borderRadius["12"]};
    border-bottom-right-radius: ${theme.borderRadius["12"]};
  `,
);

export const DividerContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    min-width: 2px;
    background-color: ${theme.color.NeutralShape20};
    padding: ${theme.space["08"]} 0;
  `,
);

export const TriggerIcon = styled(ChevronDown)(
  ({ theme }) => css`
    width: ${theme.space["24"]};
    height: ${theme.space["24"]};

    color: ${theme.color.InteractiveBlue};
    translate: 0px 2px;
    ${rotateUpsideDown};
    transform: rotate(0deg);
    button[data-state="open"] & {
      transform: rotate(180deg);
    }
  `,
);
export const AccordionDescription = styled(Accordion.Content)(
  ({ theme }) => css`
    margin-top: ${theme.space["12"]};
  `,
);

export const ApplyButton = styled(ButtonPrimary)(() => css``);

export const PaddingWrapper = styled.div(
  ({ theme }) => css`
    padding-left: ${theme.space["32"]};
    padding-bottom: ${theme.space["32"]};
  `,
);

export const StepBackButton = styled(ButtonPrimaryCircle)(
  ({ theme }) => css`
    margin-left: -${theme.space["20"]};

    ${up("md")} {
      margin-left: -${theme.space["16"]};
    }
  `,
);
