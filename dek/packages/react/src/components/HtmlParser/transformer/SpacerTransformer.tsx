import { BaseTransformer } from "./BaseTransformer";
import { Element } from "html-react-parser";
import React from "react";
import styled, { css } from "styled-components";
import { SpaceVariant } from "../../../theme/mappings/space";
import { up } from "../../../theme/mappings/mediaBreakpoints";

// Reference: https://git.congstar.net/congo-web/libraries/ui/congstar-fair-ui/-/blob/main/src/base/spacer/spacer.scss
const spacerSpacings: Record<string, { xs: SpaceVariant; md: SpaceVariant }> = {
  "04": { xs: "04", md: "06" },
  "06": { xs: "06", md: "08" },
  "08": { xs: "08", md: "12" },
  "12": { xs: "12", md: "16" },
  "16": { xs: "16", md: "20" },
  "20": { xs: "20", md: "24" },
  "24": { xs: "24", md: "32" },
  "32": { xs: "32", md: "40" },
  "40": { xs: "40", md: "48" },
  "48": { xs: "48", md: "56" },
  "56": { xs: "56", md: "64" },
  "64": { xs: "64", md: "72" },
  "72": { xs: "72", md: "80" },
  "80": { xs: "80", md: "96" },
  "96": { xs: "96", md: "128" },
  "128": { xs: "128", md: "128" },
};

const Spacer = styled.div<{ $xs: SpaceVariant; $md: SpaceVariant }>(
  ({ $xs, $md, theme }) => css`
    font-size: 0;
    line-height: 0;
    margin: 0;
    background: 0;
    border: 0;

    height: ${theme.space[$xs]};
    ${up("md")} {
      height: ${theme.space[$md]};
    }
  `,
);

export class SpacerTransformer extends BaseTransformer {
  supportedTags = ["div"];

  isUsable = ({
    name: elementName,
    attribs: { class: className },
    children,
  }: Element) => {
    const isDiv = elementName === "div";
    const isFairSpacer = !!className?.includes("fair-spacer--space");
    const hasNoChildren = children.length === 0;

    return isDiv && isFairSpacer && hasNoChildren;
  };

  transform({ attribs: { class: className } }: Element): React.ReactElement {
    const match = className?.match(/fair-spacer--space(\d+)/);
    const spacing = match?.[1] ? spacerSpacings[match[1]] : undefined;

    if (!spacing) {
      return <div />;
    }

    return <Spacer $xs={spacing.xs} $md={spacing.md} />;
  }
}
