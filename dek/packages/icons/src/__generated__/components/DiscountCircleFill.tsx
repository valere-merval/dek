import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDiscountCircleFill = (
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
      d="M10.744 8.256c-.587 0-.744.472-.744 1.363s.169 1.387.756 1.387.744-.548.744-1.364c0-.892-.17-1.386-.756-1.386"
    />
    <path
      fill="currentColor"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M3.5 6.392C3.5 4.918 4.104 4 5.256 4 6.43 4 7 4.918 7 6.369S6.374 8.75 5.233 8.75C4.104 8.75 3.5 7.844 3.5 6.392M6.5 12h-1l4-8h1zm4.233 0C9.604 12 9 11.094 9 9.642c0-1.474.604-2.392 1.756-2.392 1.174 0 1.744.918 1.744 2.369S11.874 12 10.733 12"
    />
    <path
      fill="currentColor"
      d="M5.244 5.006c-.587 0-.744.472-.744 1.363s.169 1.387.756 1.387S6 7.208 6 6.392c0-.892-.17-1.386-.756-1.386"
    />
  </svg>
);
SvgDiscountCircleFill.displayName = "DiscountCircleFill";
const ForwardRef = forwardRef(SvgDiscountCircleFill);
export default ForwardRef;
