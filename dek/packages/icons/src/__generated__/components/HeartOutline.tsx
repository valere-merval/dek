import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgHeartOutline = (
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
      d="m7.942 13.966-.197-.118a28.292 28.292 0 0 1-2.848-1.977c-.932-.74-1.711-1.475-2.316-2.181-.755-.881-1.237-1.721-1.434-2.495a4.2 4.2 0 0 1-.146-1.104C1.001 3.835 2.762 2 4.926 2a3.84 3.84 0 0 1 3.077 1.539C8.749 2.561 9.861 2 11.055 2c2.186 0 3.946 1.835 3.946 4.091 0 .315-.035.632-.105.938-.16.787-.622 1.643-1.372 2.545-.602.721-1.388 1.473-2.338 2.233a28 28 0 0 1-2.915 2.034l-.109.052-.218.072zM4.949 3C3.312 3 2 4.387 2 6.091q0 .426.112.846.244.957 1.228 2.104c.563.658 1.297 1.347 2.18 2.048a26 26 0 0 0 2.482 1.745q.192-.12.433-.275a27 27 0 0 0 2.125-1.53c.897-.719 1.636-1.424 2.194-2.094.644-.773 1.034-1.481 1.161-2.104.058-.257.085-.498.085-.739 0-1.704-1.312-3.091-2.925-3.091-.9 0-1.723.418-2.278 1.146l-.795 1.041-.795-1.041C6.651 3.418 5.828 3 4.949 3"
    />
  </svg>
);
SvgHeartOutline.displayName = "HeartOutline";
const ForwardRef = forwardRef(SvgHeartOutline);
export default ForwardRef;
