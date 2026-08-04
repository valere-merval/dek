import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFileOutline = (
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
      d="M11.5 1H6.725a1.76 1.76 0 0 0-1.237.513L3.513 3.488A1.76 1.76 0 0 0 3 4.725V13.5c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5m.5 12.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-8h2.5a1 1 0 0 0 1-1V2h4c.275 0 .5.225.5.5z"
    />
    <path fill="currentColor" d="M10 12H5v1h5zM11 10H5v1h6zM9 8H5v1h4z" />
  </svg>
);
SvgFileOutline.displayName = "FileOutline";
const ForwardRef = forwardRef(SvgFileOutline);
export default ForwardRef;
