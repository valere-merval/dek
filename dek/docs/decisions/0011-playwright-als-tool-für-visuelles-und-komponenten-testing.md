# Visual and Component testing

- Status: akzeptiert
- Entscheider: Dennis Ludwig, Bastian Büld
- Datum: 03.11.2023

Technische Story: https://jira.congstar.net/browse/TD-914

## Kontext und Problem Beschreibung

Komponenten sollen auf visuelle Regression, sowie funktionsweise getestet werden. Mit vitest ist das momentane testen
oft redundant und nicht sonderlich nützlich.

## Entscheidungstreiber <!-- optional -->

- Leider sind playwright component-tests in beiden Libs noch nicht aus gereift
- Playwrights schreibweise und API gefällt den Entwicklern besser

## Betrachtete Optionen

- Cypress
- Playwright

## Entscheidungsergebnis

Gewählte Option: Playwright.

Leider scheint Cypress nicht so entwicklerfreundlich zu sein wie Playwright. Doch der experimentelle Zustand und die
bekannten Bugs von Playwright sind momentan für die Komponenten Tests nicht tragbar.
Wir haben uns entschieden mit Playwright gegen das Storybook zu testen.

### Positive Konsequenzen <!-- optional -->

- Refactorings von übergreifenden Funktionen und Styles werden durch das visuelle Testing transparenter.
- Unit-Tests werden, so die Annahme, aufgrund einer funktionsreicheren Test-API mehr Funktionalität abdecken können

## Pro und Contra der Optionen <!-- optional -->

### Cypress

- Gut, weil es schon länger existiert hat, deshalb nicht mehr experimentell ist und deshalb vermutlich mehr
  Informationen online zu finden sind
- Gut, weil Component-Tests nicht experimentell gekennzeichnet sind
- Schlecht, weil visuelles testing mit einem Plugin selbst konfiguriert werden muss
- Schlecht, weil tests nur auf einem Browser laufen
- Schlecht, weil tests nicht automatisch parallelisiert werden
- Schlecht, weil tests länger laufen
- Schlecht, weil viele zustände wie zum beispiel hover nicht automatisch in der API enthalten sind
- Schlecht, weil in den Screenshots nicht nach Os unterschieden werden kann.

### Playwright

- Gut, weil tests parallel und schnell laufen
- Gut, weil mehrere browser zum Testen konfiguriert werden können
- Gut, weil Component testing nicht konfiguriert werden muss und out of the box funktioniert
- Gut, weil die API sehr umfangreich ist
- Gut, weil in den Screenshots nach OS unterschieden wird, sowie der Ablageort als auch name viel konfigurierbarer sind.
- Schlecht, weil Component-Tests es noch experimental ist

## Links <!-- optional -->

- [Playwright](https://playwright.dev/)
- [Playwright Issue](https://github.com/microsoft/playwright/issues/19320)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
