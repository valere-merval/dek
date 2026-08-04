import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGiftFill = (
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
      fillRule="evenodd"
      d="M9.5 5H14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8.536V5.034h-1V8H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.5c-1.103 0-2-.897-2-2s.897-2 2-2c.6 0 1.133.271 1.5.691.367-.42.9-.691 1.5-.691 1.103 0 2 .897 2 2s-.897 2-2 2m-3-1h1V3a1 1 0 1 0-1 1m2-1v1h1a1 1 0 1 0-1-1"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 14a1 1 0 0 0 1 1h4.536V9H2zM8.536 15H13a1 1 0 0 0 1-1V9H8.536z"
    />
  </svg>
);
SvgGiftFill.displayName = "GiftFill";
const ForwardRef = forwardRef(SvgGiftFill);
export default ForwardRef;
