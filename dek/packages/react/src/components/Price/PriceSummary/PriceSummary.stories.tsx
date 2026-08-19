import type { Meta, StoryObj } from "@storybook/react-vite";
import { PriceSummary } from "./PriceSummary";
import { AllowedBackgroundColors } from "../../../theme/theme";
import { Text } from "../../Typography/Text";
import { ArrowLoop, InfoCircleOutline } from "@fair/icons";
import { PriceSummarySubHeadline } from "./Base";
import { ButtonMoreDetails } from "../../Button/ButtonMoreDetails";
import { ButtonSecondary } from "../../Button/ButtonSecondary";
import { useArgs, useState } from "storybook/preview-api";
import { Modal } from "../../Modal/Modal";
import { Headline } from "../../Typography/Headline";
import { ErrorIcon } from "../../AvailabilityCheck/AvailabilityCheckEdit/AvailabilityCheckEdit.styles";
import { ButtonPrimary } from "../../Button/ButtonPrimary";
import { FormFieldMessages } from "../../Input/shared/FieldMessages";

const allowedBackgroundColors: Partial<AllowedBackgroundColors> = {
  congstarWeb: ["black"],
  congstarApp: ["black"],
  ja: ["jaAgave20"],
  penny: ["pennyNeutralLightGrey"],
};

const meta = {
  component: PriceSummary,
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
} satisfies Meta<typeof PriceSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonProps: {
      text: "Bestellung absenden",
    },
    shippingCostFree: true,
    recurringCosts: {
      headline: "Monatliche Kosten",
      items: [
        {
          title: "1. bis 24. Monat",
          amount: 57,
        },
        {
          title: "ab dem 25. Monat",
          amount: 33,
        },
      ],
    },
    oneTimeCosts: {
      amount: 258.99,
      items: [],
    },
    nextStepMessageInfo: {
      icon: <InfoCircleOutline />,
      children: (
        <Text variant="light" size="large">
          Im nächsten Schritt gelangst du zu Apple Pay, um die Bestellung
          abzuschließen.
        </Text>
      ),
    },
  },
};

export const PostpaidWithBringback: Story = {
  name: "Postpaid mit Bringback",
  args: {
    ...Default.args,
    additionalSection: {
      type: "bringback",
      sectionHeader: "Schlussrate Endgerät",
      mainTitle: "37. Monat, deine Optionen",
      subTitle:
        "Du verkaufst das Gerät an Recommerce Solutions SA im folgenden Zustand:",
      priceOptions: [
        {
          title: 'a) "Gebraucht"',
          amount: "Keine Kosten",
        },
        {
          title: 'b) "Gebrochen"',
          amount: 99,
        },
      ],
      lastBoldOption: {
        title: 'Das Gerät ist "Defekt" oder du behältst es',
        amount: 180,
      },
    },
  },
};

export const PostpaidWithBonus: Story = {
  name: "Postpaid mit Bonus",
  args: {
    ...Default.args,
    buttonProps: {
      text: "Zahlungspflichtig bestellen",
    },
    additionalSection: {
      type: "bonus",
      messageInfo: {
        headline: (
          <PriceSummarySubHeadline price={120}>
            Summe Bonus
          </PriceSummarySubHeadline>
        ),
        children: (
          <>
            <Text variant="light" size="large">
              120 € Bonus wird über 12 Monate verteilt auf die monatlichen
              Fixkosten gutgeschrieben.
            </Text>
            <ButtonMoreDetails
              role="link"
              onClick={() => alert("More details clicked")}
            >
              Details zur Bonus-Summe
            </ButtonMoreDetails>
          </>
        ),
      },
    },
    nextStepMessageInfo: undefined,
  },
};

export const Prepaid: Story = {
  args: {
    buttonProps: {
      text: "Bestellung absenden",
    },
    shippingCostFree: false,
    recurringCosts: {
      headline: "Laufende Kosten",
      items: [
        {
          title: "Kosten alle 4 Wochen",
          amount: 10.0,
        },
      ],
    },
    oneTimeCosts: {
      amount: 258.99,
      items: [],
    },
    additionalSection: {
      type: "prepaid",
      messageInfo: {
        headline: (
          <PriceSummarySubHeadline price={10}>
            Guthaben auf Sim-Karte
          </PriceSummarySubHeadline>
        ),
        children: (
          <>
            <Text variant="light" size="large">
              Du erhältst 10 € Startguthaben auf deine Prepaid-Karte. Die ersten{" "}
              <b>4 Wochen</b> sind somit mindestens abgedeckt.
            </Text>
            <ButtonMoreDetails onClick={() => alert("More details clicked")} />
          </>
        ),
      },
    },
  },
};

export const PrepaidSimOnly: Story = {
  name: "Prepaid (nur SIM)",
  args: {
    buttonProps: {
      text: "Bestellung absenden",
    },
    shippingCostFree: true,
    recurringCosts: {
      headline: "Laufende Kosten",
      items: [
        {
          title: "Kosten alle 4 Wochen",
          amount: 10.0,
        },
      ],
    },
    additionalSection: {
      type: "prepaid",
      messageInfo: {
        headline: (
          <PriceSummarySubHeadline price={10}>
            Guthaben auf Sim-Karte
          </PriceSummarySubHeadline>
        ),
        children: (
          <Text variant="light" size="large">
            Du erhältst 10 € Startguthaben auf deine Prepaid-Karte.
          </Text>
        ),
      },
    },
  },
};

// ToDo: Größe des Buttons anpassen, sobald die Größe des Buttons einstellbar ist
export const WithError: Story = {
  args: {
    ...Prepaid.args,
    messages: [
      {
        message: (
          <>
            <Text size="medium" variant="light" color="inherit">
              Einige angezeigte Vorteile sind leider nicht mehr gültig. Bitte{" "}
              <strong>leere deinen Browser-Cache, lösche Cookies </strong>
              und <strong> aktualisiere die Seite</strong>, um die Bestellung
              durchzuführen. Bei Fragen helfen wir dir gerne weiter. Alle
              Kontaktmöglichkeiten findest du unter{" "}
              <a href="https://congstar.de/kontakt">congstar.de/kontakt</a>.
            </Text>
            <ButtonSecondary
              asChild
              startIcon={<ArrowLoop aria-hidden />}
              style={{ color: "inherit" }}
            >
              <a href="https://www.congstar.de">Seite aktualisieren</a>
            </ButtonSecondary>
          </>
        ),
        type: "error",
      },
    ],
  },
};

const ErrorMessage = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <Text size="medium" variant="light" color="inherit">
        Einige angezeigte Vorteile sind leider nicht mehr gültig. Bitte{" "}
        <strong>leere deinen Browser-Cache, lösche Cookies </strong>
        und <strong> aktualisiere die Seite</strong>, um die Bestellung
        durchzuführen. Bei Fragen helfen wir dir gerne weiter. Alle
        Kontaktmöglichkeiten findest du unter{" "}
        <a href="https://congstar.de/kontakt">congstar.de/kontakt</a>.
      </Text>
      <ButtonSecondary
        startIcon={<ArrowLoop aria-hidden />}
        style={{ color: "inherit" }}
        onClick={onClick}
      >
        Seite aktualisieren
      </ButtonSecondary>
    </>
  );
};

export const ControlledError: Story = {
  args: {
    ...Prepaid.args,
    messages: [],
  },
  argTypes: {
    messages: {
      table: { readonly: true },
    },
  },
  render: function Render(args) {
    const [{ messages }, updateArgs] = useArgs<{
      messages: FormFieldMessages;
    }>();
    const [localMessages, setLocalMessages] =
      useState<FormFieldMessages>(messages);

    const [open, setOpen] = useState(false);

    function onReload() {
      setOpen(false);
      setLocalMessages([]);
      updateArgs({
        messages: [],
      });
    }

    function onChange() {
      setOpen(!open);
      setLocalMessages([
        {
          message: <ErrorMessage onClick={onReload} />,
          type: "error",
        },
      ]);
      updateArgs({
        messages: [
          {
            message: <ErrorMessage onClick={onReload} />,
            type: "error",
          },
        ],
      });
    }

    return (
      <form action={onChange}>
        <PriceSummary {...args} messages={localMessages} />
        <Modal.Root open={open} onOpenChange={setOpen}>
          <Modal.Content role="alertdialog">
            <Modal.Title>Hinweis</Modal.Title>
            <Modal.Description
              style={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <ErrorIcon
                    aria-hidden="true"
                    style={{
                      minWidth: "64px",
                      height: "64px",
                      color: "#BF1722",
                    }}
                  />
                  <Headline variant="bold" size="medium" as="h3">
                    Angezeigte Vorteile nicht mehr gültig
                  </Headline>
                  <Text size="large" variant="light" color="inherit">
                    Einige angezeigte Vorteile sind leider nicht mehr gültig.
                    Bitte{" "}
                    <strong>leere deinen Browser-Cache, lösche Cookies </strong>
                    und <strong> aktualisiere die Seite</strong>, um die
                    Bestellung durchzuführen.
                  </Text>
                </div>
                <ButtonPrimary
                  startIcon={<ArrowLoop aria-hidden />}
                  size={"large"}
                  onClick={onReload}
                  style={{ color: "inherit" }}
                >
                  Seite aktualisieren
                </ButtonPrimary>
                <Text size="large" variant="light" color="inherit">
                  Bei Fragen helfen wir dir gerne weiter. Alle
                  Kontaktmöglichkeiten findest du unter{" "}
                  <a href="https://congstar.de/kontakt">congstar.de/kontakt</a>.
                </Text>
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal.Root>
      </form>
    );
  },
};
