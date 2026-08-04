import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPassportFill = (
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
      d="M11.5 1h-7A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 1M6 3h4v1H6zm2 10H5.5c0-1.105 1.119-2 2.5-2s2.5.895 2.5 2zM6.5 8.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 8.5m4.5-3H5v-1h6z"
    />
  </svg>
);
SvgPassportFill.displayName = "PassportFill";
const ForwardRef = forwardRef(SvgPassportFill);
export default ForwardRef;
