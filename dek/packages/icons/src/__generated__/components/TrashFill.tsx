import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgTrashFill = (
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
      d="M11 3.425v-1c0-.827-.673-1.5-1.5-1.5h-3c-.827 0-1.5.673-1.5 1.5v1H2v1h1v9c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-9h1v-1zm-4 8H6v-5h1zm3 0H9v-5h1zm0-8H6v-1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z"
    />
  </svg>
);
SvgTrashFill.displayName = "TrashFill";
const ForwardRef = forwardRef(SvgTrashFill);
export default ForwardRef;
