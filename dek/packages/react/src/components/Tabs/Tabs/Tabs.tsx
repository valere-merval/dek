"use client";

import { ElementRef, forwardRef, useState } from "react";
import { TabsContentProps, TabsListProps, TabsRootProps } from "./Tabs.types";
import * as Styled from "./Tabs.styles";
import { ChevronDown } from "@fair/icons";

/**
 * @deprecated Please use TabList instead
 *
 * For integration with the Modal component please check the storybook story 'WithModal'
 *
 * Note: For further information regarding props inherited from Radix please sight their <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs#tabs">Documentation</a>
 */
export const Root = forwardRef<ElementRef<typeof Styled.Root>, TabsRootProps>(
  ({ defaultValue, children, ...rest }, ref) => {
    return (
      <Styled.Root defaultValue={defaultValue} ref={ref} {...rest}>
        <Styled.FlexContainer>{children}</Styled.FlexContainer>
      </Styled.Root>
    );
  },
);
Root.displayName = "Tabs.Root";

const SelectList = forwardRef<
  ElementRef<typeof Styled.SelectList>,
  TabsListProps
>(({ trigger, ...rest }: TabsListProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Styled.SelectList
      $isOpen={isOpen}
      ref={ref}
      onMouseDown={toggleOpen}
      {...rest}
    >
      <Styled.Indicator $isOpen={isOpen} aria-label="Öffne Tabsliste">
        <ChevronDown />
      </Styled.Indicator>
      {trigger.map((triggerProps) => (
        <Styled.SelectTrigger
          key={triggerProps.value}
          $isOpen={isOpen}
          {...triggerProps}
        />
      ))}
    </Styled.SelectList>
  );
});
SelectList.displayName = "Tabs.SelectList";

const List = forwardRef<ElementRef<typeof SelectList>, TabsListProps>(
  ({ trigger, sticky = false, ...rest }, ref) => {
    return (
      <Styled.ListContainer $sticky={sticky}>
        <SelectList trigger={trigger} ref={ref} {...rest} />

        <Styled.TabList ref={ref} {...rest}>
          {trigger.map((triggerProps) => (
            <Styled.TabTrigger key={triggerProps.value} {...triggerProps} />
          ))}
        </Styled.TabList>
      </Styled.ListContainer>
    );
  },
);
List.displayName = "Tabs.List";

const Content = forwardRef<ElementRef<typeof Styled.Content>, TabsContentProps>(
  (props, ref) => {
    return <Styled.Content ref={ref} {...props} />;
  },
);
Content.displayName = "Tabs.Content";

export const Tabs = {
  Root,
  List,
  Content,
};
