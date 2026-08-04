# @fair/team-notifications - Messenger Utils

Dieses Package beinhaltet diverse funktionen welche mit oder ohne Input templates für einen Teams Webhook generieren und
an besagten Webhook posten können.

[[_TOC_]]

## Neue Module erstellen

Zur Erstellung einer neuen Automatisierten Nachricht können folgende Schritte befolgt werden:

- [Ein Webhook muss für jeden Kanal einzeln generiert werden](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook?tabs=dotnet).
  Dies kann nur durch einen Congstar Mitarbeiter und nicht
  durch einen Gast user geschehen.
- Eine Template muss erstellt werden. Teams Webhooks akzeptieren nur JSON in vorgegebenen Schemata
- das Script muss in der CI Pipeline oder einen Chronjob eingebunden werden.

## Resourcen

Die Erstellung von Teams Karten ist etwas tricky und braucht Übung, daher ist hier eine Liste von Resourcen, welche
hierbei helfen koennen:

- [Adaptive Card Designer](https://adaptivecards.io/designer/)
- [Adaptive Cards Documentation](https://adaptivecards.io/explorer/)

## Bestehende Module

## Konfiguration

Die Webhook URL darf nicht im Code hinterlegt werden und wird per Environment Variable gesetzt:

- `FAIR_TEAMS_WEBHOOK_URL` fuer alle Teams Notifications (`scheduled-message` und `release-notes`)

Standardverhalten bei Fehlern (z. B. 403):

- Das Script loggt eine Warnung und beendet sich ohne Fehlercode, damit die restliche Pipeline nicht blockiert wird.
- Mit `FAIL_ON_WEBHOOK_ERROR=true` wird wieder hart gefailt.

## Microsoft Teams Workflows

Dieses Package ist auf den neuen Workflow-Weg standardisiert. `FAIR_TEAMS_WEBHOOK_URL` muss auf eine Teams-Workflows- oder Power-Automate-Webhook-URL zeigen und alle Templates werden direkt als Adaptive Cards erstellt.

- Workflow-Webhooks erhalten ein kompatibles Adaptive-Card-Payload fuer den Trigger `When a Teams webhook request is received`.
- Es gibt keinen MessageCard-Template-Pfad mehr.

### Empfohlener Flow

Minimaler Aufbau in Teams oder Power Automate:

1. Im gewuenschten Teams Channel `...` oeffnen und `Workflows` auswaehlen.
2. Das Template `Send webhook alerts to a channel` oder einen leeren Flow mit `When a Teams webhook request is received` anlegen.
3. Als naechsten Schritt `Post card in a chat or channel` hinzufuegen.
4. Als Adaptive Card den kompletten Trigger-Body verwenden.
5. Die erzeugte Webhook URL kopieren und in GitLab als `FAIR_TEAMS_WEBHOOK_URL` hinterlegen.
6. Dem Flow mindestens einen Co-Owner geben, damit er nicht als orphan flow endet.

### Erwartetes Payload

Das Package sendet ein Adaptive-Card-JSON:

```json
{
  "type": "AdaptiveCard",
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.4",
  "body": [
    {
      "type": "TextBlock",
      "text": "UI/UX Sprechstunde 27.5.2026",
      "weight": "Bolder",
      "size": "Medium",
      "wrap": true
    }
  ]
}
```

Fuer `scheduled-message` wird damit der komplette Einladungstext als Adaptive Card gepostet.

Fuer `release-notes` werden Titel, Einleitung und die aus dem Changelog erzeugten Abschnitte in die Adaptive Card uebernommen.

Fuer den aktuellen CI-Use-Case ist diese Variante direkt mit `Post card in a chat or channel` kompatibel.

### Troubleshooting

- `403` auf einer Workflow-URL: Flow deaktiviert, URL nicht mehr gueltig oder Policy blockiert den Trigger.
- Erfolgreicher HTTP-Request auf einer Workflow-URL bestaetigt nur, dass der Flow den Request angenommen hat, nicht dass bereits eine Teams-Nachricht gepostet wurde.
- Fehler `Property 'type' must be 'AdaptiveCard'`: im Flow pruefen, ob bei `Post card in a chat or channel` wirklich der Trigger-Body als Adaptive Card verwendet wird.
- Fuer Pipeline-Debugging kann `DEBUG_TEAMS_WEBHOOK=true` gesetzt werden, um das an den Workflow gesendete Payload im Job-Log auszugeben.

### Release Notes

Das Release Notes Script parsed mithilfe der git diff additionen zu den Changelogs.

Das Script splittet die diff annhand der Automatisch generierten Hierarchie der überschriften, welche jeweils eine (
Version | Änderungsart ) darstellen und entfernt danach alle Markdown sonderzeichen, da diese scheinbar nicht korrekt
von
Teams verarbeitet werden.

### Review Notes

In der vergangenheit ist es oft dazu gekommen, dass nichtentwickler den Link für die jeweilige Review app nicht gefunden
haben, hier sollen die Review Notes abhilfe schaffen.

Immer wenn eine Review-App auf dem Wirk-Cluster installiert wird triggert dies einen Notification welche den Link und
den zugehörigen MR darstellt.
Der Notwendige Input wird hierbei aus den Pipeline variablen bezogen.
