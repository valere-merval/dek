import {
  CalendarCell as AriaCalendarCell,
  CalendarGrid as AriaCalendarGrid,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  Heading,
} from "react-aria-components";
import styled, { css } from "styled-components";
import { trimFont } from "../../../../../theme/mappings/typography";
import { highContrast } from "../../../../../utils/accessibility";

export const CalenderHeadingWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 0 ${theme.space["24"]};
  `,
);

export const CalendarHeading = styled(Heading)(
  ({ theme }) => css`
    all: unset;
    display: flex;
    align-items: center;
    font: ${theme.typography.BodyBold16};
    ${trimFont("BodyBold16")};
    height: ${theme.size["24"]};
  `,
);

export const CalendarMonth = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["16"]};
  `,
);

export const CalendarHeaderCell = styled(AriaCalendarHeaderCell)(
  ({ theme }) => css`
    font: ${theme.typography.BodyBold14};
    cursor: default;
  `,
);

export const CalendarGrid = styled(AriaCalendarGrid)(
  ({ theme }) => css`
    border-spacing: ${theme.space[16]};
    margin: -${theme.space[16]};
    td {
      padding: 0;
    }
  `,
);

export const CalendarCell = styled(AriaCalendarCell)(
  ({ theme }) => css`
    box-sizing: border-box;
    display: flex;
    font: ${theme.typography.BodyLight14};
    border-radius: ${theme.borderRadius[32]};
    justify-content: center;
    align-items: center;
    width: ${theme.size[32]};
    height: ${theme.size[32]};
    margin: auto;
    outline: none;
    cursor: pointer;

    &[data-focus-visible],
    &:not([data-unavailable])[data-hovered] {
      outline: 2px solid ${theme.color.NeutralPrimaryBlack};
    }

    &[data-selected] {
      background-color: ${theme.color.InteractiveBlue};
      font: ${theme.typography.BodyBold14};
    }

    &[data-unavailable] {
      color: ${theme.color.NeutralSecondary40};
      text-decoration: line-through;
      cursor: default;
    }

    &[data-outside-month] {
      display: none;
    }

    &[data-today] {
      text-decoration: underline;
    }

    ${highContrast()} {
      &[data-selected] {
        forced-color-adjust: none;
        background-color: Highlight;
        color: HighlightText;
      }

      &[data-unavailable] {
        color: GrayText;
      }
    }
  `,
);
