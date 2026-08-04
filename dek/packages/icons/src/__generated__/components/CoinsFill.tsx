import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCoinsFill = (
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
      d="M11.97 5.4a6.005 6.005 0 0 1-6.57 6.57 5.002 5.002 0 1 0 6.57-6.57"
    />
    <path
      fill="currentColor"
      d="M11 6c0-.31-.03-.61-.09-.91A4.985 4.985 0 0 0 6 1C3.24 1 1 3.24 1 6c0 2.45 1.76 4.49 4.09 4.91.3.06.6.09.91.09 2.76 0 5-2.24 5-5M4.831 8.327c-.389-.319-.64-.772-.778-1.327h-.552v-.75h.444c-.004-.085-.019-.161-.019-.25s.015-.165.019-.25h-.444V5h.552c.139-.555.39-1.008.778-1.327.644-.527 1.568-.674 2.743-.441l-.146.736c-.933-.188-1.665-.087-2.121.285-.22.181-.38.433-.485.747h2.279v.75H4.693c-.005.084-.017.16-.017.25s.012.166.017.25h2.408V7H4.822c.105.314.265.566.485.747.455.372 1.188.472 2.121.285l.146.736a5.3 5.3 0 0 1-1.011.107c-.706 0-1.286-.183-1.732-.548"
    />
  </svg>
);
SvgCoinsFill.displayName = "CoinsFill";
const ForwardRef = forwardRef(SvgCoinsFill);
export default ForwardRef;
