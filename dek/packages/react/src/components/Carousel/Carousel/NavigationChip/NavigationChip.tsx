import { ElementRef, forwardRef } from "react";
import { NavigationChipProps } from "./NavigationChip.types";
import * as Styled from "./NavigationChip.styles";

export const NavigationChip = forwardRef<
  ElementRef<typeof Styled.Button>,
  NavigationChipProps
>(
  (
    { title, secondLine, checked = false, onClick }: NavigationChipProps,
    ref,
  ) => {
    return (
      <Styled.Button
        name="carouselNavigationChip"
        value={title}
        $active={checked}
        onClick={onClick}
        ref={ref}
      >
        <Styled.Title>{title}</Styled.Title>
        <Styled.SecondLine>{secondLine}</Styled.SecondLine>
      </Styled.Button>
    );
  },
);
NavigationChip.displayName = "NavigationChip";
