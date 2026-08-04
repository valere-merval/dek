import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHeadphonesOutline = (
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
      d="M13.618 3.996C12.415 2.428 10.314 1.491 8 1.491s-4.415.937-5.618 2.505c-1.039 1.355-1.343 3.102-.855 4.917l1.206 4.498.965-.259.002.008a1.626 1.626 0 0 0 3.14-.841l-.776-2.898a1.626 1.626 0 0 0-3.142.832l-.429-1.599c-.411-1.53-.175-2.93.684-4.049 1.015-1.323 2.818-2.113 4.824-2.113s3.81.79 4.824 2.113c.858 1.119 1.095 2.519.685 4.049l-.431 1.604a1.624 1.624 0 0 0-3.141-.837l-.776 2.898a1.625 1.625 0 1 0 3.14.841l.002-.008.965.259 1.207-4.498c.486-1.815.183-3.562-.856-4.917zM4.33 9.237a.627.627 0 0 1 .766.442l.776 2.898a.623.623 0 0 1-.605.787.626.626 0 0 1-.603-.464l-.776-2.898a.625.625 0 0 1 .442-.765m7.781.765-.776 2.898a.626.626 0 0 1-1.208-.323l.776-2.898a.626.626 0 0 1 1.208.323"
    />
  </svg>
);
SvgHeadphonesOutline.displayName = "HeadphonesOutline";
const ForwardRef = forwardRef(SvgHeadphonesOutline);
export default ForwardRef;
