import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxSidePrepaid } from "./StickyBoxSidePrepaid";
import {
  prepaidYearPlanElementMock,
  priceElementYearMock,
  shoppingCardPropsMock,
} from "../PrepaidShoppingCart.mock";
import { paymentMethodsArgTypes } from "../../../../../stories/utils/paymentMethodsArgTypes";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";
import { AllowedBackgroundColors } from "../../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxSidePrepaid,
  argTypes: {
    ...paymentMethodsArgTypes,
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
} satisfies Meta<typeof StickyBoxSidePrepaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: shoppingCardPropsMock,
};

export const PrepaidYearPlan: Story = {
  args: {
    ...Default.args,
    priceElement: priceElementYearMock,
    planElement: prepaidYearPlanElementMock,
  },
};

export const WithCustomButtonText: Story = {
  args: {
    ...Default.args,
    checkoutButtonText: "Weiter zur Kasse",
  },
};

export const WithAllPaymentMethods: Story = {
  args: {
    ...Default.args,
    checkoutButtonText: "Weiter zur Kasse",
    paymentMethods: [
      PaymentMethod.DIRECT_DEBIT,
      PaymentMethod.PAYPAL,
      PaymentMethod.GOOGLE_PAY,
      PaymentMethod.APPLE_PAY,
      PaymentMethod.KLARNA,
    ],
  },
};

export const WithCheckoutHandler: Story = {
  args: {
    ...Default.args,
    checkoutUrl: undefined,
    onCheckout: (event) => {
      event.preventDefault();
      alert("Checkout clicked");
    },
  },
};
