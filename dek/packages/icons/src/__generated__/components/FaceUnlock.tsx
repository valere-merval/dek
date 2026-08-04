import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgFaceUnlock = (
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
      d="M3 12.5V10H2v2.5c0 .827.673 1.5 1.5 1.5H6v-1H3.5a.5.5 0 0 1-.5-.5M3 3.5c0-.275.225-.5.5-.5H6V2H3.5C2.673 2 2 2.673 2 3.5V6h1zM13 12.5c0 .275-.225.5-.5.5H10v1h2.5c.827 0 1.5-.673 1.5-1.5V10h-1zM12.5 2H10v1h2.5c.275 0 .5.225.5.5V6h1V3.5c0-.827-.673-1.5-1.5-1.5M9.896 9.646c-.513.513-1.031.854-1.896.854s-1.384-.341-1.896-.854l-.707.707c.566.567 1.319 1.146 2.604 1.146s2.037-.579 2.604-1.146l-.707-.707zM5.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.75 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9 7.25v-2H8v2c0 .275-.225.5-.5.5H7v1h.5c.827 0 1.5-.673 1.5-1.5"
    />
  </svg>
);
SvgFaceUnlock.displayName = "FaceUnlock";
const ForwardRef = forwardRef(SvgFaceUnlock);
export default ForwardRef;
