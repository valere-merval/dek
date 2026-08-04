import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEyeFill = (
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
      d="M8 10.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
    />
    <path
      fill="currentColor"
      d="M8 3C2.5 3 .5 8 .5 8s2 5 7.5 5 7.5-5 7.5-5-2-5-7.5-5m0 8.25A3.254 3.254 0 0 1 4.75 8 3.254 3.254 0 0 1 8 4.75 3.254 3.254 0 0 1 11.25 8 3.254 3.254 0 0 1 8 11.25"
    />
  </svg>
);
SvgEyeFill.displayName = "EyeFill";
const ForwardRef = forwardRef(SvgEyeFill);
export default ForwardRef;
