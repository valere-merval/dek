import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgRecycling = (
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
      d="M2.649 11.942a1.04 1.04 0 0 1-.013-1.053l1.708-3.063.591 1.685.943-.33-.827-2.359c-.017-.049-.052-.083-.076-.127a.98.98 0 0 0-.846-.534 1 1 0 0 0-.351.048l-2.36.827.33.943 1.698-.595-1.684 3.019a2.04 2.04 0 0 0 .023 2.046A2.13 2.13 0 0 0 3.641 13.5h3.025l.01-1H3.641c-.418 0-.789-.208-.994-.558zM14.236 10.403l-1.45-2.6-.902.435 1.479 2.652c.188.337.183.721-.013 1.053-.205.35-.576.558-.994.558H9.124l1.276-1.163-.674-.738-1.847 1.683c-.069.063-.114.142-.162.219a1 1 0 0 0-.164.475.97.97 0 0 0 .142.525c.037.066.065.137.117.194l1.683 1.848.74-.674-1.247-1.369h3.367c.776 0 1.47-.393 1.856-1.051a2.04 2.04 0 0 0 .023-2.046zM9.007 3.078l1.782 3.195-1.768-.5-.271.963 2.405.68q.136.037.271.037.01-.002.019-.003a.99.99 0 0 0 .85-.527c.034-.064.073-.125.093-.197l.679-2.406-.963-.271-.475 1.682-1.75-3.138a2.12 2.12 0 0 0-1.88-1.092 2.12 2.12 0 0 0-1.88 1.092L4.657 5.214l.83.564L6.992 3.08c.404-.725 1.609-.725 2.014 0z"
    />
  </svg>
);
SvgRecycling.displayName = "Recycling";
const ForwardRef = forwardRef(SvgRecycling);
export default ForwardRef;
