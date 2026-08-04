import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPassportOutline = (
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
      d="M11.5 1h-7C3.673 1 3 1.673 3 2.5v11c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5m.5 12.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-11c0-.275.225-.5.5-.5h7c.275 0 .5.225.5.5z"
    />
    <path
      fill="currentColor"
      d="M8 11c-1.381 0-2.5.895-2.5 2h5c0-1.105-1.119-2-2.5-2M8 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10 3H6v1h4zM11 4.5H5v1h6z"
    />
  </svg>
);
SvgPassportOutline.displayName = "PassportOutline";
const ForwardRef = forwardRef(SvgPassportOutline);
export default ForwardRef;
