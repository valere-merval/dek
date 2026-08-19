import type { ComponentPropsWithoutRef } from "react";
import type { PressEvent } from "react-aria-components";

// To-Do: überdenken, ob das nicht etwas viel ist
export interface BreadcrumbLinkProps {
  target?: string;
  rel?: string;
  "aria-label"?: string;
  [dataAttribute: `data-${string}`]: string | undefined;
}

export interface BreadcrumbSegmentObject {
  /** Raw path segment, e.g. `"iphone-15-pro-max"`. */
  segment: string;
  /**
   * Overrides the automatically derived display label. It is also used as the
   * schema.org `name` in the JSON-LD output.
   */
  label?: string;
  /**
   * Overrides the URL generated from `baseUrl` and the cumulative path for
   * this segment. Later URLs continue to use the raw `segment` values.
   */
  href?: string;
  /**
   * Called (in addition to navigation) when the segment link is pressed, e.g.
   * for tracking.
   */
  onPress?: (segment: string, event: PressEvent) => void;
  /**
   * Extra attributes forwarded to this segment's `<a>` while it is navigable
   * (e.g. `{ "data-tealium-rel": "bc-apple" }`).
   */
  linkProps?: BreadcrumbLinkProps;
}

export interface BreadcrumbHomeProps {
  /** schema.org `name` of the home element. Default `"Zurück zur Startseite"`. */
  label?: string;
  /** Accessible label of the home link. Defaults to the value of`label`. */
  ariaLabel?: string;
  /** Called (in addition to navigation) when the home link is pressed. */
  onPress?: (event: PressEvent) => void;
  /** Extra attributes forwarded to the home `<a>`. */
  linkProps?: BreadcrumbLinkProps;
}

export interface BreadcrumbProps extends Omit<
  ComponentPropsWithoutRef<"nav">,
  "children"
> {
  /**
   * Path AFTER the home element. Missing labels are derived from the
   * corresponding raw `segment` as a fallback.
   */
  path: [BreadcrumbSegmentObject, ...BreadcrumbSegmentObject[]];
  /**
   * Absolute base URL used to build both visible segment links and JSON-LD item
   * URLs without an explicit `href`, e.g. `"https://www.congstar.de"`.
   */
  baseUrl: string;
  /**
   * Optional configuration of the always rendered leading home link. Its URL
   * always equals `baseUrl`. Defaults to the label/aria-label `"Startseite"`.
   */
  home?: BreadcrumbHomeProps;
  /**
   * Automatically collapses the middle segments into a single clickable `…`
   * **only on mobile** (below `md`), keeping the home, first and previous
   * segments visible. The current segment is hidden only when the rendered
   * breadcrumb would otherwise overflow and at least two path segments exist.
   * The full path is always shown from `md` upwards. Collapse only takes effect
   * when there are more than four items in total (home included, i.e. at least
   * four segments). Default `false`.
   */
  collapseOnMobile?: boolean;
}
