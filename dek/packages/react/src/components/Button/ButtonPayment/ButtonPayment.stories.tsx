import { AllowedBackgroundColors } from "../../../theme/theme";
import { ButtonPayment } from "./ButtonPayment";
import { ButtonPaymentProps } from "./ButtonPayment.types";
import { disableControls } from "../../../stories/utils/disableControls";
import { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentMethod } from "../../PaymentIcon/PaymentIcon.types";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "darkGrey"],
};

const availablePaymentMethods = Object.values(PaymentMethod);

const meta = {
  component: ButtonPayment,
  argTypes: {
    ...disableControls<ButtonPaymentProps>(["data-testid"]),
    paymentMethod: {
      control: {
        type: "radio",
      },
      options: availablePaymentMethods,
      table: {
        type: {
          summary: "PaymentMethod",
          detail: availablePaymentMethods.join("\n"),
        },
      },
    },
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
} satisfies Meta<typeof ButtonPayment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "data-testid": "button",
    onClick: () => {
      alert("click");
    },
    size: "medium",
    paymentMethod: PaymentMethod.PAYPAL,
  },
};

export const MultipleButtons: Story = {
  args: {
    ...Default.args,
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px" }}>
      <ButtonPayment
        data-testid="button-1"
        onClick={() => {
          alert("click 1");
        }}
        size="medium"
        paymentMethod={PaymentMethod.PAYPAL}
      />
      <ButtonPayment
        data-testid="button-2"
        onClick={() => {
          alert("click 2");
        }}
        size="medium"
        paymentMethod={PaymentMethod.GOOGLE_PAY}
      />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
