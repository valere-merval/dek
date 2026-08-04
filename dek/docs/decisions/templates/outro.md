Um neue ADRs anzulegen, [adr-tools](https://github.com/npryce/adr-tools) installieren und `adr new Das ist ein Titel`
ausführen.

## Prozess - Öffentliche Diskussion

1. Um neue ADRs anzulegen, [adr-tools](https://github.com/npryce/adr-tools) installieren und

```shell
adr new Das ist ein Titel
```

ausführen. 2. Anschließend bitte mit

```shell
adr generate toc -i docs/decisions/templates/intro.md -o docs/decisions/templates/outro.md > docs/decisions/index.md
```

das Verzeichnis neu erstellen. 3. Erstelle einen Merge Request 4. Diskutiere 5. Dokumentiere Argumente für und gegen 6. Dokumentiere die Entscheidung 7. Annehmen des Merge Requests durch die Maintainer

Allgemeine Informationen zu `architectural decision records` findest Du unter <https://adr.github.io/>.
