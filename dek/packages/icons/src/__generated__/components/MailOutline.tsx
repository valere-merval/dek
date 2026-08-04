import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgMailOutline = (
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
      d="M13.5 3h-11C1.673 3 1 3.673 1 4.5v7c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5m-.281 1L8.16 8.216a.25.25 0 0 1-.32 0L2.781 4H13.22zm.281 8h-11a.5.5 0 0 1-.5-.5V4.651l5.199 4.332a1.25 1.25 0 0 0 1.602 0L14 4.651V11.5c0 .275-.225.5-.5.5"
    />
  </svg>
);
SvgMailOutline.displayName = "MailOutline";
const ForwardRef = forwardRef(SvgMailOutline);
export default ForwardRef;
