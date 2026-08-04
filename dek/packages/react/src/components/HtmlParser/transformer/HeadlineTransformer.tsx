import React from "react";
import { BaseTransformer } from "./BaseTransformer";
import { Element, HTMLReactParserOptions } from "html-react-parser";
import {
  HeadlineSize,
  HeadlineTag,
} from "../../Typography/Headline/Headline.types";
import { Headline } from "../../Typography/Headline";

const hTagToSize = (domNode: Element): HeadlineSize => {
  switch (domNode.name) {
    case "h1":
      return "extraLarge";
    case "h2":
      return "large";
    case "h3":
    case "h4":
      return "medium";
    default:
      return "small";
  }
};

export class HeadlineTransformer extends BaseTransformer {
  supportedTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

  transform = (domElement: Element, parserOptions: HTMLReactParserOptions) => {
    const { children } = domElement;
    return (
      <Headline
        as={domElement.name as HeadlineTag}
        size={hTagToSize(domElement)}
        variant="bold"
      >
        {this.customDomToReact(children, parserOptions)}
      </Headline>
    );
  };
}
