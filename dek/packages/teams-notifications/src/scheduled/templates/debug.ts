const date = new Date();

export const template = {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "TextBlock",
      text: `Teams Webhook Debug ${date.toISOString()}`,
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text:
        "Dies ist eine automatische Debug-Nachricht aus der MR Pipeline.\n\n" +
        "Wenn diese Nachricht im Teams Channel sichtbar ist, funktioniert der Webhook-Call aus CI.\n\n" +
        "Gesendet von @fair/teams-notifications (Template: debug).",
      wrap: true,
      separator: true,
    },
  ],
};
