import { ComponentPropsWithoutRef } from "react";

export type CssSpaceString = `${string}${"%" | "px"}`;
export interface LoaderSkeletonProps extends ComponentPropsWithoutRef<"div"> {
  width?: CssSpaceString;
  height?: CssSpaceString;
}
