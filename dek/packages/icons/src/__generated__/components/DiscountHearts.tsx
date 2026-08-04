import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgDiscountHearts = (
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
      fillRule="evenodd"
      d="M3.177 15h-1.27L12.154 1.875h1.27zm1.324-7.425-.238-.13c-.261-.142-2.557-1.423-2.938-2.863a2.04 2.04 0 0 1 1.968-2.576c.5 0 .888.177 1.206.399a2.042 2.042 0 0 1 3.198 2.1c-.313 1.468-2.688 2.794-2.957 2.94zM3.302 3.006c-.584 0-1.052.464-1.052 1.034q0 .14.039.278c.188.711 1.369 1.612 2.212 2.112.864-.513 2.067-1.436 2.219-2.144a1.04 1.04 0 0 0-1.012-1.281c-.304 0-.559.122-.859.407l-.331.314-.343-.303c-.352-.31-.58-.419-.873-.419zM11.5 15l-.238-.13c-.261-.142-2.555-1.423-2.938-2.862a2.04 2.04 0 0 1 1.969-2.577c.5 0 .888.177 1.205.4a2.03 2.03 0 0 1 1.202-.4c1.135 0 2.051.912 2.051 2.034q0 .238-.056.47c-.312 1.463-2.687 2.789-2.956 2.936zm-1.199-4.569a1.042 1.042 0 0 0-1.013 1.312c.189.713 1.37 1.613 2.212 2.112.865-.513 2.068-1.435 2.219-2.143a1.04 1.04 0 0 0-1.011-1.282c-.303 0-.558.122-.86.408l-.332.313-.343-.302c-.351-.311-.579-.42-.872-.42z"
      clipRule="evenodd"
    />
  </svg>
);
SvgDiscountHearts.displayName = "DiscountHearts";
const ForwardRef = forwardRef(SvgDiscountHearts);
export default ForwardRef;
