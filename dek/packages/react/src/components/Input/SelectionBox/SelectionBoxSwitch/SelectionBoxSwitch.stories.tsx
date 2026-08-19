import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectionBoxSwitch } from "./SelectionBoxSwitch";
import { Bringback } from "@fair/icons";
import { ButtonMoreDetails } from "../../../Button/ButtonMoreDetails";
import { ModalFootnotes } from "../../../Modal/ModalFootnotes";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: SelectionBoxSwitch,
  parameters: {
    backgroundColor: "white",
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
} satisfies Meta<typeof SelectionBoxSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "congstar-rücknahme-vorteil",
    name: "congstar-rücknahme-vorteil",
    title: "congstar Rücknahmedeal",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    icon: <Bringback />,
    switchDescription: "Vorteil nutzen",
    moreDetails: (
      <ButtonMoreDetails
        role="link"
        onClick={() => {
          alert("mehr details");
        }}
      >
        Details und Rücknahmekonditionen
      </ButtonMoreDetails>
    ),
  },
};

export const WithModal: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-mit-modal",
    name: "congstar-rücknahme-vorteil-mit-modal",
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
          <ButtonMoreDetails>
            Details und Rücknahmekonditionen
          </ButtonMoreDetails>
        }
      />
    ),
  },
};

export const WithoutLink: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-ohne-link",
    name: "congstar-rücknahme-vorteil-ohne-link",
    title: "congstar Rücknahmedeal",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    icon: <Bringback />,
    switchDescription: "Vorteil nutzen",
  },
};

export const WithoutIcon: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-ohne-icon",
    name: "congstar-rücknahme-vorteil-ohne-icon",
    title: "congstar Rücknahmedeal",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    switchDescription: "Vorteil nutzen",
    onCheckedChange: (checked) => {
      console.log(checked);
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    id: "congstar-rücknahme-vorteil-error",
    name: "rücknahme-fehler",
    messages: [
      {
        message: "Bitte akzeptiere die Pflicht Option",
        type: "error",
      },
    ],
    title: "congstar Rücknahmedeal",
    description:
      "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %.",
    switchDescription: "Vorteil nutzen",
    onCheckedChange: (checked) => {
      console.log(checked);
    },
  },
};
