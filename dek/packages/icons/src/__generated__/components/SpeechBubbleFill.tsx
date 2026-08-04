import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubbleFill = (
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
      d="M12.5 2h-9C2.673 2 2 2.673 2 3.5v8c0 .827.673 1.5 1.5 1.5H5v1.981L8.628 13H12.5c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5"
    />
  </svg>
);
SvgSpeechBubbleFill.displayName = "SpeechBubbleFill";
const ForwardRef = forwardRef(SvgSpeechBubbleFill);
export default ForwardRef;
