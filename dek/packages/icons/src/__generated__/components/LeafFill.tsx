import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLeafFill = (
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
      d="m12.72 2-.2-.55-.51.28c-1.42.77-3 1.18-5.61 1.7-2.15.43-3.65 2.28-3.65 4.49 0 .83.26 1.85.88 2.74.14.19.29.38.46.56-.65 1.12-1.14 2.32-1.33 3.62l.98.16c.24-1.09.64-2.11 1.16-3.08C5.91 10 7.33 8.27 8.67 6.59l.36.34a27.3 27.3 0 0 0-2.81 4.03c-.24.44-.48.88-.69 1.32.79.4 1.77.64 2.97.64 3.32 0 5-2.02 5-6 0-2.78-.55-4.29-.78-4.92"
    />
  </svg>
);
SvgLeafFill.displayName = "LeafFill";
const ForwardRef = forwardRef(SvgLeafFill);
export default ForwardRef;
