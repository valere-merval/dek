import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSimCardFill = (
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
      d="m12.487 3.487-1.975-1.975A1.75 1.75 0 0 0 9.275.999H4.5a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5V4.725c0-.464-.184-.91-.513-1.238M6.5 13H5v-1.5h1.5zm0-2.25H5v-1.5h1.5zm0-2.25H5V7h1.5zM11 13H9.5v-1.5H11zm0-2.25H9.5v-1.5H11zm0-2.25H8.75V13h-1.5V7H11z"
    />
  </svg>
);
SvgSimCardFill.displayName = "SimCardFill";
const ForwardRef = forwardRef(SvgSimCardFill);
export default ForwardRef;
