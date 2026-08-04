# fair

<img  width="150" src="docs/assets/fairlogo.png" alt="fair" />

Das congstar Design System soll Entwicklern und Designern eine bessere Zusammenarbeit ermöglichen.

## Tracking

Damit wir auf dem neusten Stand über die Nutzung unserer Library bleiben, sollte uns jedes Projekt welches @fair nutzt, entsprechende Daten per Gitlab übermitteln.

Dafür einfach folgende Zeile in die .gitlab-ci.yml mit eintragen:

`- component: $CI_SERVER_FQDN/$CI_COMPONENTS_PATH/pnpm/zeroheight@1.3.0`

Standardmäßig wird diese in der stage `test` ausgeführt, dies kann aber auch über die inputs überschrieben werden.

```
- component: $CI_SERVER_FQDN/$CI_COMPONENTS_PATH/pnpm/zeroheight@1.3.0
  inputs:
    stage: report
```

## Was möchtest Du tun?

- [Getting Started](https://marke.congstar.net/1df10c0d0/p/21376a-entwickler)
- [Contribution-Workflow](https://marke.congstar.net/1df10c0d0/p/02f6cb-contribution-workflow)
- [Bugfix-Workflow](https://marke.congstar.net/1df10c0d0/p/97c8be-bugfix-workflow)

### fair und Module

fair besteht aus mehreren Modulen und Dokumentationen:

- [@fair/react](./packages/react/README.md)
  : Die fair Komponenten für React.

- [@fair/icons](./packages/icons/README.md)
  : Die fair Icons.

- [@fair/global-css](./packages/global-css/README.md)
  : Globales CSS - Solltest Du nicht die React Komponenten nutzen, findest du hier das Minimum an Styles.

- [@fair/tokens](./packages/tokens/README.md)
  : Die fair Design Tokens. Sie werden zur Synchronisation zwischen Design und Entwicklung genutzt.

- [@fair/fonts](https://git.congstar.net/congo-web/design-system/fair-fonts)
  : Die Schriftarten für Congstar, Ja und Penny.

- [Examples](./examples/README.md)
  : Die Example Anwendungen sollen bestimmte Szenarien abdecken und als kleine Referenzimplementierungen dienen.

- [Entscheidungen](./docs/decisions)
  : Alle Entscheidungen bzgl. des Design-Systems werden als ADR erfasst.

### Troubleshooting

- Der CI-Job "comment" wirft einen 401 Fehler:
  Höchstwahrscheinlich ist der Access-Token im Projekt abgelaufen. [Hier](./docs/troubleshoot/changeset-token.md) findest du die Anleitung um den Token neu zu konfigurieren.

- Problem mit der @internationalized/date dependency:
  In manchen Setups kann es beim Einsatz von der DateField und DatePicker Komponente, die `@internationalized/date` verwenden, zu Versionskonflikten kommen.  
  Dadurch tritt folgender Fehler auf:

  ```text
  Type 'CalendarDate' is not assignable to type 'DateValue | null | undefined'.
    Type 'CalendarDate' is not assignable to type 'ZonedDateTime'.
      Property '#private' in type 'CalendarDate' refers to a different member that cannot be accessed from within type  'ZonedDateTime'.
  ```

  Dieser Fehler entsteht, wenn innerhalb eines Projekts unterschiedliche Versionen von `@internationalized/date` verwendet werden.
  Nach dem Update der @fair/react Library empfehlen wir, zu überprüfen, ob die verwendete Version von `@internationalized/date`
  mit der im @fair/react übereinstimmt.
  Dem Maintainer-Team der React-Aria Library ist dieses [Problem](https://github.com/adobe/react-spectrum/discussions/4987) bekannt,
  es hat jedoch niedrige Priorität.
