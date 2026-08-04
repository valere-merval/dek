"use client";

import React, {
  ElementRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { TextField } from "../TextField";
import { TextFieldCopyProps } from "../TextFieldCopy";
import { CrossCircleOutline } from "@fair/icons";

export const TextFieldClear = forwardRef<
  ElementRef<typeof TextField>,
  TextFieldCopyProps
>((props: TextFieldCopyProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const onClick = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <TextField
      ref={inputRef}
      {...props}
      icon={<CrossCircleOutline />}
      buttonAriaLabel="Textfeld löschen"
      onIconClick={onClick}
    />
  );
});
TextFieldClear.displayName = "TextFieldClear";
