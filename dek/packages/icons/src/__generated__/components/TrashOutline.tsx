import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgTrashOutline = (
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
      d="M14 3.5h-3v-1c0-.827-.673-1.5-1.5-1.5h-3C5.673 1 5 1.673 5 2.5v1H2v1h1v9c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-9h1zm-8-1c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1H6zm6 11c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-9h8z"
    />
    <path fill="currentColor" d="M7 6.5H6v5h1zM10 6.5H9v5h1z" />
  </svg>
);
SvgTrashOutline.displayName = "TrashOutline";
const ForwardRef = forwardRef(SvgTrashOutline);
export default ForwardRef;
