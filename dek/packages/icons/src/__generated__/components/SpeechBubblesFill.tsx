import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubblesFill = (
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
      d="M12 4V2.5c0-.83-.67-1.5-1.5-1.5h-8C1.67 1 1 1.67 1 2.5v7c0 .83.67 1.5 1.5 1.5v2.1L5.29 11H6V6.5A2.5 2.5 0 0 1 8.5 4z"
    />
    <path
      fill="currentColor"
      d="M13.5 5h-5C7.67 5 7 5.67 7 6.5v5c0 .83.67 1.5 1.5 1.5h2.21l2.79 2.1V13c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5"
    />
  </svg>
);
SvgSpeechBubblesFill.displayName = "SpeechBubblesFill";
const ForwardRef = forwardRef(SvgSpeechBubblesFill);
export default ForwardRef;
