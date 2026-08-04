import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvailabilityCheckStart } from "./AvailabilityCheckStart";
import { Modal } from "../../Modal/Modal";
import { AvailabilityCheckStartProps } from "./AvailabilityCheckStart.types";
import { AllowedBackgroundColors } from "../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: AvailabilityCheckStart,
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
} satisfies Meta<typeof AvailabilityCheckStart>;

export default meta;
type Story = StoryObj<typeof meta>;

const WithModalWrapper = (props: AvailabilityCheckStartProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <AvailabilityCheckStart
        {...props}
        onButtonClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
      />
      <Modal.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Modal.Content>
          <Modal.Title>Verfügbarkeitsprüfung</Modal.Title>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
WithModalWrapper.displayName = "WithModalWrapper";

export const Default: Story = {
  args: {
    text: "Ist der Tarif bei dir verfügbar?",
    onButtonClick: () => {
      alert("Clicked");
    },
    backgroundColor: "white",
  },
};

export const WithModal: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => <WithModalWrapper {...args} />,
};
