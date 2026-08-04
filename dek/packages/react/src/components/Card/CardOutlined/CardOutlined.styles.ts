import styled, { css } from "styled-components";
import { BackgroundColor } from "../../../theme/theme";
import { ColorVariant } from "../../../theme/mappings/color";
import { Card } from "../shared/Card";

export const outlinedColorMapping: Record<
  BackgroundColor,
  {
    borderColor: ColorVariant;
  }
> = {
  black: {
    borderColor: "NeutralSecondary40",
  },
  darkGrey: {
    borderColor: "NeutralSecondary40",
  },
  blue: {
    borderColor: "NeutralPrimaryBlack",
  },
  white: {
    borderColor: "NeutralSecondary60",
  },
  lightGrey: {
    borderColor: "NeutralSecondary60",
  },
  jaAgave20: { borderColor: "JaAgave80" },
  jaAgave80: { borderColor: "JaAgave80" },
  jaAgaveOutlinesSecondary: { borderColor: "JaAgave80" },
  jaGeneralWhite: { borderColor: "JaAgave80" },
  pennyNeutralLightGrey: { borderColor: "PennyMidnightBlueLight" },
  pennyNeutralWhite: { borderColor: "PennyMidnightBlueLight" },
  pennyRed: { borderColor: "PennyNeutralWhite" },
  pennyRedDark: { borderColor: "PennyNeutralWhite" },
};

export const Root = styled(Card.Root)(
  ({ theme }) => css`
    border: ${theme.contextSpecific.brand !== "congstarWeb" ? "1px" : "2px"}
      solid
      ${theme.color[
        outlinedColorMapping[theme.contextSpecific.backgroundColor].borderColor
      ]};
  `,
);
