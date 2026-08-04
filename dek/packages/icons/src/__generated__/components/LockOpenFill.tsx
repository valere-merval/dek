import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLockOpenFill = (
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
      d="M11.75 1A3.254 3.254 0 0 0 8.5 4.25V6H2.75a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 9.75 6H9.5V4.25C9.5 3.01 10.51 2 11.75 2S14 3.01 14 4.25V7h1V4.25A3.254 3.254 0 0 0 11.75 1M7.125 12.5h-1.75l.268-1.952a1.1 1.1 0 0 1-.518-.923 1.125 1.125 0 0 1 2.25 0c0 .393-.213.722-.518.923z"
    />
  </svg>
);
SvgLockOpenFill.displayName = "LockOpenFill";
const ForwardRef = forwardRef(SvgLockOpenFill);
export default ForwardRef;
