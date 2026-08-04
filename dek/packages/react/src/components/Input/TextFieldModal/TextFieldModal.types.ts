import { TextFieldProps } from "../TextField";
import { ReactNode } from "react";

export interface TextFieldModalProps extends Omit<TextFieldProps, "icon"> {
  modalContent: ModalContent;
}
export interface ModalContent {
  title: string;
  description: ReactNode;
}
