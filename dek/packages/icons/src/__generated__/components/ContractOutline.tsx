import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgContractOutline = (
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
      d="M11.5 1H6.725a1.76 1.76 0 0 0-1.237.513L3.513 3.488A1.76 1.76 0 0 0 3 4.725V13.5c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5m.5 12.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-8h2.5a1 1 0 0 0 1-1V2h4c.275 0 .5.225.5.5z"
    />
    <path
      fill="currentColor"
      d="M10.811 11.754a.23.23 0 0 1-.183-.05.38.38 0 0 1-.13-.249.5.5 0 0 0-.932-.204c-.145.251-.328.391-.51.37-.186-.021-.36-.22-.454-.521a.502.502 0 0 0-.889-.134l-.172.258c-.362.553-.564.766-.891.776-.803-.041-.908-1.189-.9-1.87.006-.523.29-.974.552-1.066.26-.091.54.199.688.378a.499.499 0 1 0 .771-.635c-.73-.889-1.438-.811-1.791-.687-.789.278-1.211 1.216-1.22 1.998-.021 1.771.652 2.82 1.85 2.88l.089.003c.669 0 1.087-.391 1.407-.818.233.244.526.396.853.432.326.034.649-.052.93-.245q.058.06.125.114c.265.212.602.303.937.262a.501.501 0 0 0-.129-.993zM11 6H8.25v1H11zM11 4H9.5v1H11z"
    />
  </svg>
);
SvgContractOutline.displayName = "ContractOutline";
const ForwardRef = forwardRef(SvgContractOutline);
export default ForwardRef;
