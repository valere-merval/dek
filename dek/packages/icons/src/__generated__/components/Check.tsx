import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCheck = (
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
      d="M13.686 3.111c-3.692 2.98-4.928 4.455-6.235 6.018-.325.388-.658.785-1.037 1.217l-.652-.425C4.106 8.838 3.421 8.39 1.723 7.552l-.533.84.458.362c1.406 1.113 3.001 2.374 4.476 4.074l.414.476.369-.511c2.768-3.828 4.026-5.518 7.448-8.939z"
    />
  </svg>
);
SvgCheck.displayName = "Check";
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
