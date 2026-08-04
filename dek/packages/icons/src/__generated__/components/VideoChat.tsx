import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgVideoChat = (
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
      d="M9.53 3.482a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5zm-7 1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M14.39 5.15a.499.499 0 0 1 .61.487v4.916a.5.5 0 0 1-.61.487l-2.597-.593V9.42L14 9.926v-3.66l-2.207.503V5.744z"
    />
  </svg>
);
SvgVideoChat.displayName = "VideoChat";
const ForwardRef = forwardRef(SvgVideoChat);
export default ForwardRef;
