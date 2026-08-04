export const template = {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "TextBlock",
      text: "Changes in the latest Release",
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text: "A new version of @fair has just been released. This message contains segments from all changelog files to help you get the gist.",
      wrap: true,
      separator: true,
    },
  ],
  actions: [
    {
      type: "Action.OpenUrl",
      title: "FAIR Release Notes",
      url: "https://git.congstar.net/congo-web/design-system/fair/-/releases",
    },
  ],
};
