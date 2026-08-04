import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgOwlFill = (
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
      d="M8 2C4.691 2 2 4.691 2 8v6h12V8c0-3.309-2.691-6-6-6m3.019 2.041C9.992 4.138 9.262 4.467 8 5.577c-1.262-1.11-1.992-1.439-3.019-1.536A4.96 4.96 0 0 1 8 3c1.139 0 2.177.398 3.019 1.041m-6.995.961c1.51.011 2.037.146 3.639 1.616a.497.497 0 0 0 .676 0c1.602-1.469 2.128-1.605 3.639-1.616a4.95 4.95 0 0 1 1.023 2.997c0 2.757-2.243 5-5 5s-5-2.243-5-5c0-1.129.39-2.16 1.023-2.997"
    />
    <path
      fill="currentColor"
      d="M5.25 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.75 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 10.25l-1-1-1 1L8 12z"
    />
  </svg>
);
SvgOwlFill.displayName = "OwlFill";
const ForwardRef = forwardRef(SvgOwlFill);
export default ForwardRef;
