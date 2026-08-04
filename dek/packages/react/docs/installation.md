## Voraussetzungen

Um die @fair Packages installieren zu können, muss die private npm Registry konfiguriert sein (.npmrc).

```bash
@fair:registry=https://git.congstar.net/api/v4/projects/1047/packages/npm/
//git.congstar.net/api/v4/projects/1047/packages/npm/:_authToken="${CONGSTAR_GITLAB_FAIR_NPM_TOKEN}"
```

## Installieren

Für alle React Komponenten und die Globalen Styles steht das `@fair/react` npm package zur Verfügung.

Die Icons werden separat über `@fair/icons` bereitgestellt.

### pnpm

```bash
pnpm add @fair/react
```

### yarn

```bash
yarn add @fair/react
```

### npm

```bash
npm add @fair/react
```
