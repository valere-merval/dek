"use client";

import React, {
  forwardRef,
  ElementRef,
  isValidElement,
  cloneElement,
} from "react";
import { SelectionBoxSwitchProps } from "./SelectionBoxSwitch.types";
import * as Styled from "./SelectionBoxSwitch.styles";
import { useFieldMessages } from "../../shared/FieldMessages";
import * as TextFieldShared from "../../shared/TextField.styles";
import { IconTile } from "../../../IconTile";

export const SelectionBoxSwitch = forwardRef<
  ElementRef<typeof Styled.CardContainer>,
  SelectionBoxSwitchProps
>(
  (
    {
      id,
      name,
      title,
      description,
      headlineLevel = "h3",
      icon,
      moreDetails,
      switchDescription,
      messages,
      ...rest
    }: SelectionBoxSwitchProps,
    ref,
  ) => {
    const { FieldMessages, inputProps, wrapperProps } = useFieldMessages(
      messages,
      name,
    );

    return (
      <TextFieldShared.InputContainer>
        <Styled.CardContainer ref={ref} {...wrapperProps}>
          <Styled.Label htmlFor={id} $disabled={rest.disabled} />
          <Styled.ContentContainer>
            <Styled.Header
              $disabled={rest.disabled}
              size="small"
              variant="bold"
              forwardedAs={headlineLevel}
            >
              {title}
            </Styled.Header>
            <Styled.DescriptionIconContainer>
              <Styled.Description
                size={"large"}
                variant={"light"}
                $disabled={rest.disabled}
              >
                {description}
              </Styled.Description>
              {icon && (
                <IconTile
                  size={{
                    minAvailableSpace: "small",
                    maxAvailableSpace: "medium",
                  }}
                  icon={icon}
                  variant="outlined"
                  color="black"
                />
              )}
            </Styled.DescriptionIconContainer>
            {moreDetails && (
              <Styled.MoreDetailsWrapper>
                {isValidElement(moreDetails)
                  ? isValidElement<{ disabled?: boolean }>(moreDetails)
                    ? cloneElement(moreDetails, { disabled: rest.disabled })
                    : moreDetails
                  : moreDetails}
              </Styled.MoreDetailsWrapper>
            )}
          </Styled.ContentContainer>

          <Styled.SwitchContainer>
            <Styled.SwitchRoot id={id} name={name} {...inputProps} {...rest} />
            <Styled.SwitchLabel
              htmlFor={id}
              variant="BodyBold14"
              $disabled={rest.disabled}
            >
              {switchDescription}
            </Styled.SwitchLabel>
          </Styled.SwitchContainer>
        </Styled.CardContainer>
        <FieldMessages />
      </TextFieldShared.InputContainer>
    );
  },
);
SelectionBoxSwitch.displayName = "SelectionBoxSwitch";
