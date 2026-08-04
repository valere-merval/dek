import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronCircleRightFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.128 7.727-3.147 2.98-.688-.727L9.44 8 6.293 5.02l.688-.727 3.146 2.98a1.003 1.003 0 0 1 0 1.454z"
    />
  </svg>
);
SvgChevronCircleRightFill.displayName = "ChevronCircleRightFill";
const ForwardRef = forwardRef(SvgChevronCircleRightFill);
export default ForwardRef;
