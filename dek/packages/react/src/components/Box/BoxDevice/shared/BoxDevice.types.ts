import { BackgroundColor } from "../../../../theme/theme";
import {
  ButtonPrimaryForBoxHref,
  ButtonPrimaryForBoxOnClick,
} from "../../shared/ButtonPrimaryForBox";

// TODO: This is just a workaround for the issue https://github.com/reactjs/react-docgen/issues/882. The typescript function Extract results in not seeing the union types in storybook controls.
type Extends<T, U extends T> = U;

export type BoxDeviceBackgroundColor = Extends<
  BackgroundColor,
  "darkGrey" | "lightGrey"
>;

export type BoxDeviceButtonPrimaryProps =
  | ButtonPrimaryForBoxOnClick
  | ButtonPrimaryForBoxHref;
