import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLoupe = (
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
      d="m13.604 12.896-2.75-2.75C11.559 9.284 12 8.198 12 7c0-2.757-2.243-5-5-5S2 4.243 2 7s2.243 5 5 5c1.198 0 2.284-.441 3.146-1.146l2.75 2.75zM3 7c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4"
    />
  </svg>
);
SvgLoupe.displayName = "Loupe";
const ForwardRef = forwardRef(SvgLoupe);
export default ForwardRef;
