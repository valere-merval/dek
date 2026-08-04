## Allgemein

Icons werden auf zwei Arten zur Verfügung gestellt:

- Als SVG React Komponenten
- Als Icon-Font

Der Icon Font wird über IconMoon erstellt und danach im repo [@fair-fonts](https://git.congstar.net/congo-web/design-system/fair-fonts) abgelegt. Dort ist eine Anleitung hinterlegt wie dieses aktualisiert werden kann.

## Installation

```bash
pnpm add @fair/icons
```

### React (SVG Komponenten)

```jsx
import { Globe } from "@fair/icons";

export default function Web() {
  return (
    <div>
      <Globe />
    </div>
  );
}
```

### CSS (Icon-Font)

```css
@import "@fair/icons/dist/css/icons.css";
```
