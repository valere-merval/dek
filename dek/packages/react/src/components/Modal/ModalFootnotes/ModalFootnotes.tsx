"use client";

import React from "react";
import { Modal } from "../Modal";
import {
  ButtonMoreDetails,
  ButtonMoreDetailsProps,
} from "../../Button/ButtonMoreDetails";
import { ModalFootnotesProps } from "./ModalFootnotes.types";
import * as Styled from "./ModalFootnotes.styles";

function isButtonMoreDetailsProps(
  obj: React.ReactNode | ButtonMoreDetailsProps,
): obj is ButtonMoreDetailsProps {
  return typeof obj === "object" && !React.isValidElement(obj);
}

export const ModalFootnotes = ({
  footnotes,
  trigger = <ButtonMoreDetails />,
}: ModalFootnotesProps) => {
  if (footnotes.length > 0) {
    const multipleFootnotes = footnotes.length > 1;
    const title = multipleFootnotes ? "Hinweis" : footnotes[0].header;

    let triggerNode;
    if (isButtonMoreDetailsProps(trigger)) {
      triggerNode = <ButtonMoreDetails {...trigger} />;
    } else {
      triggerNode = trigger;
    }

    return (
      <Modal.Root>
        <Modal.Trigger>{triggerNode}</Modal.Trigger>
        <Modal.Content>
          <Modal.Title>{title}</Modal.Title>

          <Styled.FootnoteWrapper>
            {footnotes.map(({ header, description }) => (
              <Styled.FootnoteItem key={header}>
                {multipleFootnotes && (
                  <Styled.FootnoteItemHeadline
                    variant="bold"
                    size="medium"
                    forwardedAs="h3"
                  >
                    {header}
                  </Styled.FootnoteItemHeadline>
                )}
                {description}
              </Styled.FootnoteItem>
            ))}
          </Styled.FootnoteWrapper>
        </Modal.Content>
      </Modal.Root>
    );
  }

  return null;
};
ModalFootnotes.displayName = "ModalFootnotes";
