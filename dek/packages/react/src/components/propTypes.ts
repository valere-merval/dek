import { CSSProp } from "styled-components";
import { JSX, ReactNode } from "react";

export interface StyledComponentsBaseProps {
  as?: keyof JSX.IntrinsicElements;
  css?: CSSProp;
}

export interface WithTestId {
  "data-testid"?: string;
}

export interface WithChildren {
  children?: ReactNode | ReactNode[];
}

export interface WithChildrenAndTestId extends WithTestId, WithChildren {}
export type ConvertToTransient<Props, KeysToConvert extends keyof Props> = {
  [Property in keyof Props as Property extends KeysToConvert
    ? `$${Property & string}`
    : Property]: Props[Property];
};
