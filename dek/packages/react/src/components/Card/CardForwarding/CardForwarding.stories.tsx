import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardForwarding } from "./CardForwarding";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { BillingPeriod } from "../../Price/Price";
import fritzbox from "../../../../.storybook/assets/images/AVM_FRITZ_Box_7530_AX_front.avif";
import styled from "styled-components";
import { disableControls } from "../../../stories/utils/disableControls";
import { CardForwardingProps } from "./CardForwarding.types";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: CardForwarding,
  argTypes: { ...disableControls<CardForwardingProps>(["data-testid"]) },
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof CardForwarding>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = styled.div`
  max-width: 500px;
`;

export const Default: Story = {
  args: {
    title: "Fritz!Box 7530 AX",
    description: "Schnelles WLAN für Home Office, Streaming und Gaming",
    price: {
      billingPeriod: BillingPeriod.MONTHLY,
      price: 3,
      strikeThroughPrice: 4,
      footnotes: [
        {
          header: "Fritz!Box 7530 AX",
          description: (
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexDirection: "column",
              }}
            >
              <p>
                Die FRITZ!Box 7530 AX ist der zuverlässige DSL-Router für dein
                Heimnetzwerk vom Marktführer AVM. Mit WLAN-Mesh,
                Smart-Home-Funktionen und WiFi 6 bist du bestens ausgestattet.
                Wenn du auf der Suche nach einem leistungsstarken Router bist,
                ist die FRITZ!Box 7530 AX eine gute Entscheidung!
              </p>
            </div>
          ),
        },
      ],
    },
    promotionTop: "Aktion",
    headerImage: <img src={fritzbox} alt="" />,
    onClick: () => {
      console.log("clicked");
    },
  },
  render: (args) => (
    <Wrapper>
      <CardForwarding {...args} />
    </Wrapper>
  ),
};

export const AsAnchor: Story = {
  ...Default,
  args: {
    ...Default.args,
    overwriteButton: (icon) => <a href="https://congstar.de">{icon}</a>,
  },
};

export const WithTitleOnly: Story = {
  ...Default,
  args: {
    title: "FAQ-Bereich",
  },
};
