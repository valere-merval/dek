import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEllipsesFill = (
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
      d="M3.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
SvgEllipsesFill.displayName = "EllipsesFill";
const ForwardRef = forwardRef(SvgEllipsesFill);
export default ForwardRef;
