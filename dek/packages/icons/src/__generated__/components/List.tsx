import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgList = (
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
      d="M14 7.5H5v1h9zM14 4H5v1h9zM14 11H5v1h9zM2.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
SvgList.displayName = "List";
const ForwardRef = forwardRef(SvgList);
export default ForwardRef;
