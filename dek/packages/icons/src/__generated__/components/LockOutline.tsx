import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLockOutline = (
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
      d="M11.5 6h-.25V4.25A3.254 3.254 0 0 0 8 1a3.254 3.254 0 0 0-3.25 3.25V6H4.5C3.673 6 3 6.673 3 7.5v6c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-6c0-.827-.673-1.5-1.5-1.5M5.75 4.25C5.75 3.01 6.76 2 8 2s2.25 1.01 2.25 2.25V6h-4.5zM12 13.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-6c0-.275.225-.5.5-.5h7c.275 0 .5.225.5.5z"
    />
    <path
      fill="currentColor"
      d="M9.125 9.625a1.125 1.125 0 0 0-2.25 0c0 .393.213.722.518.923L7.125 12.5h1.75l-.268-1.952c.305-.201.518-.53.518-.923"
    />
  </svg>
);
SvgLockOutline.displayName = "LockOutline";
const ForwardRef = forwardRef(SvgLockOutline);
export default ForwardRef;
