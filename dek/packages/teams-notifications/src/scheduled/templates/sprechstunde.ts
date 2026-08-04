const date = new Date();

export const template = {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "TextBlock",
      text: `Deko Sprechstunde ${date.getDate()}.${date.getMonth() + 1}.${date.getUTCFullYear()} 🚀`,
      wrap: true,
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text:
        "Hallo an alle Design Portal Nutzer und Entwickler,\n\n" +
        "heute um 15:35 - 16:00 findet wieder die Deko Sprechstunde für Entwickler statt.\n" +
        "Habt ihr Themen über die wir später sprechen sollten?\n" +
        "Wenn ja, dann kommentiert diese doch bitte unter diesen Post, damit wir einen groben Überblick über die anstehenden Themen haben.\n\n" +
        "Wir freuen uns auf euch.\n\n" +
        "Viele Grüße\n" +
        "Das Deko Team\n\n" +
        "PS: Unabhängig von der Sprechstunde könnt ihr natürlich immer diesen Chat für eure Themen nutzen.",
      wrap: true,
      separator: true,
    },
  ],
};
