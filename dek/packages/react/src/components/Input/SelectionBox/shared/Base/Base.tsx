import { useContext, useRef } from "react";
import { BaseProps, DurationOption } from "./Base.types";
import * as Styled from "./Base.styles";
import { ThemeProvider } from "../../../../../theme/ThemeProvider";
import { ThemeContext } from "styled-components";
import { boxColorBackgroundMapping } from "./mappings";
import { CardFilledColor } from "../../../../Card/CardFilled";
import { Divider } from "../../../../Divider";
import { formatPrice } from "../../../../../utils/pricing";
import { useSelectionBoxAriaDescribedby } from "../../../../Card/shared/hooks/useSelectionBoxAriaDescribedby";
import { VisuallyHidden } from "react-aria";

export const Base = (props: BaseProps) => {
  const {
    subText,
    labelText,
    discountText,
    children,
    selected,
    contentIfSelected,
    interactiveElement,
    headerImage,
    headerImageSize,
    headerImageSidePaddingCorrection,
    interactiveElementRef,
    contentId,
    onBoxClick,
    duration,
    ...rest
  } = props;
  const themeContext = useContext(ThemeContext);
  const backgroundColor =
    themeContext?.contextSpecific.backgroundColor || "white";
  const boxColorBackground =
    boxColorBackgroundMapping[backgroundColor]?.backgroundColor || "white";
  // Touch triggers pointerup and then click. This flag prevents a double onBoxClick.
  const skipNextClickAfterTouchRef = useRef(false);

  const {
    contentId: contextId,
    promotionTopId,
    discountTextId,
  } = useSelectionBoxAriaDescribedby({
    contentId,
    promotionTop: labelText,
    discountText: discountText,
  });

  const isFreeAreaTarget = (target: EventTarget) => {
    if (!(target instanceof Element)) return false;

    if (target.closest("button, a")) return false;

    if (
      interactiveElementRef &&
      typeof interactiveElementRef !== "function" &&
      interactiveElementRef.current?.contains(target)
    ) {
      return false;
    }

    return true;
  };

  const handleFreeAreaClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!onBoxClick) return;

    if (skipNextClickAfterTouchRef.current) {
      // The touch was already handled in pointerup, so skip the following click.
      skipNextClickAfterTouchRef.current = false;
      return;
    }

    if (!isFreeAreaTarget(event.target)) return;

    onBoxClick();
  };

  const handleFreeAreaPointerUpCapture = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== "touch" || !onBoxClick) return;
    if (!isFreeAreaTarget(event.target)) return;

    // Handle touch early, then remember it so the later click is ignored.
    skipNextClickAfterTouchRef.current = true;
    onBoxClick();
  };

  return (
    <Styled.Root
      promotionTop={labelText}
      promotionTopId={promotionTopId}
      headerImage={headerImage}
      headerImageSize={headerImageSize}
      headerImageSidePaddingCorrection={headerImageSidePaddingCorrection}
      backgroundColor={boxColorBackground as CardFilledColor}
      size="small"
      onClick={handleFreeAreaClick}
      onPointerUpCapture={handleFreeAreaPointerUpCapture}
      {...rest}
    >
      <Styled.ContentAndDiscountWrapper>
        <ThemeProvider
          backgroundColor={
            !selected
              ? boxColorBackgroundMapping[backgroundColor].backgroundColor
              : boxColorBackgroundMapping[backgroundColor].colorIfSelected
          }
        >
          {/* set discount text for screen readers */}
          {discountText && <VisuallyHidden>{discountText}</VisuallyHidden>}
          <Styled.ContentWrapper $hasHeaderImage={!!headerImage}>
            {interactiveElement}
            {duration ? (
              <Duration duration={duration} contentId={contextId} />
            ) : (
              (children || (contentIfSelected && selected) || subText) && (
                <Styled.IndentedContent id={contextId}>
                  {subText && (
                    <Styled.SubText variant="light" size="large">
                      {subText}
                    </Styled.SubText>
                  )}

                  {(children || (contentIfSelected && selected)) && (
                    <Styled.Content>
                      {children}
                      {contentIfSelected && selected && contentIfSelected}
                    </Styled.Content>
                  )}
                </Styled.IndentedContent>
              )
            )}
          </Styled.ContentWrapper>

          {discountText && (
            <Styled.Discount
              id={discountTextId}
              $backgroundColor={boxColorBackground as CardFilledColor}
              // hide discount text from screen readers, as it is already announced via the VisuallyHidden component above.
              aria-hidden="true"
            >
              {discountText}
            </Styled.Discount>
          )}
        </ThemeProvider>
      </Styled.ContentAndDiscountWrapper>
    </Styled.Root>
  );
};

const Duration = ({
  duration,
  contentId,
}: {
  duration: DurationOption;
  contentId: string;
}) => {
  return (
    <>
      <Divider />
      <Styled.BelowDividerContainer id={contentId}>
        <Styled.DurationContentContainer>
          <Styled.DurationPrices>
            {duration.prices.map((price, index) => (
              <Styled.DurationPrice key={index}>
                <Styled.PriceLabel>{price.label}</Styled.PriceLabel>
                <Styled.PriceWrapper>
                  <Styled.PriceTag>
                    {formatPrice(price.price, undefined, {
                      useCentsForSmallValues: true,
                    })}
                  </Styled.PriceTag>
                  {price.strikeThroughPrice !== undefined && (
                    <Styled.StrikeThroughLabelAndTotalPriceLabel>
                      {" "}
                      statt{" "}
                      <Styled.StrikeThroughPrice>
                        {formatPrice(price.strikeThroughPrice, undefined, {
                          useCentsForSmallValues: true,
                        })}
                      </Styled.StrikeThroughPrice>
                    </Styled.StrikeThroughLabelAndTotalPriceLabel>
                  )}
                </Styled.PriceWrapper>
              </Styled.DurationPrice>
            ))}
          </Styled.DurationPrices>
          {duration.totalPrice && (
            <Styled.TotalPrice>
              <Styled.PriceTag>
                {formatPrice(duration.totalPrice.price, undefined, {
                  useCentsForSmallValues: true,
                })}
              </Styled.PriceTag>
              <Styled.StrikeThroughLabelAndTotalPriceLabel>
                {duration.totalPrice.strikeThroughPrice !== undefined && (
                  <>
                    statt{" "}
                    <Styled.StrikeThroughPrice>
                      {formatPrice(
                        duration.totalPrice.strikeThroughPrice,
                        undefined,
                        { useCentsForSmallValues: true },
                      )}
                    </Styled.StrikeThroughPrice>{" "}
                  </>
                )}
                {duration.totalPrice.label}
              </Styled.StrikeThroughLabelAndTotalPriceLabel>
            </Styled.TotalPrice>
          )}
        </Styled.DurationContentContainer>
        {duration.moreDetails && duration.moreDetails}
      </Styled.BelowDividerContainer>
    </>
  );
};
