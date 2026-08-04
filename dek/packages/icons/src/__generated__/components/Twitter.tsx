import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgTwitter = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.516 5.673q.005.108.005.218c0 2.23-1.697 4.801-4.801 4.801-.953 0-1.84-.279-2.587-.758q.198.023.403.023a3.4 3.4 0 0 0 2.096-.722 1.69 1.69 0 0 1-1.576-1.172 1.66 1.66 0 0 0 .762-.029A1.69 1.69 0 0 1 4.464 7.38v-.021c.227.127.487.203.764.211a1.686 1.686 0 0 1-.522-2.253A4.8 4.8 0 0 0 8.184 7.08a1.687 1.687 0 0 1 2.876-1.539 3.4 3.4 0 0 0 1.071-.41 1.7 1.7 0 0 1-.742.933c.341-.041.667-.131.969-.266a3.4 3.4 0 0 1-.842.875"
    />
  </svg>
);
SvgTwitter.displayName = "Twitter";
const ForwardRef = forwardRef(SvgTwitter);
export default ForwardRef;
