import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgX = (
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
    <path fill="currentColor" d="m5.515 5.173 4.295 5.616h.658L6.221 5.173z" />
    <path
      fill="currentColor"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.482 10.5L7.61 9.053 5.468 11.5H4.28l2.775-3.172L4.127 4.5h2.45l1.692 2.237L10.226 4.5h1.188L8.82 7.465l3.052 4.035z"
    />
  </svg>
);
SvgX.displayName = "X";
const ForwardRef = forwardRef(SvgX);
export default ForwardRef;
