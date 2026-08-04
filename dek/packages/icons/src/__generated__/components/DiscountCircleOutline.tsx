import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDiscountCircleOutline = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 13c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6"
    />
    <path
      fill="currentColor"
      d="m9.5 4-4 8h1l4-8zM10.756 7.25C9.604 7.25 9 8.168 9 9.642 9 11.094 9.604 12 10.733 12c1.141 0 1.767-.929 1.767-2.381s-.571-2.369-1.744-2.369m0 3.756c-.587 0-.756-.494-.756-1.387s.156-1.363.744-1.363.756.493.756 1.386c0 .816-.158 1.364-.744 1.364M7 6.369C7 4.918 6.429 4 5.256 4 4.104 4 3.5 4.918 3.5 6.392c0 1.452.604 2.358 1.733 2.358C6.374 8.75 7 7.821 7 6.369M5.257 7.756c-.587 0-.756-.494-.756-1.387s.156-1.363.744-1.363.756.493.756 1.386c0 .816-.158 1.364-.744 1.364"
    />
  </svg>
);
SvgDiscountCircleOutline.displayName = "DiscountCircleOutline";
const ForwardRef = forwardRef(SvgDiscountCircleOutline);
export default ForwardRef;
