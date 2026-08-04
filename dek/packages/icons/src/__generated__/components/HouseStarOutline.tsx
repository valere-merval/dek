import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHouseStarOutline = (
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
      d="M12.56 6.56 8 2 3.44 6.56c-.28.28-.44.67-.44 1.06v4.88c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V7.62c0-.39-.16-.78-.44-1.06M12 12.5c0 .28-.22.5-.5.5h-7c-.28 0-.5-.22-.5-.5V7.62c0-.13.05-.26.15-.35L8 3.41l3.85 3.86c.1.09.15.22.15.35z"
    />
    <path
      fill="currentColor"
      d="M8 6.5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m1.94 2.58-1.06.76.41 1.23c.04.14-.11.25-.22.16L8 10.47l-1.07.76c-.11.09-.26-.02-.22-.16l.41-1.23-1.06-.76c-.11-.08-.06-.26.08-.26h1.32l.4-1.23c.05-.14.23-.14.28 0l.4 1.23h1.32c.14 0 .19.18.08.26"
    />
  </svg>
);
SvgHouseStarOutline.displayName = "HouseStarOutline";
const ForwardRef = forwardRef(SvgHouseStarOutline);
export default ForwardRef;
