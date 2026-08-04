"use client";

import React, {
  ElementRef,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { CarouselProps } from "./Carousel.types";
import * as Styled from "./Carousel.styles";
import { ChevronLeft, ChevronRight } from "@fair/icons";
import { NavigationChip } from "./NavigationChip";
import { useShowNavigation } from "./useShowNavigation";
import { useStartIndex } from "./useStartIndex";
import { useBleedSize } from "./useBleedSize";
import { isSafari } from "../../../utils/userAgent";

/**
 * This is a generic Carousel component. Please take a look at the more specific ones first e.g. CarouselBoxDevice.
 */
export const Carousel = forwardRef<ElementRef<"div">, CarouselProps>(
  (
    {
      children,
      slideBreakpoints,
      gap = "08",
      navigationChips,
      startIndex,
      childrenFocusable = true,
      ...rest
    },
    ref,
  ) => {
    const slideContainerRef = useRef<HTMLUListElement | null>(null);
    const childRefs = useRef<(HTMLElement | null)[]>([]);
    const childrenCount = React.Children.count(children) || 0;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { showNavigation } = useShowNavigation(slideContainerRef);
    const scrollSnaps = Array.from(Array(childrenCount).keys());
    const prevBtnDisabled = useMemo(() => selectedIndex === 0, [selectedIndex]);
    const nextBtnDisabled = useMemo(
      () => selectedIndex + 1 === childrenCount,
      [selectedIndex],
    );

    useStartIndex(
      childrenCount,
      slideContainerRef,
      setSelectedIndex,
      startIndex,
    );

    const { bleedSizeLeft, bleedSizeRight } = useBleedSize(slideContainerRef);

    const setScrollPaddingX = useCallback(
      (leftInPercent: number, rightInPercent: number) => {
        const slideContainer = slideContainerRef?.current;
        // scroll-padding other then inherit does not work in safari
        if (slideContainer && !isSafari()) {
          slideContainer.style.scrollPaddingLeft = `${leftInPercent}%`;
          slideContainer.style.scrollPaddingRight = `${rightInPercent}%`;
        }
      },
      [],
    );

    const setScrollPaddingXForIndex = useCallback(
      (index: number) => {
        if (index === 0) {
          setScrollPaddingX(50, 0);
        } else if (index + 1 === childrenCount) {
          setScrollPaddingX(0, 50);
        } else {
          setScrollPaddingX(50, 50);
        }
      },
      [setScrollPaddingX],
    );

    const setFocus = useCallback(
      (index: number) => {
        setSelectedIndex(index);
        childRefs.current?.at(index)?.focus();
      },
      [setSelectedIndex],
    );

    const scrollTo = useCallback(
      (index: number) => {
        const slideContainer = slideContainerRef?.current;
        if (slideContainer) {
          setScrollPaddingXForIndex(index);
          setFocus(index);

          setTimeout(() => {
            // scrollPadding is a great way to move a focused element into the viewport so that the element is fully visible.
            // Sadly this breaks scroll snapping in Chrome, which seams to be a Chrome Bug. Therefore it will be set to initial after scrolling is finished.
            slideContainer.style.scrollPadding = "inherit";
          }, 100);
        }
      },
      [setFocus, setScrollPaddingXForIndex],
    );

    const handleTouchEnd = useCallback(() => {
      const slideContainer = slideContainerRef?.current;
      if (slideContainer) {
        // The timeout is necessary to wait for the scroll animation to end. This can be replaced with scrollsnapchange or scrollend if one of them is implemented in all major browsers
        setTimeout(() => {
          const slideWidth = slideContainer.scrollWidth / childrenCount;
          if (slideContainer.clientWidth < slideWidth * 2) {
            const index = Math.round(slideContainer.scrollLeft / slideWidth);
            setFocus(index);
          }
        }, 300);
      }
    }, [childrenCount, setFocus]);

    useEffect(() => {
      const slideContainer = slideContainerRef?.current;

      if (slideContainer) {
        // Can be replaced with scrollsnapchange if implemented in all major browsers
        slideContainer.addEventListener("touchend", handleTouchEnd);

        return () => {
          slideContainer.removeEventListener("touchend", handleTouchEnd);
        };
      }
    }, []);

    if (childRefs.current.length !== childrenCount) {
      childRefs.current = Array(childrenCount).fill(null);
    }

    const childrenWithRefs = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return (
          <Styled.Slide
            ref={(element: HTMLElement | null) => {
              childRefs.current[index] = element;
            }}
            tabIndex={0}
            onClick={() => {
              setSelectedIndex(index);
            }}
            onFocus={() => {
              setSelectedIndex(index);
            }}
            $childrenFocusable={childrenFocusable}
          >
            {child}
          </Styled.Slide>
        );
      }
      return (
        <Styled.Slide $childrenFocusable={childrenFocusable}>
          {child}
        </Styled.Slide>
      );
    });

    const scrollNext = () => {
      scrollTo(selectedIndex + 1);
    };

    const scrollPrev = () => {
      scrollTo(selectedIndex - 1);
    };

    const tooManySlides = () => {
      return scrollSnaps.length > 6;
    };

    const showNavigationChips = useMemo(
      () => !!navigationChips && navigationChips.length > 0,
      [navigationChips],
    );

    return (
      <Styled.CarouselContainer aria-label="Karousel" {...rest} ref={ref}>
        {showNavigationChips && (
          <Styled.NavigationChipNav $showNavigation={showNavigation}>
            <Styled.NavigationChipList>
              {navigationChips?.map(({ title, secondLine }, index) => (
                <Styled.NavigationChipListItem key={title}>
                  <NavigationChip
                    checked={selectedIndex === index}
                    onClick={() => scrollTo(index)}
                    title={title}
                    secondLine={secondLine}
                  />
                </Styled.NavigationChipListItem>
              ))}
            </Styled.NavigationChipList>
          </Styled.NavigationChipNav>
        )}

        <Styled.Carousel
          $gap={gap}
          $slideBreakpoints={slideBreakpoints}
          $childrenCount={childrenCount}
          $bleedSizeLeft={bleedSizeLeft}
          $bleedSizeRight={bleedSizeRight}
          ref={slideContainerRef}
        >
          {childrenWithRefs}
        </Styled.Carousel>
        <Styled.ButtonContainer
          role="group"
          aria-label="Karousel Navigationselemente"
          $showNavigation={showNavigation}
        >
          <Styled.ArrowButton
            aria-label="Vorherige Kachel"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            variant="inverted"
            $slideBreakpoints={slideBreakpoints}
          >
            <ChevronLeft />
          </Styled.ArrowButton>

          <Styled.SlideIndicatorContainer $hideOnDesktop={tooManySlides()}>
            {scrollSnaps.map((_, index) => (
              <Styled.SlideIndicator
                aria-label={`Kachel ${index + 1}`}
                $isSelected={index === selectedIndex}
                aria-current={index === selectedIndex ? "page" : false}
                role="button"
                key={index}
                onClick={() => scrollTo(index)}
              />
            ))}
          </Styled.SlideIndicatorContainer>
          <Styled.SlideTextIndicator $showOnDesktop={tooManySlides()}>
            <span aria-current="page">{selectedIndex + 1}&nbsp;</span> von{" "}
            {scrollSnaps.length}
          </Styled.SlideTextIndicator>
          <Styled.ArrowButton
            aria-label="Nächste Kachel"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            variant="inverted"
            $slideBreakpoints={slideBreakpoints}
          >
            <ChevronRight />
          </Styled.ArrowButton>
        </Styled.ButtonContainer>
      </Styled.CarouselContainer>
    );
  },
);
Carousel.displayName = "Carousel";
