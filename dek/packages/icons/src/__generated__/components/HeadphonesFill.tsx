import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHeadphonesFill = (
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
      d="M13.618 3.996C12.415 2.428 10.315 1.491 8 1.491s-4.415.937-5.618 2.505c-1.039 1.355-1.343 3.102-.856 4.917l1.207 4.497.965-.258.002.007a1.626 1.626 0 0 0 3.14-.841L6.064 9.42a1.626 1.626 0 0 0-3.14.839l-.431-1.606c-.411-1.53-.174-2.93.684-4.049 1.015-1.323 2.819-2.113 4.825-2.113s3.81.79 4.825 2.113c.858 1.119 1.094 2.519.684 4.049l-.431 1.605a1.625 1.625 0 0 0-3.141-.838l-.776 2.898a1.625 1.625 0 1 0 3.14.841l.002-.007.965.258 1.207-4.497c.487-1.815.183-3.562-.856-4.917z"
    />
  </svg>
);
SvgHeadphonesFill.displayName = "HeadphonesFill";
const ForwardRef = forwardRef(SvgHeadphonesFill);
export default ForwardRef;
