# Release und Versionierungsprozess

- Status: akzeptiert
- Entscheider: Max, Florian, Daniel
- Datum: 2022-08-10

## Kontext und Problem Beschreibung

Es muss ein möglichst einfacher Releaseprozess im Monorepo [ADR-0002](0002-monorepo-nutzung.md) Umfeld geschaffen
werden.
Es muss die Möglichkeit bestehen, dass nur die Teile des Monorepo released werden, die sich geändert haben.

## Entscheidungstreiber <!-- optional -->

- Bibliotheken müssen veröffentlicht werden, damit sie in anderen Projekten genutzt werden können.

## Betrachtete Optionen

- [changesets](https://github.com/changesets/changesets)
- [beachball](https://microsoft.github.io/beachball/)
- [semantic-release](https://semantic-release.gitbook.io/)

## Entscheidungsergebnis

Gewählte Option: "changesets", weil es die einzige Option ist, die alle Kriterien (CI über Gitlab, nichttechnische
Release Notes, gesteuerte Releases) unterstützt.
.

### Positive Konsequenzen <!-- optional -->

- Die Maintainer der Bibliotheken haben mehr Kontrolle über den Releaseprozess.
- Es entsteht ein besser verständliches Changelog durch nichttechnische Beschreibungen der Änderungen.

### Negative Konsequenzen <!-- optional -->

- Entwickler müssen einen neuen Releaseprozess lernen.
- Ein wenig mehr Arbeit für die Maintainer der Bibliotheken, durch einen zusätzlichen Releaseprozess.

## Pro und Contra der Optionen <!-- optional -->

### changesets

changesets ist ein Tool, das sich auf den Einsatz im Monorepo konzentriert, um dort eine Versionierung durchzuführen,
ein Changelog erstellt und den Releaseprozess definiert.

- Gut, weil es die Möglichkeit bietet mehrere Merge Request in einem Release zu sammeln.
- Gut, weil es ein weiteres Tool gibt, um den Einsatz von changesets in Gitlab zu ermöglichen.
- Gut, weil das Changelog nicht nur die Commit Messages enthält. Das ist bei diesem Repo von Bedeutung, da die
  Zielgruppe nicht nur Entwickler sind.
- Schlecht, weil manuelle Eingriffe nötig sind um ein Release zu erstellen. Es müssen extra Changelog Einträge erzeugt
  werden und es wird ein extra Merge Request für den Release erstellt.
- Schlecht, weil es ein neuer Prozess ist.

### beachball

beachball hat die gleiche Funktionsweise wie changesets.

- Gut, weil siehe oben
- Schlecht, weil siehe oben
- Schlecht, weil Gitlab nicht unterstützt wird

### semantic-release

semantic-release konzentriert sich darauf einen komplett automatisierten Versionierungs- und Releaseprozess zur
Verfügung zu stellen.

- Gut, weil kein manuelles Eingreifen für den Release nötig ist. Jeder Commit/Merge Request wird vollautomatisch
  released.
- Gut, weil es ein Plugin für Monorepo gibt.
- Gut, weil es ein für alle Entwickler bekannter Prozess ist.
- Schlecht, weil wir Commit Messages in Englisch und sehr technisch verfassen. Das Zielpublikum beim Design System ist
  aber umfangreicher.

## Links <!-- optional -->

- Eine Dokumentation zum Releaseprozess ist [hier](readme.md) zu finden
