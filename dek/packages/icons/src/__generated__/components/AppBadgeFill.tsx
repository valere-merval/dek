import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAppBadgeFill = (
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
      d="M13 6.96c-.16.03-.33.04-.5.04C10.57 7 9 5.43 9 3.5c0-.17.01-.34.04-.5.02-.17.06-.34.11-.5.05-.17.11-.34.2-.5H5C3.35 2 2 3.35 2 5v6c0 1.65 1.35 3 3 3h6c1.65 0 3-1.35 3-3V6.65c-.16.09-.33.15-.5.2-.16.05-.33.09-.5.11"
    />
    <path
      fill="currentColor"
      d="M12.5 1c-.82 0-1.54.39-2 1-.12.15-.22.32-.29.5-.07.16-.12.32-.16.5a2.5 2.5 0 0 0 3.45 2.79c.18-.07.35-.17.5-.29A2.5 2.5 0 0 0 12.5 1"
    />
  </svg>
);
SvgAppBadgeFill.displayName = "AppBadgeFill";
const ForwardRef = forwardRef(SvgAppBadgeFill);
export default ForwardRef;
