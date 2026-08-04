[//]: # "Readme.md is generated based on readme/README_Template.md. Do not change Readme.md directly."

# @fair/react - React Komponenten

[[_TOC_]]

## Voraussetzungen

Um die @fair Packages installieren zu können, muss die private npm Registry konfiguriert sein (.npmrc).

```bash
@fair:registry=https://git.congstar.net/api/v4/projects/1047/packages/npm/
//git.congstar.net/api/v4/projects/1047/packages/npm/:_authToken="${CONGSTAR_GITLAB_FAIR_NPM_TOKEN}"
```

## Installieren

Für alle React Komponenten und die Globalen Styles steht das `@fair/react` npm package zur Verfügung.

Die Icons werden separat über `@fair/icons` bereitgestellt.

### pnpm

```bash
pnpm add @fair/react
```

### yarn

```bash
yarn add @fair/react
```

### npm

```bash
npm add @fair/react
```

## Global Styles

### Für Konsumenten der React Library (Theme Provider)

Falls in eurem Repo die React Library konsumiert wird, müsst ihr die GlobalStyles aus `@fair/react` importieren und als Komponente im ThemeProvider einbinden.
Das Einbinden des ThemeProviders und der Globalstyles ist für alle Konsumenten der React Library mandatorisch.

```tsx
import { GlobalStyles, ThemeProvider } from "@fair/react";

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      ...
    </ThemeProvider>
  );
}
```

### Für alle die kein React aber einen package manager verwenden

Das NPM package beinhaltet lediglich die minifizierten CSS Dateien und kann über den im Repo verwendeten package manager installiert werden:

```shell
pnpm add @fair/global-css
```

Die Dependency liefert die folgenden Dateien mit:

- main.min.css
- globalReset.min.css

Zusätzlich werden noch folgende markenspezifische CSS Dateien angeboten:

- mainJa.min.css
- mainPenny.min.css

### Inhalt der Global Styles

- ein CSS reset (optional durch Einbindung der `globalReset.min.css`)
- Überschreiben der root font-size
- Bereitstellung der font-faces

## CSS Utilities

### up

"up" ist eine Shorthand Funktion um media queries für den mobile first Ansatz zu vereinfachen.

`up("md")` wird zu `@media (min-width: 768px)`

#### Verwendung

```tsx
import styled, { css } from "styled-components";
import { up } from "@fair/react";

export const ModalContainer = styled.button(
  ({ theme }) => css`
    font: ${theme.typography.LabelBold14};

    up("md") {
      font: ${theme.typography.LabelBold16};
    }
  `,
);
```

> **Achtung**
>
> Eine down Funktion ist explizit nicht gewünscht weil sie dem mobile first Ansatz wiedersprechen würde.

### trimFont

Schriften haben unterschiedliche Abstände nach oben und unten. Wenn diese aneinander angeordnet werden müssen kann das sehr schwierig sein.
In Zukunft wird das CSS Feature [text-box-trim](https://caniuse.com/css-text-box-trim) hier helfen in dem es diese Abstände entfernt.

![leadingTrim](https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/08/1gXfB7QR3LpWwJEuA12drqw.gif?resize=1000%2C355&ssl=1)

[https://css-tricks.com/leading-trim-the-future-of-digital-typesetting](https://css-tricks.com/leading-trim-the-future-of-digital-typesetting/)

Leider wird das Feature bisher nur vom Safari unterstützt. Die Funktion "trimFont" soll hier Abhilfe schaffen und schneidet passend zur übergebenen Typography-Variante die Abstände ab.

#### Verwendung

```tsx
import styled, { css } from "styled-components";
import { trimFont } from "@fair/react";

export const Button = styled.button(
  ({ theme }) => css`
    font: ${theme.typography.LabelBold16};

    ${trimFont("LabelBold16")}
  `,
);
```

#### Attribut trimmed in Text und Headline Komponente

Die Komponenten Text und Headline verfügen über das Property 'trimmed'. Dieses entfernt die Abstände der entsprechenden Schrift.

#### Verwendung in Text oder Headline

```tsx
<Text size="large" variant="light" trimmed>
  Text
</Text>
```

# Contribution Workflow

Im folgenden wird beschrieben wie eine Contribution durch EntwicklerInnen außerhalb von Team Deko durchgeführt werden können.

## 1) Vorraussetzungen

- Team Deko und Contribution Team haben jeweils eine Story zur Contribution in ihrem Sprint
  - Dieser Contribution Workflow sollte in den Stories verlinkt sein
- Team Deko definiert welche Deko-Team EntwicklerInnnen die Contribution betreuen

## 2) Kickoff

- Deko-Team EntwicklerInnnen laden zum Kickoff zwischen Contributor EntwicklerInnnen und Deko-Team EntwicklerInnnen ein
- Die beiden Jira-Stories werden abgeglichen insbesondere die Akzeptanzkriterien und deren funktionale Anforderungen
- Es wird geprüft ob die Designs in den Design Systemen fertig sind
- Es wird geprüft ob die Designs zwischen Layouts und Design-Systemen einheitlich sind
- Falls nötig wurde geprüft ob ein Name für die neue Komponente definiert wurde
- Grundlegendes Vorgehen und Best Practices im fair Repo werden besprochen
  - [Generatoren nutzen](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-development--docs#erstellen-einer-neuen-komponente)
  - [CSS Utilities nutzen](https://fair-react.itg-wirk.narf.tech/?path=/docs/getting-started-css-utilities--docs)
  - [Visual Regression Tests schreiben / erweitern](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-visual-regression-tests--docs)
  - in Storybook Datei [erlaubte Brands und Hintergrundfarben definieren](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-make-app-ready--docs)
  - TODOs.md abarbeiten (Wird von Generator erzeugt)

## 3) Programming

- Pair-Programming ist gewünscht
- Best Practices im fair Repo werden verfolgt
- Refactoring-Potenziale werden frühzeitig an Team Deko gemeldet
  - Refactoring findet bevorzugt außerhalb der Contribution-Story statt
  - Kleinere Anpassungen (Mini-Refactorings) können ggf. direkt mitgemacht werden
- Deko-Team EntwicklerInnnen werden regelmäßig auf den aktuellen Stand der Entwicklung gebracht um frühzeitig unterstützen zu können
- Der Entwicklungsstand sollte frühzeitig und regelmäßig in einem Merge Request als Draft verfügbar sein

## 4) Qualitätssicherung

- Ist die Komponente fertig wird vom Deko Team eine Qualitätssicherung durchgeführt
  - Code Review
  - Design Review
  - Test
- Mögliche Findings werden von Contributor EntwicklerInnnen und/oder Deko-Team EntwicklerInnnen umgesetzt

## 5) Review-Prozess

- Der Review-Prozess wird von Team Deko intern durchgeführt
- Mögliche Findings werden vo Deko-Team EntwicklerInnnen umgesetzt

## Vorzeitiges Release

- Ist ein vorzeitiges releasen notwendig, kann mit Hilfe von [Snapshots](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-snapshot-release--docs) gearbeitet werden.
- Darüber hinaus können Nacharbeiten definiert werden um ein vorzeitiges Release ohne Snapshot zu ermöglichen. Hier muss zwischen den Teams definiert werden wann diese in welcher Form umgesetzt werden.

## Ownership

- Die Ownership der Komponenten geht nach Contribution in die Verantwortung von Team Deko über.

## Development

### Erstellen einer neuen Komponente

Führe dazu folgenden Befehl aus:

```shell
pnpm generate
```

> **Info**
>
> Wir nutzen [plop](https://plopjs.com/) zum Erstellen einer neuen Komponente. Die Templates hierfür liegen in `.plop-templates`.

> **Visual Meta Datei befüllen**
>
> Ergänze in der `visual.meta.ts` mindestens sinnvolle `categories`, prägnante `visualTraits` sowie konkrete `useWhen`- und bei Bedarf `notUseWhen`-Einträge. Ziel ist, dass LLMs die Komponente anhand ihres Aussehens und ihres Einsatzzwecks zuverlässig von ähnlichen Komponenten unterscheiden können.

### Release

Wir nutzten [changesets](https://github.com/changesets/changesets) für Release und Versionierung.
Führe folgenden Befehl aus:

```shell
npx changeset
```

Dadurch wird ein Merge Request `Version Package` erzeugt. Sobald dieser gemerged wurde, wird automatisch ein neues Release erzeugt.

> **Achtung**
>
> Ohne Changeset kann kein Release erzeugt werden!

## Make a Component App Ready

1. replace deprecated `composeBackgroundColorStories` with `composeBrandBackgroundColorStories` in `componentname.stories.portable.ts`
2. rename background color story names, e.g. `stories.WithBlackBackground` to `stories.WithCongstarWebBlackBackground` in `componentname.test-visual-ct-tsx`
3. replace `supportedBackgroundStories` map with `testDescribeAllowedBackgrounds` function
4. run `pnpm test:visual:os-agnostic:start -g componentname` to generate the new brand background color screenshots
5. compare the new screenshots with the old ones and make sure they are identical
6. remove the old background color screenshots
7. map colors, fonts, radii and spacings based on brands
8. add allowedBackgroundColors to `componentname.stories.tsx`
9. set `readyForCongstarApp`, `readyForJa` and `readyForPenny` in `componentname.stories.tsx`

### Examples

The following components have already been converted for Congstar App, Ja and Penny:

- `CardOutlined`
- `CardFilled`
- `List`
- `Price`
- `HeadlineHighlighted`
- `ButtonPrimary`
- `Text`

## Visual Regression Tests

### Einleitung

Um unsere Komponenten auch visuell abzusichern erzeugen wir [Snapshots](https://playwright.dev/docs/test-snapshots) mit Playwright.

Diese können mit dem Playwright [UI-Mode](https://playwright.dev/docs/test-ui-mode) komfortabel ausgeführt werden:

```shell
 pnpm test:visual:local:ui
```

### Betriebssystem unabhängig

Snapshots die mit dem UI-Mode erzeugt wurden sind spezifisch zum Betriebssystem erzeugt worden und können übergreifend im Team und der Pipeline nicht verwendet werden.
Playwright empfiehlt hier auf ein [Docker-Iamge](https://playwright.dev/docs/docker) zurück zu greifen.

Initial muss der Build einmalig ausgeführt werden:

```shell
 pnpm test:visual:os-agnostic:build
```

Danach können mit start alle Playwright Tests ausgeführt werden.

```shell
 pnpm test:visual:os-agnostic:start
```

Da dies sehr lang dauert, empfehlen wir lokal nur die Tests auszuführen, die zur Komponente gehören an der man Änderungen vornehmen möchte:

```shell
 pnpm test:visual:os-agnostic:start -g PasswordField.test-visual-ct.tsx
```

### Aktualisieren der Snapshots

Mit `--update-snapshots` können die Snapshots aktualisiert werden.

Für alle Komponenten:

```shell
 pnpm test:visual:os-agnostic:start --update-snapshots
```

Für nur eine bestimmte Komponente:

```shell
 pnpm test:visual:os-agnostic:start --update-snapshots -g PasswordField.test-visual.tsx
```

Alternativ kann auch der alte Snapshot gelöscht und der Test regulär ausgeführt werden.

### Testergebnisse im Fehlerfall

Im Fehlerfall liegen die Testergebnisse im Ordner "test-results".

## Snapshot Release

### Create a Snapshot Release

- develop your changes in a branch like you normaly do
- if you are ready to create a release, create a branch based on your development branch with the prefix `snapshot/nameOfYourSnapshot`
- use `npx changeset` to create a changeset for this Snapshot branch
- create a Merge Request for this Snapshot branch
- when the pipeline is finished a new Merge Request `Version Packages Snapshot` was created that should merge to your Snapshot branch
- when the Merge Request `Version Packages Snapshot` was merged, a new Tag with the name `@fair/react@0.0.0-nameOfYourSnapshot-20260226125025` was created and released

### Use a Snapshot Release

You can use this version with the name of the newly created tag.

```sh
pnpm add @fair/react@0.0.0-nameOfYourSnapshot-20260226125025
```

### Make changes

If you need to do further changes do them in your development branch.

To release the new changes you have 2 options:

#### Option A

- remove the snapshot tag manually
- rebase your Snapshot branch based on your development branch
- use `npx changeset` to create a changeset for this Snapshot branch and follow the steps from before

#### Option B

- remove the Snapshot branch
- create a new Snapshot branch based on your development branch and follow the steps from before

### Merge your changes to main

If your feature is ready and you would like to merge it to main do the following:

- remove the Snapshot branch
- merge your development to main like you normaly do

> [!important]
> Never merge a snapshot branch to main, because it would alter the version numbers
