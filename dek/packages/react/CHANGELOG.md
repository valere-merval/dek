# @fair/react

## 59.2.0

### Minor Changes

- 3138a60: Add an accessible React Aria based `Breadcrumb` with an always-visible home link, responsive collapsing for deep paths, analytics attributes and automatic schema.org `BreadcrumbList` JSON-LD.

### Patch Changes

- 4cbc014: fix vite-config

  Refs: TD-FIX

## 59.1.4

### Patch Changes

- 9d3d2e8: chore: fix cves

  Refs: TD-6515

- Updated dependencies [9d3d2e8]
  - @fair/global-css@2.2.4
  - @fair/icons@5.5.2
  - @fair/tokens@3.1.2

## 59.1.3

### Patch Changes

- 3ff63b3: update dependencies

## 59.1.2

### Patch Changes

- 164d0db: chore: add "use client"; to every component

## 59.1.1

### Patch Changes

- 2e77065: docs: add ADR for new way of styling

## 59.1.0

### Minor Changes

- 49c70ac: docs(SelectionBoxCheckbox): fix Controlled Story

  feat(SelectionBoxRadio): allow hideLabel

  fix(SelectionBoxCheckbox): use html label tag for label prop

## 59.0.0

### Major Changes

- d0740b4: chore: make storybook toolbar fields dynamic

  chore: define brand tags for all remaining components

  chore: define backgroundColors for all remaining components

  Refs: TD-hackathon

## 58.6.2

### Patch Changes

- 7be66b5: fix(accordion): layout shift

## 58.6.1

### Patch Changes

- 7bdfb6b: feat(PriceSummary): enable Bonus Bucket

## 58.6.0

### Minor Changes

- ad8c96f: fix(Modal): remove focus outline from dialog
- 8d41869: feat: add first llm iteration to storybook

  Refs: TD-6827

### Patch Changes

- 9fb763e: feat: add OnClick back to SelectionBox

  Refs: TD-7312

## 58.5.1

### Patch Changes

- 66d7172: fix(SelectionBoxes): bug on ios when tapping outside of labels and content did not trigger selection

  Refs: TD-7312

## 58.5.0

### Minor Changes

- 488d231: feat: eslint update to version 10 and some cve fixes

  Refs: TD-6515

### Patch Changes

- @fair/icons@5.5.1

## 58.4.0

### Minor Changes

- 3982e2f: feat(ButtonPayment): add component
  feat: change paypal logo
  Refs: TD-7307 TD-6452

## 58.3.1

### Patch Changes

- e966705: feat(PriceSummary): update controlled story, to emulate realistic error scenario
  feat(Modal): add role prop to Modal.Content

  Refs: TD-7208

## 58.3.0

### Minor Changes

- cc340ca: feat(divider): add optional `text` prop to `Divider`. When set on a horizontal divider it renders a centered, brand-aware bold label between two decorative divider lines. Ignored on vertical dividers.

  Refs: TD-7321

## 58.2.0

### Minor Changes

- 1e36659: BREAKING CHANGE: updated styling of FieldMessages and MessageStatus components, providing consistent spacing between elements. Storybook examples have been updated accordingly (see messages prop of type ReactNode).

  feat(PriceSummary): added messages prop
  feat(FieldMessages): updated styling
  feat(MessageStatus): updated styling

  Refs: TD-7208

## 58.1.1

### Patch Changes

- fe29f63: fix(SelectionBox): improve a11y

## 58.1.0

### Minor Changes

- 39e52ca: docs: update contribution workflow

  Refs: TD-7165

## 58.0.0

### Major Changes

- d07dfb1: fix(SelectionBoxPayment): use PaymentMethod instead of images

### Patch Changes

- e0e2c30: fix(Combobox): changed calculation of popover width to stabilize flaky tests

  Refs: TD-7222

- 020018d: fix(SelectionBoxPayment): alignment
  fix(SelectionBox): add data-testId prop
  chore(SelectionBoxOption): make component deprecated
  chore(SelectionBoxDuration): make component deprecated
- 9f0e451: fix(SelectionBoxCheckbox/SelectionBoxRadio): link descriptive texts to input via aria-describedby

  Refs: TD-2645

## 57.7.2

### Patch Changes

- 6b001b2: fix(PaymentIcon): show gpay logo in black and white on dark backgroundColor

  Refs: TD-7219

## 57.7.1

### Patch Changes

- 9cb779e: fix(Modal): prevent modal from moving out of the viewport if safari keyboard was opened

  fix(Modal): if content is longer than viewport, the bottom padding will not be shown as intended by design

  fix(Modal): prevent body to be scrollable on Safari if Modal is open

  Refs: TD-7070

## 57.7.0

### Minor Changes

- ba97285: feat(SelectionBoxPayment): add component

### Patch Changes

- ba97285: fix(SelectionBox): update color of discount

## 57.6.0

### Minor Changes

- e77b2ac: feat: new component CardService

  Refs: TD-6937

## 57.5.0

### Minor Changes

- 14ade43: Add onSelectionChange listener, selectedKey and className to TabList

  Refs: WE-140231

## 57.4.1

### Patch Changes

- a6fc15c: feat(StickyBoxActivation): make healinelevel customizable

## 57.4.0

### Minor Changes

- 79df227: chore: npm updates

  Refs: TD-CHORE

### Patch Changes

- @fair/icons@5.5.1

## 57.3.0

### Minor Changes

- e4ae0e0: feat(MessageDiscount): discount headlines are now optional

  Refs: TD-7167

### Patch Changes

- 8fec6be: fix(SelectionBox): update color of discount

## 57.2.2

### Patch Changes

- 99c6fa4: fix(SelectionBox): alignment for penny and ja

## 57.2.1

### Patch Changes

- 0451f7f: do not render 0 if shipping cost is 0 with bonus

## 57.2.0

### Minor Changes

- 02d3059: chore: upgrade react aria

  Refs: TD-7070

## 57.1.0

### Minor Changes

- 781958e: feat(StickyBoxBottomPostpaid): Adds a bonus section to the closed sticky bottom box when there are bonuses and no shipping costs

  Refs: TD-6902 WE-138484

## 57.0.0

### Major Changes

- 6c1ab18: BREAKING CHANGE: Headline component of CardLinkList renamed to CardLinkList.Header

  feat(CardFilled): add CardFilled.Header component
  fix(CardLinkList): rename Headline component to CardLinkList.Header

  Refs: TD-6800

### Patch Changes

- 7246111: feat(PriceSummary): updated styling, added CardFilled.Root as wrapper

  Refs: TD-7011

## 56.0.2

### Patch Changes

- 7381da5: fix(SelectionBoxCheckbox): allow hide label property

## 56.0.1

### Patch Changes

- 0e5695a: fix(SelectionBoxCheckbox): export issues

## 56.0.0

### Major Changes

- 9c05f2a: feat(SelectionBoxCheckbox):
  - Add new `SelectionBoxCheckbox` component
  - Update `CheckboxGroup` and `Checkbox` to use React Aria components internally

  ### Migration Notes

  #### `defaultSelected` is no longer supported on individual `Checkbox.Item` components

  Use the `defaultValue` prop on `Checkbox.Root` instead, passing an array of pre-selected values:

  **Before:**

  ```jsx
  <Checkbox.Root name="filter-Hersteller">
    <Checkbox.Item value="apple" id="apple" defaultSelected />
  </Checkbox.Root>
  ```

  **After:**

  ```jsx
  <Checkbox.Root
    name="filter-Hersteller"
    defaultValue={["apple", "google", "samsung", "Xiaomi", "Fairphone", "Nothing"]}
  >

  ```

  #### Error messages on individual checkboxes are no longer supported

  Use the `message` prop on `CheckboxGroup.Root` to display validation messages for the group as a whole.

## 55.0.1

### Patch Changes

- Updated dependencies [19e6908]
  - @fair/icons@5.5.1

## 55.0.0

### Minor Changes

- 7cb739a: feat: add design for paymentMethods in two rows in stickyBox

  Refs: TD-6948

### Patch Changes

- 206d592: fix(HTMLParser): set ParagraphTransformer on medium for app

  Refs: TD-7038

- Updated dependencies [22000c6]
  - @fair/icons@5.5.0

## 54.9.0

### Minor Changes

- 1f060b6: chore: upgrade react to version 19

  This is no breaking change. You do not have to update your react to version 19 to update to this fair react version.

  Refs: TD-6841

### Patch Changes

- 0e5f23d: fix(BoxDevice): center long bringback info text

  Refs: TD-7013

## 54.8.4

### Patch Changes

- 5405dd5: fix(RadioGroup): fix item alignment

  Refs: TD-6991

## 54.8.3

### Patch Changes

- 9669a25: fix(Modal): adjust gap between Title and Description

## 54.8.2

### Patch Changes

- 3bff3f7: fix(ShoppingCart): memoization of CardPriceOverview and unique keys in AccordionPrice

## 54.8.1

### Patch Changes

- e677667: update dependency
- eae5819: chore: revert playwright update
- 4f97419: fix(Modal): mobile modal height with visual keyboard

  Refs: TD-7002

- Updated dependencies [e677667]
  - @fair/global-css@2.2.3
  - @fair/icons@5.4.2
  - @fair/tokens@3.1.1

## 54.8.0

### Minor Changes

- 0d40241: fix(Contingent): force contingent unit text not to wrap

## 54.7.2

### Patch Changes

- e024db6: fix(Combobox): controlled handling

  fix(Modal): modal mobile height was not correct in some szenarios

  Refs: TD-6925

## 54.7.1

### Patch Changes

- 48bc33f: fix(Modal): iOS safari keyboard moves the modal out of the viewport

  Refs: TD-6897

## 54.7.0

### Minor Changes

- a0de348: feat(CardLinkList): Add new component CardLinkList
  fix(ButtonSecondary): Update high contrast mode border styling

  Refs: TD-6736

- bcc5fd2: feat(SelectionBoxRadio): discounts are now brand ready

  Refs: TD-4025

### Patch Changes

- ee25297: feat: PaymentMethods in stickyBox examples

  Refs: TD-6948

## 54.6.1

### Patch Changes

- b220b16: fix(AccordionPriceSection): re-add "Summe" prefix to all AccordionPriceSections

  Refs: TD-6567

## 54.6.0

### Minor Changes

- 455c113: Refactor PostPaidShoppingCart, add CardBonus and Bonus Section in PostPaidShoppingCart

  Refs: TD-6567

## 54.5.0

### Minor Changes

- 5ebb2e4: feat: RadioItemText wraps ReactNode

  Refs: TD-6910

### Patch Changes

- f94a578: fix(combobox): set inputValue in useComboboxState
- Updated dependencies [faceaea]
  - @fair/icons@5.4.1

## 54.4.1

### Patch Changes

- 177ccfc: fix(SelectionBox): add Price option for Duration

## 54.4.0

### Minor Changes

- de727d5: feat(SelectionBox): add duration variant

## 54.3.1

### Patch Changes

- 14462d4: fix(Combobox): do not close popover when scrolling outside happens

  Refs: TD-6896

## 54.3.0

### Minor Changes

- e826564: feat(HtmlParser): support vertical spacer

  Refs: TD-6876

### Patch Changes

- 2018fb8: feat: export PriceSummarySubHeadline to use in PriceSummary and PriceSummary messageInfo headline

  Refs: TD-6804

## 54.2.1

### Patch Changes

- b584ebc: fix(SelectionBox): grid

  Refs: TD-4025

## 54.2.0

### Minor Changes

- d5f159f: feat(SelectionBoxRadio): add SelectionBoxRadio to decouple the SelectionBoxOption

  Refs: TD-4025

## 54.1.0

### Minor Changes

- f918a51: feat(StickyBoxPrepaid): add onCheckout Handler

  Refs: TD-6823

### Patch Changes

- 92ce202: fix(Card): adjust space mapping for app variant
  Refs: TD-6693
- f74297c: fix(CardForwarding): add data-testId on root

  Refs: TD-6745

## 54.0.0

### Patch Changes

- Updated dependencies [ed2cd69]
  - @fair/icons@5.4.0

## 53.0.1

### Patch Changes

- 5a69846: feat(ButtonPrimary): update styling
  feat(ButtonPrimaryCircle): update styling
  feat(ButtonSecondary): update styling
  feat(ButtonMicroIcon): update styling

  Refs: TD-6283

## 53.0.0

### Minor Changes

- 199c935: feat: eslint 9 update

  Refs: TD-CHORE

### Patch Changes

- Updated dependencies [199c935]
  - @fair/icons@5.3.0

## 52.0.0

### Major Changes

- 63428a7: Provide correct display name for CarouselBoxPlan

## 51.1.3

### Patch Changes

- 5173da2: fix(ButtonSecondary): removes type="button" if used as a-tag

  Refs: TD-6780

## 51.1.2

### Patch Changes

- 3fb7180: feat(Modal/ModalFootnotes): added default multibrand font styling
  BREAKING CHANGE:
  fix(Modal/ModalFootnotes): fixed styling propagation to child elements, introducing gaps. Please check for side effects if custom solutions have been used previously.

  Refs: TD-6179

- 070d3fd: fix(PriceSummary): make shippingCostFree optional for all cases

  Refs: TD-6451

- 7c5356b: feat(HTMLParser): update link styling

  Refs: 6620

## 51.1.1

### Patch Changes

- c24ad0b: feat(TableComparison): update image styling

  Refs: TD-5446

## 51.1.0

### Minor Changes

- fcb1073: fix: RadioGroup label and description correct color for brands
  fix: RadioItem correct spacing between indicator and Label
  fix: RadioGroup not render Messages Container if messages === []

  Refs: TD-6702

## 51.0.1

### Patch Changes

- 3fd6c66: fix(CardForwarding): remove vertical gap if there is no description

  Refs: TD-6595

## 51.0.0

### Major Changes

- 85adf1f: feat(PriceSummary): new PriceSummary for all types(Prepaid,Postpaid and in the future fixed). Please use new PriceSummary Component. PriceSummaryPrepaid and PriceSummaryPostpaid are now deprecated and will be deleted in the near future.

  Refs: TD-6451

### Minor Changes

- f4cfa7d: feat: new Component CardForwarding

  Refs: TD-6595

## 50.2.1

### Patch Changes

- a0c13bc: fix(Select): resolve aria-labelledby issue to readout Label correctly

## 50.2.0

### Minor Changes

- 78a5a6c: chore: upgrade styled components to v6.3.9

  Refs: TD-6595

## 50.1.0

### Minor Changes

- fa0024e: feat(TableComparison): add image prop

  Refs: TD-5446

### Patch Changes

- eca033a: feat(DateField): add multibrand styling
  feat: update high contrast styling for input field components

  Refs: TD-5642

## 50.0.1

### Patch Changes

- 9d0eb3b: feat(ComboBox): fixed empty option list when data is not ready

  Refs: TD-6649

## 50.0.0

### Major Changes

- d8af971: chore: upgrade react aria

  BREAKING: The package `@internationalized/date` needs to be updated to `3.10.1`

  Refs: TD-3740

### Patch Changes

- 46e8655: fix(Carousel): separate bleedSize left and right

  Refs: TD-6571

## 49.0.1

### Patch Changes

- 4259e7a: fix(TableInfo): remove bottom padding on last Row

## 49.0.0

### Major Changes

- 47594fa: feat(RadioGroup): new RadioGroup Component, replacing Radix RadioGroup with React Aria RadioGroup

  Breaking: RadioGroup and RadioGroup Item Component used in FilterBar and StickyBoxPlanSelection. Please look into the Storybook stories to change your code

  ## Migration:

  ### RadioGroup

  Please see new Storybook example for new integration and [react aria documentation](https://react-aria.adobe.com/RadioGroup)

  #### Main Changes
  - mandatory Label
  - RadioItem now accept children instead of text Prop
  - no subtext allowed for RadioItem
  - `OnValueChange` is now `OnChange`

  ### Filterbar

  Please see new Storybook example for new integration

  #### Main Changes

  For FilterBar.RadioGroup.Root
  - `label` of FilterBar.RadioGroup.Root is assigned via FilterBar.Root. Do not add `label` or `aria-label` to FilterBar.RadioGroup.Root or FilterBar.RadioGroup.Item.

  For FilterBar.RadioGroup.Item
  - use children instead of Prop

  ### old

  ```tsx
  <FilterBar.RadioGroup.Root
    defaultValue="beliebtheit"
    name="sorting"
    aria-label="Sortierung"
    tabIndex={0}
  >
    <FilterBar.RadioGroup.Item
      id="beliebtheit"
      value="beliebtheit"
      label="Beliebtheit"
    />
  </FilterBar.RadioGroup.Root>
  ```

  ### new

  ```tsx
  <FilterBar.RadioGroup.Root defaultValue="beliebtheit" name="sorting">
    <FilterBar.RadioGroup.Item value="beliebtheit">
      Beliebtheit
    </FilterBar.RadioGroup.Item>
  </FilterBar.RadioGroup.Root>
  ```

  ### StickyBoxPlanSelection

  #### Main Changes

  For StickyBoxSidePlanSelection.RadioGroup.Root and StickyBoxBottomPlanSelection.RadioGroup.Root
  - use `label` instead of `aria-label`.
  - add `hideLabel`-Prop to hide the mandatory label
  - add `name`-Prop
  - use `OnChange`-method

  Refs: TD-6337

- 47594fa: refactor(Checkbox): new Checkbox component, replacing Radix Checkbox with React Aria Checkbox
  feat(CheckboxGroup): added new CheckboxGroup component
  refactor(FilterBar): replaced FilterBar.Checkbox component with new FilterBar.CheckboxGroup.Root and FilterBar.CheckboxGroup.Item component

  Breaking: new Checkbox and CheckboxGroup component; removed FilterBar.Checkbox, replaced by FilterBar.CheckboxGroup.Root and FilterBar.CheckboxGroup.Item. Please look into the Storybook stories to change your code

  ## Migration:

  ### Checkbox

  Please see new Storybook example for new integration and [react aria documentation](https://react-aria.adobe.com/Checkbox)

  #### Main Changes
  - `onCheckedChange` is now `OnChange`
  - `defaultChecked` is now `defaultSelected`

  ### Filterbar

  Please see new Storybook example for new integration

  #### Main Changes
  - FilterBar.Checkbox is now replaced by FilterBar.CheckboxGroup.Root and FilterBar.CheckboxGroup.Item
  - `label` of FilterBar.CheckboxGroup.Root is assigned via FilterBar.Root. Do not add `label` or `aria-label` to FilterBar.CheckboxGroup.Root or FilterBar.CheckboxGroup.Item.

  For FilterBar.CheckboxGroup.Item
  - use children instead of `label` prop

  ### old

  ```tsx
  <FilterBar.Checkbox defaultChecked id="handy" itemCount={9} label="Handy" value="handy"/>
  <FilterBar.Checkbox defaultChecked id="tablet" itemCount={46} label="Tablet" value="tablet"/>
  <FilterBar.Checkbox defaultChecked id="gadget" itemCount={4} label="Gadget" value="gadget"/>
  ```

  ### new

  ```tsx
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
  ```

  Refs: TD-6338

## 48.0.0

### Major Changes

- 5fbebd3: refactor(List): as prop was removed from List.Body and List.Description

  BREAKING: The `as` prop was mapped internally to the `forwardedAs` prop. This is not possible anymore due to the new types of styled components since 6.2.0. Therefor you have to use `forwardedAs` instead.

  Refs: TD-3740

### Patch Changes

- 22ab015: fix(Carousel): do not scroll the page if startIndex is set

  Refs: TD-6577

## 47.0.1

### Patch Changes

- e2d26cf: fix(Carousel): fix startIndex
  fix(CarouselProductImage): do not show focus outline

  Refs: TD-6545

## 47.0.0

### Major Changes

- 8d67643: feat(Carousel): remove padding

  BREAKING: The padding is no longer desired to be more in line with other components on the page. In general this should be fine, but if you already removed the padding on your side, please check your page.

  Refs: TD-6521

## 46.1.0

### Minor Changes

- 37b8143: feat(MessageStatus): use react node as message

## 46.0.5

### Patch Changes

- 4157b02: - Wiedereinführung des `inputRef` und `comboboxRef` in der ComboBox
  - Dokumentation der Änderungen im `ComboBox.Item` (dieses kann nichtmehr gewrappt werden)

## 46.0.4

### Patch Changes

- 7f677b4: feat(MessageInfo): enable custom headline
- 4108447: docs(Select): add Story for controlled state handling

  Refs: TD-6457

## 46.0.3

### Patch Changes

- 8bf0d4d: fix(CardFilled): remove 3px top spacing in Footer

## 46.0.2

### Patch Changes

- 60697fa: fix(Carousel): simplify item wrapper handling

  Refs: TD-6417

## 46.0.1

### Patch Changes

- 65eae26: fix(PriceSummary): remove the padding, make the wording flexible, add additional headline and remove the call to action

  Refs: TD-6385

## 46.0.0

### Major Changes

- afa18dd: Allow autofocusing of the first item in the options list when ComboBox is open
  Breaking Change: ComboBox.Item prop `id` is now called `key`

  Refs: TD-6241 WE-12501

## 45.4.5

### Patch Changes

- dc6995f: fix: carousel dots

  Refs: TD-6417

- Updated dependencies [4ac2811]
  - @fair/global-css@2.2.2

## 45.4.4

### Patch Changes

- 9c36d78: fix: useStartIndex

  Refs: TD-6417

## 45.4.3

### Patch Changes

- 1205a48: fix(Modal): usercentrics modal was blocked

  Refs: TD-6396

## 45.4.2

### Patch Changes

- a62abc1: fix(Modal): defaultOpen did not work

  Refs: TD-6395

## 45.4.1

### Patch Changes

- 56d5d30: fix(Carousel): optimize focus handling on mobile

  Refs: TD-5940

- 7207fbb: fix(Modal): headline too long

  Refs: TD-6294

## 45.4.0

### Minor Changes

- 1b1fa73: feat(CardFilled): add multi brand support

  Refs: TD-6280

## 45.3.3

### Patch Changes

- 4f000cf: fix(Modal): react aria props can be overwritten

  Refs: TD-6293

- e51b049: fix(ButtonMoreDetails): set type to "button"

  fix(ButtonMicroIcon): set type to "button"

  fix(ButtonSecondary): set type to "button"

## 45.3.2

### Patch Changes

- e2e883d: fix(BoxDevice): fix bringbackPrice alignment

  Refs: TD-6289

## 45.3.1

### Patch Changes

- e728ee5: refactor(MessageDiscount): removed unneeded divider height mapping

  Refs: TD-6034

## 45.3.0

### Minor Changes

- 551158a: feat(PriceSummary): add prepaid and postpaid variant
  fix(Divider): fix vertical divider width

  Refs: TD-5442

## 45.2.0

### Minor Changes

- c743ca0: fix(Accordion): remove text-trim to fix missing gap in multiline accordions

## 45.1.3

### Patch Changes

- 6a3b1e9: fix(Modal): remove inert attribute on every change of isOpen

  Refs: TD-6293

## 45.1.2

### Patch Changes

- 9c50a52: chore: change commitlint config to accept CD and TD Refs
- a675b07: fix: optional remove inert attribut from html element with id usercentrics-root

## 45.1.1

### Patch Changes

- a6592f1: fix(Modal): increase specificity of modals close button

  Refs: TD-6293

## 45.1.0

### Minor Changes

- 3c00341: chore: npm updates

  Warning: @internationalized/date update
  Refs: TD-3740

### Patch Changes

- c5b582b: fix(Stepper): export StepperItemState type

## 45.0.2

### Patch Changes

- 8b07bea: fix(Modal): allow onOpenChange without open

  Refs: TD-6293

## 45.0.1

### Patch Changes

- fd9d4c0: fix(Modal): allow onOpenChange without open

  Refs: TD-6293

## 45.0.0

### Major Changes

- 67ef798: refactor(Modal): the radix dialog component was replaced with the React Aria Modal component to fix several bugs on mobile devices. The props definitions were not changed. Therefore it should not be breaking on consumer side. If you stumble upon let us know.

  fix(Combobox): style combobox as focused if popover is open

  refactor(Select): the radix select component was replaced with the React Aria Select component to make it compatible with other Modal solutions.

  BREAKING: The props changed and are more in line with the combobox now.

  Old

  ```tsx
  <Select.Item value="de">Deutschland</Select.Item>
  ```

  New

  ```tsx
  <Select.Item id="de" textValue="Deutschland" />
  ```

  Old

  ```ts
  interface SelectProps {
    value?: string;
    onValueChange?: (string) => void;
  }
  ```

  New

  ```ts
  import type { SelectValueKey } from "@fair/react";

  interface SelectProps {
    value?: SelectValueKey | SelectValueKey[] | null;
    defaultValue?: SelectValueKey | SelectValueKey[] | null;
    onChange?: (value: SelectValueKey | SelectValueKey[] | null) => void;
  }
  ```

  Refs: TD-6246

### Patch Changes

- 471aa35: fix(List): use web aligned font sizes for ja and penny. Align inner ListItem spacing with design.

  fix(Text): use web aligned font sizes for ja and penny.

  Refs: TD-5967

## 44.1.1

### Patch Changes

- 9a0b800: fix(StickyBoxBottom): hide collapsible content during closing animation

  Refs: TD-6111

## 44.1.0

### Minor Changes

- 9ac6c01: feat(ComboBox): make brand ready

  Refs: TD-5641

### Patch Changes

- 9ac6c01: fix(MessageStatus): make decoarative icons aria hidden

  Refs: TD-5859

## 44.0.0

### Major Changes

- 0566a1e: feat(message-discount): add component
  BREAKING CHANGES:
  - removed promotionLabel prop from MessageInfo. If this prop is needed, use MessageDiscount

  Refs: TD-5808

## 43.1.1

### Patch Changes

- 7e48454: fix(sticky-box-bottom-activation): circle button

## 43.1.0

### Minor Changes

- 5a8e762: feat(StickyBoxActivation): add new StickyBoxSideActivation and StickyBoxBottom Activation component

  Refs: TD-5646

## 43.0.0

### Major Changes

- 62ecc7c: feat(Accordion): make brand ready

  BREAKING: The gap between a accordion headline and content was reduced. If you have an interactive element as the first element in a accordion content, you have to set the prop `additionalTopPadding`. This is only necessary for interactive elements due to there focus outline.

  ```tsx
  <Accordion.Root type="single">
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
              ...
  ```

  Refs: TD-5833

### Minor Changes

- a8e47f9: feat(PriceRow): Add brand support

  Refs: TD-5734

### Patch Changes

- a4c562d: fix(SelectionBoxDuration): use "Cent" Suffix if price amount is under 0.1€

  Refs: TD-5957

## 42.4.0

### Minor Changes

- 2007593: feat(Stepper): make brand ready

  Refs: TD-5640

## 42.3.3

### Patch Changes

- 540caab: feat: optional promotionLabel for MessageInfo

## 42.3.2

### Patch Changes

- 38fbea5: fix(Accordion): focus outline of form element was cut
- f5877bd: feat(Inputs): use correct borderColor for ja brand
- 3103095: fix(MessageStatus): make decoarative icons aria hidden

  Refs: TD-5859

- a6a74a9: fix(Stepper): trimming on firefox

## 42.3.1

### Patch Changes

- 0e493d8: fix: use latest @internationlized/date dep

## 42.3.0

### Minor Changes

- 42d0206: feat(LabelPromoted): add brand support

## 42.2.0

### Minor Changes

- 124efbd: feat(Modal): make modal brand ready
- e11f78b: feat(PasswordField): add brand support
- f163b98: feat(ButtonSecondary): make brand ready

## 42.1.0

### Minor Changes

- e6b3c85: feat(ButtonPrimaryCircle): make brand ready

## 42.0.0

### Major Changes

- 27d1250: feat(modal): a11y adjustments
  Breaking Change: Rename 'description' prop in Modal.Description to 'infoText'. This property can be used to describe to the screen reader what the modal is intended for, which is not visible.

## 41.0.0

### Patch Changes

- 2766966: fix(TextField): colors for ja and penny
- Updated dependencies [535690e]
  - @fair/icons@5.2.0

## 40.11.1

### Patch Changes

- dff24e6: fix(Stepper): make it possible to add aria attributes to StepperHorizontalList

## 40.11.0

### Minor Changes

- 5ce083f: feat(MessageStatus): add brand support
- 09ff5b9: feat(MessageInfo): add brand support

## 40.10.0

### Minor Changes

- e030845: feat(TabList): new Tab component which is accessible. Please use TabList instead of the old Tabs component

## 40.9.1

### Patch Changes

- 6a71582: fix: rotate chevron only if Input-Element has open state

## 40.9.0

### Minor Changes

- 0e1b0e9: feat(MessageInfo): make accessible

## 40.8.1

### Patch Changes

- 17873e0: fix(ButtonMicroIcon): increase click area

## 40.8.0

### Minor Changes

- 843b2de: feat(TableInfo): create new component

## 40.7.2

### Patch Changes

- eb7e880: Expose more combobox props

## 40.7.1

### Patch Changes

- 7c3f5e2: feat(EnergyLabel): set cursor always to pointer when it is surrounded with a clickable area

## 40.7.0

### Minor Changes

- 8e41ed9: refactor(EnergyLabel): use ModalFootnotes

## 40.6.0

### Minor Changes

- d7d644b: feat(EnergyLabel): new component
- d841316: feat(HTMLParser): add cui-footnote transformer

## 40.5.0

### Minor Changes

- 0609662: feat(FilterBar): make accessible

  feat(Modal): add optional prop "description" to ModalContent which will be visually hidden. Changes Main Content to normal Div instead of Radix Dialog Description due to screen reader issues

### Patch Changes

- 2f0a725: fix(Carousel): prevent set focus on initial loading through resize

## 40.4.0

### Minor Changes

- 676ea48: feat(RatingBar): no icon on small views

## 40.3.0

### Minor Changes

- 3a01677: feat(Accordion): Add focus state outline for trigger and move additional text outside of header/trigger for a11y

## 40.2.2

### Patch Changes

- 8baeafe: fix(ShoppingCart): add missing props like aria-label to optional link

## 40.2.1

### Patch Changes

- 22e7b0b: feat(ShoppingCart): add onCheckout prop to postpaid components

## 40.2.0

### Minor Changes

- b3fad8e: feat(PromoterShare): new happy score graphic
- fa12b71: quick fix for CartFilled.Footer background color in other brands

## 40.1.0

### Minor Changes

- d21aabc: feat(Text): add background and text color support for all brands

## 40.0.0

### Major Changes

- 8c07adf: feat: change ja colors
  Breaking Change: the ja theme was renamed

### Minor Changes

- 6211227: feat(BoxPlan): make accessible

## 39.5.0

### Minor Changes

- 9292523: feat(ModalFootnotes): change trigger prop from `trigger?: ReactNode` to
  `trigger?: ReactNode | ButtonMoreDetailsProps` to modify the default Button

## 39.4.1

### Patch Changes

- 3980fc2: feat: zeroheight adoption feature

## 39.4.0

### Minor Changes

- e2438ec: feat(BoxDevice): add energy Label

## 39.3.0

### Minor Changes

- f87a015: feat(PasswordField): make aria-label dependent on placeholder

## 39.2.0

### Minor Changes

- 57e5461: feat(stepper): make wcag conform

### Patch Changes

- ae9de70: fix(Modal): remove gap between Modal Headline and Sticky Tablist

## 39.1.1

### Patch Changes

- 57428d8: feat(StickBox): multiline aligment for priceOptions

## 39.1.0

### Minor Changes

- 9bc069f: feat(SelectionBoxOption): set aria-label from label or labelDescription

## 39.0.0

### Major Changes

- b31f27b: A11y changes for ColorVariant

  BREAKING CHANGE [ColorVariants, BoxDevice, BoxDevicePlan, ProductOverViewItem]:
  prop changed from color: string to color: { hex: string, name: string}

### Minor Changes

- dc8b0d6: feat(Device-Box): make accessible
- 4d595b4: feat(ButtonPrimary): make component brandable

## 38.0.1

### Patch Changes

- 9772f9e: fix(combobox): render list if defaultItems are provided

## 38.0.0

### Major Changes

- e24e411: Feat: move ratingBar and PromoterShare in root folder.
  PromoterShare has fixed icon so theres is no icon Prop necessary.

### Minor Changes

- d05e3d8: feat: change bringback props for StickyBox

### Patch Changes

- fc0f5b4: fix(button-secondary): add high contrast mode
- a5bd7e0: fix(Text): links were underlined twice

## 37.0.0

### Major Changes

- 9d12983: fix(sticky-box): change bringback props to make it more flexable

## 36.4.1

### Patch Changes

- 0946547: fix: align radio items top

## 36.4.0

### Minor Changes

- 73a908e: feat(PromoterShare): make description prop optional

### Patch Changes

- 5e3ebef: feat(LoaderSkeleton): make LoaderSkeleton width responsive

## 36.3.0

### Minor Changes

- 551f4ac: feat(PromoterShare): implement component
- 4080e8a: feat(RatingBar): create the RatingBar component

## 36.2.0

### Minor Changes

- 39e877c: removed a console.log in ButtonMoreDetails.styles.ts

## 36.1.0

### Minor Changes

- 681ba76: make Divider accessible
- 7c6cebd: feat(ButtonMoreDetails): add inheritFont prop to use Button in a paragraph

## 36.0.0

### Major Changes

- 51efe96: fix(BoxDevice): rename bringback props with bringback prefix

### Patch Changes

- ca24100: fix(SelectionBoxSwitch): make area next to moreDetails clickable
- b30de1c: refactor: add container-name for container queries

## 35.6.1

### Patch Changes

- 78b9ce1: fix(box-device): move inline comment on calc up as it causes errors during compilation

## 35.6.0

### Minor Changes

- 156cae5: feat(IconTile): add container query support
- 64c1382: feat(ProgressBar): create a size override prop

### Patch Changes

- 2625039: refactor: replace unwanted :focus with :focus-visible
- 74fa53e: fix(box-device): remove , as it leads to errors

## 35.5.0

### Minor Changes

- 9383fa3: feat(ProgressBar): new colors for progressbar

## 35.4.0

### Minor Changes

- 6379f2a: feat: new IconTile component

## 35.3.0

### Minor Changes

- 7cf0333: feat(sticky-box): add bringback option

## 35.2.0

### Minor Changes

- 460cd06: feat(DatePicker): make accessible

## 35.1.2

### Patch Changes

- 78c0525: refactor(Switch): remove unnecessary aria label

## 35.1.1

### Patch Changes

- 273aa31: allow checkout-stepper to be full-width and stretch across entire page

## 35.1.0

### Minor Changes

- e5240af: feat: update the device box with forward trade in features

## 35.0.0

### Major Changes

- 1463e6a: feat: allow the price row to have an asterisk

## 34.4.0

### Minor Changes

- bc99d49: feat(selection-box-switch): add new selection box switch component

### Patch Changes

- e27e030: feat(PriceRow): make prefix prop optional

## 34.3.0

### Minor Changes

- aaaf44d: use app font when theme provider is set to "congstarApp"

## 34.2.0

### Minor Changes

- b639fdb: feat: add all switch props to the CardFilter component

## 34.1.0

### Minor Changes

- 99b02f9: feat: implement the CardFilter component

## 34.0.0

### Major Changes

- 16d54e6: feat(SelectionMemory): adjust component accessibility

  BREAKING: `SelectionMemory.Item` components need to be wrapped in `SelectionMemory.ItemWrapper`.

  ```tsx
  <SelectionMemory.Root
    defaultValue="64 GB"
    aria-label="Speicherplatz"
    onValueChange={(value: string) => console.log(value)}
  >
    <SelectionMemory.Value label="Speicher: " />
    <SelectionMemory.ItemWrapper>
      <SelectionMemory.Item aria-label="64 GB" value="64 GB">
        64 GB
      </SelectionMemory.Item>
      <SelectionMemory.Item value="128 GB" aria-label="128 GB">
        128 GB
      </SelectionMemory.Item>
      <SelectionMemory.Item disabled aria-label="512 GB" value="512 GB">
        512 GB
      </SelectionMemory.Item>
      <SelectionMemory.Item unavailable aria-label="1024 GB" value="1024 GB">
        1024 GB
      </SelectionMemory.Item>
    </SelectionMemory.ItemWrapper>
  </SelectionMemory.Root>
  ```

- c283855: fix(Selection): remove deselecting an already selected item

  BREAKING: onValueChange prop is now mandatory

## 33.5.1

### Patch Changes

- ff19669: feat(Modal): make accessible
- 7fde409: fix(Modal): do not cut of the outline if the element is on top of the modal

## 33.5.0

### Minor Changes

- 8b20283: feat: make headlineLevel BoxDevice and BoxPlan configurable

## 33.4.0

### Minor Changes

- f6c38f4: feat: add brand support for List component

## 33.3.0

### Minor Changes

- 49a8969: feat(SelectionColor): make it wcag friendly

## 33.2.2

### Patch Changes

- Updated dependencies [b56a2af]
  - @fair/icons@5.1.1

## 33.2.1

### Patch Changes

- 41aeb45: feat(price-row): right-align the second price text and allow strikethrough price display

## 33.2.0

### Minor Changes

- b49ea84: feat: ButtonSecondary only with icons

## 33.1.0

### Minor Changes

- 21ad3e6: feat(contingent): make componennt wcag conform

### Patch Changes

- d22acfe: fix(Carousel): add padding-top to not cut the promotional labels

## 33.0.0

### Patch Changes

- ce8905a: feat(availability-check-edit): make headline level customizable
- Updated dependencies [363da96]
  - @fair/icons@5.1.0

## 32.1.0

### Minor Changes

- 83f7a0e: feat(selection-thumbnail): make selection-thumbnail wcag conform
- fe6fd6a: feat(price): make component wcag conform
  Warning: visual Playwright test might fail

### Patch Changes

- 5771bf2: docs: disable untoggle for selection components

## 32.0.1

### Patch Changes

- 32e3066: removed log statement from stepper component

## 32.0.0

### Major Changes

- 98d38ad: BREAKING(AvailabilityCheckEdit): update button label handling: remove buttonAriaLabel prop so the button is always described by its text (which depends on the value of the status prop). introduce new buttonLabel prop to provide an option to optionally override the default button label.

### Minor Changes

- 983ff5c: feat: add and improve aria-labels
- 7c532b6: feat: add new ProgressBar component

### Patch Changes

- 3d6dde0: fix: combobox screenshots

## 31.0.0

### Major Changes

- 549eaa9: BREAKING(CarouselProductImage): make key prop mandatory. With this we try to make clear, that the key prop needs to be set accordingly if you need to fill the entries of this component dynamically. As described in the react docs: https://react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key you need to set the key to a dependent value to tell react when the component needs a reset.

### Patch Changes

- f500c74: feat: minor and patch npm updates
- 4cd457c: fix(Combobox): make combobox playwright test more robust

## 30.0.0

### Major Changes

- caae395: fix(Contingent): use correct unit spelling in Contingent types

  Please update the Component in your Repo

### Patch Changes

- 296e3fd: refactor: improve wording for one-off costs in StickyBoxBottomPostpaid and StickyBoxSidePostpaid
- 4bf83be: fix: bug in css specifity for button secondary
- fd8ed65: refactor(MessageStatus): remove 8px margin
- 3416023: docs(CarouselBoxPlan): update mock examples

## 29.0.0

### Major Changes

- aa93d15: feat(PrepaidShoppingCard): externalize usp list to make the component more flexible

  BREAKING: There is no fixed usp list baked in the component anymore. You have to provide the texts by yourself via the new required prop `listItems`. For further information please have a look into the Storybook examples.

### Minor Changes

- 649ef20: feat(Stepper): add gap for Stepper content
- 7279f65: feat(ButtonPrimary): allow dynamic fullWidth property based on mobile/desktop
- d060251: feat(HeadlineHighlighted): add new size and change mapping

  DESIGN BREAKING CHANGE: if you are using playwright screenshot test, please update your screenhots. Headline is now smaller on mobile

### Patch Changes

- 00527f6: feat(BoxPlan): Set pibHref optional and add buttonPrimaryLabel
- 1fafb57: chore: upgrade dependencies

  ATTENTION: Upgrading playwright can lead to changes in your screenshots, because of small changes in font rendering.

- 1fafb57: docs(CarouselBoxPlan): update mock examples
  - @fair/icons@5.0.1

## 28.1.2

### Patch Changes

- 9bd047d: fix(LoaderSkeleton): add background

## 28.1.1

### Patch Changes

- ddbfaa6: test(label): add wcag tests

## 28.1.0

### Minor Changes

- 95f4c3b: feat(list): makes component wcag conform

## 28.0.0

### Major Changes

- c8f5b5b: feat(PostpaidShoppingCart): design modifications and introduction to safe payment variants in this component.
  - **BREAKING:** The default value for `checkoutButtonText` inside all components was set to "Weiter zum Warenkorb". In current designs it can also be "Weiter zur Kasse", depending on the location of the component.
  - **NEW:** The Interface of the postpaid variants now also contain the optional `paymentMethod`.
  - **NEW:** The Interface of the prepaid variants now also contain the optional `checkoutButtonText`.
  - **FIX:** Small corrections have been made to the wording of the prepaid variants

## 27.8.0

### Minor Changes

- d5b6196: feat(MessageStatus): allow dynamic fullWidth property based on mobile/desktop

### Patch Changes

- c4c2a32: test(text): add tests for wcag
- caa99be: feat: Chip component wcag friendly
- 013a469: test(tag): add wcag tests
- 612a8b5: feat(Select): adjust component to eye-able findings

## 27.7.3

### Patch Changes

- 470fe36: fix: export all types of selectionBoxOption

## 27.7.2

### Patch Changes

- a7e6687: fix(BoxPlanCarousel): show as much dots as BoxPlans
- f116f57: docs(CarouselBoxPlan): optimize naming of navigation chips
- a7e6687: docs(CarouselBoxPlan): update mock examples

## 27.7.1

### Patch Changes

- 82f1ce0: docs(CarouselBoxPlan): update mock examples

## 27.7.0

### Minor Changes

- 2d8ed35: feat(BoxPlan): add prop to start with a specific index (which navigationChip and dot is selected)

## 27.6.0

### Minor Changes

- cfe6906: feat(BoxPlan): make text optional

### Patch Changes

- 8739602: fix(ComboBox): make loading text visible on reduced motion

## 27.5.0

### Minor Changes

- 756db80: feat(BoxPlan): add optional prop for USPs
  feat(List): add secondary colors red, line and purple as decorative colors

### Patch Changes

- 11c0b3f: feat: labelPromoted wcag optimization
- 30157ad: fix(comparison-table): remove whitespace in ids

## 27.4.0

### Minor Changes

- 51c3f37: feat: new TableComparison Component
  deprecated: ButtonAsterisk - Please use ButtonMicroIcon

### Patch Changes

- 0165c9c: fix: change min width in storybook from 320px to 360px and add ADR

## 27.3.0

### Minor Changes

- bcae4eb: feat(CarouselBoxPlan): add navigation chips

## 27.2.2

### Patch Changes

- 09f0a20: chore: update npm dependencies
- bd9fb15: allows empty array as footnotes prop for the ModalFootnotes component

## 27.2.1

### Patch Changes

- a383ed1: small changes in the wording of the prepaidShoppingCart component
- 13650cc: docs: change documentation for forms in selectionBoxOption

## 27.2.0

### Minor Changes

- dfa6f4a: feat(Switch): accessibility adjustments

## 27.1.5

### Patch Changes

- 522c8da: feat(StepperCheckout): make all steps same width

## 27.1.4

### Patch Changes

- eee2c2f: fix(sticky-box-prepaid): add payment icon in bottom variant

## 27.1.3

### Patch Changes

- 600fac9: fix: combobox options clickable within modal

## 27.1.2

### Patch Changes

- 636eb84: fix: adjust viewport in stickyboxbottom story

## 27.1.1

### Patch Changes

- 2cc0951: fix(sticky-box): add missing imports

## 27.1.0

### Minor Changes

- 251fd45: fix(sticky-box-side-prepaid): rename tarifElement to planElement and make button full witdh
- f8c8a9c: feat(availability-check-edit): remove shadow, change icon and change button

## 27.0.0

### Major Changes

- d039855: Implements new StickyBoxSide and StickyBoxBottom Design for Prepaid.

  **BREAKING:** The interface of these components has changed. `PrepaidShoppingCartProps` now requires the `tarifElement`, which consists of `gbAmount` and `type`.
  Also, it accepts the `paymentMethod` as an optional argument. The type of the `PrepaidPriceElement` has changed and now contains the optional parameter `pricePerMinute` and a change of the `billingPeriode`, which now only supports periods that are relevant for prepaid.

## 26.3.0

### Minor Changes

- 2635fe4: update font size for ButtonSecondary and add tests

### Patch Changes

- 823d463: feat: updates npm dependencies

## 26.2.0

### Minor Changes

- 60b8101: feat(availability-check-start): add dark backgorund option

### Patch Changes

- cf06170: fix: switch to container query for slider indicator

## 26.1.0

### Minor Changes

- f20cd5f: feat(stepper): add pending state

## 26.0.1

### Patch Changes

- Updated dependencies [8f99fc3]
  - @fair/icons@5.0.1

## 26.0.0

### Patch Changes

- ca8673b: fix: focus outline radius for buttonMoreDetails
- Updated dependencies [ec52433]
  - @fair/icons@5.0.0

## 25.0.0

### Major Changes

- 17f2606: BREAKING: SelectionBoxOption has new headerImage type

### Minor Changes

- c4c7b6d: feat(combobox): make accessible

### Patch Changes

- 17f2606: feat(SelectionBoxOption): make more accessible

## 24.5.2

### Patch Changes

- 10e755f: docs: fix code blocks

## 24.5.1

### Patch Changes

- 6010913: docs: consolidate docs and add necessary docs to storybook
- Updated dependencies [6010913]
  - @fair/global-css@2.2.1
  - @fair/icons@4.3.2

## 24.5.0

### Minor Changes

- 33550f7: feat: add AppTabs component

## 24.4.0

### Minor Changes

- a3d2801: feat(selection-box-option): add inline image

## 24.3.0

### Minor Changes

- dd2c9ef: feat(HeadlineHighlighted): add congstarApp, ja and penny themes
  feat(HeadlineHighlighted): add red, lime and purple decorative colors

### Patch Changes

- 6a8b96d: Select: add form example in storybook

## 24.2.0

### Minor Changes

- 80fe59f: feat(Select): accessibility adjustments

## 24.1.1

### Patch Changes

- edc3016: Combobox: make buttonAriaLabel optional

## 24.1.0

### Minor Changes

- 21ed6de: feat(MessageInfo): enable fullWidth with same called property

## 24.0.1

### Patch Changes

- acd6a34: fix ios touch handling for select component

## 24.0.0

### Major Changes

- a667eac: fix: BREAKING: rename fingerprint icon to touchid to workaround addblocker blocking the icon

### Patch Changes

- Updated dependencies [a667eac]
  - @fair/icons@4.3.1

## 23.2.1

### Patch Changes

- 9cef16e: fix(Carousel): fix minWidth of BoxDevice to ensure spacing in Carousel
- fc9b2fa: docs(device-box-plan): add terabyte example
- 924b3fe: fix(Select): onValueChange console error fix

## 23.2.0

### Minor Changes

- 1248356: feat(device-box): Change the type of the memorySize property to `number[] | string[]`. So now you can give an array like `memorySizes={["256 GB", "512 GB", "1 TB"}]` and it will render the memory sizes correctly. It is now possible to render terabytes of memory. A number array is still compatible. Any number less than 8 will automatically be displayed as TB. Please use the string array in the future.
  feat(device-box-plan): Change the type of the memorySize property to `number[] | string[]`. So now you can give an array like `memorySizes={["256 GB", "512 GB", "1 TB"}]` and it will render the memory sizes correctly. It is now possible to render terabytes of memory. A number array is still compatible. Any number less than 8 will automatically be displayed as TB. Please use the string array in the future.
- 82bd975: feat: add tokens for ja!, penny and congstar app
- 1dcbe3c: feat: carousel a11y enhancements

### Patch Changes

- 69ff405: fix: remove duplicated ..rest in PriceRange
- Updated dependencies [82bd975]
  - @fair/global-css@2.2.0

## 23.1.0

### Minor Changes

- 13736ae: feat: add ProductOverviewItems

## 23.0.0

### Patch Changes

- Updated dependencies [eda8c52]
  - @fair/icons@4.3.0

## 22.3.0

### Minor Changes

- b96de37: feat: new component PriceRow

## 22.2.0

### Minor Changes

- 3b180ef: feat: add fullWidth property to MessageStatus

## 22.1.3

### Patch Changes

- 673a866: test(PasswordField): add accessibility tests

## 22.1.2

### Patch Changes

- 9e11782: fix(DateField): add initial placeholder value

## 22.1.1

### Patch Changes

- 869350d: fix: add focus border ButtonMoreDetails
- Updated dependencies [ef17c46]
  - @fair/tokens@3.1.0

## 22.1.0

### Minor Changes

- f7143b6: chore: export missing types from MessageStatus and FieldMessages

## 22.0.1

### Patch Changes

- 51431dd: fix: replace CSS 'inset' property with 'top', 'right', 'bottom' and 'left' for legacy browser support

## 22.0.0

### Major Changes

- 3d3dc0a: feat(MessageStatus): add outlined variant, new pending status type and Icons to the message text depending on status type
  BREAKING: rename component `Status` to `MessageStatus`

  BREAKING: We changed the way you can show a error message on input components.
  Previously, the implementations and prop interfaces differed from component to component.
  With this change you can show multiple status messages for every input component in the same way.

  The following components are changed:
  - Checkbox
  - Combobox
  - DateField
  - DatePicker
  - PasswordField
  - RadioGroup
  - Select
  - SelectionBoxOption
  - SelectionBoxDuration
  - TextField
  - TextFieldClear
  - TextFieldCopy
  - TextFieldModal

  Changes for every component:
  - name prop is mandatory
  - errorMessages and aria-errormessage are replaced with a messages array

  ```tsx
  <TextField
    id="mail"
    name="mail"
    placeholder="E-Mail"
    required={true}
    messages={[
      {
        message: "Deine Angabe ist ungültig.",
        type: "error",
      },
      {
        message: "Die Email-Adresse konnte nicht gefunden werden.",
        type: "error",
      },
    ]}
  />
  ```

## 21.2.0

### Minor Changes

- 330b3f4: feat(stepper): make items clickabel

## 21.1.0

### Minor Changes

- d2e431b: feat(Combobox): add async functionality

## 21.0.0

### Patch Changes

- Updated dependencies [3da0ea9]
  - @fair/global-css@2.1.0
  - @fair/icons@4.2.0

## 20.2.1

### Patch Changes

- Updated dependencies [4183bd9]
  - @fair/tokens@3.0.0

## 20.2.0

### Minor Changes

- 805e6c8: feat(price): add suffix

## 20.1.1

### Patch Changes

- 97e84d3: fix: add type attribute to textfield icon button

## 20.1.0

### Minor Changes

- a4013c8: fix: decrease padding for all cards on mobile

### Patch Changes

- aa93268: fix(Modal): adjust modal content overflow

## 20.0.0

### Major Changes

- a9ee3f0: feat(MessageInfo): add outlined variant
  BREAKING: rename component from `InfoMessage` to `MessageInfo`

### Minor Changes

- 809d44c: feat(Combobox): add async functionality (Beta)

## 19.2.1

### Patch Changes

- bf79a8f: fix(CarouselProductImage): use container query instead of media query

## 19.2.0

### Minor Changes

- 8c7e9be: feat(CarouselProductImage): create component

### Patch Changes

- 98b5777: fix(PasswordField): adjust change Password Icon

## 19.1.0

### Minor Changes

- ab61b2e: feat(stepper): add Checkout stepper + fix spacing in vertical stepper
- d9d58bc: feat(stepper): add Checkout stepper + fix spacing in vertical stepper

### Patch Changes

- ab61b2e: feat: updated readme for gitlab move
- af66870: fix(Tabs): adjust Tablist width and dropdown visibility
- Updated dependencies [ab61b2e]
  - @fair/global-css@2.0.2
  - @fair/icons@4.1.2

## 19.0.0

### Major Changes

- 8d4deff: feat(TextField): make floating label mandatory
  BREAKING: prop `hasPlaceholder` and `hideFloatingLabel` have been removed and `placeholder` is mandatory now

### Patch Changes

- e0dde81: feat: add wcag tests for headline highlighted

## 18.6.2

### Patch Changes

- e3604d7: feat: enhance wcag for radio and checkbox
- Updated dependencies [28dbdb6]
  - @fair/tokens@2.6.0

## 18.6.1

### Patch Changes

- Updated dependencies [28aac48]
  - @fair/tokens@2.5.0

## 18.6.0

### Minor Changes

- 04a6d18: feat(HtmlParser): add linkTransformerOptions prop

## 18.5.1

### Patch Changes

- e4c01d2: fix(Selection): make component controllable with value prop
- c138330: fix: checkbox story for wcag documentation

## 18.5.0

### Minor Changes

- 60c3608: feat(RadioGroup): Accessibility enhancements
- 60c3608: feat(checkbox): Accessibility enhancements

## 18.4.0

### Minor Changes

- 2ca3173: feat(Stepper): outline completed steps on Stepper component

## 18.3.2

### Patch Changes

- 95586e0: feat: allow flexbox layouts in list description

## 18.3.1

### Patch Changes

- 4dc406d: fix: remove role heading from headline
- 3434b46: fix(FilterBar): add scrollable Dropdown Menu

## 18.3.0

### Minor Changes

- e2b0fc9: fix(date-picker): year turn over bug in firefox and safari

## 18.2.0

### Minor Changes

- ba97040: fix: increase font size for text fields on mobile

## 18.1.2

### Patch Changes

- a390c98: fix: increase zIndex for selectContent

## 18.1.1

### Patch Changes

- f8fab60: docs: for mobile optimization

## 18.1.0

### Minor Changes

- e2ce2bb: feat(button-primary): enable screenreader

### Patch Changes

- 6992a21: fix(HtmlParser): render correctly if there is no wrapping html tag

## 18.0.0

### Major Changes

- 11b2e5e: feat(Contingent): mobile optimization
  BREAKING: changed size prop from `size: string` to `size: {mobile: string, desktop: string}`
- 11b2e5e: feat(Price): mobile optimization
  BREAKING: changed size prop from `size: string` to `size: {mobile: string, desktop: string}`

## 17.1.0

### Minor Changes

- 5e273fd: feat(button-primary): compatible with high contrast mode

## 17.0.2

### Patch Changes

- 4579c87: fix(carousel): changed slide indicator color for background color white

## 17.0.1

### Patch Changes

- Updated dependencies [b744b48]
  - @fair/icons@4.1.1

## 17.0.0

### Major Changes

- fe3edb8: feat(List): use autoScaling if size is not set

  BREAKING: size `small` was removed, use `medium`, `large` or remove size prop for autoScaling

## 16.6.0

### Minor Changes

- 1c53108: feat(accordion): mobile optimization

## 16.5.4

### Patch Changes

- 2cafd33: fix(button-primary): disbale loading state in As Anchor With Start Icon story

## 16.5.3

### Patch Changes

- b332974: fix(HtmlParser): html-react-parser does not work with nextJs if it is not in the nextJs repository itself. Therefore html-react-parser is a peer dependency now

## 16.5.2

### Patch Changes

- e423b90: fix: small typo

## 16.5.1

### Patch Changes

- 0ea55d5: fix(HtmlParser): style attribute does not break the component

## 16.5.0

### Minor Changes

- fb526ca: feat: Card Component

## 16.4.0

### Minor Changes

- 3b20d6e: feat: add billing period "TWELVE_MONTHS" to local copy of pricing lib"

## 16.3.0

### Minor Changes

- ab1131e: feat(button-primary-circle): add focus ring
- ab1131e: feat(button-primary): make accesible

## 16.2.0

### Minor Changes

- ae64424: feat: remove DataVolume component, use Contingent component instead
- ef3e69d: feat: add large header Image for SelectionBoxOption

## 16.1.0

### Minor Changes

- fb71406: feat: list without headlines

## 16.0.1

### Patch Changes

- Updated dependencies [5411aa8]
  - @fair/icons@4.1.0

## 16.0.0

### Major Changes

- 34a518a: feat: remove congstar/pricing

## 15.0.0

### Major Changes

- 399f480: BREAKING(ButtonPrimary): remove minWidth on ButtonPrimary
- BREAKING(ButtonPrimaryCircle): remove size Prop on ButtonPrimaryCircle

### Patch Changes

- Updated dependencies [c0bb8b7]
  - @fair/tokens@2.4.0

## 14.18.4

### Patch Changes

- ffe3a5f: fix: carousel text inidcator always on mobile

## 14.18.3

### Patch Changes

- a3226a0: feat: add large size for buttonMoreDetails
  fix: grid issue in availabilty check

## 14.18.2

### Patch Changes

- 29fa262: feat: update react-aria dependencies

## 14.18.1

### Patch Changes

- adab891: fix: text Indicator for carousel with more slides than 6

## 14.18.0

### Minor Changes

- b40baaf: feat(PasswordField): add optional revealPassword prop

### Patch Changes

- a89ec55: fix: font size in linkTransformer

## 14.17.0

### Minor Changes

- 1162f35: feat(InfoMessage): add InfoMessage component

## 14.16.1

### Patch Changes

- be111ac: fix: text-wrap-balance for secondaryPriceInfo on BoxDevice

## 14.16.0

### Minor Changes

- 2c0af3e: feat(button-secondary): add focus state
- f103b12: feat: new HtmlParser component

## 14.15.0

### Minor Changes

- 7fc2e08: fix(DeviceBox): prevent double click

## 14.14.0

### Minor Changes

- 20b6199: fix(availability-check-edit): truncate address line

### Patch Changes

- 502e2da: fix: position of icon for inline links in text component

## 14.13.3

### Patch Changes

- cecd27c: fix: remove padding for horizontal stepperContent

## 14.13.2

### Patch Changes

- 406ff56: fix(TextField): set type button on icon button

## 14.13.1

### Patch Changes

- 2dd8a43: fix: heading when months are between two years

## 14.13.0

### Minor Changes

- 52cffe4: feat: price without billingPeriod

### Patch Changes

- 1aeac7c: fix: change text size for selection components

## 14.12.4

### Patch Changes

- aef5b19: StickyBoxBottomPostpaid: add column gap on label
- Updated dependencies [5494b1a]
  - @fair/tokens@2.3.0

## 14.12.3

### Patch Changes

- 6401eb0: fix: center icon in TextFields
  fix: adjust spacing in AvailabilityCheckEdit
  fix: add trim attribute in Headline and Text
  fix: fullWidth in DateField

## 14.12.2

### Patch Changes

- 20a66ff: fixes disabled button look

## 14.12.1

### Patch Changes

- 39af1ce: fix(Stepper): sizing and positioning of indicator

## 14.12.0

### Minor Changes

- 5440c88: feat: add new components for availability check

### Patch Changes

- f40eb87: fix(datePicker):
  add hover state
  fix disabled state for chevrons
  fix cursor on day legend
  add hint for @internationalized/date

## 14.11.0

### Minor Changes

- ced1f66: feat: export generic carousel component

## 14.10.3

### Patch Changes

- 9f15a1d: feat(Stepper): update Component to count steps automatically

## 14.10.2

### Patch Changes

- f58f905: fix: downgrade typescript version

## 14.10.1

### Patch Changes

- 97e0188: fix(accordion): price display in header

## 14.10.0

### Minor Changes

- 7802bc9: feat: new component DatePicker

## 14.9.0

### Minor Changes

- 1ed99aa: feat(stepper): stepper components in beta state (needs a bit more testing)

### Patch Changes

- 98b1a0d: fix: minor fixes in ButtonAsterisk and ComboBox.types

## 14.8.3

### Patch Changes

- 8784ec8: fix: add ref for input in combobox
- ae804b4: fix: missing bracket in SelectionBoxOption ItemWrapper

## 14.8.2

### Patch Changes

- 0083c49: fix(Combobox): color on popover

## 14.8.1

### Patch Changes

- e93ab85: feat: PriceRange with footnotes

## 14.8.0

### Minor Changes

- 25cdd25: feat(ComboBox): create component

## 14.7.0

### Minor Changes

- 6da4205: feat(ComboBox): create component

### Patch Changes

- 4b125d4: fix: no zeros in cent price section

## 14.6.4

### Patch Changes

- 354fff8: fix: loaderSpinner on button centered

## 14.6.3

### Patch Changes

- d461e2b: fix: use selectionBoxOption without form

## 14.6.2

### Patch Changes

- 95f6dc2: fix: select check icon black when using with fair-ui

## 14.6.1

### Patch Changes

- c02eeca: feat: add loading to spinner to trailinng and leading icon button

## 14.6.0

### Minor Changes

- 0d64670: fix(Select): don't use white text color when used with fair ui
- e5eff21: fix: use more memory in the runners
- c7304b0: fix: select option clicks link underneath

### Patch Changes

- 548c313: fix: change the name and id for textfield stories to work properly
  feat: remove number arrows when textfield is set to type number

## 14.5.3

### Patch Changes

- 643ccc9: fix: zIndex in theme and components
- cfc8d0a: feat: create the LoaderSpinner component and implement it for the ButtonPrimary
- Updated dependencies [bacfd45]
- Updated dependencies [643ccc9]
  - @fair/tokens@2.2.0

## 14.5.2

### Patch Changes

- 05bc43b: fix(FilterBar): close modal on resize medium breakpoint only

## 14.5.1

### Patch Changes

- a56ec43: fix(Filterbar): close modal on resize x, not y

## 14.5.0

### Minor Changes

- 32a4624: feat(filterbar): add onOpenChange prop

## 14.4.0

### Minor Changes

- 5b757f6: feat: allow the modal steps to be displayed without an arrow back by default
- b46e2ec: fix: a comment describing the Select component

### Patch Changes

- 9c05cc2: fix(SelectionBoxOption): set maximum of grid cols to 2

## 14.3.0

### Minor Changes

- 8e1b1ab: feat: create a null option for the select
- e0d359b: feat(SelectionBoxOption|SelectionBoxDuration): allow differing display names

### Patch Changes

- eba7c0c: increase specifity of BoxPlan and BoxDevice
- 9c4d97d: fix(carousel): dispatch more scroll events

## 14.2.1

### Patch Changes

- 00bc2dc: fix(carousel): dispatch scroll-event on select
- ae8d720: fix: microsoft edge autofill input color override

## 14.2.0

### Minor Changes

- 34ab035: fix: broken export for the select component

## 14.1.0

### Minor Changes

- 03623e5: feat: implement the Select component and factor out overlaps with the TextField into shared components

## 14.0.3

### Patch Changes

- ebe4a27: fix: modal height set to dynamic viewport height

## 14.0.2

### Patch Changes

- d0fdcd6: remove vitest example completely

## 14.0.1

### Patch Changes

- 8511a2d: minor fixes for Contingent

## 14.0.0

### Major Changes

- 0dfbd3b: feat: add new Contingent component, this depricate's the DataVolume Component. Contingent also allows displaying download speed.
  feat: update BoxPlan to use the new Contingent component's instead of the old DataVolume's

### Patch Changes

- b79e938: feat: increase zIndex for filterbar dropdown
- a87807b: fix: hover on selectionBox components

## 13.5.3

### Patch Changes

- de957f4: fix(filterbar): - adjust styling to fix some issues - add data-testid to label of filter item - fix mobile filter values so that scrolling is possible

## 13.5.2

### Patch Changes

- 22f684b: fix(filterbar): use flex-wrap only up to md viewport and enable checkbox props
- 0102ffb: update dependency
- d7133fa: fix: add fullwidth to mediaQuery for TextField
- Updated dependencies [0102ffb]
  - @fair/global-css@2.0.1
  - @fair/tokens@2.1.1

## 13.5.1

### Patch Changes

- 93e24b0: fix(selection-memory): add $ to unavailable propy

## 13.5.0

### Minor Changes

- 4f513e0: fix: design findings for the new selection box features

### Patch Changes

- c234d37: fix: remove trimFont from ButtonSecondary so you can use the button in inline text

## 13.4.0

### Minor Changes

- 589485d: DateField: expose onChange/onValueChange methods
  DateField: hide caret in input segments

### Patch Changes

- 42d68ba: Sticky Box: Radio buttons im richtigen Stil dargestellt

  ColorVariants: Position des Textes justiert

  Modal: Close Button positioniert

## 13.3.0

### Minor Changes

- f896810: fix(TextField): color bug

## 13.2.0

### Minor Changes

- b45d5ce: TextField: fullWidth prop
- 5af876e: fix: some findings regarding the css reset

### Patch Changes

- 306a36d: fix: add css styling to decouple modal and tabs components
- 27a3b10: SelectionMemory: add unavailable prop

## 13.1.0

### Minor Changes

- 7251d81: feat: the selection box now supports extra property combinations
- 6bf3835: fix(css-reset): bugs

### Patch Changes

- 9310352: fix name of selectionColor Value
- e694e57: feat: change mock inside storybook

## 13.0.1

### Patch Changes

- 60e303c: feat: trigger pipeline for react package

## 13.0.0

### Major Changes

- fb4d262: feat: remove the css resett whilst keeping all styles

### Minor Changes

- 61d6074: feat: allow filters to be disabled
- ae5657d: fix(FilterBar): hover color
- c99487f: feat: allow consumers to add forward as instead of as in the headline
- 3c7b95e: fix: remove unit test error messages

### Patch Changes

- Updated dependencies [fb4d262]
- Updated dependencies [3c7b95e]
  - @fair/global-css@2.0.0
  - @fair/icons@4.0.0

## 12.6.0

### Minor Changes

- 2513419: feat(Modal): implement modal steps
- 3ad41bf: feat: update pipeline
- 2513419: feat(FilterBar): create component

## 12.5.0

### Minor Changes

- 9f4695a: feat: update pipeline

## 12.4.0

### Minor Changes

- 1be6498: feat: update dependencies

## 12.3.0

### Minor Changes

- 360520d: feat(pipeline): refactor the pipeline

## 12.2.0

### Minor Changes

- 0dd378d: feat: add PasswordField component
- ce78036: feat: add DateField component

## 12.1.0

### Minor Changes

- 8273804: feat(Divider): implement orientation prp
- 0006772: chore(dependencies): update
- 26fe34c: fix: make price component display cents again

## 12.0.3

### Patch Changes

- ea26f4d: fix(Box): textcolor was invisible

## 12.0.2

### Patch Changes

- f60ba6d: fix npm token for fair registry

## 12.0.1

### Patch Changes

- 54d0a84: fix: props documentation in storybook
- 4c264ce: fix: use new npm token for local os agnostic visual test

  fix(TextField): textcolor was invisible

## 12.0.0

### Major Changes

- c9f93c2: BREAKING(BoxComponents): you can use your own or a framework Anchor implementation for the ButtonPrimary

### Minor Changes

- b573e5e: fix: remove checkbox hover

## 11.0.0

### Major Changes

- e436a60: BREAKING(BoxDevice): you can use your own or a framework Anchor implementation for the ButtonPrimary

### Patch Changes

- 430c90b: fix(device-box-plan): stop on-click bubbling when clicking pib link

## 10.0.0

### Major Changes

- 6ae06e5: fix: explicitly set all font colors
  BREAKING_CHANGE

## 9.1.0

### Minor Changes

- 10f19fb: new registry for npm packages
- 11f26e7: test: playwright tests for the existing carousel components

### Patch Changes

- 4a6f462: fix(BoxPlan): optimize storybook mock data
- da9e982: fix(selection-box): remove console.log from styles
- Updated dependencies [10f19fb]
  - @fair/global-css@1.1.0
  - @fair/icons@3.1.0
  - @fair/tokens@2.1.0

## 9.0.3

### Patch Changes

- Updated dependencies [5b65b6f]
  - @fair/icons@3.0.0

## 9.0.2

### Patch Changes

- Updated dependencies [7bc647c]
  - @fair/global-css@1.0.0

## 9.0.1

### Patch Changes

- 729d9b0: fix changelog

## 9.0.0

### Major Changes

- 1daba60: BREAKING: new set of shadow tokens for all components
- 1cd9992: BREAKING(BoxPlan): price and dateVolume are ReactNodes now to choose between Single or Range representation of Price and DataVolume. Therefore we created dedicated components:
  - BoxPlan.Price
  - BoxPlan.PriceRange
  - BoxPlan.DataVolume
  - BoxPlan.DataVolumeRange

  #### Old

  ```tsx
  <BoxPlan
    price: {{
      prefix: "ab",
      price: 20.0,
      billingPeriod: BillingPeriod.MONTHLY
    }}
    dataVolume: {{
      unit: "GB",
      amount: 15
    }}
    // ...
  />
  ```

  #### New

  ```tsx
  <BoxPlan
    price: {<BoxPlan.Price
      prefix="ab"
      price={20.0}
      billingPeriod={BillingPeriod.MONTHLY}
    />}
    dataVolume: {<BoxPlan.DataVolume unit={"GB"} amount={15} />}
    // ...
  />
  ```

- #### New with Range
  ```tsx
  <BoxPlan
    price: {<BoxPlan.PriceRange
      priceRange={{ minimum: 5, maximum: 20 }}
      billingPeriod={BillingPeriod.MONTHLY}
    />}
    dataVolume: {<BoxPlan.DataVolumeRange
      unit={"GB"}
      amountRange={{ minimum: 10, maximum: 16 }}
    />}
    // ...
  />
  ```

### Minor Changes

- 2e55200: feat: update some minor dependencies
- af87f3d: test: visual tests should be executable on windows

### Patch Changes

- Updated dependencies [1daba60]
- Updated dependencies [6a64fb1]
  - @fair/tokens@2.0.0

## 8.0.0

### Major Changes

- aaad9eb: BREAKING(BoxComponents): Rename components to align them with old components
  - DeviceBox renamed to BoxDevice
  - DeviceBoxPlan renamed to BoxDevicePlan
  - PlanBox renamed to BoxPlan
  - DeviceBoxCarousel renamed to CarouselBoxDevice
  - PlanBoxCarousel renamed to CarouselBoxPlan

- BoxDevice, BoxDevicePlan and BoxPlan have a new href prop which renders the ButtonPrimary as a anchor. This href address will be opened if the user clicks everywhere on the box.

  **Therefore no wrapping anchor is necessary anymore**:

  #### Old

  ```tsx
  <a href="www.congstar.de">
    <BoxDevice
    // ...
    />
  </a>
  ```

  #### New

  ```tsx
  <BoxDevice
    href="www.congstar.de"
    // ...
  />
  ```

### Minor Changes

- 17d80dd: feat: add TextField component
- 397f5a2: feat: update-all-minor dependencies

### Patch Changes

- Updated dependencies [397f5a2]
  - @fair/tokens@1.17.0

## 7.5.0

### Minor Changes

- db14880: doc: add documentation for ResizeObserver and IntersectionObserverMocks
- af05852: feat: rename Skeleton

### Patch Changes

- e7fcfa9: design findings for planBoxCarousel
- 147c764: add new box shadows
- b7dc75a: update box shadows for components
- Updated dependencies [147c764]
  - @fair/tokens@1.16.0

## 7.4.1

### Patch Changes

- 0119376: test: add possibility to set the theme in visual tests

## 7.4.0

### Minor Changes

- fe828cb: feat!: SelectionBoxes no longer have a size Prop
  BREAKING CHANGE
- 5cd9e76: feat: add the skeleton component for the device box

## 7.3.0

### Minor Changes

- ef84ca1: fix: disable changesets for now

## 7.2.2

### Patch Changes

- 1a5a5df: DeviceBoxPlan: optional onclick

## 7.2.1

### Patch Changes

- d4de7cf: DeviceCarousel: forward props to child component

## 7.2.0

### Minor Changes

- 88a088e: feat: skeleton component

### Patch Changes

- 3e4412d: feat: update pnpm
- Updated dependencies [3e4412d]
  - @fair/global-css@0.8.2
  - @fair/icons@2.3.2
  - @fair/tokens@1.15.2

## 7.1.2

### Patch Changes

- 91de04e: feat: adr for cypress vs playwright
- da551d5: fix: add custom box-shadow for sticky box
- 10bf839: feat: update pnpm
- Updated dependencies [10bf839]
  - @fair/global-css@0.8.1
  - @fair/icons@2.3.1
  - @fair/tokens@1.15.1

## 7.1.1

### Patch Changes

- 1957beb: fix(DeviceBoxCarousel): calculation of gap percentage per slide

## 7.1.0

### Minor Changes

- 673666c: feat: update node version for ci file

### Patch Changes

- 89d211a: feat: dont buiod storybook when versioning
- a7bf1d0: fix: open pdf link of sticky plan selection box in new tab
- 4ecfba2: button hover fix
- Updated dependencies [673666c]
  - @fair/global-css@0.8.0
  - @fair/icons@2.3.0
  - @fair/tokens@1.15.0

## 7.0.2

### Patch Changes

- Updated dependencies [61275ae]
  - @fair/icons@2.2.0

## 7.0.1

### Patch Changes

- Updated dependencies [17b2378]
  - @fair/icons@2.1.0

## 7.0.0

### Major Changes

- cbbb6d1: feat: apply team-3 suggestions for the StickyBoxPlanSelection component

  BREAKING CHANGE

### Minor Changes

- 07b04f6: BREAKING CHANGE: new icons
- 69c5696: feat: update a lot of dependencies
- a9ff50c: fix: remove a title prop that had no effect
- 7be3810: fix: findings for the StickyBoxPlanSelection components

### Patch Changes

- f74f308: fix(DeviceBoxCarousel): simplify usage and align gaps
- Updated dependencies [07b04f6]
- Updated dependencies [69c5696]
  - @fair/icons@2.0.0
  - @fair/global-css@0.7.0
  - @fair/tokens@1.14.0

## 6.7.1

### Patch Changes

- aad290d: If initialCredit of PrepaidShoppingCart is a decimal a comma should be used as delimiter instead of a point

## 6.7.0

### Minor Changes

- 880ebd6: fix: design fixes for deviceBoxPlan and planSelection
- 9371c92: BREAKING CHANGE: Type + Property adjustment für das PrepaidPriceElement

## 6.6.1

### Patch Changes

- 9ba7336: add carousel for devices

## 6.6.0

### Minor Changes

- 1492509: feat: update the design of the devicebox
- d385ae3: feat: sticky box for plan selection
- 6ec8289: fix: findings for the PlanBox
- 9d12f6f: feat: create DeviceBoxPlan
- 43d922e: feat: create the sticky box for the device list

## 6.5.0

### Minor Changes

- 97b4140: feat: plan-box

## 6.4.0

### Minor Changes

- 8f7905a: feat: create a grid component for the selection box

### Patch Changes

- 06e231b: feat(planbox): Add new PlanBox Component
- ac4ab8f: feat(carousel): carousel findings

## 6.3.1

### Patch Changes

- ba88a87: stickybox-bottom-prepaid: fix price font size

## 6.3.0

### Minor Changes

- 4fdb63d: new colors for states

### Patch Changes

- Updated dependencies [4fdb63d]
  - @fair/tokens@1.13.0

## 6.2.2

### Patch Changes

- 60d80d4: fix stickybox-bottom data-testid tags

## 6.2.1

### Patch Changes

- 77af1c9: fix stickyBoxBottom width on samsung mobile screens

## 6.2.0

### Minor Changes

- 3509c7f: feat: create the carousel component

## 6.1.3

### Patch Changes

- 27fd919: fix modal title break on small screens

## 6.1.2

### Patch Changes

- ba1dd8d: docs: add storybook with anchor tags

## 6.1.1

### Patch Changes

- 4b43937: adjust prepaid-shopping-cart starter kit text

## 6.1.0

### Minor Changes

- 351ea86: Styling findings for the StickyBox components

### Patch Changes

- 6081ca1: fix(DeviceBox): gap of price if there is no prefix, suffix or strikeThrough

## 6.0.1

### Patch Changes

- 9671b97: fix: gap strikeThroughPrice in Price and SelectionBoxDuration component
- bdbded2: refactor: use ElementRef and ComponentPropsWithoutRef in all components

## 6.0.0

### Major Changes

- 23f5b64: feat(DeviceBox)!: create the devicebox list component

  BREAKING CHANGE: change the device box to now be a compound component

## 5.12.0

### Minor Changes

- 9a64039: fix: chip findings
- bd54219: Using the pricing lib prop for easier handling of prepaid prices in the shopping carts

## 5.11.0

### Minor Changes

- d5e07fa: feat(Modal): simplify Modal.Description so that a div inside is not necessary

  fix(Divider): the divider was not visible in a flexbox

## 5.10.0

### Minor Changes

- a05b360: feat(Chip): create the Chip component
- f207b06: Prepaid shopping carts get an extra prop with planId to show plan specific texts
- 794056e: refactor: internal typing for styled-components and disabled controls in storybook

### Patch Changes

- 92be5e3: update to node 20
- Updated dependencies [92be5e3]
  - @fair/global-css@0.6.1
  - @fair/icons@1.4.1
  - @fair/tokens@1.12.1

## 5.9.1

### Patch Changes

- 81bb0ef: fix(ButtonPrimary): make it possible to overwrite styling of the button from outside

## 5.9.0

### Minor Changes

- e54e581: Add more details to drawer view of StickyBoxBottomPostpaid (shipping costs, different monthly prices), and open the first accordion item initially if expanded

### Patch Changes

- 0dddfef: fix(ButtonPrimary): minWidth should not be set with the fullWidth prop

## 5.8.0

### Minor Changes

- 4821f08: Refactor StickyBox and add StickyBoxSide

## 5.7.0

### Minor Changes

- 20985fa: move the old Typography components and create new ones, which scale with the viewport
- 0a7edba: fix: selection-color size

## 5.6.2

### Patch Changes

- 9bdf648: fix(SelectionColor): selected color can not be deselected
- 9bdf648: fix(SelectionColor): set borderColor depending on background color

## 5.6.1

### Patch Changes

- eeeb5b6: fix(selectionColor): set outline color if selected
- 7511884: fix(SelectionThumbnail): set gap to 8

## 5.6.0

### Minor Changes

- 8af07ce: fix price per unit not showing without options, "." too much
- 602387c: Fix a bug where Shipping Costs inside Shopping Carts could be <= 0

### Patch Changes

- b020817: chore: add documentation for css utilities

## 5.5.0

### Minor Changes

- 960da16: feat: export trimFont function, so it can be used in every component
- 7ac46e3: improve stories
- 4371738: Move shipping costs in shopping cart out of one time prices (google shopping feed)
- 5d76ee7: Seperating the StickyBoxBottomShoppingCart into 2 components: StickyBoxBottomPrepaid and StickyBoxBottomPostpaid inside the folder StickyBoxBottomShoppingCart

### Patch Changes

- 08463bf: fix(DeviceBox): wrap price rows if too large

## 5.4.0

### Minor Changes

- 84cd2c9: create selection-thumbnail component
- 6b6e204: refactor the box component
- 7628d4c: feat(DeviceBox): align min and max width
- bfd9b41: create selection color component

### Patch Changes

- d1f4bb3: chore(Tabs): remove outdated comment
- 6b928cd: fix(ButtonPrimary): set default min-width

## 5.3.1

### Patch Changes

- 062ec14: fix: storybook release

## 5.3.0

### Minor Changes

- c227296: center align the tablist

### Patch Changes

- 5ad15e6: fix(DeviceBox): alignment

  feat(DeviceBox): show strike through price only if greater than price

## 5.2.1

### Patch Changes

- ec16e31: fix: release
  - @fair/icons@1.4.0

## 5.2.0

### Minor Changes

- 04fb7ac: feat: run tsc on commit
- 9cfb08b: add the option to create a custom theme
- 8f57f6d: create tab-group component
- a211672: create device box component
- 8f57f6d: tabs component
- fa389fe: update non-major dependencies

### Patch Changes

- Updated dependencies [fa389fe]
  - eslint-config-custom@0.1.0
  - @fair/tokens@1.12.0
  - @fair/icons@1.4.0

## 5.1.0

### Minor Changes

- d015285: update minor dependencies and expose theme variants

### Patch Changes

- 6f811bc: only show strikethrough when unequal to price
- Updated dependencies [d015285]
  - @fair/tokens@1.11.0

## 5.0.2

### Patch Changes

- e749585: fix accordion text position

## 5.0.1

### Patch Changes

- 763d104: fix accordion header alignment
- 7c13364: fix: remove container queries for price box
- 3c89ec9: fix duplicated space in strike trough total price

## 5.0.0

### Major Changes

- bf1900a: Breaking: more Details Link Prop for selectionBox

### Minor Changes

- 998c631: SelectionMemory component

### Patch Changes

- c5939a4: fix button primary styles
- 532ebb0: revert some changes in SelectionBox components. remove the breaking change also
- 3608c4d: fix: selectionBoxOption alignment fix
- 66172f5: add new size and space tokens
- Updated dependencies [66172f5]
  - @fair/tokens@1.10.1

## 4.1.2

### Patch Changes

- caa72ba: fix accordion price alignment
- 873e3b5: fix hex values for colorVariants story

## 4.1.1

### Patch Changes

- f9da090: refactor ColorVariants component
- a9828fb: storybook update

## 4.1.0

### Minor Changes

- 3605dfc: fix(price): simplify types, handle empty footnote arrays
- 83d66e9: restructure components internally

  expose missing component types

### Patch Changes

- 60550a1: add strikethrough price to selectionBoxDuration

## 4.0.0

### Major Changes

- 47075cf: BREAKING upgrade styled components to version 6

## 3.4.0

### Minor Changes

- 423a5a7: fix selection box styling

### Patch Changes

- Updated dependencies [423a5a7]
  - @fair/global-css@0.6.0
  - @fair/tokens@1.10.0
  - @fair/icons@1.4.0

## 3.3.0

### Minor Changes

- 462d6b6: apply accordean findings

### Patch Changes

- Updated dependencies [462d6b6]
  - @fair/global-css@0.5.0
  - @fair/tokens@1.9.0
  - @fair/icons@1.3.0

## 3.2.0

### Minor Changes

- dcbc073: alignment fix for StickyBoxBottomShoppingCart SumHeader

### Patch Changes

- aa80b22: modal design findings

## 3.1.0

### Minor Changes

- 54c05f1: new component: StickyBoxBottom + StickyBoxBottomShoppingCart

### Patch Changes

- acd8fd6: fix(Price): prevent empty footnotes array

## 3.0.0

### Major Changes

- 414db36: feat: new component ModalFootnotes
  BREAKING(Price): footnotes will be an array and will be rendered with the ModalFootnotes component internally

### Minor Changes

- ec4be69: feat(Modal): use Headline component for title and simplify animations

### Patch Changes

- 8987c13: fix: simplify styling for radio buttons and fix for safari iOS
- 2459a87: fix stretched list bullet points on mobile

## 2.15.1

### Patch Changes

- Updated dependencies [231b8ea]
  - @fair/global-css@0.4.4
  - @fair/icons@1.2.2

## 2.15.0

### Minor Changes

- d980e7a: implement black headlines
- cfe129b: add the color display component
- 3c629c0: create switch component
- 177648e: apply findings for the headline component

### Patch Changes

- 004a0c9: add new typography tokens
- Updated dependencies [004a0c9]
  - @fair/tokens@1.8.2

## 2.14.0

### Minor Changes

- abd8a04: feat: add new modal component

## 2.13.0

### Minor Changes

- 16322ca: fix shirt sizes for the headline component

### Patch Changes

- 8e9d765: make header image changeable in storybook

## 2.12.0

### Minor Changes

- 1e50fd4: make the headlines responsive

## 2.11.3

### Patch Changes

- ab9b2dd: discountText Prop is now a ReactNode

## 2.11.2

### Patch Changes

- 48e5509: fix indicator cursor for disabled radio buttons

## 2.11.1

### Patch Changes

- 50aff37: fix: labelBoxed fails to render in unit test in seperate repo

## 2.11.0

### Minor Changes

- 3572c9f: fix the discount text for the boxed label subcomponent

### Patch Changes

- f110ffa: fix naming of grey colors
- 139d5c8: fix disabled state for radio indicators
- e11c7cd: fix(accordion): add cursor pointer
- acfb9c0: cleanup story text in selectionBox Option

## 2.10.0

### Minor Changes

- 5845124: feat(SelectionBox): use css selector has to color the parent of the checked input

### Patch Changes

- 38fcc84: fix zero price styling
- 6265380: fix(selectionBox): button more details click should not select the input
- 421776b: remove stories that not should be used by applications

## 2.9.0

### Minor Changes

- 2f37b71: add Accordion component

### Patch Changes

- f041373: fix(RadioGroup): fix displayNames
- d991e1a: storybook enhancements for accordion
- d882238: fix currency positioning in price component
- 9711edc: fix(RadioGroup): stories

## 2.8.0

### Minor Changes

- 16aecf8: fix findings for the selection boxes
- 3dee259: feat(Pricing): adapt color depending on theme

### Patch Changes

- 22ffea9: fix(Divider): fix lightGrey & darkGrey colors

## 2.7.0

### Minor Changes

- 2f7a980: refactor the SelectionBox component
- be70fde: fix height of label-promoted component

## 2.6.1

### Patch Changes

- 86f1e44: fix name of DataVolume Component

## 2.6.0

### Minor Changes

- b19da6f: fix minor findings for the button radio and checkbox

## 2.5.0

### Minor Changes

- c6285bf: storybook improvements in labelPromotion & list

### Patch Changes

- ec5224e: dont show zero cent prices
- Updated dependencies [242ee84]
  - @fair/icons@1.2.1

## 2.4.0

### Minor Changes

- ce63a6a: BREAKING CHANGE: rename SelectionBoxTariff to SelectionBoxPlan
- 691dc36: BREAKING CHANGE: rename decorationColor to decorativeColor in List Component

## 2.3.0

### Minor Changes

- 624a8a3: add the DataVolume component
- 67c6e3b: circle button large size
- 1ee4370: create the price component
- 5fc9608: create a container for selectable components

### Patch Changes

- Updated dependencies [624a8a3]
- Updated dependencies [1ee4370]
  - @fair/icons@1.2.0

## 2.2.1

### Patch Changes

- 74ab258: add 6px design token
- Updated dependencies [74ab258]
  - @fair/tokens@1.8.1

## 2.2.0

### Minor Changes

- 01ed734: feat: radio button component
- 0158a4b: headline-highlighted: forward classname to wrapper
- c3310a3: add LabelPromotion component
- e94fd79: set default component colors dependent on theme

### Patch Changes

- db4ca08: fix list item bulletpoint

## 2.1.1

### Patch Changes

- Updated dependencies [327e4cc]
  - @fair/tokens@1.8.0

## 2.1.0

### Minor Changes

- 2648821: upgrade storybook
- e15fbda: Add the checkbox component

## 2.0.2

### Patch Changes

- 2ac689c: 16px tag black typo variant
- 8fcefd9: fix hover of buttonPrimary
- Updated dependencies [d64c50b]
- Updated dependencies [b255702]
- Updated dependencies [2ac689c]
- Updated dependencies [2ac689c]
- Updated dependencies [2ac689c]
  - @fair/tokens@1.7.0
  - @fair/global-css@0.4.3

## 2.0.1

### Patch Changes

- Updated dependencies [3b0024a]
  - @fair/icons@1.1.0

## 2.0.0

### Major Changes

- 7b41157: BREAKING buttons renamed
  PrimaryButton -> ButtonPrimary
  PrimaryButtonCircle -> ButtonPrimaryCircle
  SecondaryButton -> ButtonSecondary
- 11f281e: BREAKING: minimal variant from PrimaryButton is seperate component now PrimaryButtonCircle
- 9d216cd: BREAKING ButtonPrimary and ButtonSecondary have dedicated startIcon and endIcon props now to allow specific padding with or without icon

### Minor Changes

- 1cb940a: fix headline-highlighted height & multi-line-gap
- 6b78d5c: add wrapper to Divider and Typography to have storybook controls
- 3000ae2: simplify storybook stories

## 1.14.0

### Minor Changes

- b1d95c2: expose interfaces for all components
- 4e7a728: add highlighted-headline react component

## 1.13.1

### Patch Changes

- f51df3f: add a few fixes
- Updated dependencies [f51df3f]
  - @fair/global-css@0.4.2

## 1.13.0

### Minor Changes

- f0ec7a0: add radix slot to buttons

### Patch Changes

- 5cf45e0: add third color for divider
- Updated dependencies [621e02e]
  - @fair/global-css@0.4.1

## 1.12.1

### Patch Changes

- 56bea1e: 16px tag black typo variant
- Updated dependencies [56bea1e]
- Updated dependencies [56bea1e]
  - @fair/tokens@1.6.0

## 1.12.0

### Minor Changes

- 2cc7e3f: make improvenments upon the list component, such as spacing, adding html props and passing a ref
- b9c356e: create the divider component
- 4d38683: optimize primaryButton
- ca0d75a: optimize tests to use testing library and user events

### Patch Changes

- Updated dependencies [2cc7e3f]
- Updated dependencies [b9c356e]
  - @fair/global-css@0.4.0

## 1.11.0

### Minor Changes

- 37f792d: change global styles for the a tag and update their documentation

### Patch Changes

- Updated dependencies [37f792d]
  - @fair/global-css@0.3.0

## 1.10.0

### Minor Changes

- a615f2c: import Global Styles in Storybook

## 1.9.0

### Minor Changes

- 23a8007: remove global-styles from theme Provider
- 174a1db: fix the design findings

## 1.8.1

### Patch Changes

- 7e38359: vite config for rollup

## 1.8.0

### Minor Changes

- d368ba4: primary button

### Patch Changes

- 6715918: package.json reference to dist files
- Updated dependencies [d368ba4]
  - @fair/icons@1.0.1

## 1.7.2

### Patch Changes

- 4526231: fixed build name

## 1.7.1

### Patch Changes

- b0ece44: secondary button
- Updated dependencies [b0ece44]
- Updated dependencies [87b7f9b]
- Updated dependencies [80d9ca1]
  - @fair/icons@1.0.0

## 1.7.0

### Minor Changes

- 858a26d: Renovate update non major dependencies

### Patch Changes

- Updated dependencies [858a26d]
  - @fair/tokens@1.5.0
  - @fair/icons@0.2.0

## 1.6.1

### Patch Changes

- Updated dependencies [503f454]
  - @fair/icons@0.1.1

## 1.6.0

### Minor Changes

- e7b30cf: add decorative color black to list component

## 1.5.0

### Minor Changes

- ae6d47a: add parameter to change theme per story

## 1.4.0

### Minor Changes

- 03820bf: Add List component

### Patch Changes

- 3a3cb65: fix token mapping
- Updated dependencies [89bbc4b]
- Updated dependencies [3a3cb65]
  - @fair/global-css@0.2.1
  - @fair/tokens@1.4.1

## 1.3.1

### Patch Changes

- Updated dependencies [b54ebac]
- Updated dependencies [b54ebac]
  - @fair/tokens@1.4.0

## 1.3.0

### Minor Changes

- 62112c6: simplify storybook stories
- 00963df: Implement Icons In React

### Patch Changes

- d31a3ff: add an intro page to storybook
- Updated dependencies [3da369e]
- Updated dependencies [00963df]
  - @fair/tokens@1.3.0
  - @fair/icons@0.1.0

## 1.2.1

### Patch Changes

- e489d74: correct nginx config for storybook 7

## 1.2.0

### Minor Changes

- e140228: create typography component
- 3b5b712: simplify typography and remove box component

### Patch Changes

- Updated dependencies [e140228]
- Updated dependencies [3b5b712]
  - @fair/tokens@1.2.0

## 1.1.0

### Minor Changes

- 073888c: global styles usage in react

### Patch Changes

- Updated dependencies [073888c]
  - @fair/global-css@0.2.0
  - @fair/tokens@1.1.0

## 1.0.2

### Patch Changes

- 0e19e81: use corepack to install pnpm
- Updated dependencies [0e19e81]
  - @fair/tokens@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [bf1e243]
  - @fair/tokens@1.0.1

## 1.0.0

### Major Changes

- ec31702: first major release to try a fresh start

### Patch Changes

- Updated dependencies [ec31702]
  - @fair/tokens@1.0.0

## 0.2.2

### Patch Changes

- Updated dependencies [6b3b351]
  - @fair/tokens@0.2.2

## 0.2.1

### Patch Changes

- e596a74: release
- 893b7f1: changed color of box
- Updated dependencies [e596a74]
- Updated dependencies [893b7f1]
  - @fair/tokens@0.2.1

## 0.2.0

### Minor Changes

- f41c339: trying to release

### Patch Changes

- Updated dependencies [f41c339]
  - @fair/tokens@0.2.0

## 0.1.1

### Patch Changes

- c5b9595: trigger new release
- Updated dependencies [c5b9595]
  - @fair/tokens@0.1.1

## 0.1.0

### Minor Changes

- 8134b1b: react kickstart

## 0.0.2

### Patch Changes

- Updated dependencies [50fa32d]
- Updated dependencies [36c90c3]
  - @fair/tokens@0.1.0

## 0.0.1

### Patch Changes

- 4d6f21c: Kickstart React Package
