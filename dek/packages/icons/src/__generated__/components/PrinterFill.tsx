import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPrinterFill = (
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
      d="M13.5 5h-11C1.67 5 1 5.67 1 6.5v4c0 .83.67 1.5 1.5 1.5H4v2h8v-2h1.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5M11 12v1H5v-3h6zm1.75-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75M12 2H4v2h8z"
    />
  </svg>
);
SvgPrinterFill.displayName = "PrinterFill";
const ForwardRef = forwardRef(SvgPrinterFill);
export default ForwardRef;
