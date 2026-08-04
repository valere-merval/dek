import React from "react";
import { Text } from "../../Typography/Text";
import { BaseTransformer } from "./BaseTransformer";
import {
  attributesToProps,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { LinkTransformerOptions } from "../HtmlParser.types";
import { appendHrefParams } from "./utils/linkTransformerUtils";

export class LinkTransformer extends BaseTransformer {
  supportedTags = ["a"];
  readonly linkTransformerOptions?: LinkTransformerOptions;

  constructor(linkTransformerOptions?: LinkTransformerOptions) {
    super();
    this.linkTransformerOptions = linkTransformerOptions;
  }

  transform = (
    { children, attribs: { class: className, ...restAttribs } }: Element,
    parserOptions: HTMLReactParserOptions,
  ) => {
    const props = attributesToProps(restAttribs);

    if (this.linkTransformerOptions?.additionalHrefParams) {
      appendHrefParams(props, this.linkTransformerOptions.additionalHrefParams);
    }

    const Button =
      className === "btn-primary" ? ButtonPrimary : ButtonSecondary;

    if (className === "btn-primary" || className === "btn-secondary") {
      return (
        <Button size="medium" asChild>
          <a {...props}>{this.customDomToReact(children, parserOptions)}</a>
        </Button>
      );
    }

    return (
      <Text size="large" variant="light" as="a" {...props}>
        {this.customDomToReact(children, parserOptions)}
      </Text>
    );
  };
}
