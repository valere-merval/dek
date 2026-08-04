import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPencilOutline = (
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
      d="M2 11.5V14h2.5L12 6.5 9.5 4zM4.086 13H3v-1.086l6.5-6.5L10.586 6.5zM13.366 3.366l-.732-.732a1.25 1.25 0 0 0-1.768 0L10 3.5 12.5 6l.866-.866a1.25 1.25 0 0 0 0-1.768"
    />
  </svg>
);
SvgPencilOutline.displayName = "PencilOutline";
const ForwardRef = forwardRef(SvgPencilOutline);
export default ForwardRef;
