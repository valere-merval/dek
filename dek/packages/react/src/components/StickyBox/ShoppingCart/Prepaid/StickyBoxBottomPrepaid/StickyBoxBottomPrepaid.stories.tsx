import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyBoxBottomPrepaid } from "./StickyBoxBottomPrepaid";
import {
  prepaidYearPlanElementMock,
  priceElementYearMock,
  shoppingCardPropsMock,
} from "../PrepaidShoppingCart.mock";
import { PrepaidShoppingCartProps } from "../PrepaidShoppingCart.types";
import { paymentMethodsArgTypes } from "../../../../../stories/utils/paymentMethodsArgTypes";
import { PaymentMethod } from "../../../../PaymentIcon/PaymentIcon.types";
import { AllowedBackgroundColors } from "../../../../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey", "blue"],
};

const meta = {
  component: StickyBoxBottomPrepaid,
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
} satisfies Meta<typeof StickyBoxBottomPrepaid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Component = (args: PrepaidShoppingCartProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <StickyBoxBottomPrepaid
      {...args}
      open={isOpen}
      onOpenChange={onOpenChange}
    />
  );
};

export const Default: Story = {
  args: shoppingCardPropsMock,
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
  },
};

export const PrepaidYearPlan: Story = {
  args: {
    ...Default.args,
    priceElement: priceElementYearMock,
    planElement: prepaidYearPlanElementMock,
  },
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
  },
};

export const WithCustomButtonText: Story = {
  args: {
    ...Default.args,
    checkoutButtonText: "Weiter zur Kasse",
  },
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
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
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
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
  render: (args) => <Component {...args} />,
  globals: {
    viewport: {
      value: "sm",
      isRotated: false,
    },
  },
};
