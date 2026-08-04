import {
  cloneElement,
  ElementRef,
  forwardRef,
  isValidElement,
  ReactNode,
} from "react";
import { ButtonBaseProps } from "./ButtonBase.types";
import { Slot } from "@radix-ui/react-slot";

export const ButtonBase = forwardRef<ElementRef<"button">, ButtonBaseProps>(
  (
    {
      children,
      childrenWrapperFunction = (rest: ReactNode) => rest,
      asChild,
      ...rest
    }: ButtonBaseProps,
    ref,
  ) => {
    if (asChild && isValidElement(children)) {
      const childProps = children.props as { children?: ReactNode };
      return (
        <Slot ref={ref} {...rest}>
          {/* TODO: Remove this if Radix adds nested child support for Slot, see https://github.com/radix-ui/primitives/issues/1825 */}
          {cloneElement(
            children,
            undefined,
            <>{childrenWrapperFunction(childProps.children)}</>,
          )}
        </Slot>
      );
    }

    return (
      <button ref={ref} {...rest}>
        {childrenWrapperFunction(children)}
      </button>
    );
  },
);
ButtonBase.displayName = "ButtonBase";
