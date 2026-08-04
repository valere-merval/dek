import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLinkedin = (
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
      d="M6.475 7.062H5.361v3.579h1.114zM5.917 6.571a.646.646 0 1 0 0-1.292.646.646 0 0 0 0 1.292"
    />
    <path
      fill="currentColor"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.75 5.981v4.23a.55.55 0 0 1-.552.539H4.806a.554.554 0 0 1-.556-.543V4.789a.55.55 0 0 1 .552-.539h6.392c.3-.003.552.242.556.543z"
    />
    <path
      fill="currentColor"
      d="M9.308 6.971a1.17 1.17 0 0 0-1.053.578h-.016v-.488H7.173v3.579h1.111V8.87c0-.468.09-.921.669-.921.572 0 .578.533.578.95v1.741h1.111V8.676c0-.966-.207-1.705-1.334-1.705"
    />
  </svg>
);
SvgLinkedin.displayName = "Linkedin";
const ForwardRef = forwardRef(SvgLinkedin);
export default ForwardRef;
