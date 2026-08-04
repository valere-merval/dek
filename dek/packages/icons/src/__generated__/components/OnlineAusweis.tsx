import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgOnlineAusweis = (
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
      d="M5.193 10.622a2.08 2.08 0 0 1 2.072 1.854l.026.231H3.125l-.004-.231a2.08 2.08 0 0 1 2.072-1.854M12.745 11.617H8.28v-1h4.466zM5.192 7.703c.69 0 1.251.561 1.251 1.251s-.56 1.25-1.25 1.251a1.252 1.252 0 0 1 0-2.502M12.745 9.557H8.28v-1h4.466z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.663 5.415c.834 0 1.513.679 1.513 1.513v6.554c0 .834-.68 1.513-1.513 1.513H2.513A1.515 1.515 0 0 1 1 13.482V6.928c0-.834.679-1.513 1.513-1.513zM2.513 6.441a.487.487 0 0 0-.487.487v6.554c0 .27.219.487.487.487h11.15a.49.49 0 0 0 .487-.487V6.928a.49.49 0 0 0-.487-.487z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M8.086 2.716c.718 0 1.37.371 1.743.991a.5.5 0 0 1-.817.571l-.117-.167c-.426-.52-1.335-.483-1.693.112a.502.502 0 0 1-.858-.516 2.02 2.02 0 0 1 1.742-.991"
    />
    <path
      fill="currentColor"
      d="M8.087 1c1.084 0 2.1.485 2.782 1.332a.5.5 0 1 1-.777.629A2.57 2.57 0 0 0 8.087 2c-.781 0-1.511.35-2.004.96a.5.5 0 1 1-.777-.628A3.56 3.56 0 0 1 8.086 1"
    />
  </svg>
);
SvgOnlineAusweis.displayName = "OnlineAusweis";
const ForwardRef = forwardRef(SvgOnlineAusweis);
export default ForwardRef;
