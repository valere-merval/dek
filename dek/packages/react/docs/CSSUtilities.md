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
