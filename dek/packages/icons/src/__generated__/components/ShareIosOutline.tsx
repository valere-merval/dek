import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgShareIosOutline = (
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
      d="M12 5h-2v1h2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 4 6h2V5H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 15h8a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12 5"
    />
    <path
      fill="currentColor"
      d="M7.5 2.207V10h1V2.207l1.646 1.646.707-.707L8.707 1a1 1 0 0 0-1.414 0L5.147 3.146l.707.707z"
    />
  </svg>
);
SvgShareIosOutline.displayName = "ShareIosOutline";
const ForwardRef = forwardRef(SvgShareIosOutline);
export default ForwardRef;
