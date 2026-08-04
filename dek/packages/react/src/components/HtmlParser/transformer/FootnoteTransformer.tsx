import React from "react";
import { BaseTransformer } from "./BaseTransformer";
import { Element, HTMLReactParserOptions, Text } from "html-react-parser";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";
import { ButtonMicroIcon } from "../../Button/ButtonMicroIcon";

const findChildByTag = (domNode: Element, tagName: string): Element =>
  Array.from(domNode.children).find(
    (child) => child instanceof Element && child.tagName === tagName,
  ) as Element;

const getTextElementFromChild = (
  domNode: Element,
  tagName: string,
): Text | null => {
  const child = findChildByTag(domNode, tagName);
  return child?.children?.length === 1 ? (child.children[0] as Text) : null;
};

export class FootnoteTransformer extends BaseTransformer {
  supportedTags = ["footnote"];

  transform = (domElement: Element, parserOptions: HTMLReactParserOptions) => {
    const header =
      getTextElementFromChild(domElement, "footnote-header")?.data || "";

    const description = findChildByTag(
      domElement,
      "footnote-description",
    )?.children;

    return (
      <ModalFootnotes
        footnotes={[
          {
            description: description
              ? this.customDomToReact(description, parserOptions)
              : "",
            header: header,
          },
        ]}
        trigger={<ButtonMicroIcon />}
      />
    );
  };
}
