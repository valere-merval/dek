import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPencilFill = (
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
      d="M2.146 11.354a.5.5 0 0 0-.146.354v2.293h2.293c.133 0 .26-.053.354-.146l7.354-7.354-2.5-2.5-7.354 7.354zM13.366 3.366l-.732-.732a1.25 1.25 0 0 0-1.768 0L10 3.5 12.5 6l.866-.866a1.25 1.25 0 0 0 0-1.768"
    />
  </svg>
);
SvgPencilFill.displayName = "PencilFill";
const ForwardRef = forwardRef(SvgPencilFill);
export default ForwardRef;
