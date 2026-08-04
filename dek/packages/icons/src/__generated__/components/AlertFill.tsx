import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAlertFill = (
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
      d="M10.294 12.978a2.33 2.33 0 0 1-2.3 1.999 2.326 2.326 0 0 1-2.299-2zM7.994.978c2.255 0 4.083 1.873 4.083 4.184v2.816l1.575 3.284a.5.5 0 0 1-.452.715H2.788a.5.5 0 0 1-.45-.715L3.91 7.978V5.162c0-2.31 1.828-4.184 4.083-4.184"
    />
  </svg>
);
SvgAlertFill.displayName = "AlertFill";
const ForwardRef = forwardRef(SvgAlertFill);
export default ForwardRef;
