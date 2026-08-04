import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectionBoxCheckbox } from "./SelectionBoxCheckbox";
import { AllowedBackgroundColors } from "../../../../theme/theme";
import {
  BillingPeriod,
  ButtonMoreDetails,
  ButtonPrimary,
  ButtonSecondary,
  List,
} from "../../../..";
import { Text } from "../../../Typography/Text";
import option5g from "../../../../../.storybook/assets/images/Badge__5G.svg";
import optionShare from "../../../../../.storybook/assets/images/share-logo-option-4gb.svg";
import { FileOutline } from "@fair/icons";
import { useState } from "react";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black", "white"],
  congstarApp: ["black", "white"],
  ja: ["jaGeneralWhite"],
  penny: ["pennyNeutralWhite"],
};

const meta = {
  component: SelectionBoxCheckbox.Group,
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
} satisfies Meta<typeof SelectionBoxCheckbox.Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "tarif",
    label: "Wähle deine Optionen",
  },
  render: ({ ...args }) => {
    return (
      <SelectionBoxCheckbox.Group {...args}>
        <SelectionBoxCheckbox.Item
          value="option-1"
          label="10 GB"
          priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
        />
        <SelectionBoxCheckbox.Item
          value="option-2"
          label="15 GB mit längerem Text"
          priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
        />
      </SelectionBoxCheckbox.Group>
    );
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    messages: [
      {
        message: "Bitte wählen Sie eine Option aus.",
        type: "error",
      },
    ],
  },
  render: ({ ...args }) => {
    return (
      <SelectionBoxCheckbox.Group {...args}>
        <SelectionBoxCheckbox.Item
          value="option-1"
          label="10 GB"
          priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
        />
        <SelectionBoxCheckbox.Item
          value="option-2"
          label="15 GB mit längerem Text"
          priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
        />
      </SelectionBoxCheckbox.Group>
    );
  },
};

export const Discounts: Story = {
  args: {
    ...Default.args,
  },
  render: ({ ...args }) => (
    <SelectionBoxCheckbox.Group {...args}>
      <SelectionBoxCheckbox.Item
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
      <SelectionBoxCheckbox.Item
        value="option-2"
        label="Allnet Flat M"
        subText="Ohne Laufzeit wählbar"
        priceDetails={{ price: 20, billingPeriod: BillingPeriod.MONTHLY }}
        labelText="Rabatt"
        discountText="die ersten 3 Monate kostenlos"
      />
    </SelectionBoxCheckbox.Group>
  ),
};

export const WithLinks: Story = {
  args: {
    name: "withLinksTarif",
    label: "Bitte eine Option wählen",
  },
  render: ({ ...args }) => (
    <SelectionBoxCheckbox.Group {...args}>
      <SelectionBoxCheckbox.Item
        value="option-1"
        label="AllnetFlat S Extra mit GB+"
      >
        <ButtonMoreDetails
          role="link"
          linkText="Link 1"
          onClick={() => {
            alert("mehr details");
          }}
        />
      </SelectionBoxCheckbox.Item>
      <SelectionBoxCheckbox.Item
        value="option-2"
        label="AllnetFlat M Extra mit GB+"
      >
        <>
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("mehr details 1");
            }}
            linkText="Link 1"
          />
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("mehr details 2");
            }}
            linkText="Link 2"
          />
          <ButtonMoreDetails
            role="link"
            onClick={() => {
              alert("mehr details 3");
            }}
            linkText="Link 3"
          />
        </>
      </SelectionBoxCheckbox.Item>
    </SelectionBoxCheckbox.Group>
  ),
};

export const HeaderImage: Story = {
  args: { ...Default.args },
  render: ({ ...args }) => (
    <SelectionBoxCheckbox.Group {...args}>
      <SelectionBoxCheckbox.Item
        value="option-1"
        label="5G Speed Option"
        subText="Jetzt noch schneller mit 100 Mbit/s"
        discountText={<>dauerhaft 3,00 €</>}
        labelText="Aktion"
        headerImage={<img src={option5g} alt="" />}
      />
      <SelectionBoxCheckbox.Item
        value="option-2"
        label="share Tut Gutes Option 4 GB"
        subText="Erhöhe dein Datenvolumen und unterstütze Kinder mit digitaler Bildung"
        labelText="Aktion"
        headerImage={<img src={optionShare} alt="" />}
      />
    </SelectionBoxCheckbox.Group>
  ),
};

export const ExpandedContent: Story = {
  args: { ...Default.args, noGrid: true },
  render: ({ ...args }) => (
    <SelectionBoxCheckbox.Group {...args}>
      <SelectionBoxCheckbox.Item
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

      <SelectionBoxCheckbox.Item
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
    </SelectionBoxCheckbox.Group>
  ),
};

export const TextVariation: Story = {
  args: {
    name: "tarif",
    label: "Was möchtest du kündigen?",
    noGrid: true,
  },
  render: ({ ...args }) => (
    <SelectionBoxCheckbox.Group {...args}>
      <SelectionBoxCheckbox.Item
        value="option-1"
        label={
          <>
            <Text size="large" variant="bold" as="span">
              Allnet Flat S
              <Text size="large" variant="light" as="span">
                {" "}
                Extra mit GB+
              </Text>
            </Text>
          </>
        }
      />
      <SelectionBoxCheckbox.Item
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
      <SelectionBoxCheckbox.Item
        value="option-3"
        label={
          <Text variant="light" size="large">
            Ich akzeptiere{" "}
            <a target="_blank" href="/agb">
              Allgemeinen Geschäftsbedingungen und die Leistungsbeschreibungen /
              Preislisten.*
            </a>
          </Text>
        }
      />
      <SelectionBoxCheckbox.Item value="option-4" label="8 GB" />
      <SelectionBoxCheckbox.Item
        value="option-5"
        label="8 GB"
        priceDetails={{ price: 9.99 }}
      />
      <SelectionBoxCheckbox.Item
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
          linkText="Zu den Tarifdetails"
          onClick={() => {
            alert("mehr details 1");
          }}
        />{" "}
      </SelectionBoxCheckbox.Item>
    </SelectionBoxCheckbox.Group>
  ),
};

/**
 * This story demonstrates form validation. On submit without a selection, an error message is shown.
 */
export const ErrorOnSubmit: Story = {
  args: {
    name: "error-on-submit",
    label: "Bitte eine Option wählen",
  },
  render: function ErrorOnSubmitSelectionBoxCheckbox({ ...args }) {
    const [error, setError] = useState<boolean>(false);

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setError(true);
        }}
      >
        <SelectionBoxCheckbox.Group
          {...args}
          messages={
            error
              ? [{ type: "error", message: "Bitte wähle eine Option aus." }]
              : undefined
          }
        >
          <SelectionBoxCheckbox.Item
            value="option-1"
            label="10 GB"
            priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
          />
          <SelectionBoxCheckbox.Item
            value="option-2"
            label="15 GB mit längerem Text"
            priceDetails={{ price: 6, billingPeriod: BillingPeriod.FOUR_WEEKS }}
          />
        </SelectionBoxCheckbox.Group>
        <ButtonPrimary type="submit" style={{ marginTop: 8 }}>
          Absenden
        </ButtonPrimary>
      </form>
    );
  },
};

/**
 * This story demonstrates a controlled CheckboxGroup where the value is managed via React state.
 * Use `value` and `onChange` props to control the selected option programmatically.
 */
export const Controlled: Story = {
  args: {
    name: "controlled-tarif",
    label: "Controlled CheckboxGroup",
  },
  render: function ControlledCheckboxGroup({ ...args }) {
    const [selectedValue, setSelectedValue] = useState<string[]>(["option-2"]);

    return (
      <>
        <form>
          <SelectionBoxCheckbox.Group
            value={selectedValue}
            onChange={setSelectedValue}
            {...args}
          >
            <SelectionBoxCheckbox.Item
              value="option-1"
              label="10 GB"
              priceDetails={{ price: 17, billingPeriod: BillingPeriod.MONTHLY }}
            />
            <SelectionBoxCheckbox.Item
              value="option-2"
              label="15 GB"
              priceDetails={{ price: 25, billingPeriod: BillingPeriod.MONTHLY }}
            />
          </SelectionBoxCheckbox.Group>
        </form>
      </>
    );
  },
};
