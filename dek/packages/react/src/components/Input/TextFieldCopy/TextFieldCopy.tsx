"use client";

import React, {
  forwardRef,
  ElementRef,
  useRef,
  useImperativeHandle,
} from "react";
import { TextField } from "../TextField";
import { TextFieldCopyProps } from "./TextFieldCopy.types";
import { DuplicateFileOutline } from "@fair/icons";

export const TextFieldCopy = forwardRef<
  ElementRef<typeof TextField>,
  TextFieldCopyProps
>((props: TextFieldCopyProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
  const onClick = () => {
    navigator.clipboard.writeText(inputRef.current?.value || "");
  };

  return (
    <TextField
      ref={inputRef}
      {...props}
      icon={<DuplicateFileOutline />}
      buttonAriaLabel="Textfeld kopieren"
      onIconClick={onClick}
    />
  );
});
TextFieldCopy.displayName = "TextFieldCopy";
