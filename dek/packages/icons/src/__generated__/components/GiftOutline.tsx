import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGiftOutline = (
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
      d="M13.5 4h-2.278c.172-.295.278-.634.278-1 0-1.103-.897-2-2-2-.6 0-1.133.271-1.5.691C7.633 1.271 7.1 1 6.5 1c-1.103 0-2 .897-2 2 0 .366.106.705.278 1H2.5C1.673 4 1 4.673 1 5.5v1c0 .651.419 1.201 1 1.408V13.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V7.908c.581-.207 1-.757 1-1.408v-1c0-.827-.673-1.5-1.5-1.5m-4-2a1 1 0 0 1 0 2h-1V3a1 1 0 0 1 1-1m-4 1a1 1 0 0 1 2 0v1h-1a1 1 0 0 1-1-1M2 5.5c0-.275.225-.5.5-.5h5.036v2H2.5a.5.5 0 0 1-.5-.5zm1 8V8h4.536v6H3.5a.5.5 0 0 1-.5-.5m10 0c0 .275-.225.5-.5.5H8.536V8H13zm1-7c0 .275-.225.5-.5.5H8.536V5H13.5c.275 0 .5.225.5.5z"
    />
  </svg>
);
SvgGiftOutline.displayName = "GiftOutline";
const ForwardRef = forwardRef(SvgGiftOutline);
export default ForwardRef;
