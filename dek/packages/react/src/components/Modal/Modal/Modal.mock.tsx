import { ButtonMoreDetails } from "../../Button/ButtonMoreDetails";
import { Divider } from "../../Divider";
import { Typography } from "../../Typography/Typography";
import { Modal } from "./Modal";

export const defaultContent = (
  <>
    <span>
      Aktion für Neukunden bei Buchung über congstar.de bis zum 18.09.2023: Die
      congstar Allnet Flat M mit GB+ kostet monatlich 22 €.
      Mindestvertragslaufzeit 24 Monate. Einmaliger Bereitstellungspreis 15 €.
      Im Rahmen der Aktion wird die Bandbreite ab einem Datenvolumen von 22 GB
      statt 10 GB im jeweiligen Monat auf max. 32 Kbit/s im Download und Upload
      beschränkt. GB+: Das monatliche Datenvolumen erhöht sich alle 12 Monate
      automatisch um jeweils 5 GB. Bei Tarifwechsel entfällt die jährliche
      Erhöhung des Datenvolumens und das angesammelte, zusätzliche Datenvolumen
      wird nicht auf den neuen Tarif übertragen. Es gelten dann die Konditionen
      des neuen Tarifs
    </span>

    <Divider />
    <Typography variant="HeadlineBold24" color="black">
      Video Option – Disney+
    </Typography>
    <Typography variant="HeadlineBold20" color="black">
      Entertainment für jede Stimmung
    </Typography>
    <p>
      Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar, Marvel,
      Star Wars, National Geographic und Star: gefühlvoll, fesselnd, aufregend
      und mitreißend. Disney+ fasziniert jede Woche mit neuen Inhalten. Einfach
      für jede Stimmung genau das Richtige! UND: Jederzeit auf all deinen
      Geräten verfügbar.
    </p>

    <p>
      Die neuesten Blockbuster, exklusive Original-Produktionen und jede Menge
      Serien
    </p>

    <p>Nutze bis zu 4 mobile Geräte & TV gleichzeitig</p>

    <p>Monatlich kündbar</p>

    <p>Einfach zu deinem Tarif dazubuchen</p>

    <Modal.Root>
      <Modal.Trigger>
        <ButtonMoreDetails />
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>congstar Video Option - Disney+</Modal.Title>
        <Modal.Description
          style={{
            display: "flex",
            gap: "12px",
            flexDirection: "column",
          }}
        >
          <p>
            Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar,
            Marvel, Star Wars, National Geographic und Star: gefühlvoll,
            fesselnd, aufregend und mitreißend. Disney+ fasziniert jede Woche
            mit neuen Inhalten. Einfach für jede Stimmung genau das Richtige!
            UND: Jederzeit auf all deinen Geräten verfügbar.
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>

    <Divider />
    <Typography variant="HeadlineBold20" color="black">
      Rechtliche Hinweise
    </Typography>

    <p>
      Die congstar Video Option – Disney+ ist zu vielen congstar Tarifen
      zubuchbar und kostet 8,99€/Monat. Die Option ermöglicht die Nutzung von
      „Disney+“. Voraussetzung für die Buchung und Nutzung von Disney+ ist ein
      Wohnsitz in Deutschland und die Zustimmung zu den Nutzungsbedingungen der
      The Walt Disney Company (Benelux) BV. Für Disney+ gelten eine gesonderte
      Datenschutzerklärung, Cookie-Richtlinie und UK- & EU-Datenschutzhinweise.
      Die Laufzeit beginnt mit der Bereitstellung bzw. bei Erhalt der E-Mail zur
      Registrierung bei Disney+. Bei Kündigung des zugrundeliegenden congstar
      Tarifs entfällt die congstar Video Option – Disney+. Bei mobiler
      Online-Nutzung der Option wird das hierfür genutzte Datenvolumen des
      congstar-Mobilfunkvertrages belastet. Die Option hat eine
      Mindestvertragslaufzeit von 1 Monat und ist jederzeit zum Ende des
      jeweiligen Abrechnungsmonats kündbar. Die Kündigung erfolgt gegenüber
      congstar.
    </p>
  </>
);
export const modalWithinModalContent = (
  <>
    <p>
      Die neuesten Blockbuster und jede Menge Serien von Disney, Pixar, Marvel,
      Star Wars, National Geographic und Star: gefühlvoll, fesselnd, aufregend
      und mitreißend. Disney+ fasziniert jede Woche mit neuen Inhalten. Einfach
      für jede Stimmung genau das Richtige! UND: Jederzeit auf all deinen
      Geräten verfügbar.
    </p>
  </>
);
