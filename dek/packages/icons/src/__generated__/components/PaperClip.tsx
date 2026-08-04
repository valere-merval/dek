import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPaperClip = (
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
      d="M8.5 15A4.505 4.505 0 0 1 4 10.5V4.25A3.254 3.254 0 0 1 7.25 1a3.254 3.254 0 0 1 3.25 3.25v5.756c0 1.103-.897 2-2 2s-2-.897-2-2V4h1v6.006a1 1 0 0 0 2 0V4.25C9.5 3.01 8.49 2 7.25 2S5 3.01 5 4.25v6.25C5 12.43 6.57 14 8.5 14s3.5-1.57 3.5-3.5V3.987h1V10.5c0 2.481-2.019 4.5-4.5 4.5"
    />
  </svg>
);
SvgPaperClip.displayName = "PaperClip";
const ForwardRef = forwardRef(SvgPaperClip);
export default ForwardRef;
