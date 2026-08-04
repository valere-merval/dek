import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChristmasTreeFill = (
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
      d="M11.2 8h1.757L8 .874 3.043 8H4.8l-2.75 4H7v3h2v-3h4.95z"
    />
  </svg>
);
SvgChristmasTreeFill.displayName = "ChristmasTreeFill";
const ForwardRef = forwardRef(SvgChristmasTreeFill);
export default ForwardRef;
