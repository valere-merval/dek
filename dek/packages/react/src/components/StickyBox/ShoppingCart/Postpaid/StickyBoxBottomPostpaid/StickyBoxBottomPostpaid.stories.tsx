import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxBottomPostpaid } from "./StickyBoxBottomPostpaid";
import {
  overviewBonusDisplayPricesMock,
  bringBackMock,
  overviewOneTimeDisplayPriceMock,
  overviewRecurringDisplayPricesMock,
  overviewRecurringDisplayPricesMockWithDifferentAmounts,
} from "../PostpaidShoppingCart.mock";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";
import { StickyBoxBottomPostpaidProps } from "./StickyBoxBottomPostpaid.types";
import { paymentMethodsArgTypes } from "../../../../../stories/utils/paymentMethodsArgTypes";
import { AllowedBackgroundColors } from "../../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxBottomPostpaid,
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
} satisfies Meta<typeof StickyBoxBottomPostpaid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overviewRecurringDisplayPrices: overviewRecurringDisplayPricesMock,
    overviewOneTimeDisplayPrice: overviewOneTimeDisplayPriceMock,
    checkoutUrl: "#checkout",
    checkoutButtonText: undefined,
    paymentMethods: [PaymentMethod.DIRECT_DEBIT, PaymentMethod.PAYPAL],
  },
  render: (args) => <Component {...args} />,
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
    paymentMethods: [PaymentMethod.DIRECT_DEBIT, PaymentMethod.PAYPAL],
  },
  render: (args) => <Component {...args} />,
};

export const DifferentRecurringPrices: Story = {
  args: {
    overviewRecurringDisplayPrices:
      overviewRecurringDisplayPricesMockWithDifferentAmounts,
    overviewOneTimeDisplayPrice: {
      ...overviewOneTimeDisplayPriceMock,
      shipping: undefined,
    },
    checkoutUrl: "#checkout",
    checkoutButtonText: "Weiter ohne Gerät",
    paymentMethods: [PaymentMethod.DIRECT_DEBIT, PaymentMethod.PAYPAL],
  },
  render: (args) => <Component {...args} />,
};

const Component = (args: StickyBoxBottomPostpaidProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <StickyBoxBottomPostpaid
      {...args}
      open={isOpen}
      onOpenChange={onOpenChange}
    />
  );
};

export const WithBringback: Story = {
  args: {
    ...Default.args,
    bringback: bringBackMock,
  },
  render: (args) => <Component {...args} />,
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
  render: (args) => <Component {...args} />,
};

export const WithBonuses: Story = {
  args: {
    ...Default.args,
    overviewBonusDisplayPrices: overviewBonusDisplayPricesMock,
  },
  render: (args) => <Component {...args} />,
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
