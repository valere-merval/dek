import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgThumbsUpOutline = (
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
      d="M13.5 6H9.186c1.064-3.318 1.064-3.407 1.064-3.5 0-.586-.58-1.059-.696-1.147l-.348-.266-4.267 4.267A1.5 1.5 0 0 0 4.5 6.415v6.086c0 .827.673 1.5 1.5 1.5h5.323c.617 0 1.163-.37 1.392-.943l1.679-4.193q.106-.269.106-.556V7.001c0-.552-.448-1.001-1-1.001m0 2.308a.5.5 0 0 1-.035.186l-1.678 4.192a.495.495 0 0 1-.463.314H6.001a.5.5 0 0 1-.5-.5V6.414c0-.132.054-.261.146-.354l3.6-3.6c-.109.402-1.432 4.539-1.432 4.539h5.686v1.308zM3.5 6h-2v8h2z"
    />
  </svg>
);
SvgThumbsUpOutline.displayName = "ThumbsUpOutline";
const ForwardRef = forwardRef(SvgThumbsUpOutline);
export default ForwardRef;
