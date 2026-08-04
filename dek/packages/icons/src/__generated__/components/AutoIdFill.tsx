import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAutoIdFill = (
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
      d="M15.768 10.148c-1.958 1.957-2.678 2.924-4.261 5.114l-.211.292-.237-.272c-.843-.973-1.755-1.694-2.56-2.33l-.262-.208.305-.48c.972.479 1.363.735 2.31 1.355l.374.243c.216-.247.407-.474.593-.696.748-.894 1.455-1.739 3.567-3.443z"
    />
    <path
      fill="currentColor"
      d="M10.5 1A1.5 1.5 0 0 1 12 2.5v8.993h-1V2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2.986v1H5.5A1.5 1.5 0 0 1 4 13.5v-11A1.5 1.5 0 0 1 5.5 1z"
    />
    <path
      fill="currentColor"
      d="M7.987 7.991a2.08 2.08 0 0 1 2.072 1.854l.026.231H5.919l-.004-.231A2.08 2.08 0 0 1 7.987 7.99M7.986 5.072c.69 0 1.251.561 1.251 1.251s-.56 1.251-1.25 1.251-1.252-.56-1.252-1.25.561-1.252 1.251-1.252"
    />
  </svg>
);
SvgAutoIdFill.displayName = "AutoIdFill";
const ForwardRef = forwardRef(SvgAutoIdFill);
export default ForwardRef;
