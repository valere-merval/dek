import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGearFill = (
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
      d="M15 9.415v-2.7l-2-.15-.358-.994 1.308-1.52-1.909-1.909-1.52 1.308L9.565 3l-.15-2h-2.7l-.15 2-.994.358-1.52-1.308-1.909 1.909 1.308 1.52-.45.956-2 .15v2.7l2 .15.358.994-1.308 1.52 1.909 1.909 1.52-1.308.956.45.15 2h2.7l.15-2 .994-.358 1.52 1.308 1.909-1.909-1.308-1.52.45-.956zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);
SvgGearFill.displayName = "GearFill";
const ForwardRef = forwardRef(SvgGearFill);
export default ForwardRef;
