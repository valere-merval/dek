import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgMegaphoneOutline = (
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
      d="M3.5 5.5A2.5 2.5 0 0 0 1 8c0 1.379 1.121 2.5 2.5 2.5V14h1v-3.5H6l3 2v-9l-3 2zM8 5.369v5.262L6.303 9.5H3.5C2.673 9.5 2 8.827 2 8s.673-1.5 1.5-1.5h2.803zM9.75 10.18a2.87 2.87 0 0 0 1-2.18 2.87 2.87 0 0 0-1-2.18zM13.33 2.75l-2.261 1.702.601.798 2.26-1.702zM11.67 10.75l-.601.798 2.26 1.703.601-.799zM15 7.5h-2.75v1H15z"
    />
  </svg>
);
SvgMegaphoneOutline.displayName = "MegaphoneOutline";
const ForwardRef = forwardRef(SvgMegaphoneOutline);
export default ForwardRef;
