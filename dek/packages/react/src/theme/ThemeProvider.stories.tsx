import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider } from "./ThemeProvider";
import { backgroundColorMapping, backgroundColors } from "./theme";
import { BillingPeriod, Price } from "../components/Price/Price";
import styled, { css } from "styled-components";
import { HeadlineHighlighted } from "../components/Typography/HeadlineHighlighted";

const meta = {
  title: "Getting Started/ThemeProvider",
  component: ThemeProvider,
  argTypes: {
    backgroundColor: {
      control: "radio",
      type: "string",
      options: backgroundColors,
    },
  },
  parameters: {
    noPaddingX: true,
  },
  tags: ["!dev"],
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Background = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space["20"]};
    flex-direction: column;
    background-color: ${theme.color[
      backgroundColorMapping[theme.contextSpecific.backgroundColor]
    ]};
    padding: ${theme.space["08"]};
  `,
);

export const Default: Story = {
  args: {
    backgroundColor: "black",
    brand: "congstarWeb",
    children: (
      <Background>
        <HeadlineHighlighted>Theme Provider</HeadlineHighlighted>
        <Price
          size={{
            mobile: "small",
            desktop: "medium",
          }}
          prefix="Mindestens"
          price={25.99}
          billingPeriod={BillingPeriod.SIX_MONTHS}
        ></Price>
      </Background>
    ),
  },
};
