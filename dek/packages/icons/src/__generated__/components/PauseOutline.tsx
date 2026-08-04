import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPauseOutline = (
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
      fillRule="evenodd"
      d="M3 2h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 3 2m2.5 11V3h-2v10zM10 2h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 10 2m2.5 11V3h-2v10z"
      clipRule="evenodd"
    />
  </svg>
);
SvgPauseOutline.displayName = "PauseOutline";
const ForwardRef = forwardRef(SvgPauseOutline);
export default ForwardRef;
