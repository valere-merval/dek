import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPlayOutline = (
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
      d="M6 2.868 12.697 8 6 13.132zm-.499-1.435A.5.5 0 0 0 5 1.934v12.131a.5.5 0 0 0 .777.416l8.099-6.066a.5.5 0 0 0 0-.832L5.777 1.518a.5.5 0 0 0-.276-.085"
    />
  </svg>
);
SvgPlayOutline.displayName = "PlayOutline";
const ForwardRef = forwardRef(SvgPlayOutline);
export default ForwardRef;
