import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgShareIosFill = (
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
      d="m8.5 2.207 1.646 1.646.707-.707L8.707 1a1 1 0 0 0-1.414 0L5.147 3.146l.707.707L7.5 2.207V5h1zM12 5H8.5v5h-1V5H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12 5"
    />
  </svg>
);
SvgShareIosFill.displayName = "ShareIosFill";
const ForwardRef = forwardRef(SvgShareIosFill);
export default ForwardRef;
