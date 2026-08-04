import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGameControllerFill = (
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
      d="M14.89 7.01a4.22 4.22 0 0 0-2.88-3.07c-1.4-.42-2.71-.11-3.71.61a.51.51 0 0 1-.6 0c-1-.72-2.31-1.03-3.71-.61a4.22 4.22 0 0 0-2.88 3.07 4.26 4.26 0 0 0 4.14 5.24c.92 0 1.76-.3 2.45-.8a.51.51 0 0 1 .6 0c.69.5 1.53.8 2.45.8a4.26 4.26 0 0 0 4.14-5.24M7 8.05c0 .25-.2.45-.45.45H5.5v1.05c0 .25-.2.45-.45.45h-.1c-.25 0-.45-.2-.45-.45V8.5H3.45C3.2 8.5 3 8.3 3 8.05v-.1c0-.25.2-.45.45-.45H4.5V6.45c0-.25.2-.45.45-.45h.1c.25 0 .45.2.45.45V7.5h1.05c.25 0 .45.2.45.45zM10 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
    />
  </svg>
);
SvgGameControllerFill.displayName = "GameControllerFill";
const ForwardRef = forwardRef(SvgGameControllerFill);
export default ForwardRef;
