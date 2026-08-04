import type { ReactElement } from "react";
import * as React from "react";
import * as ICONS from "@fair/icons";

const iconKeys = Object.keys(ICONS);
const iconValues = Object.values(ICONS);
const iconsMap = iconKeys.reduce<{ [key: string]: ReactElement }>(
  (acc, field, index) => {
    acc[field] = React.createElement(iconValues[index]);
    return acc;
  },
  {}
);

const iconsMapping = { "Kein Icon": null, ...iconsMap };
const iconSelection = ["Kein Icon", ...iconKeys];
export { iconKeys, iconsMap, iconsMapping, iconSelection };
