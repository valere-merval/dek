import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SelectionBoxRadio } from "./SelectionBoxRadio";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import { ButtonMoreDetails } from "../../../Button/ButtonMoreDetails";
import routerImage from "../../../../../.storybook/assets/images/router.png";
import option5g from "../../../../../.storybook/assets/images/Badge__5G.svg";
import optionShare from "../../../../../.storybook/assets/images/share-logo-option-4gb.svg";
import { Text } from "../../../Typography/Text/Text";
import { FileOutline } from "@fair/icons";
import { BillingPeriod } from "../../../../utils/pricing";
import { List } from "../../../List";
import { ButtonPrimary } from "../../../Button/ButtonPrimary";
import { ButtonSecondary } from "../../../Button/ButtonSecondary";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black", "white"],
  ja: ["jaGeneralWhite"],
  penny: ["pennyNeutralWhite"],
};

const meta = {
  component: SelectionBoxRadio.Group,
  parameters: {
    allowedBackgroundColors,
  },
  tags: [
    "!notReadyForCongstarApp",
    "!notReadyForJa",
    "!notReadyForPenny",
    "readyForCongstarApp",
    "readyForJa",
    "readyForPenny",
  ],
} satisfies Meta<typeof SelectionBoxRadio.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    label: "Bitte eine Option wählen",
  },
  render: ({ ...args }) => {
    return (
      <SelectionBoxRadio.Group {...args}>
        <SelectionBoxRadio.Item
          value="option-1"
          label="10 GB"
          priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
        />
        <SelectionBoxRadio.Item
          value="option-2"
          label="15 GB mit längerem Text"
          priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
        />
      </SelectionBoxRadio.Group>
    );
  },
};

export const Error: Story = {
  args: {
    name: "errorTarif",
    label: "Bitte eine Option wählen",
    messages: [{ type: "error", message: "Es ist ein Fehler aufgetreten." }],
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="10 GB"
        priceDetails={{ price: 6, billingPeriod: BillingPeriod.MONTHLY }}
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label="15 GB mit längerem Text"
        priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
      />
    </SelectionBoxRadio.Group>
  ),
};

export const WithLinks: Story = {
  args: {
    defaultValue: "option-1",
    name: "withLinksTarif",
    label: "Bitte eine Option wählen",
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="AllnetFlat S Extra mit GB+"
      >
        <ButtonMoreDetails
          role="link"
          onClick={() => {
            alert("Zu den Tarifdetails");
          }}
        >
          Zu den Tarifdetails
        </ButtonMoreDetails>
      </SelectionBoxRadio.Item>
      <SelectionBoxRadio.Item
        value="option-2"
        label="AllnetFlat M Extra mit GB+"
      >
        <>
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("Zu den Tarifdetails");
            }}
          >
            Zu den Tarifdetails
          </ButtonMoreDetails>
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("Zu den Gerätedetails");
            }}
          >
            Zu den Gerätedetails
          </ButtonMoreDetails>
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("Zu den Konditionen");
            }}
          >
            Zu den Konditionen
          </ButtonMoreDetails>
        </>
      </SelectionBoxRadio.Item>
    </SelectionBoxRadio.Group>
  ),
};

export const Discounts: Story = {
  args: {
    ...Default.args,
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="Allnet Flat S"
        subText="Ohne Laufzeit wählbar"
        priceDetails={{ price: 15, billingPeriod: BillingPeriod.MONTHLY }}
        labelText="Rabatt"
        discountText={
          <>
            <p>die ersten 3 Monate kostenlos</p>
            <p>Rabatttext 2</p>
          </>
        }
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label="Allnet Flat M"
        subText="Ohne Laufzeit wählbar"
        priceDetails={{ price: 20, billingPeriod: BillingPeriod.MONTHLY }}
        labelText="Rabatt"
        discountText="die ersten 3 Monate kostenlos"
      />
    </SelectionBoxRadio.Group>
  ),
};

export const DiscountsError: Story = {
  args: {
    ...Default.args,
    messages: [{ type: "error", message: "Es ist ein Fehler aufgetreten." }],
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="Allnet Flat S"
        subText="Ohne Laufzeit wählbar"
        priceDetails={{ price: 15, billingPeriod: BillingPeriod.MONTHLY }}
        labelText="Rabatt"
        discountText={
          <>
            <p>die ersten 3 Monate kostenlos</p>
            <p>Rabatttext 2</p>
          </>
        }
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label="Allnet Flat M"
        subText="Ohne Laufzeit wählbar"
        priceDetails={{ price: 20, billingPeriod: BillingPeriod.MONTHLY }}
        labelText="Rabatt"
        discountText="die ersten 3 Monate kostenlos"
      />
    </SelectionBoxRadio.Group>
  ),
};

export const HeaderImage: Story = {
  args: { ...Default.args },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="5G Speed Option"
        subText="Jetzt noch schneller mit 100 Mbit/s"
        discountText={<>dauerhaft 3,00 €</>}
        labelText="Aktion"
        headerImage={<img src={option5g} alt="" />}
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label="share Tut Gutes Option 4 GB"
        subText="Erhöhe dein Datenvolumen und unterstütze Kinder mit digitaler Bildung"
        labelText="Aktion"
        headerImage={<img src={optionShare} alt="" />}
      />
    </SelectionBoxRadio.Group>
  ),
};

export const LargeImage: Story = {
  args: { ...Default.args, noGrid: true },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="Fritz!Box 7530 AX"
        headerImage={<img src={routerImage} alt="" />}
        headerImageSize="large"
      >
        <List.Root size="medium">
          <List.Item data-testid="list-main-item-1">
            <List.Description data-testid="list-description-1">
              Absolut schnellste WLAN Verbindungen
            </List.Description>
          </List.Item>
          <List.Item data-testid="list-main-item-2">
            <List.Description data-testid="list-description-2">
              WIFI 6
            </List.Description>
          </List.Item>
          <List.Item data-testid="list-main-item-3">
            <List.Description data-testid="list-description-3">
              2,4 GHz mit max. 1148 Mbit/s{" "}
            </List.Description>
          </List.Item>
          <List.Item data-testid="list-main-item-4">
            <List.Description data-testid="list-description-4">
              5 GHz mit max. 2402 Mbit/s{" "}
            </List.Description>
          </List.Item>
        </List.Root>
      </SelectionBoxRadio.Item>
      <SelectionBoxRadio.Item
        value="option-2"
        label="Ich benötige keinen Router"
        subText="Du hast bereits einen Router, der mit dem Tarif kompatibel ist"
      />
    </SelectionBoxRadio.Group>
  ),
};

export const ExpandedContent: Story = {
  args: { ...Default.args, noGrid: true },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="250 Mbit/s"
        subText="Mehrere Geräte parallel, z.B. Video-Calls, UHD-Streaming, Gaming"
        contentIfSelected={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <List.Root size="medium">
              <List.Item>
                <Text variant="light" size="large">
                  Max. 100 Mbit/s Download und Upload 40 Mbit/s
                </Text>
              </List.Item>
              <List.Item>
                <Text variant="light" size="large">
                  DSL-Tarif
                </Text>
              </List.Item>
            </List.Root>
            <ButtonSecondary startIcon={<FileOutline />} asChild>
              <a
                onClick={(event) => event.stopPropagation()}
                href={"https://congstar.com"}
                rel="nofollow noreferrer"
                target="_blank"
              >
                Produktinformationsblatt
              </a>
            </ButtonSecondary>
          </div>
        }
      />

      <SelectionBoxRadio.Item
        value="option-2"
        label="600 Mbit/s"
        subText="Für Vielnutzer & Familien: Arbeiten, streamen, gamen zugleich & ruckelfrei"
        contentIfSelected={
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <List.Root size="medium">
              <List.Item>
                <Text variant="light" size="large">
                  Max. 600 Mbit/s Download und Upload 240 Mbit/s
                </Text>
              </List.Item>
              <List.Item>
                <Text variant="light" size="large">
                  DSL-Tarif
                </Text>
              </List.Item>
            </List.Root>
            <ButtonSecondary startIcon={<FileOutline />} asChild>
              <a
                onClick={(event) => event.stopPropagation()}
                href={"https://congstar.com"}
                rel="nofollow noreferrer"
                target="_blank"
              >
                Produktinformationsblatt
              </a>
            </ButtonSecondary>
          </div>
        }
      />
    </SelectionBoxRadio.Group>
  ),
};

export const TextVariation: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    label: "Was möchtest du kündigen?",
    noGrid: true,
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label={
          <Text size="large" variant="bold" as="span">
            Allnet Flat S
            <Text size="large" variant="light" as="span">
              {" "}
              Extra mit GB+
            </Text>
          </Text>
        }
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label={
          <Text variant="light" size="large">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem fugiat repudiandae laboriosam vero, fuga placeat, aut
            magni ad quaerat delectus, aperiam voluptates saepe nam modi a
            distinctio quasi pariatur ex!{" "}
          </Text>
        }
      />
      <SelectionBoxRadio.Item
        value="option-3"
        label={
          <Text variant="light" size="large">
            Ich akzeptiere{" "}
            <a href="https://www.congstar.de/agb">
              Allgemeinen Geschäftsbedingungen und die Leistungsbeschreibungen /
              Preislisten.*
            </a>
          </Text>
        }
      />
      <SelectionBoxRadio.Item value="option-4" label="8 GB" />
      <SelectionBoxRadio.Item
        value="option-5"
        label="8 GB"
        priceDetails={{ price: 9.99 }}
      />
      <SelectionBoxRadio.Item
        value="option-6"
        label="8 GB"
        priceDetails={{
          price: 9.99,
          billingPeriod: BillingPeriod.MONTHLY,
          prefix: "ab",
        }}
      >
        <ButtonMoreDetails
          role="link"
          onClick={() => {
            alert("Zu den Tarifdetails");
          }}
        />{" "}
      </SelectionBoxRadio.Item>
    </SelectionBoxRadio.Group>
  ),
};

export const Duration: Story = {
  args: {
    defaultValue: "option-1",
    name: "tarif",
    label: "Bitte eine Option wählen",
  },
  render: ({ ...args }) => (
    <SelectionBoxRadio.Group {...args}>
      <SelectionBoxRadio.Item
        value="option-1"
        label="24 Monate Laufzeit"
        labelText="Aktion!"
        duration={{
          prices: [
            {
              price: 20,
              label: "Monatliche Kosten",
              strikeThroughPrice: 22.99,
            },
            {
              price: 20,
              label: "Einmalige Kosten",
              strikeThroughPrice: 22.99,
            },
          ],
          totalPrice: {
            price: 40,
            label: "Gesamtkosten",
            strikeThroughPrice: 44.99,
          },
          moreDetails: (
            <ButtonMoreDetails
              onClick={() => {
                alert("mehr details");
              }}
            >
              Zu den Tarifdetails
            </ButtonMoreDetails>
          ),
        }}
      />
      <SelectionBoxRadio.Item
        value="option-2"
        label="12 Monate Laufzeit"
        discountText="6 Monate zum halben Preis"
        labelText="Aktion!"
        duration={{
          prices: [
            {
              price: 20,
              label: "Monatliche Kosten",
              strikeThroughPrice: 22.99,
            },
            {
              price: 20,
              label: "Einmalige Kosten",
              strikeThroughPrice: 22.99,
            },
          ],
        }}
      />
    </SelectionBoxRadio.Group>
  ),
};

export const ErrorOnSubmit: Story = {
  args: {
    name: "error-on-submit",
    label: "Bitte eine Option wählen",
  },
  render: function ErrorOnSubmitSelectionBoxRadio({ ...args }) {
    const [error, setError] = useState<boolean>(false);

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setError(true);
        }}
      >
        <SelectionBoxRadio.Group
          {...args}
          messages={
            error
              ? [{ type: "error", message: "Bitte wähle eine Option aus." }]
              : undefined
          }
        >
          <SelectionBoxRadio.Item
            value="option-1"
            label="10 GB"
            priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
          />
          <SelectionBoxRadio.Item
            value="option-2"
            label="15 GB mit längerem Text"
            priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
          />
        </SelectionBoxRadio.Group>
        <ButtonPrimary type="submit" style={{ marginTop: 8 }}>
          Absenden
        </ButtonPrimary>
      </form>
    );
  },
};

/**
 * This story demonstrates a controlled RadioGroup where the value is managed via React state.
 * Use `value` and `onChange` props to control the selected option programmatically.
 */
export const Controlled: Story = {
  args: {
    name: "controlled-tarif",
    label: (
      <Text variant="bold" size="large">
        Controlled RadioGroup
      </Text>
    ),
  },
  render: function ControlledRadioGroup({ ...args }) {
    const [selectedValue, setSelectedValue] = useState<string>("option-1");

    return (
      <form>
        <SelectionBoxRadio.Group
          {...args}
          value={selectedValue}
          onChange={setSelectedValue}
        >
          <SelectionBoxRadio.Item
            value="option-1"
            label="10 GB"
            priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
          />
          <SelectionBoxRadio.Item
            value="option-2"
            label="15 GB mit längerem Text"
            priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
          />
        </SelectionBoxRadio.Group>
        <Text variant="light" size="medium">
          Ausgewählter Wert: <strong>{selectedValue}</strong>
        </Text>
      </form>
    );
  },
};
