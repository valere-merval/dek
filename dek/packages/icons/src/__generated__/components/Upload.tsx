import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgUpload = (
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
      d="M13 11v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11H2v1.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V11zM7.5 3.457V10h1V3.457l3.5 3.5.707-.707-4-4a1 1 0 0 0-1.414 0l-4 4L4 6.957z"
    />
  </svg>
);
SvgUpload.displayName = "Upload";
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;
