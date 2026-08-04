import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgQuestionMarkCircleFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 11.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75m1.716-4.794c-.134.137-.264.25-.39.359-.274.239-.473.412-.662.802q-.162.337-.163.883h-1c0-.523.086-.955.264-1.32.278-.572.597-.85.905-1.118.107-.094.218-.189.333-.307.345-.351.372-.749.372-.863 0-.427-.146-1.142-1.124-1.142-.917 0-1.53.691-1.859 1.063l-.748-.664C6.015 4.73 6.885 3.75 8.251 3.75c1.467 0 2.124 1.075 2.124 2.142 0 .269-.064.959-.658 1.564z"
    />
  </svg>
);
SvgQuestionMarkCircleFill.displayName = "QuestionMarkCircleFill";
const ForwardRef = forwardRef(SvgQuestionMarkCircleFill);
export default ForwardRef;
