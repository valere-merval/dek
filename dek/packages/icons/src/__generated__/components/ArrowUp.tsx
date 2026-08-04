import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgArrowUp = (
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
      d="m12.707 7-4-4a1 1 0 0 0-1.414 0l-4 4L4 7.707l3.5-3.5V13.5h1V4.207l3.5 3.5z"
    />
  </svg>
);
SvgArrowUp.displayName = "ArrowUp";
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
