import styled from "styled-components";
import { BillingPeriod } from "../shared/Price.styles";

export const Root = styled(BillingPeriod)`
  white-space: nowrap;
`;

export const StrikeThrough = styled.span`
  text-decoration: line-through;
`;
