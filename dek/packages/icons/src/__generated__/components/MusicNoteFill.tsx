import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgMusicNoteFill = (
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
      d="M5.5 3.09v6.791A2.24 2.24 0 0 0 4.25 9.5C3.01 9.5 2 10.51 2 11.75S3.01 14 4.25 14s2.25-1.01 2.25-2.25V6.41l6.5-1.3v3.271A2.24 2.24 0 0 0 11.75 8C10.51 8 9.5 9.01 9.5 10.25s1.01 2.25 2.25 2.25S14 11.49 14 10.25V1.39z"
    />
  </svg>
);
SvgMusicNoteFill.displayName = "MusicNoteFill";
const ForwardRef = forwardRef(SvgMusicNoteFill);
export default ForwardRef;
