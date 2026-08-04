import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
import { Typography } from "../Typography/Typography";
import { disableControls } from "../../stories/utils/disableControls";
import { AccordionRootProps } from "./Accordion.types";
import { BillingPeriod, formatPrice } from "../../utils/pricing";
import {
  contentOfDeliveryContent,
  highlightsContent,
  shippingInfoContent,
  technicalDataContent,
} from "./Accordion.mock";
import { Fieldset } from "../Input/shared/Fieldset";
import { SelectionBoxOption } from "../Input/SelectionBox/SelectionBoxOption";
import { ButtonMoreDetails } from "../Button/ButtonMoreDetails";
import { CardFilled } from "../Card/CardFilled";
import { AllowedBackgroundColors } from "../../theme/theme";

const allowedBackgroundColors: AllowedBackgroundColors = {
  congstarWeb: ["black", "white", "darkGrey", "lightGrey"],
  congstarApp: ["black", "white", "darkGrey", "lightGrey"],
  ja: ["jaAgave20", "jaGeneralWhite", "jaAgave80", "jaAgaveOutlinesSecondary"],
  penny: [
    "pennyNeutralLightGrey",
    "pennyNeutralWhite",
    "pennyRed",
    "pennyRedDark",
  ],
};

const meta = {
  component: Accordion.Root,
  argTypes: {
    collapsible: {
      control: "boolean",
      if: { arg: "type", eq: "single" },
    },
    size: {
      control: "radio",
      options: ["medium", "large"],
    },

    ...disableControls<AccordionRootProps>(["asChild", "type"]),
  },
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
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single",
    withSeparators: false,
    collapsible: true,
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          Accordion Item Ex nulla voluptate ex do ullamco
        </Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>Accordion Item</Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
    withSeparators: false,
    defaultValue: ["item-1", "item-2"],
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          Accordion Item Ex nulla voluptate ex do ullamco
        </Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>Accordion Item</Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const WithSeparators: Story = {
  args: {
    type: "single",
    withSeparators: true,
    collapsible: true,
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          Accordion Item Ex nulla voluptate ex do ullamco
        </Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>Accordion Item</Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">Accordion Content</Typography>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const WithPrice: Story = {
  args: {
    type: "single",
    withSeparators: false,
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header price={20}>1. bis 3. Monat</Accordion.Header>
        <Accordion.Content isIndented>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="BodyLight14">
              Tarif (24 Monate Laufzeit)
            </Typography>
            <Typography variant="BodyLight14">{formatPrice(20)}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="BodyLight14">TIDAL HiFi</Typography>
            <Typography variant="BodyLight14">{formatPrice(0)}</Typography>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header price={20}>4. bis 6. Monat</Accordion.Header>
        <Accordion.Content isIndented>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="BodyLight14">
              Tarif (24 Monate Laufzeit)
            </Typography>
            <Typography variant="BodyLight14">{formatPrice(20)}</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="BodyLight14">TIDAL HiFi</Typography>
            <Typography variant="BodyLight14">{formatPrice(0)}</Typography>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const WithInfo: Story = {
  args: {
    type: "single",
    withSeparators: false,
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Header info="mtl. Kündbar">
          Congstar Prepaid
        </Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            consequuntur deleniti dolore dolorum, enim esse expedita, explicabo
            illum iste nulla porro quod ratione unde. Adipisci animi architecto
            blanditiis culpa excepturi necessitatibus nostrum odit quis quos
            sunt. Consequatur eos itaque minima natus nihil nobis obcaecati
            perferendis, placeat sit vero voluptatibus voluptatum.
          </Typography>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header info="mtl. Kündbar">
          Congstar Postpaid
        </Accordion.Header>
        <Accordion.Content isIndented>
          <Typography variant="BodyLight14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            magni similique temporibus ullam voluptates? Excepturi odit officia
            officiis porro. Adipisci alias aspernatur beatae debitis eligendi,
            eos eum facere illo impedit libero maiores minima modi nesciunt
            nobis odit quos temporibus voluptatibus. Consequuntur, harum ipsam?
            Dolores facilis harum quidem voluptate voluptates. Deserunt?
          </Typography>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const DeviceDetails: Story = {
  args: {
    type: "single",
    withSeparators: false,
    collapsible: true,
  },
  render: (args) => (
    <Accordion.Root {...args}>
      <Accordion.Item value="highlights">
        <Accordion.Header>Highlights</Accordion.Header>
        <Accordion.Content isIndented>{highlightsContent}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="technicalData">
        <Accordion.Header>Technische Daten</Accordion.Header>
        <Accordion.Content isIndented>{technicalDataContent}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="contentOfDelivery">
        <Accordion.Header>Lieferumfang</Accordion.Header>
        <Accordion.Content isIndented>
          {contentOfDeliveryContent}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="shippingInfo">
        <Accordion.Header>Versandinformationen</Accordion.Header>
        <Accordion.Content isIndented>{shippingInfoContent}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const SelectionBoxes: Story = {
  args: {
    type: "single",
    withSeparators: false,
    collapsible: true,
    defaultValue: "tarife",
  },
  render: (args) => (
    <CardFilled.Root backgroundColor="white" size="medium">
      <Accordion.Root {...args}>
        <Accordion.Item value="tarife">
          <Accordion.Header>Alle weiteren Tarife anzeigen</Accordion.Header>
          <Accordion.Content additionalTopPadding>
            <form>
              <Fieldset aria-labelledby="optionen">
                <SelectionBoxOption.RadioGroup.Root
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                  defaultValue="item-1"
                  name="item1"
                >
                  <SelectionBoxOption.Grid>
                    <SelectionBoxOption.Root name="10GB">
                      <SelectionBoxOption.Item
                        label="10 GB"
                        labelDescription="AllnetFlat S Extra mit GB+"
                        price={6}
                        billingPeriod={BillingPeriod.MONTHLY}
                        moreDetails={
                          <ButtonMoreDetails
                            role="link"
                            linkText="Tarifinformationen"
                            onClick={() => {
                              alert("mehr details");
                            }}
                          />
                        }
                      >
                        <SelectionBoxOption.RadioGroup.Item value="item-1" />
                      </SelectionBoxOption.Item>
                    </SelectionBoxOption.Root>
                    <SelectionBoxOption.Root name="15GB">
                      <SelectionBoxOption.Item
                        label="15 GB mit längerem Text"
                        labelDescription="AllnetFlat S Extra mit GB+"
                        price={6}
                        billingPeriod={BillingPeriod.FOUR_WEEKS}
                      >
                        <SelectionBoxOption.RadioGroup.Item value="item-2" />
                      </SelectionBoxOption.Item>
                    </SelectionBoxOption.Root>
                  </SelectionBoxOption.Grid>
                </SelectionBoxOption.RadioGroup.Root>
              </Fieldset>
            </form>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </CardFilled.Root>
  ),
};
