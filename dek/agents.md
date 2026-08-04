# Agents.md — fair Monorepo

> congstar Design System ("fair") — pnpm + Turborepo Monorepo
> Stand: Mai 2026

---

## CRITICAL RULES - MUST FOLLOW

### RESPONSES

- Keep responses concise and to the point - unless the user asks otherwise

### PLANNING MODE

- Always ask clarifying questions
- Never assume design, tech stack or features
- Use deep-dive sub-agents to assist with research
- Use deep-dive sub-agents to review the different aspects of your plan before presenting to the user

### CHANGE / EDIT MODE

- Never implement features yourself when possible - use sub-agents!
- Identify changes from the plan that can be implemented in parallel, and use sub-agents to implement the features efficiently
- When using sub-agents to implement features, act as a coordinator only
- Use the best model for the task - premium models for complex tasks (like coding) and mid-tier models for simpler tasks, like documentation
- After completing features (large or small), always run commands like lint, type check and next build to check code quality
- After completing features (large or small), always use 2 sub-agents to do reviews and resolve the findings

## Monorepo-Struktur

```
fair/
├── packages/
│   ├── react/          # @fair/react — Haupt-Komponentenbibliothek (React, Styled Components)
│   ├── tokens/         # @fair/tokens — Design Tokens (Style Dictionary)
│   ├── icons/          # @fair/icons — Icon-Bibliothek
│   ├── global-css/     # @fair/global-css — Globales CSS-Stylesheet
│   ├── gitlab-ci-utils/# @fair/gitlab-ci-utils — CI-Hilfsskripte
│   ├── teams-notifications/ # @fair/teams-notifications — MS Teams Benachrichtigungen
│   ├── eslint-config-custom/ # Shared ESLint-Konfiguration
│   └── tsconfig/       # Shared TypeScript-Konfigurationen
├── examples/           # Beispiel-Projekte für die Komponentenbibliothek
│   └── nextjs/
├── docs/               # Dokumentation & Architecture Decision Records (ADRs)
│   ├── decisions/      # ADRs (deutsch, nummeriert 0001–0014)
│   └── troubleshoot/   # Troubleshooting-Guides
└── .gitlab/ci/         # Modulare CI/CD-Pipeline-Konfigurationen
```

**Kernpaket:** `packages/react` ist die Komponentenbibliothek. Alle anderen Packages sind unterstützende Infrastruktur (Tokens, Icons, Tooling).

**Examples:** Demonstrieren die Integration von `@fair/react` in eine Next.js-Anwendung.

---

## Dokumentation (docs/)

- **Architecture Decision Records** (ADRs 0001–0014): Entscheidungen zu Monorepo, Release-Prozess, pnpm, Design Tokens, Styled Components, Playwright, etc.
- **Troubleshooting**: Changeset-Token-Probleme

---

## Scripts (package.json)

| Script              | Beschreibung                                     |
| ------------------- | ------------------------------------------------ |
| `build`             | Baut alle Packages (ohne Examples) via Turborepo |
| `dev`               | Startet alle Packages parallel im Dev-Modus      |
| `test`              | Führt Tests aller Packages aus                   |
| `lint` / `lint:fix` | ESLint über alle Packages                        |
| `ts:check`          | TypeScript-Typprüfung                            |
| `storybook`         | Startet Storybook                                |
| `storybook:build`   | Baut Storybook für Deployment                    |

---

## CI/CD (GitLab CI)

**Pipeline-Stages:** `schedule` → `comment` → `test` → `build` → `deploy` → `release`

**Trigger-Regeln:**

- Merge Requests
- Commits auf Default-Branch (main)
- Scheduled Pipelines
- Tags

**Pipeline-Module** (`.gitlab/ci/`):

- **base.yml** — Immer aktive Jobs (Lint, Test, Type-Check)
- **react/merge_request.yml** — MR-Jobs für `packages/react` und `packages/icons` (Storybook-Build, Visual Tests)
- **react/prod_storybook/** — Storybook-Deployment (Build + Deploy)
- **release/release.yml** — Changeset-Release auf main
- **release/release_snapshot.yml** — Snapshot-Releases für `snapshot/*`-Branches
- **tokens/tokens.yml** — Token-spezifische Jobs
- **schedules/scheduled_messages.yml** — Geplante Teams-Benachrichtigungen

**Externe Integrationen:** Dependency-Scanning, Snowball (Helm + Buildctl)

---

## Tooling

- **Package Manager:** pnpm 10.x
- **Build-Orchestrierung:** Turborepo
- **Versionierung/Release:** Changesets
- **Linting:** ESLint (shared config), Prettier
- **Testing:** Vitest (Unit), Playwright (Visual/CT)
- **Commit-Konventionen:** Commitlint (Conventional Commits)
- **Pre-Commit:** Husky + lint-staged
