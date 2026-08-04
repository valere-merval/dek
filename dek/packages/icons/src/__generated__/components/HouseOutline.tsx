import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHouseOutline = (
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
      d="M11.5 14h-7c-.827 0-1.5-.673-1.5-1.5V7.621c0-.4.156-.777.439-1.061L8 1.999l4.561 4.561c.283.283.439.66.439 1.061V12.5c0 .827-.673 1.5-1.5 1.5M8 3.414 4.146 7.268A.5.5 0 0 0 4 7.622v4.879c0 .275.225.5.5.5h7c.275 0 .5-.225.5-.5V7.622a.5.5 0 0 0-.146-.354z"
    />
  </svg>
);
SvgHouseOutline.displayName = "HouseOutline";
const ForwardRef = forwardRef(SvgHouseOutline);
export default ForwardRef;
