import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgExclamationMarkTriangleOutline = (
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
      d="m14.675 12.514-5.8-10.441a1 1 0 0 0-.873-.514H8c-.362 0-.697.196-.875.514l-5.8 10.441a.99.99 0 0 0 .013.993.99.99 0 0 0 .861.493h11.602a.99.99 0 0 0 .861-.493.99.99 0 0 0 .013-.993m-.874.986V13H2.2L8 2.56 13.804 13z"
    />
    <path
      fill="currentColor"
      d="M8.5 5.75h-1v4h1zM8 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
  </svg>
);
SvgExclamationMarkTriangleOutline.displayName =
  "ExclamationMarkTriangleOutline";
const ForwardRef = forwardRef(SvgExclamationMarkTriangleOutline);
export default ForwardRef;
