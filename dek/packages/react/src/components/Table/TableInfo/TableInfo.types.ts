import { ComponentPropsWithoutRef } from "react";
import { Footnote } from "../../Modal/ModalFootnotes";

export interface TableInfoRootProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  headline: string;
  headlineHidden?: boolean;
}

export interface TableInfoRowProps extends ComponentPropsWithoutRef<"div"> {}

export interface TableInfoRowHeadProps extends ComponentPropsWithoutRef<"div"> {
  headline: string;
  footnotes?: Footnote[];
}

export interface TableInfoCellProps extends ComponentPropsWithoutRef<"div"> {}
