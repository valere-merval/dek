import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgSimTwo = (
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
      d="M10 8.945h-.25v4.096h1V9.925h1.75v-1H10zM9 8.946H8v1h1zM9 10.5H8v1h1z"
    />
    <path
      fill="currentColor"
      d="M12.5 10.5h-1v1h1zM12.5 12.02h-1v1h1zM9 12.041H8v1h1zM5 8H4v1h1zM5 9.5H4v1h1z"
    />
    <path
      fill="currentColor"
      d="M12.912 3.312H10.25v-.719c0-.88-.714-1.594-1.594-1.594H4.801c-.423 0-.828.168-1.127.467L2.217 2.923A1.6 1.6 0 0 0 1.75 4.05v7.043c0 .88.714 1.594 1.594 1.594h2.662v.719c0 .88.714 1.594 1.594 1.594h5.312c.88 0 1.594-.714 1.594-1.594v-8.5c0-.88-.714-1.594-1.594-1.594m-9.568 8.376a.595.595 0 0 1-.594-.594V4.051a.6.6 0 0 1 .174-.42l1.457-1.457A.6.6 0 0 1 4.801 2h3.855c.327 0 .594.266.594.594v.719h-.193c-.423 0-.828.168-1.127.467L6.473 5.237a1.6 1.6 0 0 0-.467 1.127v.137H4v1h2.006v4.187zm10.162 1.718a.595.595 0 0 1-.594.594H7.6a.595.595 0 0 1-.594-.594V6.363a.6.6 0 0 1 .174-.42l1.457-1.457a.6.6 0 0 1 .42-.174h3.855c.327 0 .594.266.594.594z"
    />
  </svg>
);
SvgSimTwo.displayName = "SimTwo";
const ForwardRef = forwardRef(SvgSimTwo);
export default ForwardRef;
