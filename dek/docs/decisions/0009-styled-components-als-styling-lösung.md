# Technologieauswahl für CSS-in-JS

## Entscheidungstreiber

Wir müssen uns auf eine grundlegende Technologie committen, um die Arbeit beginnen zu können.

## Entscheidungsergebnis

Gewählte Option: **Styled Components**, da wir die bestehende Erfahrung und Entwicklung mit Styled Components mitnehmen
können und es aus unserer Sicht auch Emotion übertrifft.

## Positive Konsequenzen

- Gut, weil Erfahrung in T10 bereits vorhanden.
- Gute Dokumentation.
- Gut, da große Verbreitung.
- Gut, da kein großer Feature-Unterschied zu Emotion.
- Gut, weil es Theming vereinfacht.
- Gut, da es klassische CSS Syntax unterstützt.
- Gut, weil es SSR unterstützt.
- Mittelmäßig, weil es eigene Libraries für jedes Framework gibt.

## Negative Konsequenzen

- Schlecht, weil JS-Laufzeit-Rendering.

## Betrachtete Optionen

### Stitches

- Gut, weil es Theming vereinfacht.
- Gut, weil es kein JS-Laufzeit-Rendering benötigt.
- Mittelmäßig, weil es mittlere Verbreitung hat.
- Schlecht, weil es nicht Mature wirkt (Stable seit August '21).
- Schlecht, weil TypeScript Support nicht priorisiert wird (bei Bugs).
- Schlecht, weil es klassische CSS Syntax nicht unterstützt.

### Emotion

- Gut, weil Framework-Agnostik.
- Gut, weil es Theming vereinfacht.
- Kein großer Feature-Unterschied zu Styled Components.
- Gute Dokumentation.
- Gut, da derzeit mittlere Verbreitung.
- Grundlage von Material UI.
- Gut, da kein großer Feature-Unterschied zu Emotion.
- Gut, weil es Theming vereinfacht.
- Gut, da es klassische CSS Syntax unterstützt.
- Gut, weil es SSR unterstützt.
- Schlecht, weil JS-Laufzeit-Rendering.

### JSS

- Schlecht, weil wir kein Wissen dazu im Team haben.
- Schlecht, weil es geringe Verbreitung hat.
- Neutral, weil es Styled Components inspiriert hat.
