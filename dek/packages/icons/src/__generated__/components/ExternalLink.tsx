import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgExternalLink = (
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
      d="M12 12.5c0 .275-.225.5-.5.5h-8a.5.5 0 0 1-.5-.5v-8c0-.275.225-.5.5-.5h3V3h-3C2.673 3 2 3.673 2 4.5v8c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-3h-1z"
    />
    <path
      fill="currentColor"
      d="M13.5 1.5H8v1h4.793L7.647 7.646l.707.707L13.5 3.207V8h1V2.5a1 1 0 0 0-1-1"
    />
  </svg>
);
SvgExternalLink.displayName = "ExternalLink";
const ForwardRef = forwardRef(SvgExternalLink);
export default ForwardRef;
