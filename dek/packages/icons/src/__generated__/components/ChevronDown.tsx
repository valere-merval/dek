import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronDown = (
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
      d="M8 10.483a1 1 0 0 1-.679-.264L2.793 6.027l.68-.734L8 9.485l4.527-4.192.68.734-4.527 4.192a1 1 0 0 1-.68.264"
    />
  </svg>
);
SvgChevronDown.displayName = "ChevronDown";
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
