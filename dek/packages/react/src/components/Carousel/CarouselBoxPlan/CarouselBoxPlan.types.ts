import { ReactNode } from "react";
import { CarouselNavigationChip } from "../Carousel";

export interface CarouselBoxPlanProps {
  children?: ReactNode;
  navigationChips?: CarouselNavigationChip[];
  startIndex?: number;
}
