import type { Meta, StoryObj } from "@storybook/react-vite";
import { HtmlParser } from "./HtmlParser";
import { Text } from "../Typography/Text";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "blue", "lightGrey", "darkGrey"],
};

const meta = {
  component: HtmlParser,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "notReadyForCongstarApp",
    "notReadyForJa",
    "notReadyForPenny",
    "!readyForCongstarApp",
    "!readyForJa",
    "!readyForPenny",
  ],
} satisfies Meta<typeof HtmlParser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    html: "<p><strong>Hello, World!</strong></p>",
  },
};

export const Paragraph: Story = {
  args: {
    html: `<p>Ein <strong style="color:red">Paragraph</strong></p>
      <p>und ein weiterer Paragraph mit einem <a href='#'>Link</a>.</p>
    `,
  },
};

export const ParagraphWithRealTestData: Story = {
  args: {
    html: `<p>Rufnummer mitbringen und 10&nbsp;€<footnote ng-cloak data-footnote-id="42787">            <footnote-index>740</footnote-index>            <footnote-header>Rufnummer mitbringen und 10 € sichern</footnote-header>            <footnote-description>                  <strong>Rufnummer nach Vertragsende mitbringen:</strong>&nbsp;Gutschrift i.H.v. 10 € erfolgt bei Abschluss eines Postpaid-Neuvertrages bei gleichzeitiger erfolgreicher Rufnummernmitnahme. Die Rufnummernmitnahme nach Vertragsende kann unter folgenden Voraussetzungen erfolgreich durchgeführt werden: die Rufnummernmitnahme ist ab 123 Tage vor und bis zu 90 Tage nach Beendigung des alten Vertrages möglich. Es können Kosten beim bisherigen Mobilfunkanbieter entstehen. Die Kundendaten der Verträge des bisherigen Anbieters und congstar müssen übereinstimmen. Die bisherige Rufnummer wird anschließend im neuen congstar Vertrag übernommen.<br><br><br><br><strong>Rufnummer sofort (aus laufendem Vertrag) mitbringen:</strong>&nbsp;Gutschrift i.H.v. 10 € erfolgt bei Abschluss eines Postpaid-Neuvertrages bei gleichzeitiger erfolgreicher Rufnummernmitnahme.&nbsp;Die vorzeitige Rufnummernmitnahme kann unter folgenden Voraussetzungen erfolgreich durchgeführt werden: die Rufnummernmitnahme ist ab 123 Tage vor und bis zu 90 Tage nach Beendigung des alten Vertrages möglich. Es können Kosten beim bisherigen Mobilfunkanbieter entstehen. Die Kundendaten der Verträge des bisherigen Anbieters und congstar müssen übereinstimmen. Die Rufnummernübernahme erfolgt sofort. Das Vertragsverhältnis bei dem bisherigen Anbieter läuft weiter. Auf Kundenwunsch stellt der bisherige Anbieter entsprechend der hierfür geltenden Konditionen eine Ersatzrufnummer zur Verfügung.            </footnote-description>        </footnote>sichern! Weitere Informationen zur Rufnummernmitnahme findest du <a href="https://www.nicotuadev.de/hilfe-service/auftrag-lieferung/rufnummernmitnahme/" target="_blank">hier</a></p>`,
  },
};

export const Headline: Story = {
  args: {
    html: `<h1>h1 Überschrift</h1>
      <h2>h2 Überschrift</h2>
      <h3>h3 Überschrift</h3>
      <h4>h4 Überschrift</h4>
      <h5>h5 Überschrift</h5>
      <h6>h6 Überschrift</h6>
    `,
  },
};

export const Divider: Story = {
  args: {
    html: `<hr>`,
  },
};

export const List: Story = {
  args: {
    html: `<ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4 <a href='https://congstar.de'>Link</a></li>
      </ul>
    `,
  },
};

export const ChecklistWithRealTestData: Story = {
  args: {
    html: `<ul class="checklist">
  <li>
    Rufnummer mitbringen und 10&nbsp;€<footnote
      ng-cloak
      data-footnote-id="42787"
    >
      <footnote-index>740</footnote-index>
      <footnote-header>Rufnummer mitbringen und 10 € sichern</footnote-header>
      <footnote-description>
        <strong>Rufnummer nach Vertragsende mitbringen:</strong>&nbsp;Gutschrift
        i.H.v. 10 € erfolgt bei Abschluss eines Postpaid-Neuvertrages bei
        gleichzeitiger erfolgreicher Rufnummernmitnahme. Die Rufnummernmitnahme
        nach Vertragsende kann unter folgenden Voraussetzungen erfolgreich
        durchgeführt werden: die Rufnummernmitnahme ist ab 123 Tage vor und bis
        zu 90 Tage nach Beendigung des alten Vertrages möglich. Es können Kosten
        beim bisherigen Mobilfunkanbieter entstehen. Die Kundendaten der
        Verträge des bisherigen Anbieters und congstar müssen übereinstimmen.
        Die bisherige Rufnummer wird anschließend im neuen congstar Vertrag
        übernommen.<br /><br /><br /><br /><strong
          >Rufnummer sofort (aus laufendem Vertrag) mitbringen:</strong
        >&nbsp;Gutschrift i.H.v. 10 € erfolgt bei Abschluss eines
        Postpaid-Neuvertrages bei gleichzeitiger erfolgreicher
        Rufnummernmitnahme.&nbsp;Die vorzeitige Rufnummernmitnahme kann unter
        folgenden Voraussetzungen erfolgreich durchgeführt werden: die
        Rufnummernmitnahme ist ab 123 Tage vor und bis zu 90 Tage nach
        Beendigung des alten Vertrages möglich. Es können Kosten beim bisherigen
        Mobilfunkanbieter entstehen. Die Kundendaten der Verträge des bisherigen
        Anbieters und congstar müssen übereinstimmen. Die Rufnummernübernahme
        erfolgt sofort. Das Vertragsverhältnis bei dem bisherigen Anbieter läuft
        weiter. Auf Kundenwunsch stellt der bisherige Anbieter entsprechend der
        hierfür geltenden Konditionen eine Ersatzrufnummer zur Verfügung.
      </footnote-description> </footnote
    >sichern! Weitere Informationen zur Rufnummernmitnahme findest du
    <a
      href="https://www.nicotuadev.de/hilfe-service/auftrag-lieferung/rufnummernmitnahme/"
      target="_blank"
      >hier</a
    >.
  </li>
  <li>
    Du willst noch mehr? Wähle die
    <a
      href="https://www.nicotuadev.de/handytarife/allnet-flat-tarife/allnet-flat-s-extra/"
      >nächstgrößere Allnet Flat</a
    >
    mit doppeltem Datenvolumen für nur 5 € mehr.
  </li>
</ul>
`,
  },
};

export const Checklist: Story = {
  args: {
    html: `<ul class="checklist">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4 <a href='https://congstar.de'>Link</a></li>
      </ul>
    `,
  },
};

export const Footnote: Story = {
  args: {
    html: `<footnote ng-cloak data-footnote-id="41764">
      <footnote-index>715</footnote-index>
      <footnote-header>Allnet Flat L</footnote-header>
      <footnote-description>Foo</footnote-description>
    </footnote>
    `,
  },
};

export const FootnoteWithoutHeader: Story = {
  args: {
    html: `<footnote ng-cloak data-footnote-id="41764">
      <footnote-index>715</footnote-index>
      <footnote-description>Foo</footnote-description>
    </footnote>
    `,
  },
};

export const FootnoteWithoutDescription: Story = {
  args: {
    html: `<footnote ng-cloak data-footnote-id="41764">
      <footnote-index>715</footnote-index>
      <footnote-header>Allnet Flat L</footnote-header>
    </footnote>
    `,
  },
};

export const CuiFootnote: Story = {
  args: {
    html: `<cui-footnote ids="[41756]" background="dark">    
    <cui-footnote-index>1</cui-footnote-index>   
    <cui-footnote-header aria-hidden="true">Überschrift</cui-footnote-header>    
    <cui-footnote-description aria-hidden="true">        
       <h2>Headline 2</h2>
       <p>Cui Footnote Paragraph</p>
    </cui-footnote-description>
    </cui-footnote>
    `,
  },
};

export const Link: Story = {
  args: {
    html: `<a href="https://www.congstar.de">Congstar</a>`,
    linkTransformerOptions: {
      additionalHrefParams: {
        action: "open_in_app_browser",
      },
    },
  },
};

export const LinkWithWrapper: Story = {
  args: {
    html: `<a href="https://www.congstar.de" style="display:flex">Congstar</a>`,
  },
  render: (args) => (
    <Text size="large" variant="light">
      <HtmlParser {...args} />
    </Text>
  ),
};

export const LinkWithStyle: Story = {
  args: {
    html: `<a href="https://www.congstar.de" style="display:flex">Congstar</a>`,
  },
};

export const LinkWithoutLabel: Story = {
  args: {
    html: `<a href="https://www.congstar.de" style="display:flex"></a>`,
  },
};

export const LinkAsButtonPrimary: Story = {
  args: {
    html: `<a href="https://www.congstar.de" class="btn-primary">Congstar</a>`,
  },
};

export const LinkAsButtonSecondary: Story = {
  args: {
    html: `<a href="https://www.congstar.de" class="btn-secondary">Congstar</a>`,
  },
};

export const Spacer: Story = {
  args: {
    html: `
      <p>Paragraph 1</p>
      <div class="fair-spacer fair-spacer--space08 "></div>
      <p>Paragraph 2</p>
      <div class="fair-spacer fair-spacer--space32 "></div>
      <p>Paragraph 3</p>`,
  },
};

export const AllTransformer: Story = {
  args: {
    html: `<h1>h1 Überschrift</h1>
    <h2>h2 Überschrift</h2>
    <h3>h3 Überschrift</h3>
    <h4>h4 Überschrift</h4>
    <h5>h5 Überschrift</h5>
    <h6>h6 Überschrift</h6><p>Ein <strong style="color:red">Paragraph</strong>
    <p>und ein weiterer paragraph mit einem <a href='#'>Link</a>.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    <ul class="checklist">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
    <footnote ng-cloak data-footnote-id="41764">
      <footnote-index>715</footnote-index>
      <footnote-description>Foo</footnote-description>
    </footnote>
    <div class="fair-spacer fair-spacer--space24"></div>
    <p>^ Spacer</p>
      `,
  },
};

export const NoWrapperHtmlTag: Story = {
  args: {
    html: `Aktion bei Buchung bis zum 21.07.2024:\\nPreis: 3€/ Monat statt 5 €/Monat bei Zubuchung zur congstar Allnet Flat S, S Extra, M, L und congstar X (mit Vermarktungsstart ab 27.05.2020) sowie zur congstar Fair Flat, congstar Allnet Flat XL, congstar Youngster M und Youngster L. Die Nutzung der 5G Option ist beim congstar X nur mit der Smartphone-SIM-Karte möglich. Voraussetzung für das Surfen im 5G-Netz ist die Verfügbarkeit von 5G am Standort und ein 5G-fähiges Endgerät. Hier kannst du prüfen, ob 5G an deinem Standort verfügbar ist: <a href=\\"https://www.congstar.de/netzabdeckung/\\" target=\\"_blank\\" rel=\\"noreferrer\\">www.congstar.de/netzabdeckung/</a>. Sofern 5G am jeweiligen Standort nicht verfügbar ist, surfst Du mit EDGE / LTE mit der Geschwindigkeit deines zugrundeliegenden Tarifes. Mit der Option werden Übertragungsgeschwindigkeiten von geschätzten max. 50 Mbit/s im Download und max. 25 Mbit/s im Upload im 5G-Netz erreicht. Nach Verbrauch des Highspeed-Datenvolumens des gebuchten Tarifs wird die Bandbreite im jeweiligen Monat auf max. 32 Kbit/s im Download und im Upload beschränkt.`,
  },
};
