import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgEyeCrossedOutline = (
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
      d="M15.4 7.78c-.06-.13-.16-.33-.3-.56-.25-.43-.67-1.07-1.29-1.72C12.26 3.86 10.25 3 8 3c-1.14 0-2.23.22-3.22.66l.77.77C6.31 4.14 7.13 4 8 4c2 0 3.71.74 5.09 2.19.54.57.92 1.15 1.15 1.53.06.1.11.2.15.28-.04.08-.09.18-.15.28-.23.38-.61.96-1.15 1.53-.37.38-.75.72-1.17.99l.72.72c.41-.29.81-.63 1.17-1.02.62-.65 1.04-1.29 1.29-1.72.14-.23.24-.43.3-.56l.11-.22z"
    />
    <path
      fill="currentColor"
      d="M10.61 9.49c.24-.44.39-.95.39-1.49 0-1.65-1.35-3-3-3-.54 0-1.05.15-1.49.39l.75.75a2.006 2.006 0 0 1 2.6 2.6zM11.03 11.33l-1.07-1.07-.71-.71-2.8-2.8-.71-.71-1.16-1.16-.72-.72-2.01-2.01-.7.7 1.88 1.88a9 9 0 0 0-.84.77C1.57 6.15 1.15 6.79.9 7.22c-.14.23-.24.43-.3.56L.49 8l.11.22c.06.13.16.33.3.56.25.43.67 1.07 1.29 1.72C3.74 12.14 5.75 13 8 13c.98 0 1.92-.17 2.8-.49h.01l2.34 2.34.7-.7-2.08-2.08zM8.28 9.98c-.09.01-.18.02-.28.02-1.1 0-2-.9-2-2 0-.1.01-.19.02-.28zM8 12c-2 0-3.71-.74-5.09-2.19-.54-.57-.92-1.15-1.15-1.53-.06-.1-.11-.2-.15-.28.04-.08.09-.18.15-.28.23-.38.61-.96 1.15-1.53.26-.28.54-.53.83-.75l1.47 1.47C5.07 7.25 5 7.62 5 8c0 1.65 1.35 3 3 3 .38 0 .75-.07 1.09-.21l.93.93c-.64.19-1.31.28-2.02.28"
    />
  </svg>
);
SvgEyeCrossedOutline.displayName = "EyeCrossedOutline";
const ForwardRef = forwardRef(SvgEyeCrossedOutline);
export default ForwardRef;
