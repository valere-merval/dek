import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDelivery = (
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
      d="M13.626 2.85H6.427c-.772 0-1.4.628-1.4 1.4v7.199c0 .772.628 1.4 1.4 1.4h7.199c.772 0 1.4-.628 1.4-1.4V4.25c0-.772-.628-1.4-1.4-1.4m-4.1 1h1v3h-1zm4.5 7.6a.4.4 0 0 1-.4.4H6.427a.4.4 0 0 1-.4-.4V4.251a.4.4 0 0 1 .4-.4h2.1v4h3V3.85h2.1a.4.4 0 0 1 .4.4zM3.026 7.35h-2v1h2zM4.026 4.85h-2v1h2zM4.026 9.85h-2v1h2z"
    />
  </svg>
);
SvgDelivery.displayName = "Delivery";
const ForwardRef = forwardRef(SvgDelivery);
export default ForwardRef;
