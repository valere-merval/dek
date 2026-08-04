import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubbleQuestionMarkOutline = (
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
      d="M8.25 3.5c-1.366 0-2.236.981-2.608 1.4l.748.663c.33-.371.944-1.063 1.86-1.063.978 0 1.124.715 1.124 1.142 0 .113-.026.512-.372.864-.114.116-.226.213-.333.306-.308.269-.626.546-.903 1.118-.178.364-.264.796-.264 1.32h1q0-.548.163-.883c.188-.39.387-.562.661-.801.126-.11.256-.224.391-.361a2.26 2.26 0 0 0 .657-1.563c0-1.066-.657-2.142-2.124-2.142M8 11.5A.75.75 0 1 0 8 10a.75.75 0 0 0 0 1.5"
    />
    <path
      fill="currentColor"
      d="M12.5 2h-9C2.673 2 2 2.673 2 3.5v8c0 .827.673 1.5 1.5 1.5H5v1.981L8.628 13H12.5c.827 0 1.5-.673 1.5-1.5v-8c0-.827-.673-1.5-1.5-1.5m.5 9.5c0 .275-.225.5-.5.5H8.372L6 13.296V12H3.5a.5.5 0 0 1-.5-.5v-8c0-.275.225-.5.5-.5h9c.275 0 .5.225.5.5z"
    />
  </svg>
);
SvgSpeechBubbleQuestionMarkOutline.displayName =
  "SpeechBubbleQuestionMarkOutline";
const ForwardRef = forwardRef(SvgSpeechBubbleQuestionMarkOutline);
export default ForwardRef;
