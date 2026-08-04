import type { PressEvent } from "react-aria-components";
import type {
  BreadcrumbLinkProps,
  BreadcrumbSegmentObject,
} from "./Breadcrumb.types";

interface BreadcrumbNormalizedSegment {
  /** Raw path segment. */
  segment: string;
  /** Resolved visible label (also used as schema.org `name`). */
  label: string;
  /** Resolved href (cumulated or overridden). */
  href: string;
  onPress?: (segment: string, event: PressEvent) => void;
  /** Extra attributes forwarded to this segment's `<a>`. */
  linkProps?: BreadcrumbLinkProps;
}

const deriveLabel = (segment: string): string =>
  segment
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const buildHref = (
  baseHref: string,
  rawSegments: string[],
  index: number,
): string => {
  const base = baseHref.replace(/\/+$/, "");
  const joined = rawSegments
    .slice(0, index + 1)
    .map(encodeURIComponent)
    .join("/");
  return `${base}/${joined}/`;
};

/** Normalizes the `path` prop into a stable array of resolved segments. */
export const normalizeSegments = (
  path: BreadcrumbSegmentObject[],
  baseUrl: string,
): BreadcrumbNormalizedSegment[] => {
  const rawSegments = path.map(({ segment }) => segment);

  return path.map((item, index) => {
    return {
      segment: item.segment,
      label: item.label ?? deriveLabel(item.segment),
      href: buildHref(baseUrl, rawSegments, index),
      onPress: item.onPress,
      linkProps: item.linkProps,
    };
  });
};

interface MobileCollapseOptions {
  collapseOnMobile: boolean;
  expanded: boolean;
}

/**
 * Determines which segment indices are collapsed into the mobile ellipsis.
 * Keeps home, the first, previous and current segments visible
 * (`⌂ / first / … / previous / current`). Only
 * applies when `collapseOnMobile` is enabled and there are more than four items
 * in total (home included, i.e. at least four segments). The current (last)
 * segment is never part of the ellipsis.
 */
export const getMobileCollapsedIndices = (
  length: number,
  { collapseOnMobile, expanded }: MobileCollapseOptions,
): Set<number> => {
  const collapsed = new Set<number>();
  const itemCount = length + 1;
  if (!collapseOnMobile || expanded || itemCount <= 4) {
    return collapsed;
  }
  // Collapse everything between the first (0) and the previous (length - 2).
  for (let index = 1; index <= length - 3; index += 1) {
    collapsed.add(index);
  }
  return collapsed;
};

/** Builds and safely serializes the schema.org BreadcrumbList. */
export const serializeBreadcrumbListJsonLd = (
  homeLabel: string,
  baseUrl: string,
  segments: BreadcrumbNormalizedSegment[],
): string =>
  JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabel,
        item: baseUrl,
      },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: segment.label,
        item: segment.href,
      })),
    ],
  }).replace(/</g, "\\u003c");
