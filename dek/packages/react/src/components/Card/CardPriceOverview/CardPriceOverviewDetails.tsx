import { CardPriceOverviewDetailsProps } from "./CardPriceOverview.types";
import { ModalFootnotes } from "../../Modal/ModalFootnotes";

export const CardPriceOverviewDetails = ({
  title,
  description,
  buttonText,
}: CardPriceOverviewDetailsProps) => {
  return (
    <ModalFootnotes
      footnotes={[
        {
          header: title,
          description: description,
        },
      ]}
      trigger={buttonText ? { children: buttonText } : undefined}
    />
  );
};
