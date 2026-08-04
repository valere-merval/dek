import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgArrowDown = (
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
      d="m12 8.293-3.5 3.5V2.5h-1v9.293L4 8.293 3.293 9l4 4a1 1 0 0 0 .707.292A1 1 0 0 0 8.707 13l4-4z"
    />
  </svg>
);
SvgArrowDown.displayName = "ArrowDown";
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;
