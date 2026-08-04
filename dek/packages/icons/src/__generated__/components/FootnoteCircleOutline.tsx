import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFootnoteCircleOutline = (
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
      d="M8 1C4.141 1 1 4.141 1 8s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7m0 13c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m11.76 6.547-3.102.611L8.5 4h-1l-.158 3.158-3.102-.611-.242.97 2.913.883-1.808 2.81.814.58L8 9.133l2.083 2.657.814-.58L9.089 8.4l2.913-.883z"
      clipRule="evenodd"
    />
  </svg>
);
SvgFootnoteCircleOutline.displayName = "FootnoteCircleOutline";
const ForwardRef = forwardRef(SvgFootnoteCircleOutline);
export default ForwardRef;
