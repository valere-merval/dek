import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgCongstarZuhause = (
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
      d="M2.023 13.373c0 .951.773 1.723 1.723 1.723h8.556c.95 0 1.722-.773 1.722-1.723V7.41c0-.452-.184-.896-.504-1.218L8.024.697 2.528 6.192a1.74 1.74 0 0 0-.505 1.218zm1.212-6.474 4.789-4.788 4.788 4.787a.73.73 0 0 1 .212.512v5.963a.724.724 0 0 1-.722.723H3.746a.724.724 0 0 1-.723-.723V7.41c0-.19.077-.376.212-.511m7.501 1.829a.497.497 0 0 0 .703.074.5.5 0 0 0 .074-.703 4.47 4.47 0 0 0-3.49-1.671c-1.36 0-2.633.609-3.489 1.671a.499.499 0 1 0 .777.629 3.47 3.47 0 0 1 2.712-1.3c1.058 0 2.046.474 2.713 1.3m-4.415 1.895a.5.5 0 0 1-.429-.757 2.47 2.47 0 0 1 2.131-1.215c.879 0 1.675.454 2.132 1.214a.501.501 0 0 1-.858.516c-.549-.914-2.001-.913-2.548 0a.5.5 0 0 1-.429.243zm2.528 1.14a.825.825 0 1 0-1.649-.001.825.825 0 0 0 1.649.001"
      clipRule="evenodd"
    />
  </svg>
);
SvgCongstarZuhause.displayName = "CongstarZuhause";
const ForwardRef = forwardRef(SvgCongstarZuhause);
export default ForwardRef;
