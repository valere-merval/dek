# Module Federation zur Vermeidung von Style Duplikaten für das TYPO3

## Kontext

In unserem Entwicklungsprojekt stehen wir vor der Herausforderung, dass Komponenten teilweise mit Klassennamen im TYPO3
neu implementiert werden müssen, da TYPO3 und React nicht kompatibel sind.
Als mögliche Übergangslösung haben wir Module Federation betrachtet, welches schon von anderen Teams zum Einbinden ganzer Applikationen verwendet wird.

## Entscheidung

Wir haben uns gegen die Implementierung von Module Federation auf Komponenten-Ebene entschieden.
Letztendlich soll die Installation der TYPO3 extension weiterverfolgt werden, da sie mit einem potenziellen
Übergang zu einem reinen Headless CMS in der Zukunft am besten synergiert.

### Betrachtete Optionen

- Module Federation auf Komponenten-Ebene
- Module Federation auf Fair-Library-Ebene
- React-Komponente in Typo3-Komponente einbinden
- Installation einer Typo3 Headless Extension

## Pro und Contra der Optionen

### Module Federation auf Komponenten-Ebene

#### Positive Konsequenzen

1. **Einzelne Ladezeit für Komponenten:** Mit dieser Lösung werden Komponenten einzeln zur Laufzeit geladen, wenn sie benötigt werden. Dies ermöglicht eine schnellere Initialisierung der Anwendung, da nur die tatsächlich benötigten Komponenten geladen werden.
2. **Vermeidung von doppeltem Laden:** Einmal geladene Komponenten müssen nicht erneut geladen werden, was die Effizienz unserer Anwendung steigert.

#### Negative Konsequenzen

1. **Lade-Spinner pro Komponente:** Wir werden einen Lade-Spinner für jede Komponente implementieren, um dem Benutzer ein besseres Feedback über den Ladezustand zu geben.
2. **Das Laden jeder Komponente kann zur Laufzeit fehlschlagen**

### Module Federation auf Fair-Library-Ebene

#### Positive Konsequenzen

1. **Initiales Laden aller Komponenten:** Bei dieser Variante würden alle Komponenten auf einmal initial geladen. Dies könnte zu einem erhöhten Ressourcenverbrauch führen, da möglicherweise mehr Komponenten geladen werden, als tatsächlich benötigt werden.
2. **Ein einzelner Lade-Spinner:** Es wäre nur ein Lade-Spinner erforderlich, was die Benutzererfahrung verbessern könnte.

#### Negative Konsequenzen

1. **Mehr Komponenten als benötigt:** Es besteht die Möglichkeit, dass mehr Komponenten geladen werden, als in der aktuellen Anzeige verwendet werden, was ineffizient sein könnte.
2. **Fallback-Mechanismus:** Auch hier müssten wir einen Fallback-Mechanismus implementieren, um mit Fehlern umzugehen.

### React-Komponente in Typo3-Komponente einbinden

#### Positive Konsequenzen

1. **Einbindung im HTML der Typo3-Komponente:** Die jeweilige Fair-Komponente wird direkt im HTML der Typo3-Komponente eingebunden, wie in [diesem Beispiel](https://react.dev/learn/add-react-to-an-existing-project#step-2-render-react-components-anywhere-on-the-page)
   beschrieben.

#### Negative Konsequenzen

1. **Overhead einer React-Application:** Der Overhead einer React-Application sollte minimal sein, muss jedoch durch
   einen Proof-of-Concept verifiziert werden.
2. **Globales Laden der Fair-Library:** Die Fair-Library wird global als Skript geladen, was bedeutet, dass für jedeTypo3-Komponente eine separate React-Application gestartet wird. Dadurch sind die Komponenten voneinander isoliert
   und können nicht miteinander kommunizieren.
3. **Mehr Komponenten als benötigt:** Auch hier kann es dazu kommen, dass mehr Komponenten geladen werden, als in der
   aktuellen Anzeige tatsächlich gebraucht werden.

### Installation einer Typo3 Headless Extension

#### Positive Konsequenzen

1. **Komponenten können nativ eingebunden werden**
2. **redaktioneller Content ist fehlertoleranter** Beispielsweise können Redakteure nicht mehr versehentlich
   Sicherheitslücken im HTML einführen
3. **Das Ergebnis kann bei einem CMS Relaunch potenziell wiederverwendet werden**

#### Negative Konsequenzen

1. **Verlust von Freiheit für die Redakteure** vermutlich ist es nicht möglich seiten nur teilweise Headless zu
   betreiben(dies sowie der aufwand der Installation müssen noch evaluiert werden)

### Nächste Schritte

Im Zuge der Arbeit mit Blick auf das CMS der Zukunft wird Team 426 Informationen aller Teams einsammeln, welche für ein neues CMS wichtig wäre.
Team Deko wird Wünsche für ein Frontend für das CMS der Zukunft mitgeben.

#### Wünsche

- kleinteilige React Komponenten (Modal,Fußnoten bis hin zu Buttons) vom TYPO3 rendern lassen
- Das Frontend ist eine React Application https://t3planet.de/blog/typo3-reactjs/
- Nextjs als mögliche Option des TYPO3 Frontends
