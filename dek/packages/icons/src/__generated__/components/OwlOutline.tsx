import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgOwlOutline = (
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
      d="M8 2C4.691 2 2 4.691 2 8v6h1v-2.69A6 6 0 0 0 8 14a6 6 0 0 0 5-2.69V14h1V8c0-3.309-2.691-6-6-6m3.019 2.041C9.992 4.138 9.263 4.467 8 5.577c-1.262-1.11-1.992-1.439-3.019-1.536A4.96 4.96 0 0 1 8 3c1.139 0 2.177.398 3.019 1.041M8 13c-2.757 0-5-2.243-5-5 0-1.129.39-2.16 1.023-2.997 1.51.011 2.038.146 3.639 1.616a.5.5 0 0 0 .676 0c1.601-1.469 2.128-1.605 3.639-1.616A4.95 4.95 0 0 1 13 8c0 2.757-2.243 5-5 5"
    />
    <path
      fill="currentColor"
      d="M5.25 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M10.75 9.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M7 10.25 8 12l1-1.75-1-1z"
    />
  </svg>
);
SvgOwlOutline.displayName = "OwlOutline";
const ForwardRef = forwardRef(SvgOwlOutline);
export default ForwardRef;
