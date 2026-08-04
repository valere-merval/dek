import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgRocketFill = (
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
      d="M14.423 1.66a5.1 5.1 0 0 0-1.499-.218c-1.075 0-2.31.312-3.627 1.102C6.91 3.976 4.509 7.052 4.725 8.579l1.39 1.39 1.39 1.39q.096.014.202.014c1.582 0 4.462-2.299 5.833-4.586 1.19-1.984 1.295-3.782.883-5.127m-3.447 5.392a1.375 1.375 0 1 1-1.945-1.945 1.375 1.375 0 0 1 1.945 1.945M2.579 10.676c-.864.864-1.237 4.066-1.237 4.066s3.202-.373 4.066-1.237c1.028-1.028.499-2.329 0-2.828s-1.8-1.028-2.828 0zM5.886 4.145l-.39-.078a2 2 0 0 0-1.806.547L1.161 7.143l2.567 1.041c.097-1.206.974-2.708 2.158-4.039M11.937 10.193c-1.331 1.186-2.836 2.076-4.037 2.164l1.04 2.564 2.529-2.529a2 2 0 0 0 .547-1.806z"
    />
  </svg>
);
SvgRocketFill.displayName = "RocketFill";
const ForwardRef = forwardRef(SvgRocketFill);
export default ForwardRef;
