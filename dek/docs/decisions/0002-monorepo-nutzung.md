# Nutzung von Monorepo Technologie und des Frameworks

- Status: akzeptiert
- Entscheider: Max, Florian, Daniel
- Datum: 2022-08-10

## Kontext und Problem Beschreibung

Im Kontext des Design-Systems wird es mehrere Applikationen, bzw. Bibliotheken geben, die aufeinander aufbauen.

Deshalb stellt sich die Frage welche Technologien zum Einsatz kommen um möglichst effizient in den abhängigen
Bibliotheken arbeiten zu können

## Betrachtete Optionen

- Polyrepo
- Monorepo - [turborepo](https://turborepo.org/)
- Monorepo - [NX](https://nx.dev/)

## Entscheidungsergebnis

Gewählte Option: "Monorepo - turborepo", weil sie am besten abschneidet.

turborepo ist ein relativ einfache zu nutzendes Tool was für Entwickler im Repository sehr transparent ist.
Durch den Cache sind die Buildzeiten sehr gering.

### Positive Konsequenzen <!-- optional -->

- Es ist eine sehr kleine Lernkurve für turborepo für Entwickler in dem Repository nötig.
- geringe Buildzeiten durch Caching, weniger Wartezeiten für Entwickler

### Negative Konsequenzen <!-- optional -->

- Es ist noch zu klären ob der Remote Cache, bzw. wie die Vercel Accounts genutzt werden dürfen und bezahlt werden.
- Es könnten Anfangsschmerzen auftreten

## Pro und Contra der Optionen <!-- optional -->

### Polyrepo

Jede Applikation, bzw. Bibliothek wird als einzelnes Repository angelegt.

- Gut, weil der Workflow für alle Entwickler gewohnt ist
- Gut, weil der Workflow einfach verständlich ist
- Schlecht, weil Abhängigkeiten zwischen Packages nur durch "linking" testbar sind
- Schlecht, weil Zusammengehörigkeit irgendwo dokumentiert werden muss
- Schlecht, weil Issues zum "Design System" an verschiedenen Stellen auftauchen
- Schlecht, weil das synchron halten der einzelnen Teile aufwändig ist.
- Schlecht, weil Änderungen im "untersten" Projekt komplett durchgeschleift werden müssen (Merge Requests, Versionen
  erhöhen, usw.)

### Monorepo - Turborepo

Es wird nur ein einziges Repository für alle Applikationen und Bibliothek verwendet.
Dafür wird hier das Framework [turborepo](https://turborepo.org/) genutzt.

- Gut, weil Änderungen Package-übergreifend getestet werden können
- Gut, weil man alle Informationen in einem Repository findet
- Gut, weil refactorings einfacher sind
- Gut, weil ein intelligenter Cache genutzt werden kann und zu geringeren Build Zeiten führt.
- turborepo ist gut, weil man kaum merkt, dass es genutzt wird, nur eine config nötig
- turborepo ist gut, weil es auch mit einem lokalen Cache funktioniert
- turborepo ist gut, da der Cache zu deutlich schnelleren Build Zeiten führt
- Schlecht, weil die pipelines, das releasen und deployen etwas komplexer werden
- Schlecht, weil mehr Know-How für das Verwalten des Monorepos nötig ist
- Schlecht, weil es eine weitere Fehlerquelle sein kann
- Schlecht, weil der Workflow neu/anders ist

### Monorepo - NX

Es wird nur ein einziges Repository für alle Applikationen und Bibliothek verwendet.
Dafür wird hier das Framework [NX](https://nx.dev/) genutzt.

- Gut, weil Änderungen Package-übergreifend getestet werden können
- Gut, weil man alle Informationen in einem Repository findet
- Gut, weil refactorings einfacher sind
- Gut, weil ein intelligenter Cache genutzt werden kann und zu geringeren Build Zeiten führt.
- nx ist gut, weil es viel kann
- nx ist gut, weil es auch mit einem lokalen Cache funktioniert
- nx ist gut, da der Cache zu deutlich schnelleren Build Zeiten führt
- Schlecht, weil die pipelines, das releasen und deployen etwas komplexer werden
- Schlecht, weil mehr Know-How für das Verwalten des Monorepo nötig ist
- nx ist schlecht, weil mehr Know-How als Entwickler im Repo benötigt
- nx ist schlecht, da es eine sehr steile Lernkurve hat.
- nx ist schlecht, da man sich mit dem Tool auseinandersetzten muss um im Repository arbeiten zu können.
- Schlecht, weil es eine weitere Fehlerquelle sein kann
- Schlecht, weil der Workflow neu/anders ist

## Links <!-- optional -->

- [Informationen zu Monorepo im allgemeinen](https://monorepo.tools/)
