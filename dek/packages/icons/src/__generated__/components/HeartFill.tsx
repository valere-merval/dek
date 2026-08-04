import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHeartFill = (
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
      d="M15 6.09C15 3.831 13.243 2 11.075 2h-.021c-1.236 0-2.336.602-3.052 1.539C7.286 2.601 6.185 2 4.949 2h-.024C2.757 2 1 3.831 1 6.09c0 .383.052.753.146 1.105C2.007 10.59 8.001 14 8.001 14s6.191-3.522 6.893-6.971a4.3 4.3 0 0 0 .105-.939z"
    />
  </svg>
);
SvgHeartFill.displayName = "HeartFill";
const ForwardRef = forwardRef(SvgHeartFill);
export default ForwardRef;
