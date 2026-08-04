import { useId } from "react-aria";
import { ReactNode } from "react";

interface SelectionBoxAriaDescribedbyProps {
  contentId?: string;
  promotionTop?: string;
  discountText?: ReactNode;
}

interface SelectionBoxAriaDescribedby {
  contentId: string;
  promotionTopId?: string;
  discountTextId?: string;
  ariaDescribedBy?: string;
}

export const useSelectionBoxAriaDescribedby = ({
  contentId: contextId,
  promotionTop,
  discountText,
}: SelectionBoxAriaDescribedbyProps): SelectionBoxAriaDescribedby => {
  const id = useId(contextId);
  const contentId = contextId ? `${contextId}-content` : `${id}-content`;
  const promotionTopId = promotionTop ? `${id}-promotionTop` : undefined;
  const discountTextId = discountText ? `${id}-discountText` : undefined;

  const ariaDescribedBy = [promotionTopId, discountTextId, contentId]
    .filter(Boolean)
    .join(" ");

  return {
    contentId,
    promotionTopId,
    discountTextId,
    ariaDescribedBy,
  };
};
