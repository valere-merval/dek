const TEMP_BASE_URL = "https://congstar.de";

const isValidAbsoluteUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export type AppendProps = Record<string, string | boolean>;

/**
 * Append additional query params to the 'href' attribute.
 *
 * @param props
 * @param additionalHrefParams
 */
export const appendHrefParams = (
  props: AppendProps,
  additionalHrefParams: Record<string, string>,
) => {
  try {
    if (Object.keys(additionalHrefParams).length === 0) {
      return;
    }

    const href = props["href"];
    if (!href || typeof href !== "string") {
      return;
    }

    const isAbsoluteUrl = isValidAbsoluteUrl(href);

    // URL interface only works with absolute URLs
    let url: URL;
    if (isAbsoluteUrl) {
      url = new URL(href);
    } else {
      url = new URL(href, TEMP_BASE_URL);
    }

    for (const [key, value] of Object.entries(additionalHrefParams)) {
      url.searchParams.append(key, value);
    }

    props["href"] = isAbsoluteUrl
      ? url.href
      : url.href.replace(TEMP_BASE_URL, "");
  } catch (e) {
    console.error(
      `Unexpected error when appending additional href params '${additionalHrefParams}' to href props '${props}'.`,
      e,
    );
  }
};
