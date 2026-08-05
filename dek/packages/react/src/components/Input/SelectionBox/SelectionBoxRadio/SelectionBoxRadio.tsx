"use client";

import { forwardRef, ElementRef, useContext } from "react";
import {
  SelectionBoxRadioItemProps,
  SelectionBoxRadioGroupProps,
} from "./SelectionBoxRadio.types";
import { RadioGroup } from "../../RadioGroup";
import * as Styled from "./SelectionBoxRadio.styles";
import * as SharedStyles from "../shared/styles";
import { LabelWrapper } from "../shared/LabelWrapper/LabelWrapper";
import { useObjectRef } from "react-aria";
import { RadioGroupStateContext } from "react-aria-components";
import { handleInteractionCapture } from "../shared/utils";
import { useSelectionBoxAriaDescribedby } from "../../../Card/shared/hooks/useSelectionBoxAriaDescribedby";

const Group = forwardRef<
  ElementRef<typeof RadioGroup.Root>,
  SelectionBoxRadioGroupProps
>(({ children, noGrid, ...rest }: SelectionBoxRadioGroupProps, ref) => {
  return (
    <RadioGroup.Root {...rest} ref={ref}>
      {noGrid ? (
        <SharedStyles.Root>{children}</SharedStyles.Root>
      ) : (
        <Grid>{children}</Grid>
      )}
    </RadioGroup.Root>
  );
});
Group.displayName = "SelectionBoxRadio.Group";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <SharedStyles.GridContainer>
      <SharedStyles.Root>{children}</SharedStyles.Root>
    </SharedStyles.GridContainer>
  );
};

const Item = forwardRef<
  ElementRef<typeof RadioGroup.Item>,
  SelectionBoxRadioItemProps
>(
  (
    {
      value,
      label,
      subText,
      priceDetails,
      discountText,
      labelText,
      contentIfSelected,
      headerImage,
      headerImageSize,
      children,
      duration,
      "data-testid": dataTestId,
      ...radioProps
    }: SelectionBoxRadioItemProps,
    ref,
  ) => {
    const radioGroupState = useContext(RadioGroupStateContext);
    const interactiveRef = useObjectRef(ref);
    const selected = radioGroupState?.selectedValue === value;
    const contentId = `${value}`;

    const { ariaDescribedBy } = useSelectionBoxAriaDescribedby({
      contentId: contentId,
      promotionTop: labelText,
      discountText: discountText,
    });

    const interactiveElement = (
      <Styled.Item
        {...radioProps}
        ref={interactiveRef}
        value={value}
        onClickCapture={(event) =>
          handleInteractionCapture(event, interactiveRef)
        }
        // @ts-expect-error - onKeyDownCapture is not recognized as valid prop for the interactive element, but they are necessary to prevent event propagation when interacting with nested interactive elements.
        onKeyDownCapture={(event) =>
          handleInteractionCapture(event, interactiveRef)
        }
        aria-describedby={ariaDescribedBy}
      >
        <LabelWrapper label={label} priceDetails={priceDetails} />
      </Styled.Item>
    );

    return (
      <Styled.Box
        data-testid={dataTestId}
        selected={selected}
        interactiveElement={interactiveElement}
        interactiveElementRef={interactiveRef}
        discountText={discountText}
        labelText={labelText}
        contentIfSelected={contentIfSelected}
        headerImage={headerImage}
        headerImageSize={headerImageSize}
        data-selection-box-header-image-correction={
          headerImage ? "true" : undefined
        }
        contentId={contentId}
        subText={subText}
        duration={duration}
        onBoxClick={
          radioGroupState?.setSelectedValue
            ? () => radioGroupState.setSelectedValue(value)
            : undefined
        }
      >
        {children}
      </Styled.Box>
    );
  },
);
Item.displayName = "SelectionBoxRadio.Item";

export const SelectionBoxRadio = {
  Group,
  Grid,
  Item,
};
