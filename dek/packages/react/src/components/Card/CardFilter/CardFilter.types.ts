import { ReactNode } from "react";
import { HeadlineTag } from "../../Typography/Headline";
import { SwitchProps } from "../../Input/Switch";

export interface CardFilterProps extends SwitchProps {
  id: string;
  name: string;
  title: string;
  description: string;
  switchDescription: string;
  headlineLevel?: HeadlineTag;
  icon?: ReactNode;
  moreDetails?: ReactNode;
}
