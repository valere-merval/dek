import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgRefresh = (
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
      d="M7.99 12.484a4.505 4.505 0 0 1-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5 1.576 0 2.942.829 3.744 2.06L9.947 5.27l-.152.988 2.474.378q.076.012.15.013a1 1 0 0 0 .592-.195 1 1 0 0 0 .396-.653l.379-2.472-.988-.151-.265 1.733c-.99-1.458-2.65-2.426-4.542-2.426a5.507 5.507 0 0 0-5.5 5.5c0 3.032 2.468 5.5 5.5 5.5a5.507 5.507 0 0 0 5.475-5h-1.025c-.252 2.244-2.139 4-4.449 4z"
    />
  </svg>
);
SvgRefresh.displayName = "Refresh";
const ForwardRef = forwardRef(SvgRefresh);
export default ForwardRef;
