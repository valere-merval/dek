import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChevronRight = (
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
      d="m6.027 13.207-.734-.68L9.485 8 5.293 3.473l.734-.68 4.192 4.527c.352.382.352.978 0 1.358z"
    />
  </svg>
);
SvgChevronRight.displayName = "ChevronRight";
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
