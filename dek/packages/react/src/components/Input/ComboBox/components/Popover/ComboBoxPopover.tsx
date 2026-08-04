import {
  AriaPopoverProps,
  Overlay,
  useOverlayPosition,
  usePopover,
} from "react-aria";
import React, { ReactNode } from "react";
import { OverlayTriggerState } from "react-stately";
import * as Styled from "../../ComboBox.styles";

interface PopoverProps extends AriaPopoverProps {
  children: ReactNode;
  state: OverlayTriggerState;
  style: React.CSSProperties;
  fullWidth?: boolean;
}

export const ComboBoxPopover = ({
  children,
  state,
  ...props
}: PopoverProps) => {
  const { overlayProps, updatePosition } = useOverlayPosition({
    ...props,
    targetRef: props.triggerRef,
    overlayRef: props.popoverRef,
    isOpen: state.isOpen,
  });
  const { popoverProps } = usePopover(props, {
    ...state,
    close: updatePosition,
  });

  return (
    <Overlay>
      <div style={props.style}>
        <Styled.PopoverChild
          {...popoverProps}
          style={{ ...popoverProps.style, ...overlayProps.style }}
          ref={props.popoverRef as React.RefObject<HTMLDivElement>}
          $isListAvailable={!!children}
        >
          {children}
        </Styled.PopoverChild>
      </div>
    </Overlay>
  );
};
