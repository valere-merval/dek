import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgTiktok = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.797 6.153c-.718-.013-1.39-.197-1.953-.586v3.011a2.68 2.68 0 0 1-1.649 2.469 2.675 2.675 0 0 1-2.912-.58 2.67 2.67 0 0 1 1.89-4.561q.2 0 .395.042v1.477a1.216 1.216 0 0 0-1.415.46 1.22 1.22 0 0 0 .079 1.486 1.22 1.22 0 0 0 .941.427c.673 0 1.221-.539 1.221-1.453V3.75h1.453a1.95 1.95 0 0 0 .605 1.442c.356.334.829.584 1.351.6z"
    />
  </svg>
);
SvgTiktok.displayName = "Tiktok";
const ForwardRef = forwardRef(SvgTiktok);
export default ForwardRef;
