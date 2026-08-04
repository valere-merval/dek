# Quelle der Design Tokens

- Status: akzeptiert
- Entscheider: Daniel, Max, Florian, Christian
- Datum: 2022-08-11

Technische Story: [TD-44](https://jira.congstar.net/browse/TD-44)

## Kontext und Problem Beschreibung

In welcher Quelle werden die Design Tokens verwaltet? Je nach Entscheidung ob die Tokens primär im Code oder primär im
Design-Tool verwaltet werden, ergeben sich andere Herausforderungen. Das Ziel ist, dass die Design Tokens bei Änderungen
über verschiedene System synchron gehalten werden.

## Entscheidungstreiber <!-- optional -->

- Unterschiedliche Stände der Design Tokens im Design und im Code sollen vermieden werden
- Aufwand zum Einpflegen und Abstimmen von Änderungen soll möglichst gering sein
- Der Prozess für Änderungen sollte mit unserem gewohnten Entwicklungsprozess zusammenpassen

## Betrachtete Optionen

- Design Token Quelle im Code
- Design Token Quelle im Design-Tool (Adobe XD)
- Design Token Quelle in einem weiteren Verwaltungstool

## Entscheidungsergebnis

Gewählte Option: **Design Tokens im Design-Tool (Adobe XD)**, weil aktuell Adobe XD das führende System für Screen- und
Komponentendesign ist.

### Positive Konsequenzen <!-- optional -->

- Designer können wie gewohnt in Adobe XD arbeiten und Design Tokens nutzen
- Designer müssen keine weiteren (technischen) Systeme/Dateien kennen oder pflegen

### Negative Konsequenzen <!-- optional -->

- Design Tokens im Code und im Design haben keine gemeinsame Quelle und müssen manuell synchron gehalten werden
- Abstimmungsaufwand bei Änderungen
- Nachvollziehbarkeit von Änderungen ist schwierig, da sie nicht zentral erfolgt

## Pro und Contra der Optionen <!-- optional -->

### Design Token Quelle im Code

Design Tokens werden als JSON-Datei in einem Git-Repository gepflegt.

- Gut, weil Code versioniert ist und Änderungen leicht nachvollziehbar sind
- Gut, weil Änderungen über Merge Requests oder Issues transparent diskutiert werden können
- Schlecht, weil Zugänglichkeit für Design erschwert wird (Git-Repo, JSON-Dateien)

### Design Token Quelle im Design-Tool (Adobe XD)

Design Tokens werden in der Adobe XD Bibliothek gepflegt

- Gut, weil es dem bisherigen Prozess entspricht
- Gut, weil Designer wie gewohnt arbeiten können, ohne weiteren (technische) Systeme/Dateien kennen oder pflegen zu
  müssen
- Gut, weil Adobe XD Exportmöglichkeiten für externe Dokumentationstools (z.B. zeroheight) anbietet
- Schlecht, weil Adobe XD den Entwicklern nicht zugänglich ist
- Schlecht, weil Adobe XD nicht alle Design-Token-Arten verwalten kann
- Schlecht, weil Adobe XD keinen in Code verwendbaren Export anbietet

### Design Token Quelle in einem weiteren Verwaltungstool

Nutzung eines Tools ausschließlich zur Verwaltung von Design Tokens

- Gut, weil es ein dediziertes Tool für diesen Anwendungsbereich ist
- Schlecht, weil Adobe XD Import/Export meist (noch) nicht unterstützt wird
- Schlecht, weil ein weiteres Tool den Prozess vielleicht noch verkompliziert
