import { formatPrice } from "../../../utils/pricing";
import { Typography } from "../../Typography/Typography";

interface ShippingCostsProps {
  shipping?: number;
}

export const ShippingCosts = ({ shipping }: ShippingCostsProps) =>
  !shipping || shipping <= 0 ? (
    <Typography variant="BodyLight14">Versandkostenfrei</Typography>
  ) : (
    <Typography variant="BodyLight14">
      zzgl.&nbsp;
      {formatPrice(shipping)} Versandkosten
    </Typography>
  );
