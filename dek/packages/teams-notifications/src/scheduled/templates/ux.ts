const date = new Date();

export const template = {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "TextBlock",
      text: `UI/UX Sprechstunde ${date.getDate()}.${date.getMonth() + 1}.${date.getUTCFullYear()} 🚀`,
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text:
        "Hallo an alle Teilnehmer der UI/UX Sprechstunde,\n\n" +
        "heute um 10:30 - 11:30 findet wieder die Sprechstunde statt.\n" +
        "Habt ihr Themen über die wir später sprechen sollten?\n" +
        "Wenn ja, dann kommentiert diese doch bitte unter diesen Post, damit wir einen groben Überblick über die anstehenden Themen haben.\n\n" +
        "Wir freuen uns auf euch.\n\n" +
        "Viele Grüße\n" +
        "Das Deko Team",
      wrap: true,
      separator: true,
    },
  ],
};
