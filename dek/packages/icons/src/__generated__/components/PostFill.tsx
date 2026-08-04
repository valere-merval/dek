import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPostFill = (
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
      d="M3.8 12.888H2.204l1.609-1.628h1.594zM5.953 12.888H4.36l1.608-1.628h1.594zM11.154 12.888H9.56L7.95 11.26h1.595zM13.305 12.888h-1.594l-1.609-1.628h1.594z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.276 3.396c1.882 0 3.44 1.373 3.432 3.346h.001c.276-.754.468-1.9.508-2.702l2.827.703c-.226 3.318-2.715 6.225-6.407 6.224-4.177-.002-5.791-3.633-5.574-6.384l1.227-.39c-.2 1.566.285 2.695.619 3.213-.398-2.215 1.275-4.008 3.367-4.01m.007 1.153a2.263 2.263 0 1 0 .001 4.527 2.263 2.263 0 0 0-.001-4.527"
      clipRule="evenodd"
    />
  </svg>
);
SvgPostFill.displayName = "PostFill";
const ForwardRef = forwardRef(SvgPostFill);
export default ForwardRef;
