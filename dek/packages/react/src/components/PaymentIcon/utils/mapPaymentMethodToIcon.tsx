import ApplePay_light from "../assets/light/img_logo_apple_pay_on_light@3x.svg";
import GooglePay_light from "../assets/light/img_logo_google_pay_on_light@3x.svg";
import Klarna_light from "../assets/light/img_logo_klarna_on_light@3x.svg";
import Mastercard_light from "../assets/light/img_logo_mastercard_on_light@3x.svg";
import PayPal_light from "../assets/light/img_logo_paypal_on_light@3x.svg";
import Sepa_light from "../assets/light/img_logo_sepa_on_light@3x.svg";
import Visa_light from "../assets/light/img_logo_visa_on_light@3x.svg";
import ApplePay_dark from "../assets/dark/img_logo_apple_pay_on_dark@3x.svg";
import GooglePay_dark from "../assets/dark/img_logo_google_pay_on_dark@3x.svg";
import Klarna_dark from "../assets/dark/img_logo_klarna_on_dark@3x.svg";
import Mastercard_dark from "../assets/dark/img_logo_mastercard_on_dark@3x.svg";
import PayPal_dark from "../assets/dark/img_logo_paypal_on_dark@3x.svg";
import Sepa_dark from "../assets/dark/img_logo_sepa_on_dark@3x.svg";
import Visa_dark from "../assets/dark/img_logo_visa_on_dark@3x.svg";
import { PaymentMethod } from "../PaymentIcon.types";

export const mapPaymentMethodToIcon: Record<
  PaymentMethod,
  { light: string; dark: string }
> = {
  [PaymentMethod.PAYPAL]: { light: PayPal_light, dark: PayPal_dark },
  [PaymentMethod.VISA]: { light: Visa_light, dark: Visa_dark },
  [PaymentMethod.MASTERCARD]: {
    light: Mastercard_light,
    dark: Mastercard_dark,
  },
  [PaymentMethod.DIRECT_DEBIT]: { light: Sepa_light, dark: Sepa_dark },
  [PaymentMethod.KLARNA]: { light: Klarna_light, dark: Klarna_dark },
  [PaymentMethod.GOOGLE_PAY]: { light: GooglePay_light, dark: GooglePay_dark },
  [PaymentMethod.APPLE_PAY]: { light: ApplePay_light, dark: ApplePay_dark },
};

export const mapPaymentMethodToAltText: Record<PaymentMethod, string> = {
  [PaymentMethod.PAYPAL]: "PayPal Logo",
  [PaymentMethod.VISA]: "Visa Logo",
  [PaymentMethod.MASTERCARD]: "Mastercard Logo",
  [PaymentMethod.DIRECT_DEBIT]: "SEPA Lastschrift Logo",
  [PaymentMethod.KLARNA]: "Klarna Logo",
  [PaymentMethod.GOOGLE_PAY]: "Google Pay Logo",
  [PaymentMethod.APPLE_PAY]: "Apple Pay Logo",
};
