import React from "react";
import { BaseTransformer } from "./BaseTransformer";
import { Divider } from "../../Divider/Divider";

export class DividerTransformer extends BaseTransformer {
  supportedTags = ["hr"];

  transform = () => <Divider color="darkGrey" />;
}
