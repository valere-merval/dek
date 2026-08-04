import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgShoppingCartFill = (
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
      d="M6 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M14.49 4.016 14.5 4h-.018a.99.99 0 0 0-.864-.5H3.106L2.44 2.263A.5.5 0 0 0 2 2H1v1h.701l3.075 5.712c.263.486.77.788 1.321.788h4.836c.524 0 1.017-.279 1.286-.728l2.256-3.758a.99.99 0 0 0 .015-.998"
    />
  </svg>
);
SvgShoppingCartFill.displayName = "ShoppingCartFill";
const ForwardRef = forwardRef(SvgShoppingCartFill);
export default ForwardRef;
