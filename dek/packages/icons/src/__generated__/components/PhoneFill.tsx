import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPhoneFill = (
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
      d="M13.98 12.97c-.52.7-1.37 1.53-2.48 1.53-1.59 0-4.21-1.5-6.35-3.65C3 8.71 1.5 6.09 1.5 4.5c0-1.11.83-1.96 1.53-2.48.58-.43 1.38-.31 1.86.27l1.35 1.62c.53.64.45 1.59-.19 2.11L3.91 7.81c.54.79 1.2 1.59 1.94 2.34.75.74 1.55 1.4 2.34 1.94l1.79-2.14c.25-.31.61-.5 1.01-.54.4-.03.79.09 1.1.35l1.62 1.35c.58.48.7 1.28.27 1.86"
    />
  </svg>
);
SvgPhoneFill.displayName = "PhoneFill";
const ForwardRef = forwardRef(SvgPhoneFill);
export default ForwardRef;
