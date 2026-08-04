import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgBugOutline = (
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
      d="M14 9.5v-1c0-.83-.67-1.5-1.5-1.5h-.84c-.11-.34-.35-.62-.66-.79V6c0-.83-.34-1.59-.89-2.13l-.001-.001 1.096-2.412-.91-.414-1.022 2.249-.003-.002C8.89 3.1 8.45 3 8 3s-.89.1-1.27.29l-.003.002-1.022-2.249-.91.414 1.096 2.412-.001.001C5.34 4.41 5 5.17 5 6v.21c-.31.17-.55.45-.66.79H3.5c-.18 0-.34.03-.5.09-.58.2-1 .76-1 1.41v1h1v-1c0-.28.22-.5.5-.5h.75v2.25H3.5c-.827 0-1.5.673-1.5 1.5v1h1v-1c0-.275.225-.5.5-.5h.89a3.5 3.5 0 0 0 .642 1.272A1.5 1.5 0 0 0 3.75 14v1h1v-1c0-.275.225-.5.5-.5h.88c.55.32 1.19.5 1.87.5s1.32-.18 1.87-.5h.88c.275 0 .5.225.5.5v1h1v-1c0-.753-.559-1.371-1.282-1.478l.002-.002c.3-.37.51-.8.64-1.27h.89c.275 0 .5.225.5.5v1h1v-1c0-.827-.673-1.5-1.5-1.5h-.75V8h.75c.28 0 .5.22.5.5v1zM10 6H6c0-1.1.9-2 2-2s2 .9 2 2m-2.5 6.95a2.74 2.74 0 0 1-2.25-2.7V7.5c0-.28.22-.5.5-.5H7.5zM8.5 7h1.75c.28 0 .5.22.5.5v2.75c0 1.35-.97 2.47-2.25 2.7z"
    />
  </svg>
);
SvgBugOutline.displayName = "BugOutline";
const ForwardRef = forwardRef(SvgBugOutline);
export default ForwardRef;
