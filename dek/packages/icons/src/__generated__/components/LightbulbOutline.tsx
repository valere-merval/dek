import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLightbulbOutline = (
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
      d="M8 1C5.243 1 3 3.243 3 6c0 1.783.95 3.403 2.5 4.299V11.5h5v-1.201A4.95 4.95 0 0 0 13 6c0-2.757-2.243-5-5-5m1.776 8.553-.276.139v.809h-1V7.708l1.854-1.854-.707-.707-1.646 1.646-1.646-1.646-.707.707 1.854 1.854v2.793h-1v-.809l-.276-.139C4.854 8.867 4.002 7.506 4.002 6c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.506-.852 2.867-2.224 3.553zM10 12.25H6v1h4zM8 15a1 1 0 0 0 1-1H7a1 1 0 0 0 1 1"
    />
  </svg>
);
SvgLightbulbOutline.displayName = "LightbulbOutline";
const ForwardRef = forwardRef(SvgLightbulbOutline);
export default ForwardRef;
