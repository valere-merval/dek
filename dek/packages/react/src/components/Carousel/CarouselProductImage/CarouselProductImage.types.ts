import { ComponentPropsWithoutRef, Key, ReactNode } from "react";

export type Entry = {
  /**
   * The Image that will be displayed inside the Carousel, provide a ReactNode of appropriate size.
   */
  carouselImage: ReactNode;
  /**
   * The Image that will be displayed inside the Thumbnail, provide a ReactNode of appropriate size.
   */
  thumbnailImage: {
    node: ReactNode;
    ariaLabel: string;
  };
};

export interface CarouselProductImageProps
  extends ComponentPropsWithoutRef<"div"> {
  entries: Entry[];
  /**
   * The key should be an identifier for react. If you need to reset the component change the key accordingly. See https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key
   */
  key: Key;
}
