import Image from "next/image";
import frontView from "../public/google-pixel-7a-sea-handyangebot-detail-0.png";
import sideView from "../public/google-pixel-7a-sea-detail-90.png";
import backView from "../public/google-pixel-7a-sea-detail-180.png";
import fritzbox from "../public/AVM_FRITZ_Box_7530_AX_front.avif";
import galaxyUltra from "../public/samsung-galaxy-s24-ultra-titanium-black-aktion-tradein.png";
import simCard from "../public/sim-card.svg";
import {
  Accordion,
  AppTabs,
  AvailabilityCheckEdit,
  BillingPeriod,
  BoxDevice,
  BoxDevicePlan,
  BoxPlan,
  Breadcrumb,
  ButtonMoreDetails,
  ButtonPayment,
  ButtonPrimary,
  ButtonPrimaryCircle,
  ButtonSecondary,
  CardFilled,
  CardFilter,
  CardForwarding,
  CardLinkList,
  CarouselBoxDevice,
  CarouselBoxPlan,
  CarouselProductImage,
  Checkbox,
  CheckboxGroup,
  Chip,
  ComboBox,
  Contingent,
  ContingentRange,
  DateField,
  Divider,
  EnergyLabel,
  Fieldset,
  FilterBar,
  Headline,
  HeadlineHighlighted,
  HtmlParser,
  IconTile,
  Label,
  LabelPromoted,
  List,
  LoaderSkeleton,
  MessageDiscount,
  MessageInfo,
  MessageStatus,
  Modal,
  ModalFootnotes,
  PasswordField,
  PaymentMethod,
  Price,
  PriceRange,
  PriceRow,
  PriceSummary,
  PriceSummaryPostpaid,
  PriceSummaryPrepaid,
  ProductOverviewItem,
  ProgressBar,
  RadioGroup,
  Select,
  SelectionBoxDuration,
  SelectionBoxOption,
  SelectionBoxSwitch,
  SelectionColor,
  SelectionThumbnail,
  Stepper,
  StepperCheckout,
  StepperHorizontal,
  StepperVertical,
  Switch,
  TableComparison,
  TableInfo,
  Tag,
  Text,
  TextField,
  TextFieldClear,
  TextFieldCopy,
  TextFieldModal,
  ThemeProvider,
  Typography,
} from "@fair/react";
import {
  ArrowRight,
  Bringback,
  ExclamationMarkTriangleOutline,
  ExternalLink,
  InfoCircleOutline,
  Plus,
  ThumbsUpFill,
} from "@fair/icons";
import styled, { css } from "styled-components";
import { useRef } from "react";
import { DeviceModal } from "../components/DeviceModal/deviceModal";
import { ControlledDatePicker } from "../components/ControlledDatePicker/ControlledDatePicker";
import { AvailabilityCheckCity } from "../container/AvailabilityCheckCity/AvailabilityCheckCity";
import { plansMock } from "../components/TableComparison/TableComparison.mock";
import {
  allnetFlatS,
  fixed100mb,
  fixed250mb,
  fixed50mb,
} from "../components/BoxPlan/BoxPlan.mock";
import { PrepaidShoppingCartMainContent } from "../components/PrepaidShoppingCart/PrepaidShoppingCart";
import { energyLabelMock } from "../components/EnergyLabel/EnergyLabel.mock";
import {
  appleIphone14,
  fairphone4,
  nothingPhone,
} from "../components/BoxDevicePlan/BoxDevicePlan.mock";

const Background = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color.NeutralPrimaryBlack};
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
  `,
);

const GridDiv = styled.div`
  display: grid;
`;

export default function Web() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    console.log("changed");
  };

  return (
    <Background>
      <Breadcrumb
        home={{ label: "congstar" }}
        baseUrl="https://www.congstar.de"
        path={[
          { segment: "geraete", label: "Geräte mit Vertrag" },
          { segment: "apple", label: "Apple" },
          { segment: "iphone-15-pro-max", label: "iPhone 15 Pro Max" },
        ]}
      />
      <Breadcrumb
        home={{
          label: "congstar",
          linkProps: { "data-tealium-rel": "bc-home" },
        }}
        baseUrl="https://www.congstar.de"
        collapseOnMobile
        path={[
          {
            segment: "geraete",
            label: "Geräte mit Vertrag",
            linkProps: { "data-tealium-rel": "bc-geraete" },
          },
          {
            segment: "smartphones",
            label: "Smartphones",
            linkProps: { "data-tealium-rel": "bc-smartphones" },
          },
          {
            segment: "apple",
            label: "Apple",
            linkProps: { "data-tealium-rel": "bc-apple" },
          },
          {
            segment: "iphone-15-pro-max",
            label: "iPhone 15 Pro Max",
            linkProps: { "data-tealium-rel": "bc-iphone-15-pro-max" },
          },
        ]}
      />
      <Accordion.Root
        type="single"
        collapsible
        data-testid="fwti-device-variant-price-info-accordion"
        size="medium"
        defaultValue="fwti-device-variant-price-info-accordion"
      >
        <Accordion.Item value="fwti-device-variant-price-info-accordion">
          <Accordion.Header>
            Gesamtpreis und Optionen für die Schlussrate
          </Accordion.Header>
          <Accordion.Content isIndented>
            <Text size="large" variant="bold">
              Hello World
            </Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <ButtonPayment
        paymentMethod={PaymentMethod.APPLE_PAY}
        onClick={() => console.log("button clicked")}
      />
      <ButtonPayment
        size="large"
        paymentMethod={PaymentMethod.APPLE_PAY}
        onClick={() => console.log("button clicked")}
      />
      <CardFilled.Root backgroundColor="darkGrey" size="small">
        <CardFilled.Header>Daten</CardFilled.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignContent: "start",
          }}
        >
          <div
            id="progressbar-label"
            style={{
              alignItems: "end",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "4px", alignContent: "start" }}>
              <Typography variant="TagBlack40" trimFont>
                2,4
              </Typography>
              <Typography variant="TagBlack24" trimFont>
                GB
              </Typography>
            </div>

            <Text size="large" trimmed variant="light">
              von 12 GB übrig
            </Text>
          </div>
          <ProgressBar max={2.4} progress={12} />
          <Text
            size="small"
            trimmed
            variant="light"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Verbleibende Zeit:
            <Text size="small" variant="light" as="span">
              17 Tage 12 Stunden
            </Text>
          </Text>
          <Divider color="black" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text size={"medium"} variant={"bold"}>
              Du brauchst mehr Datenvolumen?
            </Text>

            <ButtonPrimary
              variant="primary"
              onClick={() => console.log("button clicked")}
            >
              Zur Buchung
            </ButtonPrimary>
          </div>
        </div>
      </CardFilled.Root>
      <CardFilled.Root backgroundColor="darkGrey" size="small">
        <CardFilled.Header
          buttonProps={{
            onClick: () => console.log("CardHeader button clicked"),
          }}
        >
          Daten
        </CardFilled.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignContent: "start",
          }}
        >
          <div
            id="progressbar-label"
            style={{
              alignItems: "end",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "4px", alignContent: "start" }}>
              <Typography variant="TagBlack40" trimFont>
                2,4
              </Typography>
              <Typography variant="TagBlack24" trimFont>
                GB
              </Typography>
            </div>

            <Text size="large" trimmed variant="light">
              von 12 GB übrig
            </Text>
          </div>
          <ProgressBar max={2.4} progress={12} />
          <Text
            size="small"
            trimmed
            variant="light"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Verbleibende Zeit:
            <Text size="small" variant="light" as="span">
              17 Tage 12 Stunden
            </Text>
          </Text>
          <Divider color="black" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text size={"medium"} variant={"bold"}>
              Du brauchst mehr Datenvolumen?
            </Text>

            <ButtonPrimary
              variant="primary"
              onClick={() => console.log("button clicked")}
            >
              Zur Buchung
            </ButtonPrimary>
          </div>
        </div>
      </CardFilled.Root>
      <CardFilled.Root backgroundColor="darkGrey" size="small">
        <CardFilled.Header
          buttonProps={{ href: "www.congstar.de", asChild: true }}
        >
          Daten
        </CardFilled.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignContent: "start",
          }}
        >
          <div
            id="progressbar-label"
            style={{
              alignItems: "end",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "4px", alignContent: "start" }}>
              <Typography variant="TagBlack40" trimFont>
                2,4
              </Typography>
              <Typography variant="TagBlack24" trimFont>
                GB
              </Typography>
            </div>

            <Text size="large" trimmed variant="light">
              von 12 GB übrig
            </Text>
          </div>
          <ProgressBar max={2.4} progress={12} />
          <Text
            size="small"
            trimmed
            variant="light"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Verbleibende Zeit:
            <Text size="small" variant="light" as="span">
              17 Tage 12 Stunden
            </Text>
          </Text>
          <Divider color="black" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text size={"medium"} variant={"bold"}>
              Du brauchst mehr Datenvolumen?
            </Text>

            <ButtonPrimary
              variant="primary"
              onClick={() => console.log("button clicked")}
            >
              Zur Buchung
            </ButtonPrimary>
          </div>
        </div>
      </CardFilled.Root>
      <CardFilled.Root backgroundColor="darkGrey" size="small">
        <CardFilled.Header
          buttonProps={{
            onClick: () =>
              console.log("Card clicked, CardHeader button triggered"),
          }}
          trigger="card"
        >
          Daten
        </CardFilled.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignContent: "start",
          }}
        >
          <div
            id="progressbar-label"
            style={{
              alignItems: "end",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: "4px", alignContent: "start" }}>
              <Typography variant="TagBlack40" trimFont>
                2,4
              </Typography>
              <Typography variant="TagBlack24" trimFont>
                GB
              </Typography>
            </div>

            <Text size="large" trimmed variant="light">
              von 12 GB übrig
            </Text>
          </div>
          <ProgressBar max={24} progress={21} />
          <Text
            size="small"
            trimmed
            variant="light"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Verbleibende Zeit:
            <Text size="small" variant="light" as="span">
              17 Tage 12 Stunden
            </Text>
          </Text>
          <Divider color="black" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text size={"medium"} variant={"bold"}>
              Du brauchst mehr Datenvolumen?
            </Text>

            <ButtonPrimary
              variant="primary"
              onClick={() => console.log("button clicked")}
            >
              Zur Buchung
            </ButtonPrimary>
          </div>
        </div>
      </CardFilled.Root>
      <CardLinkList.Root>
        <CardLinkList.Header>Headline</CardLinkList.Header>
        <CardLinkList.List>
          <CardLinkList.Button asChild>
            <a href={"www.congstar.de"}>Link</a>
          </CardLinkList.Button>
          <CardLinkList.Button asChild>
            <a href={"www.congstar.de"}>Link</a>
          </CardLinkList.Button>
          <CardLinkList.Button asChild endIcon={<ExternalLink />}>
            <a href={"www.congstar.de"}>Click me </a>
          </CardLinkList.Button>
          <CardLinkList.Button
            onClick={() => {
              alert("click");
            }}
          >
            Click me
          </CardLinkList.Button>
          <CardLinkList.Button asChild>
            <a href={"www.congstar.de"}>
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </a>
          </CardLinkList.Button>
        </CardLinkList.List>
        <ButtonPrimary variant="outlined" fullWidth style={{ margin: "8px 0" }}>
          Button
        </ButtonPrimary>
      </CardLinkList.Root>
      <Headline size="extraLarge" variant="bold" as="h1">
        PriceSummary new
      </Headline>
      <PriceSummary
        buttonProps={{
          text: "Bestellung absenden",
        }}
        recurringCosts={{
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
        }}
        oneTimeCosts={{
          amount: 258.99,
          items: [],
        }}
        nextStepMessageInfo={{
          icon: <InfoCircleOutline />,
          children: (
            <Text variant="light" size="large">
              Im nächsten Schritt gelangst du zu Apple Pay, um die Bestellung
              abzuschließen.
            </Text>
          ),
        }}
      />

      <Headline size="extraLarge" variant="bold" as="h1">
        PriceSummaries deprecated
      </Headline>
      <PriceSummaryPrepaid
        overviewOneTimeDisplayPrice={{
          amount: 258.99,
          items: [],
        }}
        priceElement={{
          price: 10.0,
          description: "Kosten alle 4 Wochen",
        }}
        prepaidMessageInfo={{
          headline: "10€ auf Sim-Karte",
          children: (
            <>
              <Text variant="light" size="large">
                Du erhältst 10 € Startguthaben auf deine Prepaid-Karte. Die
                ersten <b>4 Wochen</b> sind somit mindestens abgedeckt.
              </Text>
              <ButtonMoreDetails
                onClick={() => alert("More details clicked")}
              />
            </>
          ),
        }}
        buttonProps={{
          text: "Bestellung absenden",
        }}
      ></PriceSummaryPrepaid>
      <PriceSummaryPostpaid
        overviewRecurringDisplayPrices={[
          {
            title: "1. bis 24. Monat",
            amount: 57,
            items: [],
          },
          {
            title: "ab dem 25. Monat",
            amount: 33,
            items: [],
          },
        ]}
        overviewOneTimeDisplayPrice={{
          amount: 258.99,
          items: [],
        }}
        nextStepMessageInfo={{
          icon: <InfoCircleOutline />,
          children: (
            <Text variant="light" size="large">
              Im nächsten Schritt gelangst du zu Apple Pay, um die Bestellung
              abzuschließen.
            </Text>
          ),
        }}
        buttonProps={{
          text: "Bestellung absenden",
        }}
        bringback={{
          sectionHeader: "Schlussrate Endgerät",
          mainTitle: "37. Monat, deine Optionen",
          subTitle:
            "Du verkaufst das Gerät an Recommerce Solutions SA im folgenden Zustand:",
          priceOptions: [
            {
              title: "a) Gebraucht",
              amount: "Keine Kosten",
            },
            {
              title: "b) Gebrochen",
              amount: 99,
            },
          ],
          lastBoldOption: {
            title: 'Das Gerät ist "Defekt" oder du behältst es',
            amount: 180,
          },
        }}
      ></PriceSummaryPostpaid>
      <MessageDiscount
        discounts={[
          {
            label: "Dein persönlicher Rabatt",
            headline: "Nur 2 € im ersten Monat",
            children: (
              <Text variant="light" size="large">
                Dein persönlicher Rabatt macht den Einstieg leicht – starte
                entspannt und günstig!
              </Text>
            ),
          },
          {
            headline: "Teste den Tarif im ersten Monat für nur 1,99 €",
          },
        ]}
        aria-label="Deine Rabatte"
      ></MessageDiscount>
      <EnergyLabel {...energyLabelMock} />
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <IconTile
          icon={<ThumbsUpFill />}
          variant="filled"
          color="lime"
          size={{
            minAvailableSpace: "extraSmall",
            maxAvailableSpace: "extraSmall",
          }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="filled"
          color="lime"
          size={{ minAvailableSpace: "small", maxAvailableSpace: "small" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="filled"
          color="lime"
          size={{ minAvailableSpace: "medium", maxAvailableSpace: "medium" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="filled"
          color="lime"
          size={{ minAvailableSpace: "large", maxAvailableSpace: "large" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="filled"
          color="lime"
          size={{
            minAvailableSpace: "extraLarge",
            maxAvailableSpace: "extraLarge",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <IconTile
          icon={<ThumbsUpFill />}
          variant="outlined"
          color="lime"
          size={{
            minAvailableSpace: "extraSmall",
            maxAvailableSpace: "extraSmall",
          }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="outlined"
          color="lime"
          size={{ minAvailableSpace: "small", maxAvailableSpace: "small" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="outlined"
          color="lime"
          size={{ minAvailableSpace: "medium", maxAvailableSpace: "medium" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="outlined"
          color="lime"
          size={{ minAvailableSpace: "large", maxAvailableSpace: "large" }}
        />
        <IconTile
          icon={<ThumbsUpFill />}
          variant="outlined"
          color="lime"
          size={{
            minAvailableSpace: "extraLarge",
            maxAvailableSpace: "extraLarge",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Text size="medium" variant="light">
          Lorem Ipsum
        </Text>
        <ButtonSecondary
          asChild
          aria-label="Mein congstar"
          startIcon={<Plus />}
        >
          <a href="/meincongstar/meine-daten"></a>
        </ButtonSecondary>{" "}
      </div>

      <form>
        <Select.Root
          id="select"
          name="select"
          placeholder="choose option"
          onChange={onChange}
        >
          <Select.Item id="de" textValue="Deutschland" />
          <Select.Item id="oe" textValue="Östereich" />
          <Select.Item id="se" textValue="Schweiz" />
          <Select.Item id="en" textValue="England" />
          <Select.Item id="sco" textValue="Schottland" />
          <Select.Item id="po" textValue="Polen" />
          <Select.Item id="af" textValue="Afghanistan" />
          <Select.Item id="al" textValue="Albanien" />
          <Select.Item id="dz" textValue="Algerien" />
          <Select.Item id="bg" textValue="Bulgarien" />
          <Select.Item id="ca" textValue="Canada" />
          <Select.Item id="cn" textValue="China" />
        </Select.Root>
      </form>

      <TableComparison
        data={plansMock}
        placeholder="Tarif"
        title="Tarifvergleich"
      />

      <TableInfo.Root id="anschluesse" headline="Anschlüsse & Schnittstellen">
        <TableInfo.Row>
          <TableInfo.RowHead
            headline="DSL-Anschluss"
            footnotes={[
              {
                header: "DSL-Anschluss",
                description: <p>Hier könnte ihr Werbung stehen</p>,
              },
            ]}
          />
          <TableInfo.Cell>
            ADSL/VDSL bis 300 MBit/s (Supervectoring)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Netzwerkanschlüsse" />
          <TableInfo.Cell>
            4x Gigabit-LAN (WAN über LAN 1 möglich)
          </TableInfo.Cell>
        </TableInfo.Row>
        <TableInfo.Row>
          <TableInfo.RowHead headline="Anschlüsse" />
          <TableInfo.Cell>1x USB 3.0 für Speicher & Drucker</TableInfo.Cell>
        </TableInfo.Row>
      </TableInfo.Root>

      <ProductOverviewItem.Root
        title="iPhone 16 Max Pro"
        image={<Image src={simCard} alt="front and back of iPhone 16" />}
      >
        <ProductOverviewItem.ProductSpecs
          productColor={{ hex: "#000", name: "Deep Space" }}
          productMemory="256 GB"
        />
        <Text size="large" variant="light">
          {" "}
          Lieferbar ab 16.10.2024
        </Text>
      </ProductOverviewItem.Root>

      <CarouselProductImage
        key="colorWhite"
        entries={[
          {
            carouselImage: <Image src={frontView} alt="Carousel Front View" />,
            thumbnailImage: {
              node: <Image src={frontView} alt="Carousel Front View" />,
              ariaLabel: "Carousel Front View",
            },
          },
          {
            carouselImage: <Image src={sideView} alt="Carousel Side View" />,
            thumbnailImage: {
              node: <Image src={sideView} alt="Carousel Side View" />,
              ariaLabel: "Carousel Side View",
            },
          },
          {
            carouselImage: <Image src={backView} alt="Carousel Back View" />,
            thumbnailImage: {
              node: <Image src={backView} alt="Carousel Back View" />,
              ariaLabel: "Carousel Back View",
            },
          },
        ]}
      />

      <GridDiv>
        <AvailabilityCheckEdit
          headline="Tarif ist verfügbar"
          status={"available"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }
          onButtonClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </GridDiv>

      <StepperHorizontal.Root>
        <StepperHorizontal.List>
          <StepperHorizontal.Item
            state="completed"
            title="Schritt 1"
          ></StepperHorizontal.Item>
          <StepperHorizontal.Item
            state="current"
            title="Schritt 2"
          ></StepperHorizontal.Item>
          <StepperHorizontal.Item
            state="open"
            title="Schritt 3"
          ></StepperHorizontal.Item>
          <StepperHorizontal.Item
            state="error"
            title="Schritt 4"
          ></StepperHorizontal.Item>
        </StepperHorizontal.List>
        <Stepper.Content data-testid="stepper-content">
          <Headline size="small" variant="bold" forwardedAs="h3">
            Headline
          </Headline>
          <Text as="strong" variant="light" size="small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            vero, cupiditate alias odio tenetur recusandae, repellat
            consequuntur fugit possimus, id nam asperiores. Dolorem quaerat
            fugiat consectetur molestiae iusto, consequatur perspiciatis. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Maiores vero,
            cupiditate alias odio tenetur recusandae, repellat consequuntur
            fugit possimus, id nam asperiores. Dolorem quaerat fugiat
            consectetur molestiae iusto, consequatur perspiciatis. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Maiores vero,
            cupiditate alias odio tenetur recusandae, repellat
          </Text>
        </Stepper.Content>
      </StepperHorizontal.Root>
      <StepperVertical.Root>
        <StepperVertical.Item state="completed" aria-label="Auftragseingang">
          <Stepper.Content>
            <Headline size="medium" variant="bold" as="h3">
              Auftragseingang
            </Headline>
            <Text as="strong" variant="light" size="small">
              Dein Auftrag ist am 13.05.2024 bei uns eingegangen.
            </Text>
          </Stepper.Content>
        </StepperVertical.Item>
        <StepperVertical.Item aria-label="Auftragsbestätigung" state="current">
          <Stepper.Content>
            <Headline size="medium" variant="bold" as="h3">
              Auftragsbestätigung
            </Headline>
            <Text as="strong" variant="light" size="small">
              Wir haben deinen Wechsel bei NetCologne angefragt.
            </Text>
          </Stepper.Content>
        </StepperVertical.Item>
        <StepperVertical.Item aria-label="Router-Versand" state="error">
          <Stepper.Content>
            <Headline size="medium" variant="bold" as="h3">
              Router-Versand
            </Headline>
            <Text as="strong" variant="light" size="small">
              Bitte melde dich bei der Service Hotline
              <br />
              Montag - Samstag von 8 bis 22 Uhr
              <br />
              Sonn- und feiertags von 9 bis 18 Uhr <br /> <br />
            </Text>
          </Stepper.Content>
        </StepperVertical.Item>
      </StepperVertical.Root>
      <StepperCheckout.Root>
        <StepperCheckout.List>
          <StepperCheckout.Item
            state="completed"
            label="Bestellübersicht"
            link="http://www.congstar.de"
          />
          <StepperCheckout.Item
            state="completed"
            label="Persönliche Daten"
            link="http://www.congstar.de"
          />
          <StepperCheckout.Item state="current" label="Zahlungsdaten" />
          <StepperCheckout.Item state="open" label="Legitimation" />
          <StepperCheckout.Item state="open" label="Zusammenfassung" />
        </StepperCheckout.List>
      </StepperCheckout.Root>
      <LoaderSkeleton width="100%" height="400px" />
      <ComboBox.Root
        inputRef={inputRef}
        data-testid={`input-is`}
        id="currentProvider"
        name="currentProvider"
        selectedKey="y"
        ariaLabel="Voranbieterauswahl"
        placeholder="Dein aktueller Anbieter"
        buttonAriaLabel="Voranbieterliste anzeigen"
        menuTrigger="input"
        fullWidth
      >
        <ComboBox.Item textValue="- keine der Optionen -">
          - keine der Optionen -
        </ComboBox.Item>
        <ComboBox.Item textValue="Congstar X">Congstar X</ComboBox.Item>
        <ComboBox.Item textValue="Prepaid S">Prepaid S</ComboBox.Item>
        <ComboBox.Item textValue="Prepaid M">Prepaid M</ComboBox.Item>
        <ComboBox.Item textValue="Prepaid L">Prepaid L</ComboBox.Item>
        <ComboBox.Item textValue="Prepaid XL">Prepaid XL</ComboBox.Item>
        <ComboBox.Item textValue="PostPaid S">PostPaid S</ComboBox.Item>
        <ComboBox.Item textValue="PostPaid M">PostPaid M</ComboBox.Item>
        <ComboBox.Item textValue="PostPaid L">PostPaid L</ComboBox.Item>
        <ComboBox.Item textValue="PostPaid XL">PostPaid XL</ComboBox.Item>
        <ComboBox.Item textValue="Allnet Flat S">Allnet Flat S</ComboBox.Item>
        <ComboBox.Item textValue="Allnet Flat M">Allnet Flat M</ComboBox.Item>
        <ComboBox.Item textValue="Allnet Flat L">Allnet Flat L</ComboBox.Item>
        <ComboBox.Item textValue="Allnet Flat XL">Allnet Flat XL</ComboBox.Item>
      </ComboBox.Root>

      <AvailabilityCheckCity />

      <FilterBar.Root
        onOpenChange={(open) => console.log("open", open)}
        sorting={{
          label: "Sortierung",
          selectedLabel: "Beliebtheit",
          form: (
            <FilterBar.RadioGroup.Root
              defaultValue="beliebtheit"
              name="sortierung"
            >
              <FilterBar.RadioGroup.Item value="beliebtheit">
                Beliebtheit
              </FilterBar.RadioGroup.Item>
              <FilterBar.RadioGroup.Item value="niedrigster-preis">
                Niedrigster Preis
              </FilterBar.RadioGroup.Item>
              <FilterBar.RadioGroup.Item value="höchster-preis">
                Höchster Preis
              </FilterBar.RadioGroup.Item>
            </FilterBar.RadioGroup.Root>
          ),
        }}
        filters={[
          {
            label: "Hersteller",
            selectedLabel: "Alle (4)",
            form: (
              <FilterBar.CheckboxGroup.Root name="filter-Hersteller">
                <FilterBar.CheckboxGroup.Item
                  value="apple"
                  id="apple"
                  itemCount={15}
                  defaultSelected
                >
                  Apple
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="google"
                  id="google"
                  itemCount={18}
                  defaultSelected
                >
                  Google
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="samsung"
                  id="samsung"
                  itemCount={19}
                  defaultSelected
                >
                  Samsung
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="etc..."
                  id="etc..."
                  itemCount={22}
                  defaultSelected
                >
                  etc...
                </FilterBar.CheckboxGroup.Item>
              </FilterBar.CheckboxGroup.Root>
            ),
          },
          {
            label: "Eigenschaften",
            selectedLabel: "Alle (3)",
            form: (
              <FilterBar.CheckboxGroup.Root name="filter-Eigenschaften">
                <FilterBar.CheckboxGroup.Item
                  value="neu"
                  id="neu"
                  itemCount={15}
                  defaultSelected
                >
                  neu
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="esim-fähig"
                  id="esim-fähig"
                  itemCount={19}
                  defaultSelected
                >
                  esim-fähig
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="neuwertig"
                  id="neuwertig"
                  itemCount={28}
                  defaultSelected
                >
                  neuwertig
                </FilterBar.CheckboxGroup.Item>
              </FilterBar.CheckboxGroup.Root>
            ),
          },
          {
            label: "Gerätekategorie",
            selectedLabel: "Alle (3)",
            form: (
              <FilterBar.CheckboxGroup.Root name="filter-Gerätekategorie">
                <FilterBar.CheckboxGroup.Item
                  value="handy"
                  id="handy"
                  itemCount={9}
                  defaultSelected
                >
                  Handy
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="tablet"
                  id="tablet"
                  itemCount={46}
                  defaultSelected
                >
                  Tablet
                </FilterBar.CheckboxGroup.Item>
                <FilterBar.CheckboxGroup.Item
                  value="gadget"
                  id="gadget"
                  itemCount={4}
                  defaultSelected
                >
                  Gadget
                </FilterBar.CheckboxGroup.Item>
              </FilterBar.CheckboxGroup.Root>
            ),
          },
        ]}
      />

      <Text size="large" variant="light" as="span">
        Die Adresse kannst du in den{" "}
        <ButtonSecondary asChild>
          <a href="/meincongstar/meine-daten">Kundendaten</a>
        </ButtonSecondary>{" "}
        anpassen.
      </Text>
      <PriceRange
        priceRange={{ maximum: 5, minimum: 3 }}
        size={{ mobile: "small", desktop: "medium" }}
        billingPeriod={BillingPeriod.MONTHLY}
        suffix="zzgl. 50,00 € Bereitstellungspreis"
      />
      <PriceRow.Root>
        <PriceRow.Price
          prefix="Monatliche Kosten"
          price={27.99}
          suffix="24 Monate Laufzeit"
        />
        <PriceRow.Price
          prefix="Einmalige Kosten"
          price={10.99}
          suffix="Bereitstellungspreis"
        />
      </PriceRow.Root>
      <Contingent
        size={{ mobile: "medium", desktop: "large" }}
        unit="Mbit/s"
        amount={4}
      ></Contingent>
      <ContingentRange
        amountRange={{ minimum: 3, maximum: 5 }}
        size={{ mobile: "medium", desktop: "large" }}
        unit="Mbit/s"
        suffix="Download"
      ></ContingentRange>
      <HeadlineHighlighted
        ref={headerRef}
        as="h1"
        decorativeColor="yellow"
        size="large"
      >
        congstar Fair Playground
      </HeadlineHighlighted>
      <Headline variant="black" size="extraLarge" as="h2">
        Typography
      </Headline>
      <Text size="large" variant="light">
        Wir und unsere Drittanbieter nutzen Technologien (z. B. Cookies), um
        Informationen auf Nutzergeräten zu speichern und abzurufen, um
        persönliche Daten, wie IP-Adressen oder Browserdaten zu verarbeiten. Du
        kannst der Verarbeitung deiner persönlichen Daten für die unten
        aufgelisteten Verarbeitungszwecke zustimmen oder alternativ bevorzugte
        Einstellungen vornehmen, bevor du Cookies zustimmst oder ablehnst. Bitte
        beachte, dass manche Anbieter basierend auf legitimen
        Geschäftsinteressen deine persönlichen Daten verarbeiten, ohne nach
        deiner Zustimmung zu fragen. Um dein Recht auf Widerspruch gegen die
        Verarbeitung auf der Basis von legitimen Geschäftsinteressen auszuüben,
        schau dir bitte unsere Anbieterliste an. Deine Einwilligung umfasst gem.
        Art. 49 Abs. 1 lit. a DSGVO auch die Übermittlung in Drittländer, bspw.
        in die USA. Du kannst deine Privatsphäre-Einstellungen jederzeit ändern
        oder deine Zustimmung zurückziehen, indem du auf den Privacy Button
        klickst.
      </Text>
      <Headline variant="bold" size="small" as="h1">
        Headline Bold small{" "}
      </Headline>

      <Label size="large">Label</Label>
      <Tag size="small">Tag</Tag>

      <List.Root size="medium" decorativeColor="green">
        <List.Item>
          <List.Body>Nur Online: 32 GB statt 15 GB</List.Body>
          <List.Description>inkl. LTE 50 mit max. 50 Mbit/s</List.Description>
        </List.Item>
        <List.Item>
          <List.Body>Jedes Jahr 5 GB mehr</List.Body>
        </List.Item>
        <List.Item>
          <List.Body>Telefonie & SMS Flat</List.Body>
          <List.Description>in alle dt. Netze</List.Description>
        </List.Item>
        <List.Item>
          <List.Body>EU-Roaming inklusive</List.Body>
        </List.Item>
      </List.Root>
      <LabelPromoted decorativeColor="pink">Promotion Label</LabelPromoted>
      <Headline variant="black" size="extraLarge" as="h2">
        Buttons
      </Headline>
      <ButtonSecondary
        onClick={() => {
          if (headerRef.current) headerRef.current.textContent = "Clicked!";
        }}
        endIcon={<ArrowRight />}
      >
        Go Right
      </ButtonSecondary>
      <ThemeProvider backgroundColor="white">
        <ButtonPrimary
          disabled={true}
          onClick={() => {
            alert("click, boom!");
          }}
          endIcon={<ArrowRight />}
        >
          Go Round!
        </ButtonPrimary>
        <ButtonPrimary fullWidth={{ mobile: true, desktop: false }}>
          Dynamische Breite
        </ButtonPrimary>
      </ThemeProvider>

      <ButtonPrimaryCircle
        onClick={() => alert("self destruct in 3... 2... 1...")}
        variant="primary"
        asChild
      >
        <a href="https://congstar.de">
          <Plus />
        </a>
      </ButtonPrimaryCircle>
      <ButtonPrimaryCircle variant="outlined">
        <Plus />
      </ButtonPrimaryCircle>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Chip>Chip</Chip>
      </div>

      <Headline variant="black" size="extraLarge" as="h2">
        Data Display
      </Headline>

      <Price
        price={23}
        strikeThroughPrice={25}
        size={{ mobile: "medium", desktop: "large" }}
        suffix="zzgl. 50,00 € Bereitstellungspreis"
        billingPeriod={BillingPeriod.MONTHLY}
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
                <p>
                  Mit der eSIM benötigst du die klassische SIM-Karte (Mini-,
                  Micro- oder Nano-SIM) aus Plastik nicht mehr. Stattdessen
                  werden alle notwendigen Infos rund um deinen Tarif per
                  eSIM-Profil direkt auf deinem Gerät gespeichert.
                </p>
                <p>
                  Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
                  Denn nicht alle Smartphones sind schon eSIM-fähig.
                </p>
                <p>
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
      <Typography variant="BodyBold12">Preis ohne Footnote:</Typography>
      <Price
        price={23}
        strikeThroughPrice={25}
        size={{ mobile: "medium", desktop: "large" }}
        billingPeriod={BillingPeriod.MONTHLY}
        footnotes={[]}
      />
      <Typography as="p" variant="BodyBold16">
        Speed verdoppeln!
      </Typography>
      <Checkbox.Root name="CheckboxOption">
        Die Datenschutzhinweise nehme ich zur Kenntnis.
      </Checkbox.Root>
      <CheckboxGroup.Root
        name="CheckboxOptionen"
        label="Rechtliche Hinweise"
        description="Hier findest du die vorvertraglichen Informationen und die Vertragszusammenfassung."
      >
        <CheckboxGroup.Item>
          Ich möchte zur monatlichen Rechnung einen Einzelverbindungsnachweis
          (EVN) über meine kostenpflichtigen Verbindungen für die obige
          Rufnummer erhalten.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item>
          Ich akzeptiere die Allgemeinen Geschäftsbedingungen.
        </CheckboxGroup.Item>
        <CheckboxGroup.Item>
          Die Datenschutzhinweise nehme ich zur Kenntnis.
        </CheckboxGroup.Item>
      </CheckboxGroup.Root>
      <SelectionBoxOption.RadioGroup.Root defaultValue="item-1" name="Payment">
        <SelectionBoxOption.Root name="AllnetFlat S Extra mit GB+">
          <SelectionBoxOption.Item
            label="Apple Pay"
            paymentOptionImages={[
              { src: "img_logo_apple_pay_on_light@3x.svg", alt: "Apple Pay" },
            ]}
          >
            <SelectionBoxOption.RadioGroup.Item value="item-1" />
          </SelectionBoxOption.Item>
        </SelectionBoxOption.Root>
      </SelectionBoxOption.RadioGroup.Root>
      <SelectionBoxOption.Root name="AllnetFlat S Extra mit GB+">
        <SelectionBoxOption.Item
          label="8 GB"
          labelDescription="AllnetFlat S Extra mit GB+"
          price={20}
          billingPeriod={BillingPeriod.MONTHLY}
        >
          <SelectionBoxOption.Checkbox value="item-1" />
        </SelectionBoxOption.Item>
      </SelectionBoxOption.Root>
      <RadioGroup.Root defaultValue="value2" name="choices" label="Auswahl">
        <RadioGroup.Item value="value1">2 GB</RadioGroup.Item>
        <RadioGroup.Item value="value2">3 GB</RadioGroup.Item>
      </RadioGroup.Root>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Switch.Label htmlFor="dark-mode" variant="BodyLight14">
          Dark Mode
        </Switch.Label>
        <Switch.Root id="dark-mode" />
      </div>
      <CardFilled.Root backgroundColor="white" size="medium">
        <SelectionBoxSwitch
          id={"rücknahme"}
          name={"rücknahme"}
          title={"congstar Rücknahmedeal"}
          description={
            "Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %."
          }
          switchDescription={"Vorteil nutzen"}
          icon={<Bringback />}
          moreDetails={
            <ButtonMoreDetails
              role="link"
              linkText="Details und Rücknahmekonditionen"
              onClick={() => {
                alert("mehr details");
              }}
            />
          }
        />
      </CardFilled.Root>
      <form>
        <SelectionBoxDuration.RadioGroup.Root
          name="laufzeit"
          defaultValue="12-monate"
        >
          <SelectionBoxDuration.Grid>
            <SelectionBoxDuration.Root>
              <SelectionBoxDuration.RadioGroup.Item value="24-monate">
                24 Monate Laufzeit
              </SelectionBoxDuration.RadioGroup.Item>
              <SelectionBoxDuration.Divider />
              <SelectionBoxDuration.Prices>
                <SelectionBoxDuration.Price
                  priceLabel="Monatliche Kosten"
                  price={20}
                />
                <SelectionBoxDuration.Price
                  priceLabel="Einmalige Kosten"
                  price={20}
                />
              </SelectionBoxDuration.Prices>
            </SelectionBoxDuration.Root>
            <SelectionBoxDuration.Root>
              <SelectionBoxDuration.RadioGroup.Item value="12-monate">
                12 Monate Laufzeit
              </SelectionBoxDuration.RadioGroup.Item>
              <SelectionBoxDuration.Divider />
              <SelectionBoxDuration.Prices>
                <SelectionBoxDuration.Price
                  priceLabel="Monatliche Kosten"
                  price={20}
                />
                <SelectionBoxDuration.Price
                  priceLabel="Einmalige Kosten"
                  price={20}
                />
                <SelectionBoxDuration.TotalPrice
                  price={500}
                  priceLabel="Gesamtpreis"
                />
              </SelectionBoxDuration.Prices>
            </SelectionBoxDuration.Root>
          </SelectionBoxDuration.Grid>
        </SelectionBoxDuration.RadioGroup.Root>
      </form>
      <form>
        <Fieldset>
          <div
            style={{ display: "flex", gap: "24px", flexDirection: "column" }}
          >
            <Text as="legend" variant="bold" size="large">
              Bitte wähle eine Option
            </Text>
            <RadioGroup.Root
              defaultValue="option-a"
              label="Tarifauswahl"
              name="tarif"
              isDisabled={false}
              itemGapSize={{ vertical: { mobile: "24", desktop: "24" } }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <RadioGroup.Item value="option-a">
                  Mit LTE 50 Option
                </RadioGroup.Item>
                <RadioGroup.Item value="option-b">
                  Mit LTE 100 Option
                </RadioGroup.Item>
              </div>
            </RadioGroup.Root>
          </div>
        </Fieldset>
      </form>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <MessageInfo
          headline="Bitte beachte"
          variant="outlined"
          icon={<ExclamationMarkTriangleOutline />}
        >
          <Text variant="light" size="large">
            Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
          </Text>
        </MessageInfo>
        <MessageInfo
          headline="Bitte beachte"
          variant="primary"
          icon={<ExclamationMarkTriangleOutline />}
        >
          <Text variant="light" size="large">
            Mit Klick auf “eSIM bestellen” wird deine alte SIM deaktiviert
          </Text>
        </MessageInfo>
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexDirection: "column",
        }}
      >
        <MessageStatus
          message="du musst mindestens eine Option auswählen"
          type="error"
          variant="outlined"
        />
        <MessageStatus
          message="Sperrung in Bearbeitung"
          type="pending"
          variant="primary"
        />
        <MessageStatus
          message="Rechnungsversand per E-Mail ist aktiv"
          type="success"
          variant="outlined"
          fullWidth={{ mobile: true, desktop: false }}
        />
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Modal.Root>
          <Modal.Trigger>Mehr Details</Modal.Trigger>
          <Modal.Content>
            <Modal.Title>eSIM</Modal.Title>
            <Modal.Description
              style={{ display: "flex", gap: "12px", flexDirection: "column" }}
            >
              <p>
                Mit der eSIM benötigst du die klassische SIM-Karte (Mini-,
                Micro- oder Nano-SIM) aus Plastik nicht mehr. Stattdessen werden
                alle notwendigen Infos rund um deinen Tarif per eSIM-Profil
                direkt auf deinem Gerät gespeichert.
              </p>
              <p>
                Bitte achte aber darauf, dass dein Gerät die eSIM unterstützt.
                Denn nicht alle Smartphones sind schon eSIM-fähig.
              </p>
              <p>
                Nach deiner Bestellung erhältst du eine E-Mail von uns, sobald
                dein eSIM-Profil zur Aktivierung bereitsteht. Du kannst es dann
                über die congstar App oder das meincongstar Kundencenter
                installieren.
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal.Root>
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
                  <p>
                    Mit der eSIM benötigst du die klassische SIM-Karte (Mini-,
                    Micro- oder Nano-SIM) aus Plastik nicht mehr. Stattdessen
                    werden alle notwendigen Infos rund um deinen Tarif per
                    eSIM-Profil direkt auf deinem Gerät gespeichert.
                  </p>
                  <p>
                    Bitte achte aber darauf, dass dein Gerät die eSIM
                    unterstützt. Denn nicht alle Smartphones sind schon
                    eSIM-fähig.
                  </p>
                  <p>
                    Nach deiner Bestellung erhältst du eine E-Mail von uns,
                    sobald dein eSIM-Profil zur Aktivierung bereitsteht. Du
                    kannst es dann über die congstar App oder das meincongstar
                    Kundencenter installieren.
                  </p>
                </div>
              ),
            },
          ]}
          trigger={<ButtonMoreDetails />}
        />
      </div>
      <BoxDevice.Grid>
        <BoxDevice.Item
          image={
            <Image alt="Samsung Galaxy S23 Ultra Aktion" src={galaxyUltra} />
          }
          title="Samsung Galaxy S23 Ultra Aktion"
          colors={[
            { hex: "#fff", name: "white" },
            { hex: "#123456", name: "Royal Blue" },
            { hex: "#643345", name: "wine red" },
            { hex: "#463345", name: "purple" },
            { hex: "#2cc982", name: "turquise" },
            { hex: "#151719542", name: "black" },
          ]}
          energyLabel="A"
          memorySizes={["128 GB", "256 GB", "512 GB", "1 TB"]}
          price={{
            price: 20,
            prefix: "ab",
            suffix: "mtl.",
            strikeThroughPrice: 40,
          }}
          priceSecondaryInfo={{
            prefix: "zzgl.",
            suffix: "Anzahlung",
            strikeThroughPrice: 24,
            price: 22,
          }}
          buttonPrimaryProps={{
            href: "https://www.nicotuadev.de/geraete/samsung/samsung-galaxy-s23-ultra/?planId=426&paymentMode=monthly-installment&color=phantom+black&memorySize=256+GB&simCardType=DEFAULT",
          }}
        />
      </BoxDevice.Grid>
      <SelectionThumbnail.Root defaultValue="front" onValueChange={() => {}}>
        <SelectionThumbnail.Item aria-label="front-view" value="front">
          <Image src={frontView} alt="google-pixel-front" />
        </SelectionThumbnail.Item>
        <SelectionThumbnail.Item aria-label="side-view" value="side">
          <Image src={sideView} alt="google-pixel-side" />
        </SelectionThumbnail.Item>
        <SelectionThumbnail.Item aria-label="back-view" value="back">
          <Image src={backView} alt="google-pixel-back" />
        </SelectionThumbnail.Item>
      </SelectionThumbnail.Root>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <DeviceModal />
      </div>
      <SelectionColor.Root
        defaultValue="Rot"
        aria-label="color-selection"
        onValueChange={(v: string) => console.log(v)}
      >
        <SelectionColor.Value label="Farbe: " />
        <SelectionColor.ItemWrapper>
          <SelectionColor.Item
            hexValue="#DF251F"
            aria-label="Rot"
            value="Rot"
          />
          <SelectionColor.Item
            hexValue="#D5F29F"
            aria-label="Hellgrün"
            value="Hellgrün"
          />
          <SelectionColor.Item
            hexValue="#c9B9FF"
            aria-label="Pink"
            value="Pink"
          />
          <SelectionColor.Item
            hexValue="#0B5688"
            aria-label="DunkelBlau"
            value="Dunkelblau"
          />
        </SelectionColor.ItemWrapper>
      </SelectionColor.Root>
      <div
        style={{
          display: "flex",
          gap: "32px",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "end",
        }}
      >
        <BoxPlan.Item {...allnetFlatS} />
      </div>

      <CarouselBoxDevice>
        <BoxDevicePlan.Item {...fairphone4} />
        <BoxDevicePlan.Item {...nothingPhone} />
        <BoxDevicePlan.Item {...appleIphone14} />
      </CarouselBoxDevice>

      <CarouselBoxPlan
        navigationChips={[
          { title: "50 MB/s", secondLine: "15 €" },
          { title: "150 MB/s", secondLine: "35 €" },
          { title: "250 MB/s", secondLine: "45 €" },
        ]}
      >
        <BoxPlan.Item {...fixed50mb} />
        <BoxPlan.Item {...fixed100mb} />
        <BoxPlan.Item {...fixed250mb} />
      </CarouselBoxPlan>

      <TextField id={"email"} name={"email"} placeholder={"E-mail"} />
      <TextFieldCopy id={"email"} name={"email"} placeholder={"E-mail"} />
      <TextFieldClear id={"email"} name={"email"} placeholder={"E-mail"} />
      <TextFieldModal
        id={"email"}
        name={"email"}
        placeholder={"E-mail"}
        modalContent={{ title: "Hinweis", description: "Schönen Tag!" }}
      />

      <DateField
        id={"date-field"}
        name={"date-field"}
        placeholder={"Geburtsdatum"}
      />

      <PasswordField
        id={"password-field"}
        name={"password-field"}
        placeholder={"Passwort"}
        required={true}
      />

      <ControlledDatePicker />

      <HtmlParser
        html={`<a href="https://www.congstar.de" class="btn-secondary" style="display:flex">Congstar</a>`}
      ></HtmlParser>

      <HtmlParser
        html={`<ul class="checklist"><li>Rufnummer mitbringen und 10&nbsp;€<footnote ng-cloak data-footnote-id="42807">            <footnote-index>741</footnote-index>            <footnote-header>Rufnummer mitbringen und 10 € sichern</footnote-header>            <footnote-description>                  <strong>Prepaid Rufnummer mitbringen:</strong> Gutschrift i.H.v. 10 € erfolgt bei Abschluss eines Prepaid-Neuvertrages bei gleichzeitiger erfolgreicher Rufnummernmitnahme bis&nbsp;31.12.2024.&nbsp;Die vorzeitige Rufnummernmitnahme kann unter folgenden Voraussetzungen erfolgreich durchgeführt werden: die Rufnummernmitnahme ist ab 123 Tage vor und bis zu 90 Tage nach Beendigung des alten Vertrages möglich. Die Vorgaben des bisherigen Anbieters für eine wirksame Kündigung und Rufnummernmitnahme sind einzuhalten. Insbesondere können hierfür Kosten beim bisherigen Mobilfunkanbieter entstehen, weshalb ausreichendes Guthaben auf der gekündigten Prepaidkarte vorzuhalten ist. Die Kundendaten der Verträge des bisherigen Anbieters und congstar müssen übereinstimmen. Die Rufnummernübernahme erfolgt sofort. Auf Kundenwunsch stellt der bisherige Anbieter entsprechend der hierfür geltenden Konditionen eine Ersatzrufnummer zur Verfügung.            </footnote-description>        </footnote> sichern! Weitere Informationen zur Rufnummernmitnahme findest du <a href="https://www.nicotuadev.de/hilfe-service/rufnummernmitnahme-so-gehts-kurz-mf/" title="Rufnummernmitnahme: So geht’s" target="_blank" class="modal-link">hier</a>.</li> </ul>`}
      ></HtmlParser>

      <AppTabs
        ariaLabel="eSIM Aktivierung"
        defaultValue="manual"
        tabs={[
          {
            id: "manual",
            label: "Manuell",
            content: (
              <>
                <Text size="large" variant="bold">
                  eSIM manuell aktivieren
                </Text>
                <Text size="large" variant="light">
                  Um deine eSIM manuell zu aktivieren, gehe in die Einstellungen
                  deines Geräts und gib dort die unten angegebene SM-DP+ Adresse
                  und den Aktivierungscode ein.
                </Text>
              </>
            ),
          },
          {
            id: "qrcode",
            label: "QR-Code",
            content: (
              <>
                <Text size="large" variant="bold">
                  eSIM via QR-Code aktivieren
                </Text>
                <Text size="large" variant="light">
                  Scanne den QR-Code mit der Kamera des Geräts, auf dem du die
                  eSIM einrichten möchtest. Teile dazu ggf. den QR-Code mit
                  einem anderen Gerät oder drucke ihn aus. Alternativ kannst du
                  die eSIM auch manuell einrichten.
                </Text>
              </>
            ),
          },
        ]}
      />

      <PrepaidShoppingCartMainContent />
      <ProgressBar progress={66.66} />
      <CardFilter
        description="Aktiviere den congstar Rücknahmedeal und reduziere deine monatliche Rate um durchschnittlich 20 %."
        title="congstar Rücknahmedeal"
        headlineLevel="h2"
        id="bringback-filter"
        name="bringback-filter"
        icon={<Bringback />}
        switchDescription="Vorteil nutzen"
      />

      <CardForwarding
        title="Fritz!Box 7530 AX"
        description="Schnelles WLAN für Home Office, Streaming und Gaming"
        price={{
          billingPeriod: BillingPeriod.MONTHLY,
          price: 3,
          strikeThroughPrice: 4,
        }}
        promotionTop="Aktion"
        headerImage={<Image src={fritzbox} alt="" />}
        onClick={() => {
          console.log("clicked");
        }}
      />
    </Background>
  );
}
