"use client";

import React, { ElementRef, forwardRef } from "react";
import { AppTabsProps } from "./AppTabs.types";
import * as Styled from "./AppTabs.styles";
import { CardFilled } from "../../Card/CardFilled";

export const AppTabs = forwardRef<ElementRef<typeof Styled.Root>, AppTabsProps>(
  (props, ref) => {
    const { defaultValue, tabs, ariaLabel } = props;

    return (
      <Styled.Root ref={ref} {...props} defaultValue={defaultValue}>
        <Styled.TabsList aria-label={ariaLabel}>
          {tabs.map((tab) => (
            <Styled.TabTrigger value={tab.id} key={tab.id}>
              {tab.label}
            </Styled.TabTrigger>
          ))}
        </Styled.TabsList>
        <CardFilled.Root size="small" backgroundColor="darkGrey">
          {tabs.map((tab) => (
            <Styled.TabContent value={tab.id} key={tab.id}>
              {tab.content}
            </Styled.TabContent>
          ))}
        </CardFilled.Root>
      </Styled.Root>
    );
  },
);
AppTabs.displayName = "AppTabs";
