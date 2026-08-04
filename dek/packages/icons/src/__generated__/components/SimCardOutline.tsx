import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSimCardOutline = (
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
      d="m12.487 3.487-1.975-1.975A1.76 1.76 0 0 0 9.275.999H4.5c-.827 0-1.5.673-1.5 1.5v11c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5V4.725c0-.461-.187-.912-.513-1.238M12 13.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h4.775c.197 0 .391.08.53.22l1.975 1.975c.14.14.22.333.22.531z"
    />
    <path
      fill="currentColor"
      d="M6.5 11.5H5V13h1.5zM6.5 9.25H5v1.5h1.5zM6.5 7H5v1.5h1.5zM11 11.5H9.5V13H11zM11 9.25H9.5v1.5H11z"
    />
    <path fill="currentColor" d="M8 7h-.75v6h1.5V8.5H11V7H8" />
  </svg>
);
SvgSimCardOutline.displayName = "SimCardOutline";
const ForwardRef = forwardRef(SvgSimCardOutline);
export default ForwardRef;
