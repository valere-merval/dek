import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEggFill = (
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
      d="M8 2C5.687 2 3.375 6.22 3.375 9.333 3.375 11.913 5.443 14 8 14s4.625-2.087 4.625-4.667C12.625 6.22 10.312 2 8 2m.75 9.75c-2.096 0-3.25-1.154-3.25-3.25h1c0 1.535.715 2.25 2.25 2.25z"
    />
  </svg>
);
SvgEggFill.displayName = "EggFill";
const ForwardRef = forwardRef(SvgEggFill);
export default ForwardRef;
