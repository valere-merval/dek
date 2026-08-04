import { BaseTransformer } from "./BaseTransformer";
import { Element, HTMLReactParserOptions } from "html-react-parser";
import React from "react";
import { useTheme } from "styled-components";
import { Text } from "../../Typography/Text";

const ParagraphText = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Text
      as="span"
      size={theme.contextSpecific.brand === "congstarApp" ? "medium" : "large"}
      variant="light"
    >
      {children}
    </Text>
  );
};

export class ParagraphTransformer extends BaseTransformer {
  supportedTags = ["p"];

  transform = (
    { children }: Element,
    parserOptions: HTMLReactParserOptions,
  ) => (
    <ParagraphText>
      {this.customDomToReact(children, parserOptions)}
    </ParagraphText>
  );
}
