import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgThumbsUpFill = (
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
      d="M13.5 6H9.186c1.064-3.318 1.064-3.407 1.064-3.5 0-.586-.58-1.059-.696-1.147l-.348-.266-4.267 4.267A1.5 1.5 0 0 0 4.5 6.415v6.086c0 .827.673 1.5 1.5 1.5h5.323c.617 0 1.163-.37 1.392-.943l1.679-4.193q.106-.269.106-.556V7.001c0-.552-.448-1.001-1-1.001M3.5 6h-2v8h2z"
    />
  </svg>
);
SvgThumbsUpFill.displayName = "ThumbsUpFill";
const ForwardRef = forwardRef(SvgThumbsUpFill);
export default ForwardRef;
