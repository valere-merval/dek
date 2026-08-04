import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SelectionBoxPayment } from "./SelectionBoxPayment";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { PaymentMethod } from "../../../PaymentIcon/PaymentIcon.types";
import { ButtonPrimary } from "../../../Button/ButtonPrimary";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
};

const meta = {
  component: SelectionBoxPayment.Group,
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
} satisfies Meta<typeof SelectionBoxPayment.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option-1",
    name: "payment-options",
    label: "Bitte eine Option wählen",
    children: (
      <>
        <SelectionBoxPayment.Item
          value="option-1"
          label="PayPal"
          paymentMethods={[PaymentMethod.PAYPAL]}
        />
        <SelectionBoxPayment.Item
          value="option-2"
          label="Kreditkarte"
          paymentMethods={[PaymentMethod.VISA, PaymentMethod.MASTERCARD]}
        />
        <SelectionBoxPayment.Item
          value="option-3"
          label="Apple Pay"
          paymentMethods={[PaymentMethod.APPLE_PAY]}
        />
        <SelectionBoxPayment.Item
          value="option-4"
          label="Google Pay"
          paymentMethods={[PaymentMethod.GOOGLE_PAY]}
        />
        <SelectionBoxPayment.Item
          value="option-5"
          label="Klarna"
          paymentMethods={[PaymentMethod.KLARNA]}
        />
        <SelectionBoxPayment.Item
          value="option-6"
          label="SEPA"
          paymentMethods={[PaymentMethod.DIRECT_DEBIT]}
        />
        <SelectionBoxPayment.Item value="option-7" label="Bankeinzug" />
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    messages: [{ type: "error", message: "Es ist ein Fehler aufgetreten." }],
  },
};

export const ErrorOnSubmit: Story = {
  args: {
    name: "error-on-submit-payment",
    label: "Bitte eine Option wählen",
  },
  render: function ErrorOnSubmitSelectionBoxPayment({ ...args }) {
    const [error, setError] = useState<boolean>(false);

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setError(true);
        }}
      >
        <SelectionBoxPayment.Group
          {...args}
          messages={
            error
              ? [
                  {
                    type: "error",
                    message: "Bitte wähle eine Zahlungsart aus.",
                  },
                ]
              : undefined
          }
        >
          <SelectionBoxPayment.Item
            value="option-1"
            label="PayPal"
            paymentMethods={[PaymentMethod.PAYPAL]}
          />
          <SelectionBoxPayment.Item
            value="option-2"
            label="Kreditkarte"
            paymentMethods={[PaymentMethod.VISA, PaymentMethod.MASTERCARD]}
          />
        </SelectionBoxPayment.Group>
        <ButtonPrimary type="submit" style={{ marginTop: 8 }}>
          Absenden
        </ButtonPrimary>
      </form>
    );
  },
};
