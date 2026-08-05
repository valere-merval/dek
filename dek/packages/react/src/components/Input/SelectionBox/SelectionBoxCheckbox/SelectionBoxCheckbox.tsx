"use client";

import { forwardRef, ElementRef, useContext } from "react";
import {
  SelectionBoxCheckboxItemProps,
  SelectionBoxCheckboxGroupProps,
} from "./SelectionBoxCheckbox.types";
import * as Styled from "./SelectionBoxCheckbox.styles";
import * as SharedStyles from "../shared/styles";
import { LabelWrapper } from "../shared/LabelWrapper/LabelWrapper";
import { useObjectRef } from "react-aria";
import { handleInteractionCapture } from "../shared/utils";
import { CheckboxGroupStateContext } from "react-aria-components";
import { CheckboxGroup } from "../../Checkbox/CheckboxGroup";
import { useSelectionBoxAriaDescribedby } from "../../../Card/shared/hooks/useSelectionBoxAriaDescribedby";

const Group = forwardRef<
  ElementRef<typeof CheckboxGroup.Root>,
  SelectionBoxCheckboxGroupProps
>(({ children, noGrid, ...rest }: SelectionBoxCheckboxGroupProps, ref) => {
  return (
    <CheckboxGroup.Root {...rest} ref={ref} label={rest.label}>
      {noGrid ? (
        <SharedStyles.Root>{children}</SharedStyles.Root>
      ) : (
        <Grid>{children}</Grid>
      )}
    </CheckboxGroup.Root>
  );
});
Group.displayName = "SelectionBoxCheckbox.Group";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <SharedStyles.GridContainer>
      <SharedStyles.Root>{children}</SharedStyles.Root>
    </SharedStyles.GridContainer>
  );
};

const Item = forwardRef<
  ElementRef<typeof CheckboxGroup.Item>,
  SelectionBoxCheckboxItemProps
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
      ...checkBoxProps
    }: SelectionBoxCheckboxItemProps,
    ref,
  ) => {
    const checkBoxGroupState = useContext(CheckboxGroupStateContext);
    const interactiveRef = useObjectRef(ref);
    const selected = checkBoxGroupState?.isSelected(value);
    const contentId = `${value}`;

    const { ariaDescribedBy } = useSelectionBoxAriaDescribedby({
      contentId: contentId,
      promotionTop: labelText,
      discountText: discountText,
    });

    const interactiveElement = (
      <Styled.Item
        {...checkBoxProps}
        ref={interactiveRef}
        value={value}
        onClickCapture={(event) =>
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
        headerImageSideMarginCorrection={!!headerImage}
        contentId={contentId}
        subText={subText}
        duration={duration}
        onBoxClick={() => {
          checkBoxProps.onChange?.(!selected);
          checkBoxGroupState?.toggleValue(value);
        }}
      >
        {children}
      </Styled.Box>
    );
  },
);
Item.displayName = "SelectionBoxCheckbox.Item";

export const SelectionBoxCheckbox = {
  Group,
  Grid,
  Item,
};
