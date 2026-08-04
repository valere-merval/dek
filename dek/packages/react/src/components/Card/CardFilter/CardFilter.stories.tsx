import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardFilter } from "./CardFilter";
import { Bringback } from "@fair/icons";
import { ButtonMoreDetails } from "../../Button/ButtonMoreDetails";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
};

const meta = {
  component: CardFilter,
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
} satisfies Meta<typeof CardFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "congstar-rücknahme-vorteil",
    name: "congstar-rücknahme-vorteil",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    title: "congstar Rücknahmedeal",
    headlineLevel: "h2",
    icon: <Bringback />,
    switchDescription: "Vorteil nutzen",
    onCheckedChange: (value?: boolean) => {
      alert(`value is: ${value}`);
    },
    moreDetails: (
      <ButtonMoreDetails linkText="Details und Rücknahmekonditionen" />
    ),
  },
  render: (args) => (
    <form>
      <CardFilter {...args} />
    </form>
  ),
};

export const WithoutIcon: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-without-icon",
    name: "congstar-rücknahme-vorteil-without-icon",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    title: "congstar Rücknahmedeal",
    headlineLevel: "h2",
    switchDescription: "Vorteil nutzen",
    onCheckedChange: (value?: boolean) => {
      alert(`value is: ${value}`);
    },
    moreDetails: (
      <ButtonMoreDetails linkText="Details und Rücknahmekonditionen" />
    ),
  },
  render: (args) => (
    <form>
      <CardFilter {...args} />
    </form>
  ),
};

export const WithModal: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-modal",
    name: "congstar-rücknahme-vorteil-modal",
    title: "congstar Rücknahmedeal",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    icon: <Bringback />,
    switchDescription: "Vorteil nutzen",
    moreDetails: (
      <ModalFootnotes
        footnotes={[
          {
            description: (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <p>Den congstar Rücknahme Deal jetzt nutzen.</p>
              </div>
            ),
            header: "congstar Rücknahmedeal",
          },
        ]}
        trigger={
          <ButtonMoreDetails linkText="Details und Rücknahmekonditionen" />
        }
      />
    ),
  },
};
