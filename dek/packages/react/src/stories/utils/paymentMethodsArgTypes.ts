import { ArgTypes } from "@storybook/react-vite";
import { PaymentMethod } from "../../components/PaymentIcon/PaymentIcon.types";

const availablePaymentMethods = Object.values(PaymentMethod);

export const paymentMethodsArgTypes = {
  paymentMethods: {
    control: {
      type: "check",
    },
    options: availablePaymentMethods,
    description:
      "Available payment methods shown in the sticky box. Multiple values can be selected.",
    table: {
      type: {
        summary: "PaymentMethod[]",
        detail: availablePaymentMethods.join("\n"),
      },
    },
  },
} satisfies ArgTypes<{ paymentMethods?: PaymentMethod[] }>;
