# Skills & Architekturanalyse — fair Design System

> Technische Fähigkeiten, Patterns und Reifegradanalyse der `@fair/react` Komponentenbibliothek.
> Stand: Mai 2026 | Version 57.x

---

## Technology Stack

| Kategorie        | Technologie                          | Version/Details                       |
| ---------------- | ------------------------------------ | ------------------------------------- |
| Runtime          | React                                | 18.x                                  |
| Sprache          | TypeScript                           | Strict Mode                           |
| Styling          | styled-components                    | CSS-in-JS mit Theme                   |
| Headless UI      | Radix UI                             | Accordion, Dialog, Select, Tabs, etc. |
| Headless UI      | React Aria                           | DatePicker, ComboBox, I18n            |
| Build            | Vite                                 | Library Mode (Rolldown)               |
| Testing (Unit)   | Vitest                               | happy-dom Environment                 |
| Testing (Visual) | Playwright                           | Component Testing + Screenshots       |
| Storybook        | Storybook                            | React-Vite Builder                    |
| Tokens           | style-dictionary                     | @tokens-studio/sd-transforms          |
| Monorepo         | Turborepo + pnpm                     | Workspaces                            |
| Release          | Changesets                           | Conventional Commits                  |
| Scaffolding      | Plop                                 | Template-basiert                      |
| Linting          | ESLint (flat) + Stylelint + Prettier | Custom Config                         |
| CI               | GitLab CI                            | Pipeline mit visual Tests             |

---

## Wichtige Scripts

| Script              | Beschreibung                           |
| ------------------- | -------------------------------------- |
| `storybook`         | Startet Storybook auf Port 6006        |
| `build`             | Baut die Library (Vite Library Mode)   |
| `ts:check`          | TypeScript-Typprüfung (noEmit)         |
| `lint` / `lint:fix` | ESLint über `src/`                     |
| `build-storybook`   | Baut Storybook für Deployment          |
| `generate`          | Scaffolding neuer Komponenten via Plop |
| `test`              | Unit-Tests mit Vitest                  |

---

## Component Architecture

### Dateistruktur pro Komponente

```
src/components/ComponentName/
├── ComponentName.tsx              # Hauptkomponente (forwardRef)
├── ComponentName.styles.ts       # styled-components
├── ComponentName.types.ts        # TypeScript Interfaces
├── ComponentName.stories.tsx     # Storybook Stories
├── ComponentName.stories.portable.ts  # Portable Stories
├── ComponentName.test-visual-ct.tsx   # Playwright Visual Tests
├── mappings.ts                   # Brand/Variant Color Mappings
├── index.ts                      # Barrel Export
└── __screenshots-ct__/           # Screenshot Baselines
```

### Patterns

| Pattern                    | Verwendung                      | Beispiel                                                 |
| -------------------------- | ------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| **Compound Components**    | Komplexe UI-Strukturen          | `Accordion.Root`, `Accordion.Item`, `Accordion.Header`   |
| **forwardRef**             | Alle Komponenten                | Standard-Pattern                                         |
| **Transient Props**        | styled-components DOM-Filterung | `$variant`, `$size`, `$brand`                            |
| **Mapping Tables**         | Multi-Brand Color Resolution    | `mappings.ts` mit Brand → BackgroundColor → Token Lookup |
| **Variant Mixins**         | Conditional Styles              | `variantMixin.styles.ts` als CSS-Interpolation           |
| **Context-specific Theme** | Verschachtelte Themes           | `ThemeProvider` mit `contextSpecific.backgroundColor`    |
| **Radix Primitives**       | Accessible Base                 | Dialog, Select, Accordion, Checkbox, Radio, Switch       | neue Kompontene sollen nicht mehr mit radix gebaut werden. |
| **React Aria**             | Complex Interactions            | DatePicker, ComboBox                                     |

### Controlled/Uncontrolled

- Radix-basierte Komponenten unterstützen beides (via Radix Props)
- Form-Inputs: `value`/`onChange` (controlled) oder `defaultValue` (uncontrolled)

---

## Multi-Brand Theming

### Brands

| Brand        | ID            | Kontext                        |
| ------------ | ------------- | ------------------------------ |
| congstar Web | `congstarWeb` | Hauptmarke, Desktop/Mobile Web |
| congstar App | `congstarApp` | Native App Webviews            |
| ja! Mobil    | `ja`          | Submarke                       |
| Penny Mobil  | `penny`       | Submarke                       |

Weitere Informationen findest du hier: ./docs/makeAppReady.md

### Theme-Objekt (`FairTheme`)

| Attribut                          | Typ                      | Beschreibung                  | Beispiel                                                               |
| --------------------------------- | ------------------------ | ----------------------------- | ---------------------------------------------------------------------- |
| `color`                           | `Record<string, string>` | Farb-Tokens aller Brands      | `color.InteractiveBlue`, `color.PennyRed` → `"#C61719"`                |
| `space`                           | `Record<string, string>` | Spacing-Skala in rem          | `space["08"]` → `"0.8rem"`, `space["64"]` → `"6.4rem"`                 |
| `size`                            | `Record<string, string>` | Größen-Skala in rem           | `size["16"]` → `"1.6rem"`, `size["128"]` → `"12.8rem"`                 |
| `borderRadius`                    | `Record<string, string>` | Border-Radius-Tokens          | `borderRadius["08"]` → `"0.8rem"`, `borderRadius.Penny10` → `"1.0rem"` |
| `shadow`                          | `Record<string, string>` | Box-Shadow-Tokens             | `shadow.Opacity50Elevation1` → CSS box-shadow Wert                     |
| `opacity`                         | `Record<string, string>` | Opacity-Stufen                | `opacity.Degree50`, `opacity.Degree75`                                 |
| `mediaBreakpoints`                | `Record<string, string>` | Responsive Breakpoints        | `mediaBreakpoints.sm` → `"0px"`, `md` → `"768px"`, `lg` → `"1160px"`   |
| `zIndex`                          | `Record<string, number>` | Z-Index-Skala (10–160)        | `zIndex["10"]` → `10`, `zIndex["160"]` → `160`                         |
| `typography`                      | `Record<string, string>` | Font-Shorthand-Strings        | `typography.TagBlack16` → `"700 1.6rem/2.2rem 'CongstarSans'..."`      |
| `contextSpecific.backgroundColor` | `BackgroundColor`        | Aktueller Hintergrund-Kontext | `"black"`, `"white"`, `"blue"`, `"lightGrey"`                          |
| `contextSpecific.brand`           | `Brand`                  | Aktive Marke                  | `"congstarWeb"`, `"congstarApp"`, `"ja"`, `"penny"`                    |
| `contextSpecific.focusStyles`     | `RuleSet<object>`        | Generierte Focus-Styles       | CSS outline-Styles abhängig vom Hintergrund                            |

Benutze immer die Tokens.

Quelle: `src/theme/theme.ts`

### BackgroundColors

Komponenten passen ihr Erscheinungsbild an den Hintergrund an:

- Mapping: BackgroundColor → Text Color, Focus Ring Color, Icon Color

---

### Utilities

- `src/utils/accessibility` — `highContrast`, `highContrastBorder` Mixins
- Wenn möglich und sinnvoll nutze bitte die CSSUtilities. Informationen findest du heir: packages/react/docs/CSSUtilities.md

---

### Visual Regression Testing

- Informationen findest du hier: ./docs/visualRegressionTests.md

---

## Types-Regeln

- Alle exportierten Types **müssen** mit dem Komponentennamen als Prefix benannt werden.
- Format: `ComponentNameProps`, `ComponentNameVariant`, `ComponentNameSize`, etc.
