# pnpm als Package Manager

- Status: akzeptiert
- Entscheider: Daniel, Max, Florian
- Datum: 2022-08-30

Technische Story: [TD-33](https://jira.congstar.net/browse/TD-33)

## Kontext und Problem Beschreibung

Für die Verwaltung der NPM Abhängigkeiten wird ein Package Manager benötigt.

## Entscheidungstreiber <!-- optional -->

- Das Tool soll möglichst schnell sein, um den Entwicklungsprozess zu verbessern und um die Build-Zeit gering zu halten
- Muss mit einem Monorepo gut zusammen funktionieren
- Soll sicher sein
- Muss eine private npm Registry zum Laden und Veröffentlichen unterstützen
- Muss mit renovate zusammen funktionieren

## Betrachtete Optionen

- pnpm
- npm
- yarn

## Entscheidungsergebnis

Gewählte Option: pnpm, weil es das schnellste Tool ist und Monorepos direkt unterstützt.

### Positive Konsequenzen <!-- optional -->

- Keine Probleme mit zusätzlichen Monorepo-Libraries (z.B. Lerna)
- CLI-Kommandos sehr ähnlich zu npm und yarn

### Negative Konsequenzen <!-- optional -->

- Bei den Entwicklern noch nicht so bekannt, verglichen mit npm und yarn

## Pro und Contra der Optionen <!-- optional -->

### npm

- Gut, weil es das Standard Tool ist für npm Abhängigkeiten
- Gut, weil es jeder schon benutzt hat
- Schlecht, weil es das langsamste Tool in der Auswahl ist

### yarn (berry)

- Gut, weil es jeder schon benutzt hat
- Schlecht, weil die Konfiguration nicht mehr kompatibel zu npm ist (.npmrc)
- Schlecht, weil es langsamer als pnpm ist

### pnpm

- Gut, weil es sehr schnell ist
- Gut, weil es Monorepos/Workspaces direkt unterstützt
- Gut, weil es die npm Konfiguration berücksichtigt (.npmrc)

## Links <!-- optional -->

- https://blog.logrocket.com/javascript-package-managers-compared/
- https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/#:~:text=NPM%3A%20It%20is%20bit%20slower,PNPM%20is%20faster%20than%20Yarn
  .
- https://rushjs.io/pages/maintainer/package_managers/
