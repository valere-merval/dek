import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgArrowLeft = (
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
      d="M13.5 7.5H4.207l3.5-3.5L7 3.293l-4 4a1 1 0 0 0 0 1.414l4 4L7.707 12l-3.5-3.5H13.5z"
    />
  </svg>
);
SvgArrowLeft.displayName = "ArrowLeft";
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
