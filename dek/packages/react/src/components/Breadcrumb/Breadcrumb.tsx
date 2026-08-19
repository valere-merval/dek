"use client";

import React, { forwardRef, ElementRef, useRef, useState } from "react";
import type { BreadcrumbProps } from "./Breadcrumb.types";
import * as Styled from "./Breadcrumb.styles";
import {
  getMobileCollapsedIndices,
  normalizeSegments,
  serializeBreadcrumbListJsonLd,
} from "./Breadcrumb.utils";
import { useFocusWithin } from "react-aria";
import { useBreadcrumbOverflowState } from "./hooks/useBreadcrumbOverflowState";
import { useScrollFocusedIntoView } from "./hooks/useScrollFocusedIntoView";

const ELLIPSIS_ARIA_LABEL = "Weitere Elemente anzeigen";
const SEPARATOR = "/";

/**
 * Renders a breadcrumb navigation (WAI-ARIA breadcrumb pattern) on top of React
 * Aria's `Breadcrumbs`. Long paths do not wrap (they scroll horizontally).
 *
 * With `collapseOnMobile` enabled, middle segments are collapsed into a single
 * clickable `…` below the `md` viewport width
 * (`⌂ / first / … / previous / current`) when there are more than four items in
 * total. The full path is shown from `md` upwards and once the ellipsis is
 * expanded. The current segment is hidden only when the rendered breadcrumb
 * would otherwise overflow horizontally.
 *
 * A schema.org `BreadcrumbList` JSON-LD for the full logical path is always
 * emitted, independent of what is visually collapsed.
 */
export const Breadcrumb = forwardRef<
  ElementRef<typeof Styled.Root>,
  BreadcrumbProps
>(
  (
    {
      path,
      baseUrl,
      home,
      collapseOnMobile = false,
      "aria-label": ariaLabel = "Breadcrumb-Navigation",
      ...rest
    },
    ref,
  ) => {
    const [expandedBreadcrumbId, setExpandedBreadcrumbId] = useState<string>();
    const scrollRef = useRef<ElementRef<typeof Styled.ScrollArea>>(null);
    const listRef = useRef<ElementRef<typeof Styled.List>>(null);
    const currentItemRef = useRef<ElementRef<typeof Styled.Item>>(null);

    const homeLabel = home?.label ?? "Zurück zur Startseite";
    const homeAriaLabel = home?.ariaLabel ?? homeLabel;
    const breadcrumbId = JSON.stringify({ collapseOnMobile, path });
    const expanded = expandedBreadcrumbId === breadcrumbId;

    const segments = normalizeSegments(path, baseUrl);
    const mobileCollapsedIndices = getMobileCollapsedIndices(segments.length, {
      collapseOnMobile,
      expanded,
    });
    const firstCollapsedIndex = mobileCollapsedIndices.size
      ? Math.min(...mobileCollapsedIndices)
      : -1;
    const lastIndex = segments.length - 1;
    const jsonLdString = serializeBreadcrumbListJsonLd(
      homeLabel,
      baseUrl,
      segments,
    );
    const { focusWithinProps } = useFocusWithin({
      onFocusWithinChange: (isFocusWithin) => {
        if (!isFocusWithin) setExpandedBreadcrumbId(undefined);
      },
    });

    const { hideCurrentSegment, isScrollable } = useBreadcrumbOverflowState(
      scrollRef,
      listRef,
      currentItemRef,
      breadcrumbId,
      expanded,
      segments.length,
    );

    const onFocusCapture = useScrollFocusedIntoView(
      scrollRef,
      currentItemRef,
      hideCurrentSegment,
    );

    return (
      <>
        <Styled.Root
          ref={ref}
          aria-label={ariaLabel}
          {...rest}
          {...focusWithinProps}
        >
          <Styled.ScrollArea
            ref={scrollRef}
            $isScrollable={isScrollable}
            onFocusCapture={onFocusCapture}
          >
            <Styled.List ref={listRef}>
              <Styled.Item>
                <Styled.HomeLink
                  {...home?.linkProps}
                  href={baseUrl}
                  aria-label={homeAriaLabel ?? homeLabel}
                  onPress={home?.onPress}
                >
                  <Styled.HomeIcon aria-hidden />
                </Styled.HomeLink>
              </Styled.Item>
              {segments.map((segment, index) => {
                const isCurrent = index === lastIndex;

                return (
                  <React.Fragment key={`${segment.segment}-${index}`}>
                    {index === firstCollapsedIndex ? (
                      <Styled.Item $mobileOnly>
                        <Styled.Separator aria-hidden>
                          {SEPARATOR}
                        </Styled.Separator>
                        <Styled.Ellipsis
                          type="button"
                          aria-label={ELLIPSIS_ARIA_LABEL}
                          onClick={() => setExpandedBreadcrumbId(breadcrumbId)}
                        >
                          &hellip;
                        </Styled.Ellipsis>
                      </Styled.Item>
                    ) : null}

                    <Styled.Item
                      ref={isCurrent ? currentItemRef : undefined}
                      $hideOnMobile={mobileCollapsedIndices.has(index)}
                      $hideWhenOverflowing={
                        isCurrent && segments.length >= 2 && hideCurrentSegment
                      }
                    >
                      <Styled.Separator aria-hidden>
                        {SEPARATOR}
                      </Styled.Separator>
                      {isCurrent ? (
                        <Styled.SegmentLink>{segment.label}</Styled.SegmentLink>
                      ) : (
                        <Styled.SegmentLink
                          {...segment.linkProps}
                          href={segment.href}
                          onPress={(event) =>
                            segment.onPress?.(segment.segment, event)
                          }
                        >
                          {segment.label}
                        </Styled.SegmentLink>
                      )}
                    </Styled.Item>
                  </React.Fragment>
                );
              })}
            </Styled.List>
          </Styled.ScrollArea>
        </Styled.Root>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </>
    );
  },
);
Breadcrumb.displayName = "Breadcrumb";
