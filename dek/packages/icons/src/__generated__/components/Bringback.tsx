import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgBringback = (
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
      d="M8 12.895a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
    <path
      fill="currentColor"
      d="M11 13.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2h1v-2A1.5 1.5 0 0 0 10.5 1h-5A1.5 1.5 0 0 0 4 2.5v11A1.5 1.5 0 0 0 5.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-2h-1z"
    />
    <path
      fill="currentColor"
      d="M11.25 5.5H8.569V3.946L6.527 5.988 8.569 8.03V6.501h2.681c.827 0 1.5.561 1.5 1.25s-.673 1.25-1.5 1.25H9.407v1h1.843c1.379 0 2.5-1.01 2.5-2.25S12.629 5.5 11.25 5.5"
    />
  </svg>
);
SvgBringback.displayName = "Bringback";
const ForwardRef = forwardRef(SvgBringback);
export default ForwardRef;
