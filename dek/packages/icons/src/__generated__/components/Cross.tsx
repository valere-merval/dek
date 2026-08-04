import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCross = (
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
      d="m12.854 3.854-.708-.708L8 7.293 3.854 3.146l-.708.708L7.293 8l-4.147 4.146.708.708L8 8.707l4.146 4.147.708-.708L8.707 8z"
    />
  </svg>
);
SvgCross.displayName = "Cross";
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;
