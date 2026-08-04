import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgYoutube = (
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
    <path fill="currentColor" d="M7.15 9.275 9.358 8 7.15 6.725z" />
    <path
      fill="currentColor"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m4.072 9.046a1.06 1.06 0 0 1-.751.751c-.663.178-3.321.178-3.321.178s-2.658 0-3.321-.178a1.06 1.06 0 0 1-.751-.751C3.75 9.383 3.75 8 3.75 8s0-1.383.178-2.046c.098-.366.386-.654.751-.752C5.342 5.024 8 5.024 8 5.024s2.658 0 3.321.178c.366.098.654.386.751.752.178.663.178 2.046.178 2.046s0 1.383-.178 2.046"
    />
  </svg>
);
SvgYoutube.displayName = "Youtube";
const ForwardRef = forwardRef(SvgYoutube);
export default ForwardRef;
