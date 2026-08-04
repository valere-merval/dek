"use client";

import React, { ElementRef, forwardRef, useState } from "react";
import { PasswordFieldProps } from "./PasswordField.types";
import { TextField } from "../TextField";
import { EyeCrossedOutline, EyeOutline } from "@fair/icons";

export const PasswordField = forwardRef<
  ElementRef<typeof TextField>,
  PasswordFieldProps
>((props: PasswordFieldProps, ref) => {
  const { placeholder, revealPasswordInitially, ...rest } = props;

  const [showPassword, setShowPassword] = useState<boolean>(
    revealPasswordInitially ?? false,
  );

  const toggle = () => setShowPassword(!showPassword);

  const type = showPassword ? "text" : "password";
  const icon = showPassword ? <EyeCrossedOutline /> : <EyeOutline />;
  const buttonAriaLabel = `${placeholder} ${
    showPassword ? "verstecken" : "anzeigen"
  }`;

  return (
    <TextField
      ref={ref}
      buttonAriaLabel={buttonAriaLabel}
      {...rest}
      type={type}
      icon={icon}
      onIconClick={toggle}
      placeholder={placeholder}
      role="textbox" // password inputs have no role
    />
  );
});
PasswordField.displayName = "PasswordField";
