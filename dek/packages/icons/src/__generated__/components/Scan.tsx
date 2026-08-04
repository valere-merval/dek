import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgScan = (
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
      d="M3 12.5V10H2v2.5c0 .827.673 1.5 1.5 1.5H6v-1H3.5a.5.5 0 0 1-.5-.5M3 3.5a.5.5 0 0 1 .5-.5H6V2H3.5C2.673 2 2 2.673 2 3.5V6h1zM13 12.5a.5.5 0 0 1-.5.5H10v1h2.5c.827 0 1.5-.673 1.5-1.5V10h-1zM12.5 2H10v1h2.5a.5.5 0 0 1 .5.5V6h1V3.5c0-.827-.673-1.5-1.5-1.5M12 7.5H4v1h8z"
    />
  </svg>
);
SvgScan.displayName = "Scan";
const ForwardRef = forwardRef(SvgScan);
export default ForwardRef;
