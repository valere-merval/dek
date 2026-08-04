import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgESimOutline = (
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
      d="M11.22 3.513A1.76 1.76 0 0 0 9.983 3H4.501c-.827 0-1.5.673-1.5 1.5v7c0 .827.673 1.5 1.5 1.5h7c.827 0 1.5-.673 1.5-1.5V6.018a1.76 1.76 0 0 0-.513-1.237zM12 11.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5h5.482c.197 0 .391.08.53.22l1.268 1.268c.14.14.22.333.22.53zM6.5 1h-1v1.5h1zM8.5 1h-1v1.5h1zM10.5 1h-1v1.5h1zM6.5 13.5h-1V15h1zM8.5 13.5h-1V15h1zM10.5 13.5h-1V15h1zM2.5 5.5H1v1h1.5zM2.5 7.5H1v1h1.5zM2.5 9.5H1v1h1.5zM15 5.5h-1.5v1H15zM15 7.5h-1.5v1H15zM15 9.5h-1.5v1H15z"
    />
    <path
      fill="currentColor"
      d="M8.05 5C6.542 5 5.5 6.053 5.5 8.005 5.5 9.914 6.653 11 8.016 11c.887 0 1.497-.274 2.007-.756l-.676-.724c-.388.285-.776.461-1.264.461-.71 0-1.341-.472-1.463-1.58h3.847c.011-.121.033-.306.033-.515C10.5 6.328 9.702 5 8.05 5M6.642 7.469c.1-.922.565-1.449 1.33-1.449.943 0 1.319.658 1.375 1.449z"
    />
  </svg>
);
SvgESimOutline.displayName = "ESimOutline";
const ForwardRef = forwardRef(SvgESimOutline);
export default ForwardRef;
