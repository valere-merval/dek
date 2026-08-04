import { ComponentPropsWithoutRef } from "react";
import { HeadlineTag } from "../../Typography/Headline";

export type Status = "available" | "unavailable" | "error";

export interface AvailabilityCheckEditProps
  extends ComponentPropsWithoutRef<"div"> {
  status: Status;
  headline?: string;
  description: string;
  buttonLabel?: string;
  onButtonClick: () => void;
  headlineLevel?: HeadlineTag;
}

export interface AddressProps extends ComponentPropsWithoutRef<"div"> {
  status: Status;
  description: string;
}
