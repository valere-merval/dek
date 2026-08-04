## Komponentenname

<!--- Beschreibe die Komponente im Detail -->

## Wann wird gemerged?

Das Testing sowie die Abnahme erfolgen auf der Review App, um sicherzustellen, das alle Änderungen die in den main Branch gelangen produktionsfertig sind.
Dadurch kann nicht der Fall eintreten, dass kaputter Code eine neue Version einer anderen Komponente blockiert.

Die erste Abnahme beinhaltet nur den Code im Storybook. Ist die Abnahme erfolgreich und wurde der Code approved, kann und sollte das Paket versioniert werden.
Nach der Versionierung werden die Änderungen auch im production Storybook übernommen und können von dort aus im Zeroheight dokumentiert werden.
Das Zeroheight erhält noch eine eigene Abnahme.

Alle Abnahmen erfolgen durch den PO des Deko Teams (Tim Witte).

## Checkliste:

- [ ] Ich habe das **[CONTRIBUTING](../../CONTRIBUTING.md)**-Dokument gelesen.
- [ ] Ich habe die Dokumentation entsprechend aktualisiert.
- [ ] Ich habe Visual regression Tests hinzugefügt, um die Komponente abzudecken.
- [ ] Ich habe die Komponente als forwardRef implementiert  
       ([Referenz](../../packages/react/src/components/Typography/Typography.tsx))
- [ ] Ich gebe für alle Komponenten, in denen es möglich ist, die Default HTML Props mit ...rest mit  
       ([Referenz](../../packages/react/src/components/List/List.tsx))
- [ ] Ich habe einen Wrapper für alle reinen StyledComponents gebaut und exportiere diese aus der React Datei (nicht aus
      der .style Datei)  
       ([Referenz](../../packages/react/src/components/Divider/Divider.tsx))
- [ ] Ich habe alle Komponenten aussagekräftig benannt
      Beispiel für eine gute Benamung ist `HeadlineHighlighted`, denn sie folgt dem Schema "NomenAdjektiv" wobei das
      Adjektiv
      optional ist.
- [ ] Ich exportiere für alle Komponenten die jeweiligen PropTypes.  
       ([Referenz](../../packages/react/src/components/List/index.ts))
- [ ] Ich habe meine Komponente in der nextjs example app eingebunden.
- [ ] Ich habe die Browser Konsole geprüft und Errors behoben.
- [ ] Ich habe eine Default Story mit funktionierenden Controls angelegt. (Weitere Stories sollten nur angelegt werden,
      wenn diese einen Komplexen Fall abbilden)
- [ ] Ich habe alle unnötigen props und Styles von der Entwicklung aus meiner Komponente entfernt.
- [ ] Ich habe alle Typen in eine Seperate `.types` Datei ausgelagert um Circular Deps. zu vermeiden.
- [ ] Ich habe die Storybook props (css | data-testid | as) aus der docs Tabelle im Storybook ausgeschlossen
      ([Referenz](../../packages/react/src/components/Typography/Typography.stories.tsx))
- [ ] Ich habe die `delete source branch` Option ausgewählt, oder nach dem Merge meinen Branch gelöscht
- [ ] Ich habe die TODO.md Datei geprüft und gelöscht.
- [ ] Ich habe ein Changeset per `npx changeset` erzeugt.

/label ~"team-deko"
/label ~"fair"
/label ~"react"
/label ~"enhancement"
