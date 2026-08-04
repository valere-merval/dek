import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxBottomPlanSelection } from "./StickyBoxBottomPlanSelection";
import { StickyBoxSidePlanSelection } from "../StickyBoxSidePlanSelection";
import { plans } from "../PlanSelectionCart.mock";
import { AllowedBackgroundColors } from "../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxBottomPlanSelection.Root,
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
} satisfies Meta<typeof StickyBoxBottomPlanSelection.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pibHref:
      "www.congstar.de/fileadmin/produktinformationsblatt/Produktinformationsblatt_426.pdf",
    selectedTitle: plans[0].title,
    selectedPrice: plans[0].price,
    selectedContingent: plans[0].contingent,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    return (
      <StickyBoxBottomPlanSelection.Root
        {...args}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <StickyBoxSidePlanSelection.RadioGroup.Root
          defaultValue={String(plans[0].id)}
          name="plan-selection"
          label="Wähle deinen Tarif"
          hideLabel={true}
          onChange={(v) => {
            console.log(v);
          }}
        >
          {plans.map((plan) => (
            <StickyBoxBottomPlanSelection.RadioGroup.Item
              key={plan.id}
              value={String(plan.id)}
              contingent={plan.contingent}
              price={plan.price}
            />
          ))}
        </StickyBoxSidePlanSelection.RadioGroup.Root>
      </StickyBoxBottomPlanSelection.Root>
    );
  },
};
