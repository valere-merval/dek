import { stepStatusToTextMap } from "./mappings";
import { StepInformation, StepperItemState } from "./Stepper.types";

export const getAriaLabel = (
  step: StepInformation,
  state: StepperItemState,
) => {
  return step
    ? `Schritt ${step.index + 1} von ${step.total}: ${stepStatusToTextMap[state]}`
    : undefined;
};
