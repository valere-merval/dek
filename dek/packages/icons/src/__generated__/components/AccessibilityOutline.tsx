import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgAccessibilityOutline = (
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
      d="M11.843 3.085a1.51 1.51 0 0 1 1.314-.019c.406.193.702.554.812.99a1.49 1.49 0 0 1-.86 1.737l-2.602 1.495v6.183c0 .843-.675 1.528-1.504 1.528V15c-.385 0-.736-.148-1.003-.392A1.49 1.49 0 0 1 6.996 15c-.894 0-1.568-.686-1.568-1.528V7.287L2.826 5.766c-.616-.266-.973-.99-.796-1.699.11-.438.407-.799.817-.989s.879-.186 1.285.015L6.676 4.5h2.706zm.886.885a.49.49 0 0 0-.423 0L9.65 5.499H6.42L3.67 3.978a.48.48 0 0 0-.401.007.487.487 0 0 0 .01.891l3.148 1.836v6.759c0 .29.226.528.504.528.343 0 .568-.237.568-.528V9.4h1v4.07H8.5c0 .292.226.529.504.529a.517.517 0 0 0 .504-.528V6.71l3.154-1.81c.277-.122.396-.364.337-.601a.5.5 0 0 0-.27-.33"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 .5c.965 0 1.75.785 1.75 1.75S8.965 4 8 4s-1.75-.785-1.75-1.75S7.035.5 8 .5m0 1a.75.75 0 0 0-.75.75c0 .413.337.75.75.75s.75-.337.75-.75A.75.75 0 0 0 8 1.5"
      clipRule="evenodd"
    />
  </svg>
);
SvgAccessibilityOutline.displayName = "AccessibilityOutline";
const ForwardRef = forwardRef(SvgAccessibilityOutline);
export default ForwardRef;
