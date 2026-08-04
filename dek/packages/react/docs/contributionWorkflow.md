# Contribution Workflow

Im folgenden wird beschrieben wie eine Contribution durch EntwicklerInnen außerhalb von Team Deko durchgeführt werden können.

## 1) Vorraussetzungen

- Team Deko und Contribution Team haben jeweils eine Story zur Contribution in ihrem Sprint
  - Dieser Contribution Workflow sollte in den Stories verlinkt sein
- Team Deko definiert welche Deko-Team EntwicklerInnnen die Contribution betreuen

## 2) Kickoff

- Deko-Team EntwicklerInnnen laden zum Kickoff zwischen Contributor EntwicklerInnnen und Deko-Team EntwicklerInnnen ein
- Die beiden Jira-Stories werden abgeglichen insbesondere die Akzeptanzkriterien und deren funktionale Anforderungen
- Es wird geprüft ob die Designs in den Design Systemen fertig sind
- Es wird geprüft ob die Designs zwischen Layouts und Design-Systemen einheitlich sind
- Falls nötig wurde geprüft ob ein Name für die neue Komponente definiert wurde
- Grundlegendes Vorgehen und Best Practices im fair Repo werden besprochen
  - [Generatoren nutzen](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-development--docs#erstellen-einer-neuen-komponente)
  - [CSS Utilities nutzen](https://fair-react.itg-wirk.narf.tech/?path=/docs/getting-started-css-utilities--docs)
  - [Visual Regression Tests schreiben / erweitern](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-visual-regression-tests--docs)
  - in Storybook Datei [erlaubte Brands und Hintergrundfarben definieren](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-make-app-ready--docs)
  - TODOs.md abarbeiten (Wird von Generator erzeugt)

## 3) Programming

- Pair-Programming ist gewünscht
- Best Practices im fair Repo werden verfolgt
- Refactoring-Potenziale werden frühzeitig an Team Deko gemeldet
  - Refactoring findet bevorzugt außerhalb der Contribution-Story statt
  - Kleinere Anpassungen (Mini-Refactorings) können ggf. direkt mitgemacht werden
- Deko-Team EntwicklerInnnen werden regelmäßig auf den aktuellen Stand der Entwicklung gebracht um frühzeitig unterstützen zu können
- Der Entwicklungsstand sollte frühzeitig und regelmäßig in einem Merge Request als Draft verfügbar sein

## 4) Qualitätssicherung

- Ist die Komponente fertig wird vom Deko Team eine Qualitätssicherung durchgeführt
  - Code Review
  - Design Review
  - Test
- Mögliche Findings werden von Contributor EntwicklerInnnen und/oder Deko-Team EntwicklerInnnen umgesetzt

## 5) Review-Prozess

- Der Review-Prozess wird von Team Deko intern durchgeführt
- Mögliche Findings werden vo Deko-Team EntwicklerInnnen umgesetzt

## Vorzeitiges Release

- Ist ein vorzeitiges releasen notwendig, kann mit Hilfe von [Snapshots](https://fair-react.itg-wirk.narf.tech/?path=/docs/contribution-snapshot-release--docs) gearbeitet werden.
- Darüber hinaus können Nacharbeiten definiert werden um ein vorzeitiges Release ohne Snapshot zu ermöglichen. Hier muss zwischen den Teams definiert werden wann diese in welcher Form umgesetzt werden.

## Ownership

- Die Ownership der Komponenten geht nach Contribution in die Verantwortung von Team Deko über.
