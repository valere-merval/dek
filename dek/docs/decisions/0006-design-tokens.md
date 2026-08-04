# Synchronisation von Design Tokens zwischen Design und Entwicklung

- Status: akzeptiert
- Entscheider: Daniel, Max, Florian, Christian
- Datum: 2022-09-05

## Kontext und Problem Beschreibung

Design Tokens helfen dabei, dass Designer und Entwickler auf einen synchronisierten Stand von Grundelementen (
Farben,Schriften, etc.) zurückgreifen können. Zusätzlich hilft eine gleichbleibende Benamung über Systeme hinweg, dass
alle Parteien immer vom Gleichen sprechen.

Dafür wird ein System benötigt, dass alle Beteiligten dabei unterstützen kann.

## Entscheidungstreiber <!-- optional -->

- bestmögliche Synchronisation zwischen Designer und Entwicklern sollte gegeben sein

## Betrachtete Optionen

- Tokens in reiner JSON Form
- Tokens in Form von Design Tool Bibliotheken (AdobeXD oder Figma)
- Figma Plugin: Figma Tokens mit Gitlab Integration - https://github.com/six7/figma-tokens/
- Figma Plugin: Design Tokens - https://github.com/lukasoppermann/design-tokens

## Entscheidungsergebnis

Gewählte Option: Figma Tokens Plugin, da es als einzige Option beide Welten am besten bedienen kann

### Positive Konsequenzen <!-- optional -->

- Synchronisation von Design und Entwicklung ist möglich
- Tokens werden im Repository versioniert
- Single Source of Truth

### Negative Konsequenzen <!-- optional -->

- In Figma Tokens Plugin muss darauf geachtet werden, dass immer gepullt und gepushed wird.
- Bei Änderungen der Tokens muss die Figma Library geupdated werden

## Pro und Contra der Optionen <!-- optional -->

### Tokens in reiner JSON Form

- Gut, weil es versioniert werden kann
- Schlecht, weil Designer in ihren Design Tools keinen Zugriff darauf haben

### Tokens in Form von Design Tool Bibliotheken

- Gut, weil Designer direkten Zugriff darauf hat
- Gut, weil kein neues Tool erlernt werden muss
- Schlecht, weil Entwickler etwas eigenes pflegen müssen und so doppelte Arbeit entsteht

### Figma Plugin: Design Tokens

- Gut, weil Tokens aus Figma in Json konvertiert werden können
- Schlecht, weil es nur eine Einbahnstraße ist (Figma zu JSON)

### Figma Plugin: Figma Tokens

- Gut, weil Tokens aus Figma in Json konvertiert werden können
- Gut, weil es über gitlab versionierbar ist
- Gut, weil es im Code oder in Figma gepflegt werden kann
- Gut, weil man aus dem Plugin in Figma Styles exportieren kann um eine Figma Lib aufzubauen
- Schlecht, weil Branches nur über Bezahlversion möglich sind
