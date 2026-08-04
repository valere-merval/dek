import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCameraOutline = (
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
      d="M13.5 4h-2L10 2H6L4.501 3.999H2.5c-.827 0-1.5.674-1.5 1.501v7c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-7c0-.827-.673-1.5-1.5-1.5m.5 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5H5l1.5-2h3L11 5h2.5c.275 0 .5.225.5.5z"
    />
    <path
      fill="currentColor"
      d="M8 6C6.346 6 5 7.346 5 9s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2M4.5 6H3v1.5h1.5z"
    />
  </svg>
);
SvgCameraOutline.displayName = "CameraOutline";
const ForwardRef = forwardRef(SvgCameraOutline);
export default ForwardRef;
