import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgRocketOutline = (
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
      d="M9.031 5.108a1.375 1.375 0 1 0 1.945 1.945 1.375 1.375 0 0 0-1.945-1.945M3.939 10.087c-.449 0-.929.157-1.36.589-.864.864-1.237 4.066-1.237 4.066s3.202-.373 4.066-1.237c1.028-1.028.499-2.329 0-2.828a2.19 2.19 0 0 0-1.468-.589zm.761 2.71c-.25.25-1.163.532-2.15.735.203-.985.484-1.898.735-2.149.202-.202.41-.296.653-.296.339 0 .646.182.761.296.095.095.25.343.288.636.038.297-.052.544-.287.778"
    />
    <path
      fill="currentColor"
      d="M14.423 1.66a5.1 5.1 0 0 0-1.499-.218c-1.075 0-2.31.312-3.627 1.102-.784.47-1.568 1.119-2.261 1.831l-1.539-.308a1.99 1.99 0 0 0-1.806.547L1.163 7.143l3.578 1.451 1.375 1.375 1.374 1.374 1.451 3.579 2.529-2.529a1.99 1.99 0 0 0 .547-1.806l-.309-1.546c.711-.693 1.363-1.471 1.833-2.254 1.19-1.984 1.296-3.782.884-5.127zM4.866 7.566l-1.93-.782 1.462-1.463a1 1 0 0 1 .903-.273l.962.192c-.651.8-1.157 1.621-1.397 2.326m5.896 4.12-1.463 1.463-.786-1.942c.707-.239 1.525-.736 2.329-1.39l.193.967a1 1 0 0 1-.273.902m-2.851-1.334L6.822 9.263 5.727 8.168c.198-1.091 1.995-3.512 4.084-4.765 1.062-.637 2.109-.96 3.113-.96q.342 0 .667.051c.182 1.164-.132 2.484-.909 3.78-1.272 2.122-3.658 3.868-4.77 4.079z"
    />
  </svg>
);
SvgRocketOutline.displayName = "RocketOutline";
const ForwardRef = forwardRef(SvgRocketOutline);
export default ForwardRef;
