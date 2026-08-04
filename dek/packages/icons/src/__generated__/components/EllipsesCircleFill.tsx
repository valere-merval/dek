import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEllipsesCircleFill = (
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
      d="M8 1C4.14 1 1 4.141 1 8s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7M4.625 9.125a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.375 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.375 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25"
    />
  </svg>
);
SvgEllipsesCircleFill.displayName = "EllipsesCircleFill";
const ForwardRef = forwardRef(SvgEllipsesCircleFill);
export default ForwardRef;
