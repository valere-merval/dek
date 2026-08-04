import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDhlFill = (
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
      d="M4.147 6.711c-.095.126-.253.344-.349.471-.049.065-.137.183.156.183h1.543l.457-.608c.284-.377.025-1.161-.989-1.161H.972l-.692.921h3.772c.19 0 .188.07.095.194m-1.133.881c-.293 0-.205-.118-.156-.183l.352-.469c.093-.124.096-.195-.095-.195H1.39L0 8.595h3.39c1.12 0 1.743-.746 1.935-1.004zm2.205 1.004h1.989l.754-1.004H5.974zm5.13-3-.763 1.015h-.887l.762-1.015H7.473l-1.33 1.769h4.864l1.33-1.769zm-2.254 3h1.988l.754-1.004H8.849zm5.665-1.231 1.33-1.769h-2.105l-1.331 1.769zm-2.277.227-.216.288c-.25.33-.029.716.786.716h3.192l.754-1.004z"
    />
  </svg>
);
SvgDhlFill.displayName = "DhlFill";
const ForwardRef = forwardRef(SvgDhlFill);
export default ForwardRef;
