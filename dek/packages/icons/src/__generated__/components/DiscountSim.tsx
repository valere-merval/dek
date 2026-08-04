import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDiscountSim = (
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
      fillRule="evenodd"
      d="M4.5 15h7c.827 0 1.5-.673 1.5-1.5V4.725a1.76 1.76 0 0 0-.513-1.237l-1.975-1.975A1.76 1.76 0 0 0 9.275 1H4.5C3.673 1 3 1.673 3 2.5v11c0 .827.673 1.5 1.5 1.5M4 2.5c0-.275.225-.5.5-.5h4.775c.197 0 .39.08.53.22l1.975 1.975c.14.139.22.333.22.53V13.5c0 .275-.225.5-.5.5h-7a.5.5 0 0 1-.5-.5zm.774 4.576c0 1.064.44 1.727 1.264 1.727l-.001-.001c.831 0 1.287-.68 1.287-1.743s-.416-1.734-1.271-1.734c-.84 0-1.279.671-1.279 1.751m.815-.016c0-.663.096-1.015.456-1.015s.464.367.464 1.031c0 .608-.096 1.016-.456 1.016s-.464-.369-.464-1.032m.568 3.95h.807l2.871-5.597h-.808zm2.519-1.639c0 1.063.44 1.727 1.263 1.727.832 0 1.287-.681 1.287-1.744s-.416-1.735-1.271-1.735c-.84 0-1.279.672-1.279 1.752m.816-.016c0-.663.096-1.016.455-1.016.36 0 .464.368.464 1.032 0 .608-.095 1.015-.455 1.015s-.464-.368-.464-1.031"
      clipRule="evenodd"
    />
  </svg>
);
SvgDiscountSim.displayName = "DiscountSim";
const ForwardRef = forwardRef(SvgDiscountSim);
export default ForwardRef;
