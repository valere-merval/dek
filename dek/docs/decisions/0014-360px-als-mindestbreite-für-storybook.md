# 360px als Mindestbreite für Storybook

- Status: akzeptiert
- Entscheider: [Dennis Ludwig, Max Karkowski, Yannick Technow, Joel Mossazghi, Oliver Gellner, Tim Witte, Christian Pfeiffer, Rene Rappenhöner]
- Datum: 2025-02-07

Technische Story: TD-3989

## Kontext

Eine Analyse über das gesamte Jahr 2024 über die Display Pixelbreiten der congstar.de Nutzer:innen hat ergeben, dass 1,3% unserer Nutzer:innen ein Gerät mit einer Pixelbreite von weniger als 360px nutzen.
15,84% der Nutzer:innen haben ein Gerät mit einer Pixelbreite von mindestens 360px und höchstens 375px. Diese Ergebnisse wurden mit Entwickler:innen, Designer:innen, QA und APP Kolleg:innen besprochen.

## Entscheidungsergebnis

Es werden in Zukunft Komponenten nur noch auf eine Mindestbreite von 360px getestet. Funktionale und visuelle Bugs die aufgrund kleinerer Displaygrößen auftreten werden nicht betrachtet und nicht behoben.
Die untere Grenze der mobilen Ansicht im Storybook hat eine Pixelbreite von 360px. Auch in Figma wird als untere Grenze für Layouts nur 360px betrachtet.
