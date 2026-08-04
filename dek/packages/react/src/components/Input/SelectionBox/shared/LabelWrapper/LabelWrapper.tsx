import { LabelWrapperProps } from "./LabelWrapper.types";
import * as Styled from "./LabelWrapper.styles";
import { formatBillingPeriod, formatPrice } from "../../../../../utils/pricing";

export const LabelWrapper = ({ label, priceDetails }: LabelWrapperProps) => {
  const isString = typeof label === "string";

  return (
    <Styled.Container $additionalMargin={isString}>
      {isString ? (
        <Styled.LabelPriceContainer>
          <Styled.Label> {label} </Styled.Label>
          {priceDetails && (
            <Styled.Price size="medium">
              {priceDetails.prefix && priceDetails.prefix + " "}
              {formatPrice(priceDetails.price)}
              {priceDetails.billingPeriod &&
                " " + formatBillingPeriod(priceDetails.billingPeriod)}
            </Styled.Price>
          )}
        </Styled.LabelPriceContainer>
      ) : (
        label
      )}
    </Styled.Container>
  );
};
