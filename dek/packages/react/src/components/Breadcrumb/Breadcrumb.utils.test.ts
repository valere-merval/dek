import { describe, expect, it } from "vitest";
import {
  getMobileCollapsedIndices,
  normalizeSegments,
  serializeBreadcrumbListJsonLd,
} from "./Breadcrumb.utils";

describe("normalizeSegments", () => {
  it("derives labels and cumulative absolute hrefs", () => {
    const segments = normalizeSegments(
      [{ segment: "geraete-mit-vertrag" }, { segment: "apple" }],
      "https://www.congstar.de",
    );

    expect(segments).toMatchObject([
      {
        segment: "geraete-mit-vertrag",
        label: "Geraete Mit Vertrag",
        href: "https://www.congstar.de/geraete-mit-vertrag/",
      },
      {
        segment: "apple",
        label: "Apple",
        href: "https://www.congstar.de/geraete-mit-vertrag/apple/",
      },
    ]);
  });

  it("uses explicit labels and carries interaction props through", () => {
    const onPress = () => undefined;
    const segments = normalizeSegments(
      [
        {
          segment: "iphone",
          label: "iPhone",
          onPress,
          linkProps: { "data-tealium-rel": "bc-iphone" },
        },
      ],
      "https://www.congstar.de/",
    );

    expect(segments[0]).toMatchObject({
      label: "iPhone",
      href: "https://www.congstar.de/iphone/",
      onPress,
      linkProps: { "data-tealium-rel": "bc-iphone" },
    });
  });

  it("encodes special characters in generated URLs", () => {
    const segments = normalizeSegments(
      [{ segment: "geräte & tarife" }, { segment: "a?b#c" }],
      "https://www.congstar.de/shop/",
    );

    expect(segments.map(({ href }) => href)).toEqual([
      "https://www.congstar.de/shop/ger%C3%A4te%20%26%20tarife/",
      "https://www.congstar.de/shop/ger%C3%A4te%20%26%20tarife/a%3Fb%23c/",
    ]);
  });
});

describe("getMobileCollapsedIndices", () => {
  const options = {
    collapseOnMobile: true,
    expanded: false,
  };

  it("does not collapse when disabled, expanded or at most four items exist", () => {
    expect(
      getMobileCollapsedIndices(6, {
        ...options,
        collapseOnMobile: false,
      }),
    ).toEqual(new Set());
    expect(
      getMobileCollapsedIndices(6, {
        ...options,
        expanded: true,
      }),
    ).toEqual(new Set());
    expect(getMobileCollapsedIndices(3, options)).toEqual(new Set());
  });

  it("collapses only middle segments", () => {
    expect(getMobileCollapsedIndices(4, options)).toEqual(new Set([1]));
    expect(getMobileCollapsedIndices(6, options)).toEqual(new Set([1, 2, 3]));
  });
});

describe("serializeBreadcrumbListJsonLd", () => {
  it("serializes the complete schema.org path", () => {
    const segments = normalizeSegments(
      [
        { segment: "geraete", label: "Geräte mit Vertrag" },
        { segment: "apple", label: "Apple" },
      ],
      "https://www.congstar.de",
    );

    expect(
      JSON.parse(
        serializeBreadcrumbListJsonLd(
          "congstar",
          "https://www.congstar.de",
          segments,
        ),
      ),
    ).toEqual({
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "congstar",
          item: "https://www.congstar.de",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Geräte mit Vertrag",
          item: "https://www.congstar.de/geraete/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Apple",
          item: "https://www.congstar.de/geraete/apple/",
        },
      ],
    });
  });

  it("escapes markup before embedding it in a script", () => {
    const segments = normalizeSegments(
      [{ segment: "x", label: "</script>" }],
      "https://www.congstar.de",
    );
    const serialized = serializeBreadcrumbListJsonLd(
      "congstar",
      "https://www.congstar.de",
      segments,
    );

    expect(serialized).not.toContain("</script>");
    expect(serialized).toContain("\\u003c/script>");
  });
});
