import { ReactNode } from "react";
import { ButtonMoreDetailsProps } from "../../Button/ButtonMoreDetails";

export interface Footnote {
  header: string;
  description: ReactNode;
}

export interface ModalFootnotesProps {
  footnotes: Footnote[];
  /**
   * The trigger element can be a custom ReactNode
   * or a customized ButtonMoreDetails component with props.
   * If trigger is not provided, a default ButtonMoreDetails will be used.
   */
  trigger?: ReactNode | ButtonMoreDetailsProps;
}
