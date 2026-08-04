"use client";

import React, { forwardRef, ElementRef } from "react";
import { TabListProps } from "./TabList.types";
import * as Styled from "./TabList.styles";

export const TabList = forwardRef<ElementRef<typeof Styled.Root>, TabListProps>(
  (
    { tabs, sticky, defaultValue, onSelectionChange, selectedKey, className },
    ref,
  ) => {
    return (
      <Styled.Root
        ref={ref}
        selectedKey={selectedKey}
        defaultSelectedKey={defaultValue}
        onSelectionChange={onSelectionChange}
        className={className}
      >
        <Styled.FlexWrapper>
          <Styled.ListWrapper $sticky={sticky}>
            <Styled.List>
              {tabs.map((tab) => (
                <Styled.Tab id={tab.value} key={tab.value}>
                  {tab.title}
                </Styled.Tab>
              ))}
            </Styled.List>
          </Styled.ListWrapper>
          {tabs.map((tab) => (
            <Styled.Content id={tab.value} key={tab.value}>
              {tab.content}
            </Styled.Content>
          ))}
        </Styled.FlexWrapper>
      </Styled.Root>
    );
  },
);
TabList.displayName = "TabList";
