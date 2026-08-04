import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAccessibilityFill = (
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
      d="M12.628 2.954a1 1 0 0 1 1.02 1.72l-3.146 1.865L10.5 14a1 1 0 1 1-2 0V9.741h-1V14a1 1 0 1 1-2 0V6.548l-3.16-1.873a1 1 0 0 1 1.02-1.72L5.967 4.5h4.052z"
    />
    <path fill="currentColor" d="M8 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
  </svg>
);
SvgAccessibilityFill.displayName = "AccessibilityFill";
const ForwardRef = forwardRef(SvgAccessibilityFill);
export default ForwardRef;
