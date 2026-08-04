import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronLeft = (
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
      d="M9.973 13.207 5.781 8.68a1.005 1.005 0 0 1 0-1.358l4.192-4.528.734.68-4.192 4.527 4.192 4.527z"
    />
  </svg>
);
SvgChevronLeft.displayName = "ChevronLeft";
const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;
