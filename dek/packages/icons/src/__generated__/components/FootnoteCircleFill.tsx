import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFootnoteCircleFill = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.897 10.21-.815.58-2.083-2.656-2.083 2.656-.815-.58L6.909 8.4l-2.913-.883.242-.97 3.102.611L7.498 4h1l.158 3.158 3.102-.611.242.97-2.913.883 1.808 2.81z"
    />
  </svg>
);
SvgFootnoteCircleFill.displayName = "FootnoteCircleFill";
const ForwardRef = forwardRef(SvgFootnoteCircleFill);
export default ForwardRef;
