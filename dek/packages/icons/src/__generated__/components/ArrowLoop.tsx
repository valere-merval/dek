import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgArrowLoop = (
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
      d="m12.126 10.382-2.705-.333-.123.992 1.786.22A4.493 4.493 0 0 1 3.499 8h-1c0 1.408.537 2.815 1.611 3.889 2.079 2.079 5.397 2.126 7.556.181l-.213 1.73.992.122.333-2.706a.747.747 0 0 0-.653-.835zM3.874 5.618l2.705.333.123-.992-1.786-.22A4.493 4.493 0 0 1 12.501 8h1a5.48 5.48 0 0 0-1.611-3.889c-2.079-2.079-5.397-2.126-7.556-.182l.212-1.73-.993-.122-.332 2.704a.745.745 0 0 0 .653.837"
    />
  </svg>
);
SvgArrowLoop.displayName = "ArrowLoop";
const ForwardRef = forwardRef(SvgArrowLoop);
export default ForwardRef;
