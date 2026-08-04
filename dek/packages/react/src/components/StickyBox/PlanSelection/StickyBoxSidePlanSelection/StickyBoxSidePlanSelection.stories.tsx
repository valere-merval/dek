import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxSidePlanSelection } from "./StickyBoxSidePlanSelection";
import { plans } from "../PlanSelectionCart.mock";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxSidePlanSelection.Root,
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
} satisfies Meta<typeof StickyBoxSidePlanSelection.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pibHref:
      "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
    selectedTitle: "Allnet Flat S mit GB+",
  },
  render: (args) => (
    <StickyBoxSidePlanSelection.Root {...args}>
      <StickyBoxSidePlanSelection.RadioGroup.Root
        defaultValue={String(plans[0].id)}
        name="plan-selection"
        label="Wähle deinen Tarif"
        hideLabel={true}
        onChange={(value) => {
          console.log(value);
        }}
      >
        {plans.map((plan) => (
          <StickyBoxSidePlanSelection.RadioGroup.Item
            key={plan.id}
            value={String(plan.id)}
            contingent={plan.contingent}
            price={plan.price}
          />
        ))}
      </StickyBoxSidePlanSelection.RadioGroup.Root>
    </StickyBoxSidePlanSelection.Root>
  ),
};
