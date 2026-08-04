import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgThumbsUpDownFill = (
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
    <g fill="currentColor" clipPath="url(#thumbs-up-down-fill_svg__a)">
      <path d="M8 4.75a1 1 0 0 0-1-1H3.896c.604-2.325.604-2.43.604-2.5 0-.49-.354-.818-.424-.879L3.724.068.439 3.354A1.5 1.5 0 0 0 0 4.415v4.086c0 .827.673 1.5 1.5 1.5h3.823c.617 0 1.163-.37 1.392-.943l1.179-2.943Q8 5.846 8 5.559zM14.5 6h-3.823c-.617 0-1.163.37-1.392.943L8.106 9.886Q8 10.155 8 10.442v.808a1 1 0 0 0 1 1h3.104c-.604 2.325-.604 2.43-.604 2.5 0 .49.354.818.424.879l.352.303 3.285-3.285c.279-.279.439-.666.439-1.061V7.5c0-.827-.673-1.5-1.5-1.5" />
    </g>
    <defs>
      <clipPath id="thumbs-up-down-fill_svg__a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
SvgThumbsUpDownFill.displayName = "ThumbsUpDownFill";
const ForwardRef = forwardRef(SvgThumbsUpDownFill);
export default ForwardRef;
