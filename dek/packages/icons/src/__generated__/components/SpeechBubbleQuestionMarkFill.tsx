import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSpeechBubbleQuestionMarkFill = (
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
      d="M12.5 2h-9A1.5 1.5 0 0 0 2 3.5v8A1.5 1.5 0 0 0 3.5 13H5v2l3.5-2h4a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 2M8 11.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m1.717-4.545c-.135.138-.265.251-.391.361-.274.238-.473.411-.661.801q-.164.339-.165.883h-1c0-.514.089-.958.266-1.32.277-.572.596-.85.903-1.118.107-.093.219-.189.333-.306.346-.353.372-.751.372-.864 0-.427-.146-1.142-1.124-1.142-.916 0-1.53.692-1.86 1.063L5.642 4.9c.372-.419 1.242-1.4 2.608-1.4 1.467 0 2.124 1.075 2.124 2.142 0 .269-.064.958-.657 1.563"
    />
  </svg>
);
SvgSpeechBubbleQuestionMarkFill.displayName = "SpeechBubbleQuestionMarkFill";
const ForwardRef = forwardRef(SvgSpeechBubbleQuestionMarkFill);
export default ForwardRef;
