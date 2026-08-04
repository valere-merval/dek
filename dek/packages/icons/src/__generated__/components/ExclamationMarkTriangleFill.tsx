import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgExclamationMarkTriangleFill = (
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
      d="M14.675 12.514 8.874 2.073a1 1 0 0 0-1.748 0L1.325 12.514A1 1 0 0 0 2.199 14H13.8a1 1 0 0 0 .874-1.486zM7.5 5.75h1v4h-1zm.5 6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75"
    />
  </svg>
);
SvgExclamationMarkTriangleFill.displayName = "ExclamationMarkTriangleFill";
const ForwardRef = forwardRef(SvgExclamationMarkTriangleFill);
export default ForwardRef;
