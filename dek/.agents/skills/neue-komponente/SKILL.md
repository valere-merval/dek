---
name: neue-komponente
description: Erstellt eine neue React-Komponente im packages/react Paket mittels Plop-Generator
---

## Wann diesen Skill verwenden

Verwende diesen Skill, wenn der User eine neue Komponente im `packages/react` Paket erstellen möchte.

### 1. Informationen sammeln (PFLICHT-GATE vor jeder Aktion)

> **STOPP:** Generiere oder implementiere NICHTS, bevor die folgenden Fragen vom User
> beantwortet wurden. Stelle die Fragen gebuendelt (nutze das `question`-Tool, wenn
> verfuegbar) und warte auf die Antworten. Erst danach geht es mit Schritt 2 weiter.
> Triff KEINE Annahmen – bei fehlenden Angaben oder Widersprüchen explizit nachfragen.

**A. Basis (zwingend, in dieser Reihenfolge – der Generator erwartet sie so):**

1. **Subfolder** unter `src/components/` (kann leer sein für Top-Level)
2. **Komponentenname** (wird automatisch in PascalCase umgewandelt)

**B. Funktion & Scope:**

3. Welchen Zweck/Use-Case hat die Komponente? Welches HTML-Root-Element (`div`, `button`, `a`, …)?
4. Gibt es eine **bestehende Komponente**, die wiederverwendet oder als Baustein genutzt werden
   kann, statt neu zu bauen? (Prüfe `src/components/` und frage im Zweifel nach.)
5. Welche **Varianten/Sizes/States** soll die Komponente haben?
6. Ist die Komponente interaktiv (Fokus, Tastatur, ARIA-Anforderungen)?

**C. Multi-Brand & Hintergruende:**

7. Welche **Brands** werden unterstützt? (`congstarWeb`, `congstarApp`, `ja`, `penny`)
8. Welche **Hintergrundfarben** (`allowedBackgroundColors`, siehe const `brandBackgroundColorMap` in `src/theme/theme.ts` für alle möglichen Hintergrundfarben pro Brand) sind je Brand erlaubt? Hiermit wird definiert auf welchen Hintergrundfarben die Komponente verwendet werden darf. Es handelt sich hierbei nicht um eine Hintergrundfarbe innerhalb der Komponente.
9. Werden brand-spezifische Farben/Tokens benötigt (→ `mappings.ts`)?
10. Frage ob es sich um eine Container Komponente handelt und ob die CardFilled verwendet werden soll. Diese setzt intern bereits einen ThemeProvider um interne Komponenten auf Brand und Hintergrundfarbe reagieren zu lassen.

**D. Props & API:**

11. Welche **Props** soll die Komponente nach aussen anbieten? Sollen native HTML-Props
    (`...rest`) durchgereicht werden?

Fasse die Antworten kurz zusammen und lass sie vom User bestaetigen, bevor du fortfaehrst.

### 2. Komponente generieren

Führe den Plop-Generator aus dem `packages/react` Verzeichnis aus:

```bash
pnpm generate
```

Dies entspricht dem Script:

```bash
cross-env NODE_OPTIONS='--import tsx' plop --plopfile=plopfile.ts
```

Der Generator ist interaktiv und fragt nach:

1. Subfolder unter `src/components/`
2. Component Name

Um den Generator non-interaktiv aufzurufen, übergib die Antworten als **positionale**
Bypass-Argumente in genau dieser Prompt-Reihenfolge (zuerst Subfolder, dann Name). Plop
unterstützt KEINE benannten Flags wie `--subfolder`/`--name`:

```bash
# Mit Subfolder
pnpm generate component "<subfolder>" "<name>"

# Top-Level (kein Subfolder) – leeren String übergeben
pnpm generate component "" "<name>"
```

Hinweis: Es existieren noch zwei weitere Generatoren, die hier i.d.R. nicht benötigt werden:
`test-visual-ct` (nur Visual-/Portable-Stories nachgenerieren) und `accessibility-tests`
(nur A11y-Tests anhängen).

### 3. Generierte Dateien

Der Generator erstellt folgende Dateien in `src/components/<subfolder>/<PascalCaseName>/`:

| Datei                        | Zweck                                                       |
| ---------------------------- | ----------------------------------------------------------- |
| `<Name>.tsx`                 | Hauptkomponente mit `forwardRef`                            |
| `<Name>.styles.ts`           | styled-components (Root Element)                            |
| `<Name>.types.ts`            | Props Interface (`extends ComponentPropsWithoutRef<'div'>`) |
| `<Name>.stories.tsx`         | Storybook Stories                                           |
| `<Name>.stories.portable.ts` | Portable Stories für Visual Tests                           |
| `<Name>.test-visual-ct.tsx`  | Playwright Visual Component Test                            |
| `index.ts`                   | Barrel Export                                               |
| `TODO.md`                    | Development Checklist                                       |

Zusaetzlich fuehrt der `component`-Generator zwei Append-Aktionen aus:

- Ein Export wird in `src/index.ts` am Marker `/* PLOP_GENERATED_CONTENT */` eingefuegt.
- An `<Name>.test-visual-ct.tsx` werden automatisch Accessibility-Tests angehaengt
  (Template `accessebility.test-visual-ct.tsx.hbs`). Die Visual-Test-Datei enthaelt also
  bereits A11y-Checks – diese nicht doppelt anlegen.

> Hinweis: `mappings.ts` wird NICHT generiert. Diese Datei legst du bei Bedarf fuer
> Brand-/Variant-spezifische Farben manuell an (siehe Schritt 4).

### 4. Nach der Generierung

Nach dem Generieren die Komponente gemaess den im Frage-Gate (Schritt 1) geklaerten
Anforderungen implementieren. Tauchen unterwegs neue, im Gate nicht geklaerte Entscheidungen
auf, frage erneut nach statt zu raten. Dabei beachten:

- **Hintergrundfarben & Brands** (laut Gate-Antworten C):
  - Vier Brands: `congstarWeb`, `congstarApp`, `ja`, `penny`.
  - Definiere die erlaubten Hintergruende ueber `composeBrandBackgroundColorStories` in
    `<Name>.stories.portable.ts`, setze `allowedBackgroundColors` in `<Name>.stories.tsx`
    und die Flags `readyForCongstarApp`, `readyForJa`, `readyForPenny`.
    Details: `packages/react/docs/makeAppReady.md`.
- Bevorzugt bestehende Komponenten als Bausteine verwenden (laut Gate-Antwort B4), anstatt
  neue HTML-Elemente zu stylen.
- Arbeite alle Schritte von `TODO.md` ab (u.a. forwardRef, `...rest` Props durchreichen,
  StyledComponent-Wrapper aus der `.tsx` exportieren – nicht aus `.styles`).
- **Styling**: Immer Theme-Tokens verwenden, keine hardcoded Werte
  (`${({ theme }) => theme.color.X}`, `theme.space["08"]`, `theme.typography.LabelBold16`, etc.)
- **CSS Utilities** wo sinnvoll: `up("md")` fuer responsive Media Queries (mobile-first, kein `down()`),
  `trimFont("LabelBold16")` zum Entfernen von Font-Abstaenden (siehe `packages/react/docs/CSSUtilities.md`).
- **Transient Props**: styled-components Props mit `$` prefixen (`$variant`, `$size`, `$brand`)
- **Types**: Alle exportierten Types mit Komponentenname prefixen (`ComponentNameProps`, `ComponentNameVariant`)
- **Multi-Brand**: Wenn noetig, `mappings.ts` fuer Brand-spezifische Farben anlegen
  (`theme.contextSpecific.brand` / `theme.contextSpecific.backgroundColor` zum Aufloesen).
- **Accessibility**: High-Contrast-Mixins (`highContrast`, `highContrastBorder`) aus
  `src/utils/accessibility` verwenden; Focus-Styles ueber `theme.contextSpecific.focusStyles`.
- **Kein Radix**: Neue Komponenten sollen NICHT mehr mit Radix gebaut werden
- **Responsiveness**: Wenn nur eine Bildschirmgröße im Screenshot sichtbar ist, frage nach ob das so gewollt ist, oder ob mehrere Bildschirmgröße supportet werden sollen.

### 5. Testen & Pruefen

```bash
# Unit Tests
pnpm test

# Type Check
pnpm ts:check

# Lint
pnpm lint

# Storybook starten zum visuellen Pruefen
pnpm storybook
```

#### Visual Regression Tests

Fuer eine neue Komponente existieren noch keine Screenshot-Baselines. Diese einmalig erzeugen
und anschliessend pruefen:

```bash
# Baselines fuer die neue Komponente generieren
pnpm test:visual:os-agnostic:start --update-snapshots -g "<Name>.test-visual-ct.tsx"

# Danach verifizieren, dass die Tests gruen laufen
pnpm test:visual:os-agnostic:start -g "<Name>.test-visual-ct.tsx"
```

### 6. Einbinden & Release

- **nextjs Example**: Die neue Komponente in der `examples/nextjs` App einbinden und
  die Browser-Konsole auf Errors pruefen.
- **Changeset**: Ein Changeset anlegen und `@fair/react` mit passender Bump-Stufe
  (patch/minor/major) auswaehlen:

```bash
pnpm changeset
```
