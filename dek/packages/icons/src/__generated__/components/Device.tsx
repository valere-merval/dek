import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDevice = (
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
      d="M10 12.5H6v1h4zM8 4a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 4"
    />
    <path
      fill="currentColor"
      d="M10.5 1h-5A1.5 1.5 0 0 0 4 2.5v11A1.5 1.5 0 0 0 5.5 15h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 10.5 1m.5 12.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5z"
    />
  </svg>
);
SvgDevice.displayName = "Device";
const ForwardRef = forwardRef(SvgDevice);
export default ForwardRef;
