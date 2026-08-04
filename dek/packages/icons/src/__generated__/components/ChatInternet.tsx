import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgChatInternet = (
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
      d="M3.425 8.425h-1a.5.5 0 0 1-.5-.5v-4.5c0-.275.225-.5.5-.5h6c.275 0 .5.225.5.5V4.56h1V3.425c0-.827-.673-1.5-1.5-1.5h-6c-.827 0-1.5.673-1.5 1.5v4.5c0 .827.673 1.5 1.5 1.5v2.102L4.719 9.8V8.549l-1.294.974z"
    />
    <path
      fill="currentColor"
      d="M10.175 5.425a4.756 4.756 0 0 0-4.75 4.75 4.756 4.756 0 0 0 4.75 4.75 4.756 4.756 0 0 0 4.75-4.75 4.756 4.756 0 0 0-4.75-4.75m3.699 4.25h-1.586c-.049-1.054-.24-2.039-.568-2.806-.023-.053-.05-.091-.074-.142a3.75 3.75 0 0 1 2.227 2.947zm-7.398 1h1.586c.049 1.054.24 2.039.568 2.806.023.053.05.091.074.142a3.75 3.75 0 0 1-2.227-2.947zm2.152-3.804c-.327.765-.518 1.749-.567 2.804H6.475a3.75 3.75 0 0 1 2.227-2.947c-.024.051-.052.09-.075.144zm2.175 6.213c-.174.402-.338.613-.444.719-.054.054-.09.091-.119.116-.022 0-.042.007-.064.007s-.043-.006-.065-.007c-.029-.025-.064-.062-.118-.115-.107-.106-.271-.317-.444-.718-.273-.638-.44-1.499-.487-2.411h2.228c-.047.912-.214 1.773-.487 2.409M9.061 9.675c.047-.912.213-1.773.486-2.409.174-.402.338-.613.444-.719.102-.101.167-.122.184-.122s.082.021.183.121c.107.106.271.317.444.718.273.638.44 1.499.487 2.411zm2.586 3.947c.024-.051.052-.09.075-.144.327-.765.518-1.749.567-2.804h1.586a3.75 3.75 0 0 1-2.227 2.947z"
    />
  </svg>
);
SvgChatInternet.displayName = "ChatInternet";
const ForwardRef = forwardRef(SvgChatInternet);
export default ForwardRef;
