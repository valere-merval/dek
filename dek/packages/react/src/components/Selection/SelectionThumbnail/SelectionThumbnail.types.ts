import {
  ToggleGroupItemProps,
  ToggleGroupSingleProps,
} from "@radix-ui/react-toggle-group";

export type SelectionThumbnailRootProps = Omit<
  ToggleGroupSingleProps,
  "type"
> & {
  onValueChange: (value: string) => void;
};
export type SelectionThumbnailItemProps = ToggleGroupItemProps;
