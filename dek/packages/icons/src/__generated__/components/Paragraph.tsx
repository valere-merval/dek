import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgParagraph = (
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
      d="M7.918 15.036c-1.121 0-2.056-.335-3.02-1.082l.623-.752c.85.681 1.494.901 2.593.901 1.074 0 1.823-.549 1.823-1.335 0-.854-.678-1.355-2.421-1.786-2.772-.689-3.661-1.427-3.661-3.033 0-1.107.648-2.002 1.981-2.736l.136-.074-.124-.094c-.568-.431-.846-.968-.846-1.641 0-1.416 1.238-2.367 3.079-2.367 1.105 0 2.066.345 3.019 1.083l-.623.752c-.849-.68-1.493-.9-2.593-.9-1.074 0-1.823.548-1.823 1.333 0 .855.678 1.356 2.422 1.787 2.771.689 3.66 1.427 3.66 3.033 0 1.108-.648 2.002-1.981 2.735l-.136.075.124.094c.568.43.846.967.846 1.642 0 1.415-1.237 2.365-3.078 2.365m-1.14-9.437c-1.202.552-1.863 1.351-1.863 2.252 0 .965.424 1.592 2.667 2.143.52.133 1.071.282 1.561.482 1.283-.554 1.944-1.353 1.944-2.253 0-.965-.425-1.593-2.668-2.144-.521-.133-1.071-.282-1.559-.482l-.041-.017z"
    />
  </svg>
);
SvgParagraph.displayName = "Paragraph";
const ForwardRef = forwardRef(SvgParagraph);
export default ForwardRef;
