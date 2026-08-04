import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLockFill = (
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
      d="M11.5 6h-.25V4.25C11.25 2.46 9.79 1 8 1S4.75 2.46 4.75 4.25V6H4.5C3.67 6 3 6.67 3 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5M5.75 4.25C5.75 3.01 6.76 2 8 2s2.25 1.01 2.25 2.25V6h-4.5zm3.13 8.25H7.12l.27-1.93c-.31-.2-.51-.55-.51-.95C6.88 9 7.38 8.5 8 8.5s1.12.5 1.12 1.12c0 .4-.2.75-.51.95z"
    />
  </svg>
);
SvgLockFill.displayName = "LockFill";
const ForwardRef = forwardRef(SvgLockFill);
export default ForwardRef;
