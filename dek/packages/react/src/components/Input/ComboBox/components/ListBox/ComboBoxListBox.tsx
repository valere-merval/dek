import React, { useRef } from "react";
import { AriaListBoxOptions, useListBox, useOption } from "react-aria";
import * as Styled from "../../ComboBox.styles";
import { ListState } from "react-stately";
import type { Node } from "@react-types/shared";
import { IndicatorCheck } from "../../../shared/Popover.styles";

interface ComboBoxListBoxRootProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement | null>;
  state: ListState<unknown>;
}

interface ComboBoxListBoxOptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

const Root = (props: ComboBoxListBoxRootProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const { listBoxRef = ref, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <Styled.ListBox {...listBoxProps} ref={listBoxRef} role="listbox">
      {[...state.collection].map((item) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </Styled.ListBox>
  );
};

const Option = ({ item, state }: ComboBoxListBoxOptionProps) => {
  const ref = useRef(null);
  const { optionProps, isSelected, isFocused } = useOption(
    { key: item.key },
    state,
    ref,
  );

  return (
    <Styled.ListBoxItem
      ref={ref}
      {...optionProps}
      data-focused={isFocused ? true : undefined}
    >
      <>
        {item.rendered}
        {isSelected && <IndicatorCheck />}
      </>
    </Styled.ListBoxItem>
  );
};

export const ComboBoxListBox = { Root, Option };
