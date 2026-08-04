import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgStarOutline = (
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
      d="m8 3.444.939 2.848.226.687h3.721l-2.413 1.728-.598.428.23.698.929 2.819-2.453-1.757-.582-.417-.582.417-2.453 1.757.929-2.819.23-.698-.598-.428-2.413-1.728h3.721l.226-.687.939-2.848m0-2.097a.49.49 0 0 0-.475.343L6.109 5.979H1.557a.5.5 0 0 0-.291.906L4.945 9.52l-1.409 4.274a.502.502 0 0 0 .476.659.5.5 0 0 0 .29-.096l3.699-2.649 3.699 2.649a.5.5 0 0 0 .29.096.502.502 0 0 0 .476-.659L11.057 9.52l3.679-2.635a.5.5 0 0 0-.291-.906H9.89L8.476 1.69a.49.49 0 0 0-.475-.343z"
    />
  </svg>
);
SvgStarOutline.displayName = "StarOutline";
const ForwardRef = forwardRef(SvgStarOutline);
export default ForwardRef;
