import React from "react";
import { BaseTransformer } from "./BaseTransformer";
import { Element, HTMLReactParserOptions } from "html-react-parser";
import { List } from "../../List";
import { Text } from "../../Typography/Text";

const isList = (domNode: Element): boolean => domNode.name === "ul";

const isChecklist = (domNode: Element): boolean =>
  isList(domNode) && domNode.attribs["class"] === "checklist";

export class ListTransformer extends BaseTransformer {
  supportedTags = ["ul"];

  isUsable = (domNode: Element) => isChecklist(domNode) || isList(domNode);

  transform = (domElement: Element, parserOptions: HTMLReactParserOptions) => {
    const { children } = domElement;

    if (isChecklist(domElement)) {
      return (
        <List.Root size="medium">
          {this.customDomToReact(children, parserOptions)}
        </List.Root>
      );
    }

    return (
      <Text variant="light" size="medium" as="div">
        <ul>{this.customDomToReact(children, parserOptions)}</ul>
      </Text>
    );
  };
}

export class ListItemTransformer extends BaseTransformer {
  supportedTags = ["li"];

  isUsable = (domNode: Element) => {
    const parent = domNode.parent as Element;
    return parent !== null && isChecklist(parent) && domNode.name === "li";
  };

  transform = (
    { children }: Element,
    parserOptions: HTMLReactParserOptions,
  ) => (
    <List.Item>
      <List.Body> {this.customDomToReact(children, parserOptions)}</List.Body>
    </List.Item>
  );
}
