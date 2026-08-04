import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAppBadgeOutline = (
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
      d="M13 11c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4.04c.05-.35.15-.69.31-1H5C3.35 2 2 3.35 2 5v6c0 1.65 1.35 3 3 3h6c1.65 0 3-1.35 3-3V6.65c-.31.16-.65.26-1 .31z"
    />
    <path
      fill="currentColor"
      d="M12.5 1c-.82 0-1.54.39-2 1a2.53 2.53 0 0 0-.5 1.5 2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 12.5 1"
    />
  </svg>
);
SvgAppBadgeOutline.displayName = "AppBadgeOutline";
const ForwardRef = forwardRef(SvgAppBadgeOutline);
export default ForwardRef;
