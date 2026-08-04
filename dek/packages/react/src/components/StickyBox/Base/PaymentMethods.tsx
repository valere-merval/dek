import * as Styled from "./Shared.styles";
import { PaymentMethod } from "../../PaymentIcon/PaymentIcon.types";
import { PaymentIcon } from "../../PaymentIcon";
import { Typography } from "../../Typography/Typography";

interface PaymentMethodsProps {
  paymentMethods: PaymentMethod[];
  divider?: boolean;
}

export const PaymentMethods = ({
  paymentMethods,
  divider = false,
}: PaymentMethodsProps) => (
  <>
    {divider && <Styled.PriceDivider color="black" />}
    <Styled.PaymentMethodsWrapper>
      <Typography variant="BodyLight14"> Sichere Zahlungsmethoden </Typography>
      <Styled.PaymentIconsWrapper>
        {paymentMethods?.map((method) => (
          <PaymentIcon key={method} paymentMethod={method} />
        ))}
      </Styled.PaymentIconsWrapper>
    </Styled.PaymentMethodsWrapper>
  </>
);
