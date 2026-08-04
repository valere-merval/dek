import { ComponentPropsWithoutRef } from "react";
import { SpaceVariant } from "../../../theme/mappings/space";
import { NavigationChipData } from "./NavigationChip";

export type CarouselNavigationChip = NavigationChipData;

export interface CarouselProps extends ComponentPropsWithoutRef<"div"> {
  slideBreakpoints: CarouselSlideBreakpoints;
  gap: SpaceVariant;
  navigationChips?: CarouselNavigationChip[];
  /**
   * Defines which tile is visible on initial render.
   * Defaults to index 0.
   * This does not set the focus on this tile, because this would lead to a page scroll to this carousel.
   * */
  startIndex?: number;
  childrenFocusable?: boolean;
}

interface SlideBreakpoint {
  slidesPerView: number;
  teaseNextSlide?: boolean;
}

export type CarouselSlideBreakpoints = {
  "0px": SlideBreakpoint;
  [key: `${number}px`]: SlideBreakpoint;
};
