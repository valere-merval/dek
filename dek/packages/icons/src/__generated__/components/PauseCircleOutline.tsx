import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPauseCircleOutline = (
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
      d="M8 1C4.141 1 1 4.141 1 8s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7m0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6"
    />
    <path fill="currentColor" d="M7 5.5H6v5h1zM10 5.5H9v5h1z" />
  </svg>
);
SvgPauseCircleOutline.displayName = "PauseCircleOutline";
const ForwardRef = forwardRef(SvgPauseCircleOutline);
export default ForwardRef;
