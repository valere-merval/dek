import { ComponentPropsWithoutRef } from "react";
import { StyledComponentsBaseProps } from "../../propTypes";
import { Footnote } from "../../Modal/ModalFootnotes";

export interface PriceRowProps {
  price: number;
  strikeThroughPrice?: number;
  prefix?: string;
  suffix?: string;
  footnotes?: Footnote[];
}

export interface PriceRowRootProps
  extends StyledComponentsBaseProps,
    ComponentPropsWithoutRef<"div"> {
  onlyRight?: boolean;
}
