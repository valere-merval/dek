import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgContractFill = (
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
      d="M11.5 1H7.75v3.25c0 .83-.67 1.5-1.5 1.5H3v7.75c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5m-2 3H11v1H9.5zM8.25 6H11v1H8.25zm2.69 6.75a1.24 1.24 0 0 1-1.06-.38c-.28.19-.6.28-.93.25-.33-.04-.62-.19-.85-.44-.33.43-.74.82-1.41.82H6.6c-1.2-.06-1.87-1.11-1.85-2.88.01-.78.43-1.72 1.22-2 .36-.12 1.06-.2 1.79.69.18.21.15.53-.07.7-.21.18-.53.15-.7-.07-.15-.18-.43-.47-.69-.38-.26.1-.54.55-.55 1.07-.01.68.1 1.83.9 1.87.35-.01.53-.22.89-.78l.17-.25c.11-.16.3-.24.49-.21.19.02.34.16.4.34.1.3.27.5.46.52.17.02.36-.12.51-.37.11-.19.32-.28.54-.24.21.05.37.23.39.45.01.09.06.19.13.24.05.05.11.06.18.05a.505.505 0 0 1 .13 1m-4.19-8.5V1h-.03c-.46 0-.9.18-1.23.51L3.51 3.49c-.33.33-.51.77-.51 1.23v.03h3.25c.28 0 .5-.22.5-.5"
    />
  </svg>
);
SvgContractFill.displayName = "ContractFill";
const ForwardRef = forwardRef(SvgContractFill);
export default ForwardRef;
