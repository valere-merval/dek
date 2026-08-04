import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgNetQuality = (
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
      d="M11.5.5h-7a2.997 2.997 0 0 0-2.993 2.993v7A2.997 2.997 0 0 0 4.5 13.486h2.841l4.939 2.298v-2.401a2.99 2.99 0 0 0 2.213-2.89v-7A2.997 2.997 0 0 0 11.5.5m1.993 9.993c0 .965-.688 1.789-1.679 1.97a1 1 0 0 1-.104.021l-.431.061v1.672l-3.618-1.683-3.162-.047a1.996 1.996 0 0 1-1.993-1.993V3.493c0-1.099.895-1.993 1.993-1.993h7c1.099 0 1.993.895 1.993 1.993z"
    />
    <path
      fill="currentColor"
      d="M11.247 3.135a.753.753 0 0 0-.753.753v6.247h1.505V3.888a.75.75 0 0 0-.752-.753M9.082 4.385a.753.753 0 0 0-.753.753v4.997h1.505V5.138a.75.75 0 0 0-.752-.753M6.918 5.694a.753.753 0 0 0-.753.753v3.689H7.67V6.447a.753.753 0 0 0-.753-.753zM4.753 7.135A.753.753 0 0 0 4 7.888v2.247h1.505V7.888a.75.75 0 0 0-.752-.753"
    />
  </svg>
);
SvgNetQuality.displayName = "NetQuality";
const ForwardRef = forwardRef(SvgNetQuality);
export default ForwardRef;
