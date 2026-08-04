import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLeafOutline = (
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
      d="m12.721 2.005-.198-.548-.512.278c-1.419.773-3.002 1.179-5.608 1.699-2.15.429-3.652 2.275-3.652 4.49 0 1.023.4 2.299 1.347 3.307-.66 1.118-1.147 2.32-1.341 3.618l.988.151c.233-1.088.649-2.105 1.162-3.078.88.602 2.057 1.002 3.594 1.002 3.317 0 5-2.019 5-6 0-2.779-.55-4.289-.779-4.92zM8.5 11.925c-1.345 0-2.352-.36-3.091-.89.95-1.567 2.131-3.022 3.263-4.443l-.344-.335c-1.281 1.224-2.602 2.578-3.651 4.087-.639-.766-.927-1.674-.927-2.419 0-1.732 1.171-3.175 2.848-3.51 2.4-.479 3.974-.869 5.367-1.534.227.718.535 2.01.535 4.044 0 3.458-1.233 5-4 5"
    />
  </svg>
);
SvgLeafOutline.displayName = "LeafOutline";
const ForwardRef = forwardRef(SvgLeafOutline);
export default ForwardRef;
