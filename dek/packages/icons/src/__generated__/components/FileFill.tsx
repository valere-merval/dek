import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFileFill = (
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
      d="M6.75 4.25V1h-.03c-.46 0-.9.18-1.23.51L3.51 3.49c-.33.33-.51.77-.51 1.23v.03h3.25c.28 0 .5-.22.5-.5"
    />
    <path
      fill="currentColor"
      d="M11.5 1H7.75v3.25c0 .83-.67 1.5-1.5 1.5H3v7.75c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5M5 8h4v1H5zm5 5H5v-1h5zm1-2H5v-1h6z"
    />
  </svg>
);
SvgFileFill.displayName = "FileFill";
const ForwardRef = forwardRef(SvgFileFill);
export default ForwardRef;
