import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPowerSetting = (
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
      d="m12.241 3.759-.707.707A4.99 4.99 0 0 1 13 8c0 2.757-2.243 5-5 5s-5-2.243-5-5c0-1.378.561-2.628 1.466-3.534l-.707-.707A5.98 5.98 0 0 0 2 8c0 3.309 2.691 6 6 6s6-2.691 6-6a5.99 5.99 0 0 0-1.759-4.241"
    />
    <path
      fill="currentColor"
      d="M8 8.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5"
    />
  </svg>
);
SvgPowerSetting.displayName = "PowerSetting";
const ForwardRef = forwardRef(SvgPowerSetting);
export default ForwardRef;
