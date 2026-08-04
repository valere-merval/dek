import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductOverviewItem } from "./ProductOverviewItem";
import eSimImage from "../../../.storybook/assets/images/sim-card.svg";
import iPhoneImage from "../../../.storybook/assets/images/apple-iphone-16-pro-max-desert-0-1.avif";
import routerImage from "../../../.storybook/assets/images/AVM_FRITZ_Box_7530_AX_front.avif";
import { Text } from "../Typography/Text";
import { ModalFootnotes } from "../Modal/ModalFootnotes";
import * as Styled from "./ProductOverviewItem.styles";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white", "lightGrey", "darkGrey"],
};

const meta = {
  component: ProductOverviewItem.Root,
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
} satisfies Meta<typeof ProductOverviewItem.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "eSIM",
    image: <img src={eSimImage} alt="eSIM Card" />,
    children: (
      <ModalFootnotes
        footnotes={[
          {
            header: "eSIM",
            description: (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexDirection: "column",
                }}
              >
                <p style={{ margin: 0 }}>
                  Mit der eSIM benötigst du die klassische SIM-Karte (Mini-,
                  Micro- oder Nano-SIM) aus Plastik nicht mehr. Stattdessen
                  werden alle notwendigen Infos rund um deinen Tarif per
                  eSIM-Profil direkt auf deinem Gerät gespeichert.
                </p>
                <p style={{ margin: 0 }}>
                  Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
                  Denn nicht alle Smartphones sind schon eSIM-fähig.
                </p>
                <p style={{ margin: 0 }}>
                  Nach deiner Bestellung erhältst du eine E-Mail von uns, sobald
                  dein eSIM-Profil zur Aktivierung bereitsteht. Du kannst es
                  dann über die congstar App oder das meincongstar Kundencenter
                  installieren.
                </p>
              </div>
            ),
          },
        ]}
      />
    ),
  },
};

export const WithProductSpecs: Story = {
  args: {
    title: "iPhone 16",
    image: <img src={iPhoneImage} alt="front and back of the iPhone 16" />,
    children: (
      <>
        <Styled.ContentContainer>
          <div>
            <ProductOverviewItem.ProductSpecs
              productColor={{ hex: "#000000", name: "Space Gray" }}
              productMemory="256 GB"
            />
            <Text size="large" variant="light" as="span">
              Lieferbar ab 16.10.2024
            </Text>
          </div>
          <ModalFootnotes
            footnotes={[
              {
                header: "iPhone 16",
                description: (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Mit der verbesserten Ultraweitwinkel-Kamera mit Autofokus
                      kannst du unglaublich detaillierte Makrofotos und -videos
                      aufnehmen. Mach mit der 48 MP Fusion Kamera beeindruckende
                      hochauflösende Bilder oder zoome mit dem 2x Tele-Zoom in
                      optischer Qualität ein.
                    </p>
                    <p style={{ margin: 0 }}>
                      Das iPhone 16 hat ein stabiles Design aus Aluminium in
                      Raumfahrt-Qualität mit einem 6,1 Super Retina XDR Display.
                      Es ist extrem robust mit Ceramic Shield der neuesten
                      Generation auf der Vorderseite, der 2x härter ist als
                      jedes andere Smartphone Glas.
                    </p>
                    <p style={{ margin: 0 }}>
                      Mit iOS 18 kannst du die Symbole auf deinem Homescreen in
                      einem beliebigen Farbton einfärben. Deine
                      Lieblingsaufnahmen in der überarbeiteten Fotos App
                      schneller finden. Und in iMessage verspielte, animierte
                      Effekte zu Wörtern, Sätzen oder Emojis hinzufügen.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Styled.ContentContainer>
      </>
    ),
  },
};

export const WithProductSpecsTB: Story = {
  args: {
    title: "iPhone 16 Pro Max",
    image: (
      <img src={iPhoneImage} alt="front and back of the iPhone 16 Pro Max" />
    ),
    children: (
      <>
        <Styled.ContentContainer>
          <div>
            <ProductOverviewItem.ProductSpecs
              productColor={{ hex: "#a9872c", name: "Gold Dust" }}
              productMemory="1 TB"
            />
            <Text size="large" variant="light" as="span">
              Lieferbar ab 16.10.2024
            </Text>
          </div>
          <ModalFootnotes
            footnotes={[
              {
                header: "iPhone 16",
                description: (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Mit der verbesserten Ultraweitwinkel-Kamera mit Autofokus
                      kannst du unglaublich detaillierte Makrofotos und -videos
                      aufnehmen. Mach mit der 48 MP Fusion Kamera beeindruckende
                      hochauflösende Bilder oder zoome mit dem 2x Tele-Zoom in
                      optischer Qualität ein.
                    </p>
                    <p style={{ margin: 0 }}>
                      Das iPhone 16 hat ein stabiles Design aus Aluminium in
                      Raumfahrt-Qualität mit einem 6,1 Super Retina XDR Display.
                      Es ist extrem robust mit Ceramic Shield der neuesten
                      Generation auf der Vorderseite, der 2x härter ist als
                      jedes andere Smartphone Glas.
                    </p>
                    <p style={{ margin: 0 }}>
                      Mit iOS 18 kannst du die Symbole auf deinem Homescreen in
                      einem beliebigen Farbton einfärben. Deine
                      Lieblingsaufnahmen in der überarbeiteten Fotos App
                      schneller finden. Und in iMessage verspielte, animierte
                      Effekte zu Wörtern, Sätzen oder Emojis hinzufügen.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Styled.ContentContainer>
      </>
    ),
  },
};

export const MultipleDescriptionLines: Story = {
  args: {
    title: "AVM FRITZ!Box 7530 AX",
    image: <img src={routerImage} alt="front of the AVM FRITZ!Box 7530 AX" />,
    children: (
      <>
        <Styled.ContentContainer>
          <div>
            <Text size="large" variant="light">
              WIFI 6 Standard
            </Text>
            <Text size="large" variant="light">
              Lieferbar ab 24.07.2024
            </Text>
          </div>
          <ModalFootnotes
            footnotes={[
              {
                header: "AVM FRITZ!Box 7530 AX",
                description: (
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      Erlebe superschnelles Internet für deinen DSL-Anschluss
                      mit der FRITZ!Box 7530 AX. Dank des modernen WiFi 6
                      Standards surfst du mit all deinen Geräten – ob
                      Smartphone, Tablet oder Spielekonsole – gleichzeitig
                      schnell und stabil.
                    </p>
                    <p style={{ margin: 0 }}>
                      Die FRITZ!Box sorgt zusammen mit einem separaten Repeater
                      dafür, dass du in jedem Raum deines Zuhauses online sein
                      kannst. Alle FRITZ!-Geräte, wie z. B. Repeater, arbeiten
                      in einem einzigen Netz zusammen, um überall optimale
                      Bandbreite zu gewährleisten.
                    </p>
                    <p style={{ margin: 0 }}>
                      Automatische Updates garantieren, dass deine Verbindung
                      immer geschützt bleibt – ohne dass du dich selbst darum
                      kümmern musst.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Styled.ContentContainer>
      </>
    ),
  },
};

export const WithoutLink: Story = {
  args: {
    title: "iPhone 16",
    image: <img src={iPhoneImage} alt="front and back of the iPhone 16" />,
    children: (
      <>
        <Styled.ContentContainer>
          <div>
            <ProductOverviewItem.ProductSpecs
              productColor={{ hex: "#000000", name: "Space Gray" }}
              productMemory="256 GB"
            />
            <Text size="large" variant="light" as="span">
              Lieferbar ab 16.10.2024
            </Text>
          </div>
        </Styled.ContentContainer>
      </>
    ),
  },
};
