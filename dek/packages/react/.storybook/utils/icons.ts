//@ts-nocheck
import React, { ReactElement } from "react";
import * as Icons from "@fair/icons";

const iconKeys = Object.keys(Icons);
const iconValues = Object.values(Icons);
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
