"use client";

import React, { ElementRef, forwardRef } from "react";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { HtmlParserProps } from "./HtmlParser.types";
import * as Styled from "./HtmlParser.styles";
import { getTransformers } from "./transformer";

export const HtmlParser = forwardRef<
  ElementRef<typeof Styled.Root>,
  HtmlParserProps
>(({ html, linkTransformerOptions, ...rest }: HtmlParserProps, ref) => {
  const transformers = getTransformers(linkTransformerOptions);

  const parserOptions: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        return transformers
          .find((transformer) => transformer.isUsable(domNode))
          ?.transform(domNode, parserOptions);
      }

      return null;
    },
  };

  return (
    <Styled.Root ref={ref} {...rest}>
      {parse(html, parserOptions)}
    </Styled.Root>
  );
});

HtmlParser.displayName = "HtmlParser";
