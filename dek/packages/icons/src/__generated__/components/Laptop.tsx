import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLaptop = (
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
      d="M13 12c.827 0 1.5-.673 1.5-1.5v-6c0-.827-.673-1.5-1.5-1.5H3c-.827 0-1.5.673-1.5 1.5v6c0 .827.673 1.5 1.5 1.5H0a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 12zM2.5 10.5v-6c0-.275.225-.5.5-.5h10c.275 0 .5.225.5.5v6c0 .275-.225.5-.5.5H3a.5.5 0 0 1-.5-.5"
    />
  </svg>
);
SvgLaptop.displayName = "Laptop";
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;
