"use client";

import { DialogTrigger, Pressable } from "react-aria-components";
import { VisuallyHidden } from "react-aria";
import { useObjectRef, useViewportSize } from "@react-aria/utils";
import {
  ComponentProps,
  ElementRef,
  forwardRef,
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
} from "react";
import * as Styled from "./Modal.styles";
import { Cross } from "@fair/icons";
import { ThemeContext } from "styled-components";
import { ThemeProvider } from "../../../theme/ThemeProvider";
import {
  ModalContentProps,
  ModalDescriptionProps,
  ModalProps,
  ModalTitleProps,
  ModalTriggerProps,
} from "./Modal.types";
import React from "react";
import { useHasOverflow } from "../../../hooks/useHasOverflow";
import { TabList } from "../../Tabs/TabList";
import { modalBackgroundColorMapping } from "../shared/mappings";
import { usePreventModalScroll } from "./usePreventModalScroll";

/**
 * This is a generic Modal component. Please take a look at the more specific ones first e.g. ModalFootnotes.
 */
export const Root = ({ open, defaultOpen, ...rest }: ModalProps) => {
  useEffect(() => {
    if (open || defaultOpen) {
      // optional remove inert attribut from html element with id usercentrics-root
      // this is necessary to make the usercentrics modal interactive when modal is automatically open on a page
      document.getElementById("usercentrics-root")?.removeAttribute("inert");
    }
  }, [open, defaultOpen]);

  return <DialogTrigger isOpen={open} defaultOpen={defaultOpen} {...rest} />;
};
Root.displayName = "Modal.Root";

const Trigger = (props: ModalTriggerProps) => {
  if (React.Children.count(props.children) === 1) {
    const child = props.children;
    if (
      React.isValidElement(child) &&
      typeof child !== "string" &&
      typeof child !== "number"
    ) {
      return (
        <Pressable>
          {
            child as React.DetailedReactHTMLElement<
              React.ButtonHTMLAttributes<HTMLButtonElement>,
              HTMLElement
            >
          }
        </Pressable>
      );
    }
  }

  return <Styled.Trigger {...props} />;
};
Trigger.displayName = "Modal.Trigger";

const Content = ({
  children,
  fullHeight,
  infoText,
  isDismissable = true,
  style,
  className,
  role = "dialog",
  ...rest
}: ModalContentProps) => {
  const themeContext = useContext(ThemeContext);
  const brand = themeContext?.contextSpecific.brand || "congstarWeb";
  const { height } = useViewportSize();
  const pageHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler<ElementRef<"div">> = (event) => {
    event.stopPropagation();
    rest.onClick?.(event);
  };

  usePreventModalScroll(modalRef);

  return (
    <Styled.Overlay
      isDismissable={isDismissable}
      $pageHeight={pageHeight}
      {...rest}
    >
      <ThemeProvider backgroundColor={modalBackgroundColorMapping[brand]}>
        <Styled.Modal
          $visualViewportHeight={height}
          $pageHeight={pageHeight}
          $fullHeight={fullHeight}
          onClick={handleClick}
          ref={modalRef}
        >
          <Styled.Dialog style={style} className={className} role={role}>
            <>
              <VisuallyHidden>{infoText}</VisuallyHidden>
              {children}
              <Close />
            </>
          </Styled.Dialog>
        </Styled.Modal>
      </ThemeProvider>
    </Styled.Overlay>
  );
};
Content.displayName = "Modal.Content";

const Title = React.forwardRef(
  (props: ModalTitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    return <Styled.Title slot="title" {...props} ref={ref} />;
  },
);
Title.displayName = "Modal.Title";

const Description = forwardRef<
  ElementRef<typeof Styled.Description>,
  ModalDescriptionProps
>(
  (
    {
      children,
      className,
      paddingBottom = true,
      ...rest
    }: ModalDescriptionProps,
    ref,
  ) => {
    const divRef = useObjectRef(ref);
    const { hasOverflowOnYAxis } = useHasOverflow(divRef);
    const hasTabListChild = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === TabList,
    );

    return (
      <Styled.Description
        ref={divRef}
        tabIndex={hasOverflowOnYAxis && !hasTabListChild ? 0 : -1}
        $paddingBottom={paddingBottom}
        {...rest}
      >
        <Styled.ChildWrapper className={className}>
          {children}
        </Styled.ChildWrapper>
      </Styled.Description>
    );
  },
);
Description.displayName = "Modal.Description";

const Close = (props: ComponentProps<typeof Styled.CloseButton>) => {
  return (
    <Styled.CloseButton {...props} aria-label="Schließen" slot="close">
      <Cross />
    </Styled.CloseButton>
  );
};
Close.displayName = "Modal.Close";

export const Modal = {
  Root,
  Trigger,
  Content,
  Title,
  Close,
  Description,
};
