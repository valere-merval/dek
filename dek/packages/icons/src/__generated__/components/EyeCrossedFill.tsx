import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEyeCrossedFill = (
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
      d="M10.25 8a2.253 2.253 0 0 0-3.18-2.05l2.98 2.98c.13-.28.2-.6.2-.93"
    />
    <path
      fill="currentColor"
      d="M8 3c-1.25 0-2.32.26-3.22.66l1.55 1.55c.49-.29 1.06-.46 1.67-.46 1.79 0 3.25 1.46 3.25 3.25 0 .61-.17 1.18-.46 1.67l1.85 1.85C14.68 10.05 15.5 8 15.5 8s-2-5-7.5-5M10.14 10.44l-.7-.7h-.01L6.26 6.57v-.01l-.7-.7-1.71-1.71-2-2-.7.7 1.88 1.88C1.23 6.17.5 8 .5 8s2 5 7.5 5c1.07 0 2-.19 2.81-.49l2.34 2.34.7-.7-2.08-2.08zM8 11.25c-1.79 0-3.25-1.46-3.25-3.25 0-.45.09-.89.27-1.28l.79.79c-.04.16-.06.32-.06.49 0 1.24 1.01 2.25 2.25 2.25.17 0 .33-.02.49-.06l.79.79c-.39.18-.83.27-1.28.27"
    />
  </svg>
);
SvgEyeCrossedFill.displayName = "EyeCrossedFill";
const ForwardRef = forwardRef(SvgEyeCrossedFill);
export default ForwardRef;
