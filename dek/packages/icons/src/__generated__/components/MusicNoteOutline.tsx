import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgMusicNoteOutline = (
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
      d="M5.5 3.09v6.791A2.24 2.24 0 0 0 4.25 9.5C3.01 9.5 2 10.51 2 11.75S3.01 14 4.25 14s2.25-1.01 2.25-2.25V6.41l6.5-1.3v3.271A2.24 2.24 0 0 0 11.75 8C10.51 8 9.5 9.01 9.5 10.25s1.01 2.25 2.25 2.25S14 11.49 14 10.25V1.39zM4.25 13C3.561 13 3 12.439 3 11.75s.561-1.25 1.25-1.25 1.25.561 1.25 1.25S4.939 13 4.25 13M6.5 5.39V3.91l6.5-1.3v1.48zm5.25 6.11c-.689 0-1.25-.561-1.25-1.25S11.061 9 11.75 9 13 9.561 13 10.25s-.561 1.25-1.25 1.25"
    />
  </svg>
);
SvgMusicNoteOutline.displayName = "MusicNoteOutline";
const ForwardRef = forwardRef(SvgMusicNoteOutline);
export default ForwardRef;
