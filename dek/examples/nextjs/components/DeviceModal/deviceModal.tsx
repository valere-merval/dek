import { Headline, List, Modal, Tabs, Typography } from "@fair/react";

const highlightsContent = (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    }}
  >
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <img
        style={{ maxWidth: "100%", height: "fit-content", aspectRatio: "4/3" }}
        src="https://congstar-tuadev.imgix.net/fileadmin/files_congstar_responsive/handys/handy-abbildungen/handy-tabs/google-pixel-7a-highlight-1.png?auto=compress,format&q=80&w=300"
        alt=""
      />
      <div style={{ flex: "40%" }}>
        <Headline variant="bold" size="medium" as="h3">
          Intelligenter Chip - smartes Phone
        </Headline>
        <Typography variant="BodyLight16">
          Der von Google entwickelte Tensor G2-Prozessor macht Google Pixel 7a
          schneller, effizienter und sicherer. Es ist der gleiche Chip wie in
          Pixel 7 und Pixel 7 Pro, der die KI von Google versorgt und so eine
          bessere Tonwiedergabe bei Anrufen, eine lange Akkulaufzeit sowie eine
          fantastische Foto- und Videoqualität ermöglicht.
        </Typography>
      </div>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
      }}
    >
      <img
        style={{ maxWidth: "100%", aspectRatio: "4/3", height: "fit-content" }}
        src="https://congstar-tuadev.imgix.net/fileadmin/files_congstar_responsive/handys/handy-abbildungen/handy-tabs/google-pixel-7a-highlight-2.png?auto=compress,format&q=80&w=300"
        alt=""
      />
      <div style={{ flex: "40%" }}>
        <Headline variant="bold" size="medium" as="h3">
          Ein Akku für den ganzen Tag{" "}
        </Headline>
        <Typography variant="BodyLight16">
          Der{" "}
          <Typography variant="BodyBold16" as="span">
            intelligente Akku
          </Typography>{" "}
          von Google Pixel 7a hält{" "}
          <Typography variant="BodyBold16" as="span">
            mehr als 24 Stunden
          </Typography>
          . Bei Verwendung des{" "}
          <Typography variant="BodyBold16" as="span">
            Extrem-Energiesparmodus
          </Typography>{" "}
          direkt nach dem Aufladen hält der Akku sogar bis zu 72 Stunden.
          Außerdem lässt sich Pixel 7a in kurzer Zeit und auch kabellos
          aufladen.
        </Typography>
      </div>
    </div>
  </div>
);

const technicalDataContent = (
  <>
    <Typography variant="BodyLight16">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Displaygröße</Typography>
            </dt>
            <dd>6,1&quot; (15,2cm)</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Displayauflösung</Typography>
            </dt>
            <dd>(1080x2400) Pixel</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Displaytyp</Typography>
            </dt>
            <dd>FHD+ OLED Display</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">
                Auflösung Hauptkamera
              </Typography>
            </dt>
            <dd>64 MP + 13 MP</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">
                Auflösung Frontkamera
              </Typography>
            </dt>
            <dd>13 MP</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Kamera-Funktionen</Typography>
            </dt>
            <dd>
              Scharfzeichnen <br /> Magischer Radierer <br /> Nachtsichtmodus{" "}
              <br /> Langzeitbelichtung <br />
              Real Tone™ <br /> Scharfzeichner
              <br /> Panorama <br /> Manueller Weißabgleich <br /> Gesperrter
              Ordner <br /> Top-Foto <br /> Porträtmodus <br />{" "}
              Porträtbeleuchtung <br /> Super-Resolution-Zoom <br />
              Fixierter Fokus <br /> Oft fotografierte Gesichter <br /> Duale
              Belichtung <br /> Live HDR+
              <br />
            </dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Akkuleistung</Typography>
            </dt>
            <dd>4.300 mAh</dd>
          </dl>
        </div>
        <div style={{ flex: "40%" }}>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Prozessor</Typography>
            </dt>
            <dd>Google Tensor G2 Titan M2™- Sicherheitschip</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Arbeitsspeicher</Typography>
            </dt>
            <dd>8 GB</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Gerätespeicher</Typography>
            </dt>
            <dd>128 GB</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Abmessungen</Typography>
            </dt>
            <dd>152 x 72,9 x 9,0 mm</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Gewicht</Typography>
            </dt>
            <dd>193,5 g</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Betriebssystem</Typography>
            </dt>
            <dd>Android 13</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Konnektivität</Typography>
            </dt>
            <dd>
              Wi-Fi 6E (802.11ax) mit 2,4 GHz + 5 GHz + 6 GHz, HE80, MIMO
              Bluetooth® v5.3 + BLE und Bluetooth-Antennendiversität NFC Google
              Cast GPS, GLONASS, Galileo, QZSS, BeiDou
            </dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">Anschluss</Typography>
            </dt>
            <dd>USB-C</dd>
          </dl>
          <dl>
            <dt>
              <Typography variant="BodyBold16">SIM-Kartentyp</Typography>
            </dt>
            <dd>Nano-Sim, eSim</dd>
          </dl>
        </div>
      </div>
    </Typography>
  </>
);
const contentOfDeliveryContent = (
  <>
    <Headline variant="bold" size="medium" as="h3">
      Im Lieferumfang enthalten sind <br />
      <br />
    </Headline>
    <Typography variant="BodyLight16">
      <List.Root size="medium">
        <List.Item>
          <List.Body>Google Pixel 7a </List.Body>
        </List.Item>
        <List.Item>
          <List.Body>
            1-m-Verbindungskabel von USB-C® auf USB-C (USB 2.0)
          </List.Body>
        </List.Item>
        <List.Item>
          <List.Body>Quick Switch Adapter </List.Body>
        </List.Item>
        <List.Item>
          <List.Body>Support-Karte</List.Body>
        </List.Item>
        <List.Item>
          <List.Body>SIM-Tool</List.Body>
        </List.Item>
      </List.Root>
    </Typography>
  </>
);
const shippingInfoContent = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: "24px",
    }}
  >
    <div>
      <Headline variant="bold" size="medium" as="h3">
        Smartphones, Tablets, Wearables & Gadgets
      </Headline>
      <Typography variant="BodyLight16">
        Direkt nach deiner Bestellung ziehen wir bei Ratenkauf die einmalige
        Anzahlung oder bei Einmalkauf den Gesamtpreis inkl. Highlights per
        Lastschrift von deinem Konto ein und machen das Produkt versandfertig.
        Ist die Lastschrift erfolgreich, geht dein Endgerät in den Versand.
        Bitte beachte, dass der Lastschrift-Prozess einige Zeit in Anspruch
        nehmen kann. Du erhältst dein Produkt spätestens 10 bis 14 Tage nach
        deiner Bestellung.
      </Typography>
      <Typography variant="BodyLight16">
        <Typography variant="BodyBold16" as="span">
          Hinweis:
        </Typography>
        Wenn du deine Rufnummer von einem anderen Anbieter mitbringst
        (Rufnummernmitnahme), muss das genaue Übernahmedatum noch festgelegt
        werden. Dein Endgerät erhältst du rechtzeitig 1 bis 3 Tage vor dem
        Übernahmedatum, frühestens aber 10 bis 14 Tage nach deiner Bestellung.
      </Typography>
    </div>
    <div>
      <Headline variant="bold" size="medium" as="h3">
        Festnetz & Internet
      </Headline>
      <Typography variant="BodyLight16">
        Du erhältst die Hardware 2 bis 4 Tage vor dem Schaltungstermin. Nach
        Auftragseingang prüfen wir, wann wir dir den Anschluss bereitstellen
        können. Der Schaltungstermin wird dir zeitnah per E-Mail mitgeteilt.
      </Typography>
    </div>
  </div>
);

export const DeviceModal = () => {
  return (
    <Modal.Root>
      <Modal.Trigger>Device Box Modal</Modal.Trigger>
      <Modal.Content fullHeight>
        <Modal.Title>eSIM</Modal.Title>
        <Modal.Description>
          <Tabs.Root defaultValue="highlights">
            <Tabs.List
              trigger={[
                {
                  value: "highlights",
                  children: "Highlights",
                },
                {
                  value: "technical-data",
                  children: "Technische Daten",
                },
                {
                  value: "content-of-delivery",
                  children: "Lieferumfang",
                },
                {
                  value: "shipping-info",
                  children: "Versandinformationen",
                },
              ]}
            />
            <Tabs.Content value="highlights">{highlightsContent}</Tabs.Content>
            <Tabs.Content value="technical-data">
              {technicalDataContent}
            </Tabs.Content>
            <Tabs.Content value="content-of-delivery">
              {contentOfDeliveryContent}
            </Tabs.Content>
            <Tabs.Content value="shipping-info">
              {shippingInfoContent}
            </Tabs.Content>
          </Tabs.Root>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  );
};
