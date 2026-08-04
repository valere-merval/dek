import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPlayFill = (
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
      d="m13.876 8.416-8.099 6.066A.5.5 0 0 1 5 14.066V1.934a.5.5 0 0 1 .777-.416l8.099 6.066a.5.5 0 0 1 0 .832"
    />
  </svg>
);
SvgPlayFill.displayName = "PlayFill";
const ForwardRef = forwardRef(SvgPlayFill);
export default ForwardRef;
