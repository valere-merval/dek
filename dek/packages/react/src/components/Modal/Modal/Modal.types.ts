import {
  ButtonProps,
  DialogProps,
  DialogTriggerProps,
  HeadingProps,
  ModalOverlayProps,
} from "react-aria-components";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface ModalProps extends Omit<DialogTriggerProps, "isOpen"> {
  open?: boolean;
}

export interface ModalTriggerProps extends ButtonProps {
  /**
   * @deprecated: can be removed
   */
  asChild?: boolean;
}

export interface ModalTitleProps extends HeadingProps {}

export interface ModalContentProps
  extends
    Omit<ModalOverlayProps, "className" | "style">,
    Pick<DialogProps, "role"> {
  fullHeight?: boolean;
  infoText?: string;
  isDismissable?: boolean;
  className?: DialogProps["className"];
  style?: DialogProps["style"];
}

export interface ModalDescriptionProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  paddingBottom?: boolean;
}
