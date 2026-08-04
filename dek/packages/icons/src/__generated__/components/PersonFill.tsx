import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPersonFill = (
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
      d="M8 9a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
SvgPersonFill.displayName = "PersonFill";
const ForwardRef = forwardRef(SvgPersonFill);
export default ForwardRef;
