import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubbleOutline = (
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
      d="M5 14.981V13H3.5c-.827 0-1.5-.673-1.5-1.5v-8C2 2.673 2.673 2 3.5 2h9c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5H8.628zM3.5 3a.5.5 0 0 0-.5.5v8c0 .275.225.5.5.5H6v1.296L8.372 12H12.5c.275 0 .5-.225.5-.5v-8a.5.5 0 0 0-.5-.5z"
    />
  </svg>
);
SvgSpeechBubbleOutline.displayName = "SpeechBubbleOutline";
const ForwardRef = forwardRef(SvgSpeechBubbleOutline);
export default ForwardRef;
