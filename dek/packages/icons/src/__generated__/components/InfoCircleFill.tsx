import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgInfoCircleFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m.5 11h-1V7h1zM8 5.5c-.41 0-.75-.34-.75-.75S7.59 4 8 4s.75.34.75.75-.34.75-.75.75"
    />
  </svg>
);
SvgInfoCircleFill.displayName = "InfoCircleFill";
const ForwardRef = forwardRef(SvgInfoCircleFill);
export default ForwardRef;
