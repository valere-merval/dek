import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAlertOutline = (
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
      d="M6.608 13.749c.22.582.763 1 1.4 1h.003c.638 0 1.18-.418 1.4-1h1.053c-.25 1.15-1.268 2-2.454 2s-2.206-.85-2.455-2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.009 1.749c2.34 0 4.242 1.931 4.242 4.305v2.444l1.707 3.533a.497.497 0 0 1-.45.717h-11a.5.5 0 0 1-.424-.234.5.5 0 0 1-.025-.483l1.707-3.533V6.054c0-2.374 1.903-4.305 4.243-4.305m0 .999c-1.788 0-3.243 1.483-3.243 3.305v2.56c0 .074-.018.15-.051.217l-1.41 2.919h9.406l-1.41-2.919a.5.5 0 0 1-.05-.218v-2.56c0-1.822-1.454-3.304-3.242-3.304"
      clipRule="evenodd"
    />
  </svg>
);
SvgAlertOutline.displayName = "AlertOutline";
const ForwardRef = forwardRef(SvgAlertOutline);
export default ForwardRef;
