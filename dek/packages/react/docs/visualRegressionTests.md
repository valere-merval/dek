## Visual Regression Tests

### Einleitung

Um unsere Komponenten auch visuell abzusichern erzeugen wir [Snapshots](https://playwright.dev/docs/test-snapshots) mit Playwright.

Diese können mit dem Playwright [UI-Mode](https://playwright.dev/docs/test-ui-mode) komfortabel ausgeführt werden:

```shell
 pnpm test:visual:local:ui
```

### Betriebssystem unabhängig

Snapshots die mit dem UI-Mode erzeugt wurden sind spezifisch zum Betriebssystem erzeugt worden und können übergreifend im Team und der Pipeline nicht verwendet werden.
Playwright empfiehlt hier auf ein [Docker-Iamge](https://playwright.dev/docs/docker) zurück zu greifen.

Initial muss der Build einmalig ausgeführt werden:

```shell
 pnpm test:visual:os-agnostic:build
```

Danach können mit start alle Playwright Tests ausgeführt werden.

```shell
 pnpm test:visual:os-agnostic:start
```

Da dies sehr lang dauert, empfehlen wir lokal nur die Tests auszuführen, die zur Komponente gehören an der man Änderungen vornehmen möchte:

```shell
 pnpm test:visual:os-agnostic:start -g PasswordField.test-visual-ct.tsx
```

### Aktualisieren der Snapshots

Mit `--update-snapshots` können die Snapshots aktualisiert werden.

Für alle Komponenten:

```shell
 pnpm test:visual:os-agnostic:start --update-snapshots
```

Für nur eine bestimmte Komponente:

```shell
 pnpm test:visual:os-agnostic:start --update-snapshots -g PasswordField.test-visual.tsx
```

Alternativ kann auch der alte Snapshot gelöscht und der Test regulär ausgeführt werden.

### Testergebnisse im Fehlerfall

Im Fehlerfall liegen die Testergebnisse im Ordner "test-results".
