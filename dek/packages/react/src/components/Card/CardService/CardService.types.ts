import { ComponentPropsWithoutRef } from "react";
import { HeadlineTag } from "../../Typography/Headline/Headline.types";

export interface CardServiceProps extends Omit<
  ComponentPropsWithoutRef<"div">,
  "children"
> {
  headlineLevel?: HeadlineTag;
}
