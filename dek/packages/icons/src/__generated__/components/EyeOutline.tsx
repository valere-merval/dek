import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEyeOutline = (
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
      d="M15.402 7.783a8 8 0 0 0-.301-.564A9.5 9.5 0 0 0 13.812 5.5C12.258 3.864 10.248 3 8 3s-4.259.864-5.812 2.5A9.5 9.5 0 0 0 .899 7.219a8 8 0 0 0-.301.564L.494 8l.104.217c.064.134.163.329.301.564A9.5 9.5 0 0 0 2.188 10.5C3.742 12.136 5.752 13 8 13s4.259-.864 5.812-2.5a9.5 9.5 0 0 0 1.289-1.719c.138-.235.236-.431.301-.564L15.506 8zm-1.164.494a8.5 8.5 0 0 1-1.15 1.533C11.707 11.263 9.996 11.999 8 11.999s-3.707-.736-5.088-2.189A8.4 8.4 0 0 1 1.608 8q.066-.124.154-.277a8.5 8.5 0 0 1 1.15-1.533C4.293 4.737 6.004 4.001 8 4.001s3.707.736 5.088 2.189A8.4 8.4 0 0 1 14.392 8a9 9 0 0 1-.154.277"
    />
    <path
      fill="currentColor"
      d="M8 5C6.346 5 5 6.346 5 8s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
    />
  </svg>
);
SvgEyeOutline.displayName = "EyeOutline";
const ForwardRef = forwardRef(SvgEyeOutline);
export default ForwardRef;
