import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgArrowRight = (
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
      d="m13 7.293-4-4L8.293 4l3.5 3.5H2.5v1h9.293l-3.5 3.5.707.707 4-4a1 1 0 0 0 0-1.414"
    />
  </svg>
);
SvgArrowRight.displayName = "ArrowRight";
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
