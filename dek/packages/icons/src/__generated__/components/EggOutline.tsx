import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEggOutline = (
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
      d="M8 2C5.687 2 3.375 6.22 3.375 9.333 3.375 11.913 5.443 14 8 14s4.625-2.087 4.625-4.667C12.625 6.22 10.312 2 8 2m0 11c-1.999 0-3.625-1.645-3.625-3.667C4.375 6.61 6.442 3 8 3s3.625 3.611 3.625 6.333C11.625 11.355 9.999 13 8 13"
    />
    <path
      fill="currentColor"
      d="M6.5 8.5h-1c0 2.096 1.154 3.25 3.25 3.25v-1c-1.535 0-2.25-.715-2.25-2.25"
    />
  </svg>
);
SvgEggOutline.displayName = "EggOutline";
const ForwardRef = forwardRef(SvgEggOutline);
export default ForwardRef;
