import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCheckCircleFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.234 9.543-.73 1.011-.413-.476c-.991-1.143-2.068-1.999-2.934-2.687l.532-.84c1.105.545 1.477.76 2.689 1.544.182-.209.347-.405.508-.599.791-.944 1.538-1.837 3.768-3.636l.668.742C9.976 7.48 9.192 8.568 7.766 10.541z"
    />
  </svg>
);
SvgCheckCircleFill.displayName = "CheckCircleFill";
const ForwardRef = forwardRef(SvgCheckCircleFill);
export default ForwardRef;
