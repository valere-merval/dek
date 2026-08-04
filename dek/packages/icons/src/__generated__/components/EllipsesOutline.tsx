import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEllipsesOutline = (
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
      d="M3.5 6.5C2.673 6.5 2 7.173 2 8s.673 1.5 1.5 1.5S5 8.827 5 8s-.673-1.5-1.5-1.5m0 2A.5.5 0 0 1 3 8c0-.275.225-.5.5-.5s.5.225.5.5-.225.5-.5.5M12.5 6.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S14 8.827 14 8s-.673-1.5-1.5-1.5m0 2A.5.5 0 0 1 12 8c0-.275.225-.5.5-.5s.5.225.5.5-.225.5-.5.5M8 6.5c-.827 0-1.5.673-1.5 1.5S7.173 9.5 8 9.5 9.5 8.827 9.5 8 8.827 6.5 8 6.5m0 2a.5.5 0 0 1-.5-.5c0-.275.225-.5.5-.5s.5.225.5.5-.225.5-.5.5"
    />
  </svg>
);
SvgEllipsesOutline.displayName = "EllipsesOutline";
const ForwardRef = forwardRef(SvgEllipsesOutline);
export default ForwardRef;
