# Technologieauswahl für neue Styling Lösung

## Entscheidungstreiber

Unsere aktuelle Styling Lösung Styled Components war im letzten Jahr für ein paar Monate im Maintenance Mode und wurde nicht mehr weiter entwickelt. Inzwischen wurde die Entwicklung von einer Person wieder aufgenommen. Es zeigt aber, dass es sehr risikoreich sein kann, sich auf eine Styling Lösung zu stützen die jederzeit eingestellt werden kann. Immerhin wird mit dieser Styling Lösung ca. 50% unseres Codes geschrieben.

Darüber hinaus ist Styled Components mit seinem Runtime-Build nur mit Einschränkungen mit React Server Components und Streaming kompatibel.

Somit suchten wir nach einer Lösung die folgende Akzeptanzkriterien erfüllt:

- Zukunftssicherheit: Mehrere Entwickler sind regelmäßig an der Weiterentwicklung beteiligt?
- Kompatibel mit React Server Components
  - kein Runtime-Build
- Weite Verbreitung
- Gute Dokumentation
- globale Theme Tokens
- Brand spezifisches Styling auf Komponentenebene
- background color spezifisches Styling auf Komponentenebene
- Kompatibilität zu Styled Components ist gegeben um Übergang zu neuer Lösung zu gewährleisten
  - Kann eine Styled Component mit der neuen Lösung umgestyled werden?
  - Kann eine Komponente mit der neuen Lösung durch Styled Components umgestyled werden?
- Gute Developer Experience

## Entscheidungsergebnis

Gewählte Option: **CSS Modules**, da es als einzige Lösung alle Akzeptanzkriterien erfüllt.

## Betrachtete Optionen

### CSS Modules

| Akzeptanzkriterium                                                                   | Einschätzung             |
| ------------------------------------------------------------------------------------ | ------------------------ |
| Zukunftssicherheit                                                                   | ✅ Teil des Webstandards |
| kein Runtime-Build                                                                   | ✅                       |
| Weite Verbreitung                                                                    | ✅                       |
| Gute Dokumentation                                                                   | ✅                       |
| globale Theme Tokens                                                                 | ✅                       |
| Brand spezifisches Styling auf Komponentenebene                                      | ✅                       |
| background color spezifisches Styling auf Komponentenebene                           | ✅                       |
| Kann eine Styled Component mit der neuen Lösung umgestyled werden?                   | ✅                       |
| Kann eine Komponente mit der neuen Lösung durch Styled Components umgestyled werden? | ✅                       |
| Gute Developer Experience                                                            | 🆗 mit passendem Tooling |

### Panda CSS

| Akzeptanzkriterium                                                                   | Einschätzung         |
| ------------------------------------------------------------------------------------ | -------------------- |
| Zukunftssicherheit                                                                   | ❌ 1 Hauptentwickler |
| kein Runtime-Build                                                                   | ✅                   |
| Weite Verbreitung                                                                    | ❌                   |
| Gute Dokumentation                                                                   | ✅                   |
| globale Theme Tokens                                                                 | ✅                   |
| Brand spezifisches Styling auf Komponentenebene                                      | ✅                   |
| background color spezifisches Styling auf Komponentenebene                           | ✅                   |
| Kann eine Styled Component mit der neuen Lösung umgestyled werden?                   | ✅                   |
| Kann eine Komponente mit der neuen Lösung durch Styled Components umgestyled werden? | ✅                   |
| Gute Developer Experience                                                            | ✅                   |

### StyleX

Zum getesteten Zeitpunkt (25./26.06.2026) war das Integrieren leider aufgrund eines Bugs nicht möglich. Somit war ein Prüfen der Akzeptanzkriterien nur theoretisch möglich.
Darüber hinaus war die Dokumentation nur sehr rudimentär.

| Akzeptanzkriterium                                                                   | Einschätzung                                                      |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Zukunftssicherheit                                                                   | ❓ Sehr wenige Entwickler, aber wurde innerhalb von Meta erstellt |
| kein Runtime-Build                                                                   | ✅                                                                |
| Weite Verbreitung                                                                    | ❌                                                                |
| Gute Dokumentation                                                                   | ❌                                                                |
| globale Theme Tokens                                                                 | ✅                                                                |
| Brand spezifisches Styling auf Komponentenebene                                      | ✅                                                                |
| background color spezifisches Styling auf Komponentenebene                           | ✅                                                                |
| Kann eine Styled Component mit der neuen Lösung umgestyled werden?                   | ❓                                                                |
| Kann eine Komponente mit der neuen Lösung durch Styled Components umgestyled werden? | ❓                                                                |
| Gute Developer Experience                                                            | ❓                                                                |

### Tailwind

Tailwind ist eines am weitesten verbreitete Styling Framework.
Leider wurden im Januar 2026 75% des Tailwind Engineering Teams entlassen: https://github.com/tailwindlabs/tailwindcss.com/pull/2388#issuecomment-3717222957

Dadurch arbeiten aktuell nur sehr wenige Entwickler regelmäßig an Tailwind, weshalb wir keine detailierte Analyse durchgeführt haben.

| Akzeptanzkriterium                                                                   | Einschätzung              |
| ------------------------------------------------------------------------------------ | ------------------------- |
| Zukunftssicherheit                                                                   | ❌ Sehr wenige Entwickler |
| kein Runtime-Build                                                                   | ✅                        |
| Weite Verbreitung                                                                    | ✅                        |
| Gute Dokumentation                                                                   | ❓                        |
| globale Theme Tokens                                                                 | ✅                        |
| Brand spezifisches Styling auf Komponentenebene                                      | ❓                        |
| background color spezifisches Styling auf Komponentenebene                           | ❓                        |
| Kann eine Styled Component mit der neuen Lösung umgestyled werden?                   | ✅                        |
| Kann eine Komponente mit der neuen Lösung durch Styled Components umgestyled werden? | ✅                        |
| Gute Developer Experience                                                            | ❓                        |
