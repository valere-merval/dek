export interface NavigationChipData {
  title: string;
  secondLine: string;
}

export interface NavigationChipProps extends NavigationChipData {
  onClick: () => void;
  checked?: boolean;
}
