import { Button, Calendar as AriaCalendar } from "react-aria-components";
import styled, { css } from "styled-components";
import { highContrast } from "../../../../../utils/accessibility";

export const Calendar = styled(AriaCalendar)(
  ({ theme }) => css`
    width: fit-content;
    max-width: 100%;
    min-width: fit-content;
    position: relative;
    color: ${theme.color.NeutralPrimaryBlack};
    background-color: ${theme.color.NeutralPrimaryWhite};
  `,
);

export const CalendarHeading = styled.div(
  ({ theme }) => css`
    all: unset;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${theme.size["24"]};
  `,
);

export const CalendarNavigationButton = styled(Button)(
  ({ theme }) => css`
    all: unset;
    background-color: transparent;
    cursor: pointer;
    height: fit-content;
    width: fit-content;

    &:disabled {
      cursor: default;
      & svg {
        color: ${theme.color.NeutralSecondary60};

        ${highContrast()} {
          color: GrayText;
        }
      }
    }

    &:not(:disabled):focus-visible,
    &:not(:disabled):hover {
      outline: 2px solid ${theme.color.NeutralPrimaryBlack};
      outline-offset: ${theme.space["04"]};
      border-radius: ${theme.borderRadius[56]};
    }

    & svg {
      width: ${theme.space["20"]};
      height: ${theme.space["20"]};
      vertical-align: middle;
      color: ${theme.color.InteractiveBlack};

      ${highContrast()} {
        @media (prefers-color-scheme: dark) {
          color: ${theme.color.InteractiveWhite};
        }
      }
    }
  `,
);

export const CalendarGridContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.space["56"]};
    flex-wrap: wrap;
  `,
);
