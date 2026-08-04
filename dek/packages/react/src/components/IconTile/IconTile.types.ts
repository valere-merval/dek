import { ComponentPropsWithoutRef, ReactNode } from "react";

export type IconTileSize =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";
export type IconTileColor =
  | "yellow"
  | "orange"
  | "green"
  | "red"
  | "lime"
  | "white"
  | "black"
  | "purple";
export type IconTileVariant = "filled" | "outlined";

export type IconTileMediaSize = {
  minAvailableSpace: IconTileSize;
  maxAvailableSpace: IconTileSize;
};

export type IconTileContainerQueryConfiguration = {
  containerName: string;
  containerBreakpoint: string;
};

export interface IconTileProps extends ComponentPropsWithoutRef<"div"> {
  icon?: ReactNode;
  variant: IconTileVariant;
  size?: IconTileMediaSize;
  /**
   * Using the containerQueryConfiguration props will toggle the component to use container queries instead of media queries.
   */
  containerQueryConfiguration?: IconTileContainerQueryConfiguration;
  color: IconTileColor;
}
