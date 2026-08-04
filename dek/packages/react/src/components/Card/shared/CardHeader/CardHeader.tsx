import React, { ElementRef, forwardRef, useCallback, useId } from "react";
import * as Styled from "./CardHeader.styles";
import { ButtonSecondaryForHeader } from "./ButtonSecondaryForHeader";
import { CardHeaderProps } from "./CardHeader.types";
import { handleButtonSecondaryForCardClick } from "./ButtonSecondaryForHeader/ButtonSecondaryForHeader";
import { useRegisterContainerAction } from "../hooks/useRegisterContainerAction";

export const CardHeader = forwardRef<
  ElementRef<typeof Styled.Headline>,
  CardHeaderProps
>((props, ref) => {
  const {
    forwardedAs = "h2",
    buttonProps,
    trigger = "button",
    children,
    ...rest
  } = props;
  const labelId = useId();
  const isCardClickable = !!buttonProps && trigger === "card";

  const resolveAction = useCallback(() => {
    if (!buttonProps) return;
    handleButtonSecondaryForCardClick(buttonProps)?.();
  }, [buttonProps]);

  useRegisterContainerAction({
    action: resolveAction,
    isEnabled: isCardClickable,
  });

  return (
    <Styled.Root ref={ref}>
      <Styled.Headline
        id={labelId}
        size="medium"
        variant="black"
        forwardedAs={forwardedAs}
        {...rest}
      >
        {children}
      </Styled.Headline>

      {buttonProps && (
        <ButtonSecondaryForHeader
          aria-labelledby={labelId}
          {...buttonProps}
        ></ButtonSecondaryForHeader>
      )}
    </Styled.Root>
  );
});
CardHeader.displayName = "HeadlineForCard";
