import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGameControllerOutline = (
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
      d="M14.888 7.011a4.21 4.21 0 0 0-2.882-3.075 4.4 4.4 0 0 0-1.257-.186c-.917 0-1.756.301-2.448.797a.52.52 0 0 1-.604 0 4.2 4.2 0 0 0-2.448-.797c-.406 0-.827.059-1.257.186A4.21 4.21 0 0 0 1.11 7.011a4.257 4.257 0 0 0 4.138 5.239c.917 0 1.757-.301 2.449-.798a.5.5 0 0 1 .301-.099c.105 0 .209.033.301.099a4.18 4.18 0 0 0 2.449.798 4.256 4.256 0 0 0 4.138-5.239zm-1.598 3.017a3.24 3.24 0 0 1-2.54 1.222 3.2 3.2 0 0 1-1.866-.61 1.51 1.51 0 0 0-1.768 0 3.2 3.2 0 0 1-1.866.61 3.24 3.24 0 0 1-2.54-1.222c-.63-.788-.852-1.782-.623-2.797a3.21 3.21 0 0 1 2.19-2.336 3.4 3.4 0 0 1 .973-.145c.664 0 1.309.211 1.865.61a1.51 1.51 0 0 0 1.77 0 3.2 3.2 0 0 1 1.865-.61c.32 0 .647.049.973.145a3.21 3.21 0 0 1 2.19 2.336c.229 1.015.008 2.008-.623 2.797"
    />
    <path
      fill="currentColor"
      d="M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.553 7.5H5.5V6.447C5.5 6.2 5.3 6 5.053 6h-.106c-.247 0-.447.2-.447.447V7.5H3.447C3.2 7.5 3 7.7 3 7.947v.106c0 .247.2.447.447.447H4.5v1.053c0 .247.2.447.447.447h.106c.247 0 .447-.2.447-.447V8.5h1.053C6.8 8.5 7 8.3 7 8.053v-.106C7 7.7 6.8 7.5 6.553 7.5"
    />
  </svg>
);
SvgGameControllerOutline.displayName = "GameControllerOutline";
const ForwardRef = forwardRef(SvgGameControllerOutline);
export default ForwardRef;
