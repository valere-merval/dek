import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
import { SVGRProps } from "../../types";
const SvgGearOutline = (
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
      d="M15 9.415v-2.7l-2-.15-.358-.994 1.308-1.52-1.909-1.909-1.52 1.308L9.565 3l-.15-2h-2.7l-.15 2-.994.358-1.52-1.308-1.909 1.909 1.308 1.52-.45.956-2 .15v2.7l2 .15.358.994-1.308 1.52 1.909 1.909 1.52-1.308.956.45.15 2h2.7l.15-2 .994-.358 1.52 1.308 1.909-1.909-1.308-1.52.45-.956zm-2.656-.804-.248.528-.45.956-.276.587.423.491.703.817-.597.597-.817-.703-.442-.38-.549.197-.994.358-.61.22-.048.647-.081 1.075h-.844l-.081-1.075-.044-.582-.528-.248-.956-.45-.587-.276-.492.423-.817.703-.597-.597.703-.817.38-.442-.198-.549-.358-.994-.22-.61-.647-.048-1.075-.081v-.844l1.075-.081.582-.044.248-.528.45-.956.276-.587-.423-.491-.703-.817.597-.597.817.703.442.38.549-.198.994-.358.61-.22.049-.647.081-1.075h.844l.081 1.075.044.582.528.248.956.45.587.276.492-.423.817-.703.597.597-.703.817-.38.442.197.549.358.994.22.61.647.049 1.075.081v.844l-1.075.081z"
    />
    <path
      fill="currentColor"
      d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2"
    />
  </svg>
);
SvgGearOutline.displayName = "GearOutline";
const ForwardRef = forwardRef(SvgGearOutline);
export default ForwardRef;
