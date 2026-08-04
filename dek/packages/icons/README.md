[//]: # "Readme.md is generated based on readme/README_Template.md. Do not change Readme.md directly."

# @fair/icons

[[_TOC_]]

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

## Development

Zur Erstellung neuer Icons als SVG React Komponenten und Icon-Fonts sind mehrere Schritte in verschiedenen Repos notwendig.

### Voraussetzung

Du hast Zugriff auf:

- die neuen SVG Icons als Zip-File (siehe [Design > Icons](https://marke.congstar.net/1df10c0d0/p/8018d4-icons))
- [@fair/icons](https://git.congstar.net/congo-web/design-system/fair) (dieses Repo)
- [@fair-fonts](https://git.congstar.net/congo-web/design-system/fair-fonts)
- [icomoon](https://icomoon.io)

Die Bereitstellung der Icon-Fonts wird in [@fair-fonts](https://git.congstar.net/congo-web/design-system/fair-fonts) erklärt.

### Erstellen neuer Icons

#### Schritt 1 (@fair/icons)

##### Schritt 1.1: SVG im fair repo ablegen

Lege die neuen SVG Dateien unter /packages/icons/src/assets/icons ab. Stell sicher, dass path tags fill="#121212" statt fill="white" enthalten.

##### Schritt 1.2: SVG React Komponenten generieren

```bash
pnpm build
```

#### Schritt 2 (@fair-fonts)

Zur Bereitstellung der Icon-Fonts müssen die in [@fair-fonts](https://git.congstar.net/congo-web/design-system/fair-fonts) beschriebenen Schritte ausgeführt werden.
Im Anschluss können die hier folgenden Schritte durchgeführt werden.

#### Schritt 3 (@fair/icons)

Aktualisiere icons.css in packages/icons/src/css. Trage hierfür die neuen Unicodes und Klassennamen ein. Die Angaben entnimmst du der in Schritt 2 generierten CSS Datei (enthalten in Zip-File von Icomoon).

#### Schritt 4

Nun kannst du den üblichen Abnahme-/Releaseprozess durchführen.

