const date = new Date();

export const template = {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "TextBlock",
      text: `Teams Webhook Debug Release ${date.toISOString()}`,
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text:
        "Diese Nachricht simuliert das Release-Format mit mehreren Changelog-Bloecken.\n\n" +
        "Wenn diese Card sichtbar ist, funktioniert der Workflow-Pfad fuer Release-Notifications.",
      wrap: true,
      separator: true,
    },
    {
      type: "TextBlock",
      text:
        "@fair/react - Version 1.2.3\n" +
        "Major Changes:\n" +
        "- Added new component API\n" +
        "- Updated form validation behavior",
      wrap: true,
      separator: true,
      weight: "Bolder",
    },
    {
      type: "TextBlock",
      text:
        "@fair/icons - Version 4.5.6\n" +
        "Patch Changes:\n" +
        "- Fixed icon alignment in compact mode",
      wrap: true,
      separator: true,
      weight: "Bolder",
    },
  ],
};
