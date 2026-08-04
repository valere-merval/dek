# Nutzung von plop als Code Generator

- Status: akzeptiert
- Entscheider: Florian, Max, Daniel
- Datum: 2022-09-15

Technische Story: [TD-262](https://jira.congstar.net/browse/TD-262)

## Kontext und Problem Beschreibung

Wir wollen einen Code Generator für React Komponenten verwenden, um die Entwickler:innen beim Erstellen von neuen
Komponenten zu
unterstützen und um eine einheitliche Codebasis zu erreichen.

## Betrachtete Optionen

- Agrippa
- plop.js

## Entscheidungsergebnis

Gewählte Option: "plop.js", da es eine einfache Möglichkeit bietet, jegliche Dateien zu erstellen und zu bearbeiten,
ohne Inhalte zu sehr vorzugeben.

## Pro und Contra der Optionen

### Agrippa

https://www.agrippa.dev/

- Gut, weil es speziell auf die React Entwicklung ausgerichtet ist
- Gut, weil es ohne viel Setup und Konfiguration funktioniert
- Schlecht, weil es bestimmte Dateien (z.B. Storybook Stories) noch nicht erstellt und diese auch nicht manuell
  ermöglicht
- Schlecht, weil die Verbreitung nicht sonderlich hoch ist (Github Stars)

### plop.js

https://plopjs.com/

- Gut, weil es auch außerhalb vom React Kontext verwendet werden kann
- Gut, weil es maximale Freiheit bietet bei der Bestimmung der Dateiinhalte/Templates
- Gut, weil es weit verbreitet ist (Github Stars)
- Schlecht, weil es etwas mehr Konfiguration benötigt als agrippa
