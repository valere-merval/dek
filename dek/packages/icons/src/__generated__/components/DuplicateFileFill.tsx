import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDuplicateFileFill = (
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
      d="M4.5 3V1.03c-.23.05-.45.17-.62.34L2.37 2.88c-.17.17-.29.39-.34.62H4c.28 0 .5-.22.5-.5"
    />
    <path
      fill="currentColor"
      d="M8.77 3H10v-.5C10 1.67 9.33 1 8.5 1h-3v2c0 .83-.67 1.5-1.5 1.5H2v6c0 .83.67 1.5 1.5 1.5H5V6.77c0-.6.23-1.17.66-1.59l1.52-1.52C7.6 3.23 8.17 3 8.77 3"
    />
    <path
      fill="currentColor"
      d="M6.03 6.5H8c.28 0 .5-.22.5-.5V4.03c-.23.05-.45.17-.62.34L6.37 5.88c-.17.17-.29.39-.34.62"
    />
    <path
      fill="currentColor"
      d="M12.5 4h-3v2c0 .83-.67 1.5-1.5 1.5H6v6c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5"
    />
  </svg>
);
SvgDuplicateFileFill.displayName = "DuplicateFileFill";
const ForwardRef = forwardRef(SvgDuplicateFileFill);
export default ForwardRef;
