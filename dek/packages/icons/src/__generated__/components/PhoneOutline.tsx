import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPhoneOutline = (
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
      d="m13.712 11.109-1.623-1.353a1.504 1.504 0 0 0-2.113.191l-1.787 2.145a16.7 16.7 0 0 1-2.335-1.946 16.7 16.7 0 0 1-1.946-2.335l2.145-1.787a1.5 1.5 0 0 0 .534-1.017 1.49 1.49 0 0 0-.343-1.095L4.891 2.288c-.48-.579-1.28-.693-1.856-.269-.7.517-1.534 1.366-1.534 2.48 0 1.594 1.499 4.207 3.646 6.354s4.76 3.646 6.354 3.646c1.114 0 1.964-.834 2.48-1.534.425-.577.31-1.375-.269-1.856M2.5 4.5c0-.734.707-1.365 1.128-1.675a.3.3 0 0 1 .177-.059c.12 0 .24.069.318.162l1.353 1.625a.494.494 0 0 1-.065.703L3.369 6.958C2.821 6.007 2.5 5.134 2.5 4.5m10.676 7.872c-.311.421-.941 1.128-1.676 1.128-.635 0-1.508-.321-2.458-.869l1.701-2.042a.5.5 0 0 1 .705-.064l1.623 1.353c.141.117.226.331.104.495z"
    />
  </svg>
);
SvgPhoneOutline.displayName = "PhoneOutline";
const ForwardRef = forwardRef(SvgPhoneOutline);
export default ForwardRef;
