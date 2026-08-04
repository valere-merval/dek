import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronCircleUpFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.981 8.707L8 6.561 5.019 9.707l-.726-.688 2.981-3.146a1 1 0 0 1 1.451 0l2.981 3.146z"
    />
  </svg>
);
SvgChevronCircleUpFill.displayName = "ChevronCircleUpFill";
const ForwardRef = forwardRef(SvgChevronCircleUpFill);
export default ForwardRef;
