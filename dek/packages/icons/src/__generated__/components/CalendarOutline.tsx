import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCalendarOutline = (
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
      d="M12.5 2H12V1h-1v1H5V1H4v1h-.5C2.673 2 2 2.673 2 3.5v9c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5m.5 10.5c0 .275-.225.5-.5.5h-9a.5.5 0 0 1-.5-.5V6h10zM3 5V3.5c0-.275.225-.5.5-.5h9c.275 0 .5.225.5.5V5z"
    />
    <path
      fill="currentColor"
      d="M5.5 10.5h-1v1h1zM5.5 7.5h-1v1h1zM11.5 7.5h-1v1h1zM8.5 10.5h-1v1h1zM8.5 7.5h-1v1h1zM11.5 10.5h-1v1h1z"
    />
  </svg>
);
SvgCalendarOutline.displayName = "CalendarOutline";
const ForwardRef = forwardRef(SvgCalendarOutline);
export default ForwardRef;
