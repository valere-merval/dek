## Development

### Erstellen einer neuen Komponente

Führe dazu folgenden Befehl aus:

```shell
pnpm generate
```

> **Info**
>
> Wir nutzen [plop](https://plopjs.com/) zum Erstellen einer neuen Komponente. Die Templates hierfür liegen in `.plop-templates`.

> **Visual Meta Datei befüllen**
>
> Ergänze in der `visual.meta.ts` mindestens sinnvolle `categories`, prägnante `visualTraits` sowie konkrete `useWhen`- und bei Bedarf `notUseWhen`-Einträge. Ziel ist, dass LLMs die Komponente anhand ihres Aussehens und ihres Einsatzzwecks zuverlässig von ähnlichen Komponenten unterscheiden können.

### Release

Wir nutzten [changesets](https://github.com/changesets/changesets) für Release und Versionierung.
Führe folgenden Befehl aus:

```shell
npx changeset
```

Dadurch wird ein Merge Request `Version Package` erzeugt. Sobald dieser gemerged wurde, wird automatisch ein neues Release erzeugt.

> **Achtung**
>
> Ohne Changeset kann kein Release erzeugt werden!
