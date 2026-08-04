import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubblesOutline = (
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
      d="M13.5 5H12V2.5c0-.83-.67-1.5-1.5-1.5h-8C1.67 1 1 1.67 1 2.5v7c0 .83.67 1.5 1.5 1.5v2.1L5.29 11H7v.5c0 .83.67 1.5 1.5 1.5h2.21l2.79 2.1V13c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5m.5 6.5c0 .28-.22.5-.5.5h-1v1.1L11.04 12H8.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5zM4.96 10 3.5 11.1V10h-1c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5V5H8.5C7.67 5 7 5.67 7 6.5V10z"
    />
  </svg>
);
SvgSpeechBubblesOutline.displayName = "SpeechBubblesOutline";
const ForwardRef = forwardRef(SvgSpeechBubblesOutline);
export default ForwardRef;
