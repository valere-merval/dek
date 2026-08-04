import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgWlan = (
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
      d="M12.472 8.503a.5.5 0 0 1-.389-.186 5.23 5.23 0 0 0-4.084-1.956c-1.592 0-3.08.713-4.083 1.956a.499.499 0 1 1-.777-.629 6.22 6.22 0 0 1 4.86-2.327c1.895 0 3.668.849 4.861 2.327a.499.499 0 0 1-.388.814zM10.456 10.967a.5.5 0 0 1-.429-.242 2.35 2.35 0 0 0-4.053 0 .502.502 0 0 1-.858-.516A3.35 3.35 0 0 1 8 8.566c1.188 0 2.266.614 2.885 1.643a.502.502 0 0 1-.429.758M8 11.642a1.19 1.19 0 1 1 0 2.38 1.19 1.19 0 0 1 0-2.38"
    />
    <path
      fill="currentColor"
      d="M14.413 6.092a.5.5 0 0 1-.389-.186A7.71 7.71 0 0 0 8 3.022a7.7 7.7 0 0 0-6.023 2.884.5.5 0 1 1-.777-.629 8.7 8.7 0 0 1 6.801-3.255 8.7 8.7 0 0 1 6.802 3.255.5.5 0 0 1-.388.814z"
    />
  </svg>
);
SvgWlan.displayName = "Wlan";
const ForwardRef = forwardRef(SvgWlan);
export default ForwardRef;
