import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxSidePostpaid } from "./StickyBoxSidePostpaid";
import {
  overviewBonusDisplayPricesMock,
  bringBackMock,
  overviewOneTimeDisplayPriceMock,
  overviewRecurringDisplayPricesMock,
  paymentMethodMock,
} from "../PostpaidShoppingCart.mock";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";
import { paymentMethodsArgTypes } from "../../../../../stories/utils/paymentMethodsArgTypes";
import { AllowedBackgroundColors } from "../../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxSidePostpaid,
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
} satisfies Meta<typeof StickyBoxSidePostpaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overviewRecurringDisplayPrices: overviewRecurringDisplayPricesMock,
    overviewOneTimeDisplayPrice: overviewOneTimeDisplayPriceMock,
    checkoutUrl: "#checkout",
    checkoutButtonText: undefined,
    paymentMethods: paymentMethodMock,
  },
};

export const WithoutShippingCost: Story = {
  args: {
    overviewRecurringDisplayPrices: overviewRecurringDisplayPricesMock,
    overviewOneTimeDisplayPrice: {
      ...overviewOneTimeDisplayPriceMock,
      shipping: undefined,
    },
    checkoutUrl: "#checkout",
    checkoutButtonText: "Weiter ohne Gerät",
    paymentMethods: paymentMethodMock,
  },
};

export const WithBringback: Story = {
  args: {
    ...Default.args,
    bringback: bringBackMock,
  },
};

export const WithAllPaymentMethods: Story = {
  args: {
    ...Default.args,
    paymentMethods: [
      PaymentMethod.DIRECT_DEBIT,
      PaymentMethod.PAYPAL,
      PaymentMethod.GOOGLE_PAY,
      PaymentMethod.APPLE_PAY,
      PaymentMethod.KLARNA,
    ],
  },
};

export const WithBonuses: Story = {
  args: {
    ...Default.args,
    overviewBonusDisplayPrices: overviewBonusDisplayPricesMock,
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
