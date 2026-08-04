import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgESimFill = (
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
      d="M7.97 6.02c-.76 0-1.23.53-1.33 1.45h2.71c-.06-.79-.44-1.45-1.38-1.45"
    />
    <path
      fill="currentColor"
      d="M11.22 3.51c-.33-.33-.77-.51-1.24-.51H4.5C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V6.02c0-.46-.19-.91-.51-1.24zM8.08 9.98c.49 0 .88-.18 1.27-.46l.67.72c-.51.49-1.12.76-2 .76C6.65 11 5.5 9.91 5.5 8.01 5.5 6.05 6.54 5 8.05 5 9.7 5 10.5 6.33 10.5 7.88c0 .21-.02.4-.03.52H6.62c.12 1.11.75 1.58 1.46 1.58M6.5 1h-1v1.5h1zM8.5 1h-1v1.5h1zM10.5 1h-1v1.5h1zM6.5 13.5h-1V15h1zM8.5 13.5h-1V15h1zM10.5 13.5h-1V15h1zM2.5 5.5H1v1h1.5zM2.5 7.5H1v1h1.5zM2.5 9.5H1v1h1.5zM15 5.5h-1.5v1H15zM15 7.5h-1.5v1H15zM15 9.5h-1.5v1H15z"
    />
  </svg>
);
SvgESimFill.displayName = "ESimFill";
const ForwardRef = forwardRef(SvgESimFill);
export default ForwardRef;
