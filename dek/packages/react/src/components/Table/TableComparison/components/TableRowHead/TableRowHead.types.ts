import { ComponentPropsWithoutRef } from "react";
import { Footnote } from "../../../../Modal/ModalFootnotes";

export interface TableRowHeadProps extends ComponentPropsWithoutRef<"div"> {
  footnotes?: Footnote[];
  title?: string;
}
