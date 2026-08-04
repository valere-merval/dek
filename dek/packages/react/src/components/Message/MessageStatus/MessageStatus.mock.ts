import { MessageStatusType } from "./MessageStatus.types";
export const statusMock: Record<MessageStatusType, string> = {
  error: "du musst mindestens eine Option auswählen",
  warning: "hier kann es zu Problemen kommen",
  pending: "Sperrung in Bearbeitung",
  success: "wir haben erfolgreich deine Daten erfasst",
};
