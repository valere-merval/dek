import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPersonOutline = (
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
      d="M12.97 13.445A4.99 4.99 0 0 0 8 9a4.993 4.993 0 0 0-4.97 4.445l.01.555h9.991l-.062-.555zM4.125 13A3.994 3.994 0 0 1 8 10a3.994 3.994 0 0 1 3.875 3zM8 8c1.654 0 3-1.346 3-3S9.654 2 8 2 5 3.346 5 5s1.346 3 3 3m0-5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2"
    />
  </svg>
);
SvgPersonOutline.displayName = "PersonOutline";
const ForwardRef = forwardRef(SvgPersonOutline);
export default ForwardRef;
