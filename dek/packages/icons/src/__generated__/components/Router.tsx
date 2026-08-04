import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgRouter = (
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
      d="M13.49 7.983h-1.5v-2.5h-1v2.5h-8.5c-.827 0-1.5.673-1.5 1.5v4c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-4c0-.827-.673-1.5-1.5-1.5m.5 5.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5v-4c0-.275.225-.5.5-.5h11c.275 0 .5.225.5.5z"
    />
    <path
      fill="currentColor"
      d="M3.74 11.483a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M11.471 1.936a3.63 3.63 0 0 1 2.905 1.466l.614-.745c-.844-1.014-2.1-1.673-3.519-1.673-1.398 0-2.636.64-3.481 1.627l.614.745a3.63 3.63 0 0 1 2.867-1.419z"
    />
    <path
      fill="currentColor"
      d="m9.333 4.234.66.799a1.58 1.58 0 0 1 1.482-1.036c.705 0 1.298.466 1.503 1.104l.669-.811a2.53 2.53 0 0 0-2.172-1.246c-.903 0-1.692.477-2.142 1.189z"
    />
  </svg>
);
SvgRouter.displayName = "Router";
const ForwardRef = forwardRef(SvgRouter);
export default ForwardRef;
