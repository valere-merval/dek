import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronCircleLeftFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.707 9.98-.688.727-3.146-2.98a1.003 1.003 0 0 1 0-1.454l3.147-2.98.688.727L6.561 8z"
    />
  </svg>
);
SvgChevronCircleLeftFill.displayName = "ChevronCircleLeftFill";
const ForwardRef = forwardRef(SvgChevronCircleLeftFill);
export default ForwardRef;
