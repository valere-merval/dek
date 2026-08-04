import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHouseStarFill = (
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
      d="M12.56 6.56 8 2 3.44 6.56c-.28.28-.44.66-.44 1.06v4.88c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V7.62c0-.4-.16-.78-.44-1.06M8 12.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
    />
    <path
      fill="currentColor"
      d="M9.86 8.82H8.54l-.4-1.23c-.05-.14-.23-.14-.28 0l-.4 1.23H6.14c-.14 0-.19.18-.08.26l1.06.76-.41 1.23c-.04.14.11.25.22.16L8 10.47l1.07.76c.11.09.26-.02.22-.16l-.41-1.23 1.06-.76c.11-.08.06-.26-.08-.26"
    />
  </svg>
);
SvgHouseStarFill.displayName = "HouseStarFill";
const ForwardRef = forwardRef(SvgHouseStarFill);
export default ForwardRef;
