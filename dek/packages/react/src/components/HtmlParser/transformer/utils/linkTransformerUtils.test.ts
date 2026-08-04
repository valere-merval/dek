import { expect, it, describe } from "vitest";
import { appendHrefParams, AppendProps } from "./linkTransformerUtils";

describe("appendHrefParams", () => {
  it("adds param to absolute url", () => {
    const props: AppendProps = { href: "https://www.congstar.de/handyankauf" };
    const additionalParams = { action: "open_in_app_browser" };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toBe(
      "https://www.congstar.de/handyankauf?action=open_in_app_browser",
    );
  });

  it("adds param to relative url", () => {
    const props: AppendProps = { href: "/handyankauf" };
    const additionalParams = { action: "open_in_app_browser" };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toBe("/handyankauf?action=open_in_app_browser");
  });

  it("adds multiple params", () => {
    const props: AppendProps = { href: "/handyankauf?existing=param" };
    const additionalParams = {
      action: "open_in_app_browser",
      utm_source: "12345",
    };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toBe(
      "/handyankauf?existing=param&action=open_in_app_browser&utm_source=12345",
    );
  });

  it("adds param before #hash", () => {
    const props: AppendProps = { href: "/handyankauf#hash" };
    const additionalParams = { action: "open_in_app_browser" };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toBe("/handyankauf?action=open_in_app_browser#hash");
  });

  it("does not modify href when href is missing", () => {
    const props: AppendProps = { target: "_blank" };
    const additionalParams = { action: "open_in_app_browser" };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toEqual(undefined);
  });

  it("does not modify href when additional params are empty", () => {
    const props: AppendProps = { href: "/handyankauf" };
    const additionalParams = {};

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toEqual("/handyankauf");
  });

  it("url encodes params", () => {
    const props: AppendProps = { href: "/handyankauf" };
    const additionalParams = { param: "encoding=required" };

    appendHrefParams(props, additionalParams);
    expect(props["href"]).toBe("/handyankauf?param=encoding%3Drequired");
  });
});
