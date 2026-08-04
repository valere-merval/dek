import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSimCardStarFill = (
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
      d="m12.49 3.49-1.98-1.98C10.18 1.18 9.74 1 9.28 1H4.5C3.67 1 3 1.67 3 2.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V4.72c0-.46-.18-.9-.51-1.23M8 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
    />
    <path
      fill="currentColor"
      d="M9.86 9.32H8.54l-.4-1.23c-.05-.14-.23-.14-.28 0l-.4 1.23H6.14c-.14 0-.19.18-.08.26l1.06.76-.41 1.23c-.04.14.11.25.22.16L8 10.97l1.07.76c.11.09.26-.02.22-.16l-.41-1.23 1.06-.76c.11-.08.06-.26-.08-.26"
    />
  </svg>
);
SvgSimCardStarFill.displayName = "SimCardStarFill";
const ForwardRef = forwardRef(SvgSimCardStarFill);
export default ForwardRef;
