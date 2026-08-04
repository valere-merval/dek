# Benamung der Design Tokens

- Status: angenommen
- Entscheider: Daniel, Flo, Christian, Max
- Datum: 2022-09-15

Technische Story: [TD-28](https://jira.congstar.net/browse/TD-28)

## Kontext und Problem Beschreibung

Ein einheitliches System zur Benennung von Designtokens

## Entscheidungstreiber <!-- optional -->

- Klare Struktur der Tokens
- Trennnung von Farben zu Schemes (Postpaid,Prepaid etc)
- Gemeinsames Verständnis zwischen Designern und Entwicklern

## Betrachtete Optionen

- Material Design 3
- Übernahme von alten Tokens

## Entscheidungsergebnis

Gewählte Option: Material Design 3, weil es abstrakt gehalten ist und es nicht zu sehr an Komponenten gebunden ist.
Zudem ist das System dokumentiert.

### Positive Konsequenzen <!-- optional -->

- klare Benennung der Tokens
- es ist klar, was eine Referenz auf einen Wert ist und was von Designern und Entwicklern genutzt werden sollte
- eigene Tokens für Komponenten

### Negative Konsequenzen <!-- optional -->

- neu Schreiben aller Tokens
- neue Dokumentation erstellen
- Onboarding dauert länger

## Pro und Contra der Optionen <!-- optional -->

### Material Design 3

- Gut, weil gerade bei Farben nicht zu viele nach außen getragen werden
- Gut, weil durch Benamung schon klar ist wie ein Wert verwendet werden darf
- Schlecht, weil Aufwand der Migration höher
- … <!-- Anzahl der Pro und Contra kann variieren -->

### Übernahme von alten Tokens

- Gut, weil einfache Migration für Entwickler
- Schlecht, weil nicht klar ist welchen Einsatz ein Token hat
