import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgThumbsDownOutline = (
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
      d="M10 2H4.677c-.617 0-1.163.37-1.392.943L1.606 7.136q-.105.269-.106.556V9a1 1 0 0 0 1 1h4.314C5.75 13.318 5.75 13.407 5.75 13.5c0 .586.58 1.059.696 1.147l.348.266 4.267-4.267c.279-.279.439-.666.439-1.061V3.5c0-.827-.673-1.5-1.5-1.5m.5 7.586a.5.5 0 0 1-.146.354l-3.6 3.6c.109-.402 1.432-4.539 1.432-4.539H2.5V7.693a.5.5 0 0 1 .035-.186l1.678-4.192a.495.495 0 0 1 .463-.314h5.323c.275 0 .5.225.5.5zM14.5 2h-2v8h2z"
    />
  </svg>
);
SvgThumbsDownOutline.displayName = "ThumbsDownOutline";
const ForwardRef = forwardRef(SvgThumbsDownOutline);
export default ForwardRef;
