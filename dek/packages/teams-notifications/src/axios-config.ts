import axios from "axios";

declare const process: {
  env: Record<string, string | undefined>;
};

const DEFAULT_WEBHOOK_URL = process.env.FAIR_TEAMS_WEBHOOK_URL;

const shouldFailOnWebhookError = process.env.FAIL_ON_WEBHOOK_ERROR === "true";
const shouldDebugWebhook = process.env.DEBUG_TEAMS_WEBHOOK === "true";

type AdaptiveCardPayload = {
  type: "AdaptiveCard";
  $schema: string;
  version: string;
  body: Array<Record<string, unknown>>;
};

const serializeDebugResponse = (response: {
  status: number;
  statusText: string;
  headers: unknown;
  data: unknown;
}) =>
  JSON.stringify(
    {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      data: response.data,
    },
    null,
    2,
  );

const isAdaptiveCardPayload = (payload: string) => {
  try {
    const parsedPayload = JSON.parse(payload) as Partial<AdaptiveCardPayload>;
    return parsedPayload.type === "AdaptiveCard";
  } catch {
    return false;
  }
};

export const postToWebhook = async (payload: string, url?: string) => {
  const targetUrl = url ?? DEFAULT_WEBHOOK_URL;

  if (!targetUrl) {
    console.warn(
      "Skipping teams notification: no webhook URL configured. Set FAIR_TEAMS_WEBHOOK_URL.",
    );
    return false;
  }

  if (!isAdaptiveCardPayload(payload)) {
    console.warn(
      "Notification payload is not an Adaptive Card. Expected JSON with type 'AdaptiveCard' for workflow-only delivery.",
    );
  }

  try {
    const response = await axios.post(targetUrl, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (shouldDebugWebhook) {
      console.log(
        `webhook response details (workflow):\n${serializeDebugResponse(response)}`,
      );
      console.log(`workflow webhook payload:\n${payload}`);
    }

    console.log(
      `workflow webhook accepted request (HTTP ${response.status}). If no Teams card appears, inspect the flow run history and verify the post-card action uses the trigger body as Adaptive Card JSON.`,
    );

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 403) {
        console.warn(
          "Teams workflow webhook returned 403 Forbidden. Check that the Power Automate workflow is enabled and the copied webhook URL is still valid.",
        );
      } else {
        console.warn(
          `Failed posting to webhook (status: ${status ?? "unknown"}).`,
        );
      }
    } else {
      console.warn("Failed posting to webhook due to a non-HTTP error.");
    }

    if (shouldFailOnWebhookError) {
      throw error;
    }

    return false;
  }
};
