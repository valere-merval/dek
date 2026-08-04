import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgBugFill = (
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
      d="M5.89 3.87c-.38.37-.66.85-.79 1.38h5.8c-.13-.53-.41-1.01-.79-1.38l-.001-.001 1.096-2.412-.91-.414-1.022 2.249-.003-.002C8.89 3.1 8.45 3 8 3s-.89.1-1.27.29l-.003.002-1.022-2.249-.91.414 1.096 2.412zM4.93 6.25c-.27.17-.48.44-.59.75H3.5c-.18 0-.34.03-.5.09-.58.2-1 .76-1 1.41v1h1v-1c0-.28.22-.5.5-.5h.75v2.25H3.5c-.827 0-1.5.673-1.5 1.5v1h1v-1a.5.5 0 0 1 .5-.5h.89a3.5 3.5 0 0 0 .642 1.272A1.5 1.5 0 0 0 3.75 14v1h1v-1a.5.5 0 0 1 .5-.5h.88c.41.24.87.4 1.37.46V6.25zM14 9.5v-1c0-.83-.67-1.5-1.5-1.5h-.84a1.47 1.47 0 0 0-.59-.75H8.5v7.71c.5-.06.96-.22 1.37-.46h.88a.5.5 0 0 1 .5.5v1h1v-1c0-.753-.559-1.371-1.282-1.478l.002-.002c.3-.37.51-.8.64-1.27h.89a.5.5 0 0 1 .5.5v1h1v-1c0-.827-.673-1.5-1.5-1.5h-.75V8h.75c.28 0 .5.22.5.5v1z"
    />
  </svg>
);
SvgBugFill.displayName = "BugFill";
const ForwardRef = forwardRef(SvgBugFill);
export default ForwardRef;
