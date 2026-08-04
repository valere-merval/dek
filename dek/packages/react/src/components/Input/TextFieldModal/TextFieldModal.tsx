"use client";

import { ElementRef, forwardRef, useState } from "react";
import { ModalContent, TextFieldModalProps } from "./TextFieldModal.types";
import { TextField } from "../TextField";
import { InfoCircleOutline } from "@fair/icons";
import { Modal } from "../../Modal/Modal";
import { IconButton } from "../TextField/TextField.styles";

const Icon = ({
  open,
  setOpen,
  modalContent,
  disabled,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  modalContent: ModalContent;
  disabled?: boolean;
}) => (
  <Modal.Root
    open={open}
    onOpenChange={(open) => {
      setOpen(open);
    }}
  >
    <Modal.Trigger>
      <IconButton
        aria-label="Eingabehinweis öffnen"
        disabled={disabled}
        type="button"
      >
        <InfoCircleOutline />
      </IconButton>
    </Modal.Trigger>
    <Modal.Content>
      <Modal.Title>{modalContent.title}</Modal.Title>
      <Modal.Description>{modalContent.description}</Modal.Description>
    </Modal.Content>
  </Modal.Root>
);

export const TextFieldModal = forwardRef<
  ElementRef<typeof TextField>,
  TextFieldModalProps
>(({ modalContent, ...rest }: TextFieldModalProps, ref) => {
  const [open, setOpen] = useState(false);
  return (
    <TextField
      ref={ref}
      {...rest}
      icon={
        <Icon
          modalContent={modalContent}
          open={open}
          setOpen={setOpen}
          disabled={rest.disabled}
        />
      }
    />
  );
});
TextFieldModal.displayName = "TextFieldModal";
