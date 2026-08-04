import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronCircleDownOutline = (
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
      d="M8 9.439 5.02 6.293l-.727.688 2.98 3.146a1.007 1.007 0 0 0 1.454 0l2.98-3.146-.727-.688z"
    />
    <path
      fill="currentColor"
      d="M8 1C4.141 1 1 4.141 1 8s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7m0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6"
    />
  </svg>
);
SvgChevronCircleDownOutline.displayName = "ChevronCircleDownOutline";
const ForwardRef = forwardRef(SvgChevronCircleDownOutline);
export default ForwardRef;
