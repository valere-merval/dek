import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgMailFill = (
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
      d="M7.837 8.202c.095.08.232.08.327 0l5.927-5.081a1.5 1.5 0 0 0-.59-.121H2.5c-.21 0-.409.044-.59.121z"
    />
    <path
      fill="currentColor"
      d="M8.813 8.962a1.25 1.25 0 0 1-1.626 0L1.176 3.809A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.176-.691z"
    />
  </svg>
);
SvgMailFill.displayName = "MailFill";
const ForwardRef = forwardRef(SvgMailFill);
export default ForwardRef;
