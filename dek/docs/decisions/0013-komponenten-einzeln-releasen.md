# Komponenten einzeln releasen

- Status: abgelehnt
- Entscheider: [Dennis Ludwig, Max Karkowski, Yannick Technow, Joel Mossazghi, Oliver Gellner]
- Datum: 2024-09-06

Technische Story: https://jira.congstar.net/browse/TD-3291

## Kontext und Problem Beschreibung

Die Komponenten der Fair-Library werden gebündelt als ein NPM-Paket versioniert und veröffentlicht.
Für Konsumenten kann es manchmal zu unerwarteten Aufwänden kommen,
wenn sie für einen Bug-Fix oder eine neue Komponente die ganze Fair-Library aktualisieren müssen,
da sie sich um jegliche Breaking Changes kümmern müssen die seit ihrer letzten Aktualisierung angefallen sind,
auch wenn diese nicht in Zusammenhang mit dem gewünschten Bug-Fix und oder der neuen Komponente stehen.

## Entscheidungsergebnis

Wir haben uns dagegen entschieden Komponenten einzeln zu releasen, da dies einen erheblichen Mehraufwand für die Maintainer der Fair-Library darstellen würde.
Alternativ werden wir analysieren wie ältere Versionen Bug-Fixes erhalten können, siehe https://jira.congstar.net/browse/TD-2620.

### Positive Konsequenzen für Konsumenten der Fair-Library

- Es müssen nur noch die Komponenten aktualisiert werden die für einen Bug-Fix und oder einer neuen Komponente benötigt werden. Dadurch können Breaking Changes von anderen Komponenten zu einem anderen Zeitpunkt erfolgen.
- Es müssen nur noch die Peer Dependencies installiert werden, die von den benötigten Fair-Komponenten vorrausgesetzt werden.

### Negative Konsequenzen für Konsumenten der Fair-Library

- Die Versionen der einzelnen Komponenten mit ihren Abhängigkeiten können zu Inkompatibilitäten führen. Im schlimmsten Fall treten diese Probleme erst im Browser auf und werden erst spät gefunden.
- Die Versionen der einzelnen Komponenten mit ihren Abhängigkeiten führt zu einer (deutlich) höheren Bundle-Size, da Komponenten in mehreren Versionen gebundelt werden müssen.
- Unterschiedliche Versionen einer Komponente  können zu unterschiedlichem Aussehen einer Komponente auf einer Seite führen, z. B. Button als Sub-Komponente von BoxDevice und BoxPlan.
- Pro benötigter Komponente muss eine Dependency in der `package.json` gepflegt werden.

### Positive Konsequenzen für Maintainer der Fair-Library

- Die Abhängigkeiten der Komponenten untereinander sind einheitlich geregelt.
- Peer Dependencies können fein granularer gesetzt werden.

### Negative Konsequenzen für Maintainer der Fair-Library

- Initiale Aufwände sind hoch
  - Der React Workspace muss in ein eigenes Monorepo verlagert werden.
  - Jede Komponente wird als Workspace mit einer eigenen `package.json` aufgebaut. Es müssen somit pro Komponente Abhängigkeiten gepflegt werden.
  - Das Verwenden einer Komponente innerhalb einer anderen Komponente wird einheitlicher aber auch komplexer und umständlicher.
  - Übergreifende Dinge wie z.B. das Theming muss als separater Workspace gepflegt werden.
  - Der vite library Build reicht nicht aus und müsste durch einen komplexeren und generischen Build ersetzt werden um nicht in jedem Workspace einen Build zu haben.
  - Release-Prozess, Releasenotes und Gitlab-Pipelines müssen angepasst werden 
- Aktualsierungen aller Dependencies ist sehr viel aufwendiger, da diese nun pro Komponente gepflegt werden.
- Die Zeitdauer bis Aktualisierungen bei den Konsumenten erfolgen kann sehr hoch sein, weil diese unter Umständen nur die Komponenten aktualisieren die für ihre Stories wichtig sind.
- Inkompatibilitäten von unterschiedlichsten Versionen der Komponenten bei den Konsumenten wird zu einer höhreren Issue-Last führen.
  - Diese nachzustellen kann sehr aufwendig sein.
- Gruppierung und Unterstrukturierung von Komponenten ist nicht mehr möglich ohne die Workspace-Konfiguration und den Build-Prozess erheblich zu verkomplizieren.
- Anpassungen an Gitlab-Pipelines würde zu einer höheren Komplexität und Last führen.

### Proof of Concept

In folgendem Repository wurden exemplarisch verschiedenste Aspekte analysiert: https://git.congstar.net/congo-web/design-system/fair-react

### Betrachtete Optionen

Im Zuge der Recherche habe ich nach ähnlichen Projekten gesucht und deren Repositories analysiert.
- Lodash veröffentlicht Helfer-Funktionen einzeln. Der Technologie-Stack ist aber sehr in die Jahre gekommen.
- Radix veröffentlicht Headless-Komponenten einzeln. Der Technoloie-Stack ähnelt unserem teilweise und diente als eine der Inspirationen für den POC.

Grundsätzlich wird dieses Vorgehen aber ziemlich selten gelebt. Die meisten großen Komponenten-Libraries veröffentlichen ihr Komponenten gebündelt als Paket.
Das React Aria Team hat ihre Gründe dagegen in folgendem Issue beschrieben: https://github.com/adobe/react-spectrum/discussions/6734