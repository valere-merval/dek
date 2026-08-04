import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";
import { disableControls } from "../../../stories/utils/disableControls";
import { TypographyProps, TypographyVariant } from "./Typography.types";
import styled from "styled-components";
import { typography } from "../../../theme/mappings/typography";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: Typography,
  argTypes: {
    ...disableControls<TypographyProps>([
      "asChild",
      "data-testid",
      "$variant",
      "$trimFont",
      "css",
    ]),
  },
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "BodyBold12",
    color: undefined,
    children: "Typography",
  },
};

export const AsParagraph: Story = {
  args: {
    ...Default.args,
    as: "p",
  },
};

export const Trimmed: Story = {
  args: {
    ...Default.args,
    variant: "TagBlack48",
    color: undefined,
    children: "Trimmed",
    trimFont: true,
  },
  parameters: {
    backgroundColor: "white",
  },
};

const TrimmedWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
`;

const BorderedTypography = styled(Typography)`
  border: 1px solid green;
`;

export const TrimmedAll: Story = {
  args: Default.args,
  render: () => (
    <TrimmedWrapper>
      {Object.keys(typography).map((typographyVariant) => (
        <BorderedTypography
          variant={typographyVariant as TypographyVariant}
          key={typographyVariant}
          trimFont
        >
          {typographyVariant}
        </BorderedTypography>
      ))}
    </TrimmedWrapper>
  ),
};
