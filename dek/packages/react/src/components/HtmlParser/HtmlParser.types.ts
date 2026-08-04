import { ComponentPropsWithoutRef } from "react";

export interface LinkTransformerOptions {
  additionalHrefParams?: Record<string, string>;
}

export interface HtmlParserProps extends ComponentPropsWithoutRef<"div"> {
  html: string;
  /**
   * This prop can be used to append arbitrary query params to the `href` attribute of all `<a>` tags.
   * For example, it is useful in the context of an App _Webview_ integration,
   * where all external links must have a parameter `?action=open_in_app_browser`.
   */
  linkTransformerOptions?: LinkTransformerOptions;
}
