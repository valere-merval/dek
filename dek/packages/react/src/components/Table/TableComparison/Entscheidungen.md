# Unterschiede TableComparison und dreispaltiges Design

## Preis als extra Zeile oder Teil des Headers?

TableComparison aktuell: Teil des Headers
Dreispaltiges Design: Preis als extra Zeile

Entscheidung: Preis ist Teil des Headers und somit auch sticky.

## Was soll passieren wenn der Preis nicht bekannt ist?

TableComparison aktuell: 0,00 € einmalig
Dreispaltiges Design: k.A.

Entscheidung: auf technischer Ebene kann definiert werden, dass der Preis unbekannt ist. Dem Kunden wird in diesem Falle "keine Preisangabe" dargestellt.

## Wie sollen einmalige Preise dargestellt werden?

TableComparison aktuell: 12,00 € einmalig
Dreispaltiges Design: 12 €

Entscheidung: mit dem Suffix "einmalig"

## Sollen Cent Beträge dargestellt werden?

TableComparison aktuell: 12,00 €
Dreispaltiges Design: 12 €

Entscheidung: Ja z.B. 12,00 €

## Welche Schriftgröße soll für die Headline verwendet werden?

TableComparison aktuell: Headline
Dreispaltiges Design: gleiche Schriftgröße wie für die Zeilenüberschriften verwendet werden

Entscheidung: Bei zweischaltiger Darstellung wird die Headline beibehalten. Bei dreispaltiger Darstellung wird die gleiche Schriftgröße wie für die Zeilenüberschriften verwendet werden.

## Sollen sich Schriftgrößen zwischen mobile und desktop unterscheiden?

TableComparison aktuell: body bold 14 für Überschriften und body light 14 für Werte auf mobile und body bold 16 für Überschriften und body light 16 für Werte auf desktop
Dreispaltiges Design: body bold 14 für Überschriften und body light 14 für Werte

Entscheidung: ja, mobile 14, desktop 16

# Anpassungen an der TableComparison

## Preis in Header soll immer auf einer Zeile sein, auch wenn der Text darüber in einer der Spalten mehrzeilig wird

## Placeholder wird nur angezeigt wenn die Select-Boxen dargestellt werden
