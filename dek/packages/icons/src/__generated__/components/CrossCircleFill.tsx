import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCrossCircleFill = (
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
      d="M7.959 1.072a7 7 0 1 0 0 14 7 7 0 0 0 0-14m3.353 9.646-.707.707-2.646-2.646-2.646 2.646-.707-.707 2.646-2.646-2.646-2.646.707-.707 2.646 2.646 2.646-2.646.707.707-2.646 2.646z"
    />
  </svg>
);
SvgCrossCircleFill.displayName = "CrossCircleFill";
const ForwardRef = forwardRef(SvgCrossCircleFill);
export default ForwardRef;
