import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCoinsOutline = (
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
      d="M11.883 5.375q.116.547.117 1.125-.002.027-.003.055C13.188 7.248 14 8.525 14 10c0 2.206-1.794 4-4 4-1.475 0-2.752-.811-3.445-2.003q-.027.002-.055.003-.58-.002-1.125-.117A5 5 0 0 0 10 15c2.757 0 5-2.243 5-5a5 5 0 0 0-3.117-4.625"
    />
    <path
      fill="currentColor"
      d="M11 6c0-2.757-2.243-5-5-5S1 3.243 1 6s2.243 5 5 5 5-2.243 5-5M2 6c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4"
    />
    <path
      fill="currentColor"
      d="m7.573 8.769-.146-.736c-.932.188-1.666.088-2.12-.285-.22-.181-.38-.433-.485-.747H7.1v-.75H4.693c-.005-.084-.018-.16-.018-.25s.012-.166.018-.25H7.1v-.75H4.822c.105-.314.265-.566.485-.747.454-.373 1.188-.472 2.12-.285l.146-.736c-1.178-.232-2.1-.085-2.742.441-.389.319-.64.772-.779 1.327H3.5v.75h.444c-.004.085-.019.161-.019.25s.015.165.019.25H3.5v.75h.552c.139.555.39 1.008.779 1.327.445.365 1.025.549 1.731.549q.469 0 1.011-.107z"
    />
  </svg>
);
SvgCoinsOutline.displayName = "CoinsOutline";
const ForwardRef = forwardRef(SvgCoinsOutline);
export default ForwardRef;
