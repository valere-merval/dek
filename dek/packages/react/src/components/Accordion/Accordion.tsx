"use client";

import {
  createContext,
  ElementRef,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Styled from "./Accordion.styles";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { AccordionItemProps } from "@radix-ui/react-accordion";
import {
  AccordionContentProps,
  AccordionContextValue,
  AccordionHeaderProps,
  AccordionRootProps,
} from "./Accordion.types";
import { dividerColorMap } from "./mappings";
import { useTheme } from "styled-components";
import { formatPrice } from "../../utils/pricing";

const AccordionContext = createContext<AccordionContextValue>({
  withSeparators: false,
});

const validateProps = (props: AccordionRootProps) => {
  if (props.type === "multiple") {
    if ("collapsible" in props && !!props.collapsible)
      throw new Error(
        "collapsible prop may only be applied to a accordion of type 'single'",
      );

    if (typeof props.defaultValue === "string")
      throw new Error(
        "an accordion of type multiple must implement 'defaultValue' as 'string[]'",
      );
  } else {
    if (typeof props.defaultValue === "object")
      throw new Error(
        "an accordion of type single must implement 'defaultValue' as 'string'",
      );
  }
};

export const Root = forwardRef<
  ElementRef<typeof Styled.Root>,
  AccordionRootProps
>((props: AccordionRootProps, ref) => {
  validateProps(props);

  const { children, size, withSeparators, ...rest } = props;

  return (
    <Styled.Root {...rest} ref={ref}>
      <AccordionContext.Provider value={{ size, withSeparators }}>
        {children}
      </AccordionContext.Provider>
    </Styled.Root>
  );
});
Root.displayName = "Accordion.Root";

const Item = forwardRef<
  ElementRef<typeof RadixAccordion.Item>,
  AccordionItemProps
>(({ children, ...props }: AccordionItemProps, ref) => {
  const { withSeparators } = useContext(AccordionContext);
  const theme = useTheme();
  return (
    <>
      <RadixAccordion.Item {...props} ref={ref}>
        {children}
      </RadixAccordion.Item>
      {withSeparators && (
        <Styled.RowDivider
          color={dividerColorMap[theme.contextSpecific.backgroundColor]}
          noGap
        />
      )}
    </>
  );
});
Item.displayName = "Accordion.Item";

const Header = forwardRef<
  ElementRef<typeof Styled.Trigger>,
  AccordionHeaderProps
>(({ children, info, price, ...rest }: AccordionHeaderProps, ref) => {
  const { size } = useContext(AccordionContext);

  if (price && info)
    throw new Error("Accordion.Header may only implement 'price' or 'info'");

  return (
    <Styled.HeaderContainer>
      <Styled.Trigger {...rest} ref={ref}>
        <Styled.Chevron aria-hidden />
        <Styled.TextWrapper $size={size}>{children}</Styled.TextWrapper>
      </Styled.Trigger>

      {info && <Styled.InfoWrapper $size={size}>{info}</Styled.InfoWrapper>}
      {price != null && (
        <Styled.PriceWrapper $size={size}>
          {formatPrice(price)}
        </Styled.PriceWrapper>
      )}
    </Styled.HeaderContainer>
  );
});
Header.displayName = "Accordion.Header";

const Content = forwardRef<
  ElementRef<typeof Styled.Content>,
  AccordionContentProps
>(
  (
    {
      children,
      isIndented,
      additionalTopPadding,
      ...rest
    }: AccordionContentProps,
    ref,
  ) => {
    // Enable the height animation only after the first paint. This prevents a
    // layout shift for initially open items, where the CSS @keyframes
    // animation would otherwise start on the very first (pre-hydration) paint
    // and slide the content in from height 0 (radix-ui/primitives#2891).
    const [animationsEnabled, setAnimationsEnabled] = useState(false);

    useEffect(() => {
      const animationFrame = requestAnimationFrame(() =>
        setAnimationsEnabled(true),
      );
      return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
      <Styled.ContentOverflow>
        <Styled.Content
          $animationsEnabled={animationsEnabled}
          {...rest}
          ref={ref}
        >
          <Styled.ContentBody
            $isIndented={isIndented}
            $additionalTopPadding={additionalTopPadding}
          >
            {children}
          </Styled.ContentBody>
        </Styled.Content>
      </Styled.ContentOverflow>
    );
  },
);
Content.displayName = "Accordion.Content";

export const Accordion = {
  Root,
  Item,
  Header,
  Content,
};
