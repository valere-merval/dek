import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgTape = (
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
      d="M12 5c-1.654 0-3 1.346-3 3 0 .771.301 1.468.78 2H6.219c.48-.532.78-1.229.78-2 0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3h8c1.654 0 3-1.346 3-3s-1.346-3-3-3zM2 8c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2m10 2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
    />
  </svg>
);
SvgTape.displayName = "Tape";
const ForwardRef = forwardRef(SvgTape);
export default ForwardRef;
