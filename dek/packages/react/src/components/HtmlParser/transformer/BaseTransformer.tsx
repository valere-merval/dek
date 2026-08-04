import {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { ReactElement } from "react";

export interface HtmlTransformer {
  supportedTags: string[];
  isUsable(domNode: Element): boolean;
  transform(
    domNode: Element,
    parserOptions: HTMLReactParserOptions,
  ): ReactElement;
}

export abstract class BaseTransformer implements HtmlTransformer {
  abstract supportedTags: string[];

  isUsable = (domNode: Element) => this.supportedTags.includes(domNode.name);

  // https://github.com/remarkablemark/html-react-parser/issues/1126
  customDomToReact = (
    domNode: Element["children"],
    parserOptions: HTMLReactParserOptions,
  ) => {
    return domToReact(domNode as DOMNode[], parserOptions);
  };

  abstract transform(
    domNode: Element,
    parserOptions: HTMLReactParserOptions,
  ): ReactElement;
}
