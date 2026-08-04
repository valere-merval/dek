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
