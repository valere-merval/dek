import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgShield = (
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
      d="m13.972 3.528-.032-.447-.448-.018c-1.274-.048-2.464-.337-3.537-.859a7.3 7.3 0 0 1-1.622-1.066L8.001.844l-.332.294a7.3 7.3 0 0 1-1.622 1.066c-1.073.522-2.263.812-3.537.859l-.448.018-.032.447a13.7 13.7 0 0 0 .53 4.738c.858 2.894 2.604 5.14 5.186 6.675l.256.152.256-.152c2.582-1.535 4.327-3.781 5.186-6.675.608-2.053.593-3.85.53-4.738zm-1.49 4.453c-.756 2.549-2.263 4.547-4.482 5.944-2.22-1.397-3.727-3.396-4.482-5.944a13 13 0 0 1-.513-3.945 9.7 9.7 0 0 0 3.479-.934 8.6 8.6 0 0 0 1.517-.94c.365.285.869.625 1.517.94a9.7 9.7 0 0 0 3.479.934c.022.837-.029 2.315-.513 3.945z"
    />
    <path
      fill="currentColor"
      d="M7.841 7.933q-.148.177-.31.366l-.096-.063c-.755-.493-1.067-.697-1.847-1.081l-.532.84.207.163c.624.494 1.332 1.055 1.979 1.801l.414.476.369-.511c1.237-1.712 1.801-2.468 3.327-3.994l-.668-.742C9.001 6.546 8.437 7.22 7.839 7.934z"
    />
  </svg>
);
SvgShield.displayName = "Shield";
const ForwardRef = forwardRef(SvgShield);
export default ForwardRef;
