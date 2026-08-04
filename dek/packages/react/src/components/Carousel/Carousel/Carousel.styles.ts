import styled, { css } from "styled-components";
import { CarouselSlideBreakpoints } from "./Carousel.types";
import {
  ButtonPrimaryCircle,
  ButtonPrimaryCircleProps,
} from "../../Button/ButtonPrimary";
import { SpaceVariant } from "../../../theme/mappings/space";
import { highContrast } from "../../../utils/accessibility";
import { indicatorColorMap, textIndicatorColorMap } from "./mappings";
import { disableUserSelect } from "../../../utils/userSelect";

const containerQueryBreakpoint = "512px";
export const CAROUSEL_CONTAINER_NAME = "carousel";

export const NavigationChipNav = styled.nav<{
  $showNavigation: boolean;
}>(
  ({ $showNavigation }) => css`
    display: ${$showNavigation ? "block" : "none"};
  `,
);

export const NavigationChipList = styled.ul(
  ({ theme }) => css`
    all: unset;
    display: flex;
    justify-content: center;
    gap: ${theme.size["08"]};
    flex-wrap: wrap;
    padding-top: ${theme.space["12"]};
  `,
);

export const NavigationChipListItem = styled.li`
  all: unset;
`;

export const CarouselContainer = styled.div(
  ({ theme }) => css`
    all: unset;

    container-type: inline-size;
    container-name: ${CAROUSEL_CONTAINER_NAME};
    display: flex;
    flex-direction: column;
    gap: ${theme.space["20"]};
  `,
);

/**
 * Calculates the space that needs to be removed from grid auto columns when a tease to the next slide is desired.
 */
const calculateTeaseNextSlideSpace = (
  childrenCount: number,
  slidesPerView: number,
  gap: string,
  teaseNextSlide?: boolean,
) => {
  if (teaseNextSlide && childrenCount > slidesPerView) {
    return `(${gap} + 0.6rem)  / ${slidesPerView}`;
  }
  return "0rem";
};

/**
 * Calculates the space that needs to be removed from grid auto columns based on the gaps that are visible.
 */
const calculateGapSpace = (visibleSlides: number, gap: string) => {
  if (visibleSlides > 1) {
    const gapsCount = visibleSlides - 1;

    return `${gap} * ${gapsCount} / ${visibleSlides}`;
  }

  return "0rem";
};

const getGridAutoColumns = (
  childrenCount: number,
  slidesPerView: number,
  gap: string,
  teaseNextSlide?: boolean,
) => {
  if (childrenCount === 1) {
    return css`
      grid-auto-columns: 100%;
    `;
  }

  // if there are less children then slidesPerView the children should fill the space
  if (childrenCount < slidesPerView) {
    const gapSpace = calculateGapSpace(childrenCount, gap);
    return css`
      --gap-space: calc(${gapSpace});
      grid-auto-columns: calc((100% / ${childrenCount}) - (var(--gap-space)));
    `;
  }

  const teaseNextSlideSpace = calculateTeaseNextSlideSpace(
    childrenCount,
    slidesPerView,
    gap,
    teaseNextSlide,
  );

  const gapSpace = calculateGapSpace(slidesPerView, gap);

  return css`
    --gap-space: calc(${gapSpace});
    --tease-next-slide-space: calc(${teaseNextSlideSpace});
    grid-auto-columns: calc(
      (100% / ${slidesPerView}) -
        (var(--gap-space) + var(--tease-next-slide-space))
    );
  `;
};

export const Carousel = styled.ul<{
  $gap: SpaceVariant;
  $slideBreakpoints: CarouselSlideBreakpoints;
  $childrenCount: number;
  $bleedSizeLeft: number;
  $bleedSizeRight: number;
}>(
  ({
    theme,
    $gap,
    $slideBreakpoints,
    $childrenCount,
    $bleedSizeLeft,
    $bleedSizeRight,
  }) => {
    return css`
      /* defines the gap between the carousel and the viewport. This is necessary to seemless scroll the carousel to the edge of the screen */
      --bleed-size-left: ${$bleedSizeLeft}px;
      --bleed-size-right: ${$bleedSizeRight}px;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: calc(var(--bleed-size-left) * -1);
      margin-right: calc(var(--bleed-size-right) * -1);
      padding-top: ${theme.space["12"]};
      padding-bottom: ${theme.space["12"]};
      padding-left: var(--bleed-size-left);
      padding-right: var(--bleed-size-right);

      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;

      // native carousels only work with overflow scroll instead of hidden or clip. Therefore we need to hide the scrollbar
      overflow-x: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      display: grid;
      align-items: stretch;
      transition: height 0.5s;
      grid-auto-flow: column;
      gap: ${theme.space[$gap]};
      justify-content: stretch;
      ${disableUserSelect()};

      ${$slideBreakpoints
        ? Object.entries($slideBreakpoints).map(
            ([key, { slidesPerView, teaseNextSlide }]) => css`
              @container ${CAROUSEL_CONTAINER_NAME} (inline-size > ${key}) {
                ${getGridAutoColumns(
                  $childrenCount,
                  slidesPerView,
                  theme.space[$gap],
                  teaseNextSlide,
                )};
              }
            `,
          )
        : null}
    `;
  },
);

export const Slide = styled.li<{ $childrenFocusable: boolean }>(
  ({ theme, $childrenFocusable }) => css`
    all: unset;
    display: flex;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    &&& > * {
      flex-grow: 1;
    }

    &:focus {
      &&& > * {
        ${$childrenFocusable ? theme.contextSpecific.focusStyles : null}
      }
    }
  `,
);

export const ButtonContainer = styled.div<{
  $showNavigation: boolean;
}>(
  ({ theme, $showNavigation }) => css`
    display: ${$showNavigation ? "flex" : "none"};
    gap: ${theme.space["48"]};
    justify-content: center;
    align-items: center;
  `,
);

export const ArrowButton = styled(ButtonPrimaryCircle)<
  ButtonPrimaryCircleProps & {
    $slideBreakpoints: CarouselSlideBreakpoints;
  }
>(({ $slideBreakpoints }) => {
  const slideBreakpointsInPx = Object.keys($slideBreakpoints);
  const smallestBreakpointBiggerThen0 = slideBreakpointsInPx.find(
    (breakpointInPx) => breakpointInPx !== "0px",
  );

  return css`
    display: flex;
    @container ${CAROUSEL_CONTAINER_NAME} (inline-size > ${smallestBreakpointBiggerThen0 ||
    "0px"}) {
      display: flex;
    }
  `;
});

export const SlideIndicatorContainer = styled.div<{ $hideOnDesktop: boolean }>`
  ${({ theme, $hideOnDesktop }) => {
    return css`
      display: none;
      align-items: center;
      @container ${CAROUSEL_CONTAINER_NAME} (inline-size >= ${containerQueryBreakpoint}) {
        display: flex;
        display: ${$hideOnDesktop ? "none" : "flex"};
      }

      gap: ${theme.space["20"]};
    `;
  }}
`;

export const SlideIndicator = styled.button<{
  $isSelected: boolean;
}>`
  ${({ theme, $isSelected }) => {
    const INDICATOR_SIZE = theme.space["16"];
    return css`
      all: unset;
      box-sizing: border-box;
      display: flex;
      align-self: center;
      justify-content: center;
      width: ${INDICATOR_SIZE};
      height: ${INDICATOR_SIZE};
      transform-origin: center center;
      transform: ${$isSelected ? "scale(1)" : "scale(.75)"};
      border-radius: 50%;
      cursor: pointer;
      background-color: ${$isSelected
        ? theme.color.InteractiveBlue
        : theme.color[
            indicatorColorMap[theme.contextSpecific.backgroundColor]
          ]};

      ${highContrast()} {
        border: ${$isSelected ? theme.space["08"] : "1px"} solid transparent;
      }
      &:focus-visible {
        ${theme.contextSpecific.focusStyles}
      }
    `;
  }}
`;

export const SlideTextIndicator = styled.div<{ $showOnDesktop: boolean }>`
  ${({ theme, $showOnDesktop }) => {
    return css`
      display: flex;

      @container ${CAROUSEL_CONTAINER_NAME} (inline-size >= ${containerQueryBreakpoint}) {
        display: ${$showOnDesktop ? "flex" : "none"};
      }

      font: ${theme.typography.BodyLight16};
      color: ${theme.color[
        textIndicatorColorMap[theme.contextSpecific.backgroundColor]
      ]};
    `;
  }}
`;
