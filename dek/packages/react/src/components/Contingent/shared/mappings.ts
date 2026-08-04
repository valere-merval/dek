import { TypographyVariant } from "../../Typography/Typography";
import { SpaceVariant } from "../../../theme/mappings/space";
import { ContingentSize } from "./Contingent.types";

export const typographyMap: Record<
  ContingentSize,
  {
    [Property in "suffix" | "amount" | "unit" | "oldAmount"]: TypographyVariant;
  }
> = {
  small: {
    amount: "TagBlack64",
    suffix: "BodyBold16",
    unit: "TagBlack24",
    oldAmount: "BodyBold16",
  },
  medium: {
    suffix: "BodyBold16",
    amount: "TagBlack96",
    unit: "TagBlack40",
    oldAmount: "BodyBold16",
  },
  large: {
    suffix: "BodyBold16",
    amount: "TagBlack128",
    unit: "TagBlack56",
    oldAmount: "BodyBold16",
  },
};

export const gapMap: Record<
  ContingentSize,
  { [Property in "amountGap" | "rows"]: SpaceVariant }
> = {
  small: {
    amountGap: "04",
    rows: "12",
  },
  medium: {
    amountGap: "08",
    rows: "16",
  },
  large: {
    amountGap: "12",
    rows: "20",
  },
};
