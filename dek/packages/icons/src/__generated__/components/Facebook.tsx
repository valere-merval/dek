import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFacebook = (
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
      d="M8 1a7 7 0 0 0-7 7c0 3.493 2.561 6.38 5.906 6.906v-4.883H5.129V8h1.777V6.458c0-1.754 1.045-2.723 2.644-2.723.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.141.54-1.141 1.093v1.313h1.941l-.31 2.023H9.093v4.883c3.345-.526 5.906-3.413 5.906-6.906a7 7 0 0 0-7-7z"
    />
  </svg>
);
SvgFacebook.displayName = "Facebook";
const ForwardRef = forwardRef(SvgFacebook);
export default ForwardRef;
