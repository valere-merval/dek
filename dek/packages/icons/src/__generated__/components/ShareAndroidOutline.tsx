import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgShareAndroidOutline = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={0}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M12 11c-.533 0-1.015.212-1.374.552L5.899 8.597C5.959 8.407 6 8.209 6 8s-.041-.408-.101-.597l4.727-2.955c.359.34.84.552 1.374.552a2 2 0 1 0-2-2c0 .21.041.408.101.598L5.373 6.553A2 2 0 0 0 4 6.001a2 2 0 1 0 0 4c.533 0 1.015-.212 1.373-.552l4.728 2.955c-.06.19-.101.388-.101.598a2 2 0 1 0 2-2zm0-9c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1M4 9c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m8 5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1"
    />
  </svg>
);
SvgShareAndroidOutline.displayName = "ShareAndroidOutline";
const ForwardRef = forwardRef(SvgShareAndroidOutline);
export default ForwardRef;
