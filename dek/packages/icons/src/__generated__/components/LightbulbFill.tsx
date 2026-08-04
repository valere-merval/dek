import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgLightbulbFill = (
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
      d="M8 1C5.24 1 3 3.24 3 6c0 1.78.95 3.4 2.5 4.3v1.2h2V7.71L5.65 5.85l.7-.7L8 6.79l1.65-1.64.7.7L8.5 7.71v3.79h2v-1.2C12.05 9.4 13 7.78 13 6c0-2.76-2.24-5-5-5M10 12.25H6v1h4zM8 15a1 1 0 0 0 1-1H7a1 1 0 0 0 1 1"
    />
  </svg>
);
SvgLightbulbFill.displayName = "LightbulbFill";
const ForwardRef = forwardRef(SvgLightbulbFill);
export default ForwardRef;
