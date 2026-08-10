import { stepStatusToTextMap } from "./mappings";
import { StepInformation, StepperItemState } from "./Stepper.types";

export const getAriaLabel = (
  step: StepInformation,
  state: StepperItemState,
) => {
  return step ? stepStatusToTextMap[state] : undefined;
};
