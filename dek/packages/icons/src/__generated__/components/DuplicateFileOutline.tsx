import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDuplicateFileOutline = (
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
      d="M12.5 4H10V2.5C10 1.67 9.33 1 8.5 1H4.87c-.4 0-.78.16-1.06.44L2.44 2.81c-.28.28-.44.66-.44 1.06v6.63c0 .83.67 1.5 1.5 1.5H6v1.5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5M6 6.87V11H3.5c-.28 0-.5-.22-.5-.5v-6h1.5c.55 0 1-.45 1-1V2h3c.28 0 .5.22.5.5V4h-.13c-.4 0-.78.16-1.06.44L6.44 5.81c-.28.28-.44.66-.44 1.06m7 6.63c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5v-6h1.5c.18 0 .35-.05.5-.14.3-.17.5-.49.5-.86V5h3c.28 0 .5.22.5.5z"
    />
  </svg>
);
SvgDuplicateFileOutline.displayName = "DuplicateFileOutline";
const ForwardRef = forwardRef(SvgDuplicateFileOutline);
export default ForwardRef;
