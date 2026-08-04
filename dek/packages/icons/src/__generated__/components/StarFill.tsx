import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgStarFill = (
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
      d="M7.525 1.691a.5.5 0 0 1 .95 0L9.889 5.98h4.555a.5.5 0 0 1 .291.907l-3.679 2.635 1.409 4.274a.5.5 0 0 1-.766.563L8 11.71l-3.699 2.649a.5.5 0 0 1-.766-.563l1.409-4.274-3.679-2.635a.5.5 0 0 1 .291-.907h4.555z"
    />
  </svg>
);
SvgStarFill.displayName = "StarFill";
const ForwardRef = forwardRef(SvgStarFill);
export default ForwardRef;
