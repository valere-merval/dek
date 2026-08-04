import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgPrinterOutline = (
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
      d="M13.5 5H12V2H4v3H2.5C1.67 5 1 5.67 1 6.5v4c0 .83.67 1.5 1.5 1.5H4v2h8v-2h1.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5M5 3h6v2H5zm6 9v1H5v-3h6zm3-1.5c0 .28-.22.5-.5.5H12V9H4v2H2.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5z"
    />
    <path
      fill="currentColor"
      d="M12.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
  </svg>
);
SvgPrinterOutline.displayName = "PrinterOutline";
const ForwardRef = forwardRef(SvgPrinterOutline);
export default ForwardRef;
