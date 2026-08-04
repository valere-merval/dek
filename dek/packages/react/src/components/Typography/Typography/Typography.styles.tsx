import styled, { css, DefaultTheme } from "styled-components";
import { Slot as RadixSlot } from "@radix-ui/react-slot";
import { trimFont } from "../../../theme/mappings/typography";
import { TypographyProps, TypographyVariant } from "./Typography.types";
import { TextColor, textColorMixin } from "../themeBackgroundColorMapping";
import { ConvertToTransient } from "../../propTypes";

type Props = ConvertToTransient<
  TypographyProps,
  "color" | "variant" | "trimFont"
> & {
  $color?: TextColor;
  $variant: TypographyVariant;
  $trimFont?: boolean;
  theme: DefaultTheme;
};

const getTypographyStyles = ({
  theme,
  $variant,
  $color,
  $trimFont: shouldFontBeTrimmed,
}: Props) => css`
  all: unset;
  display: revert;
  font: ${theme.typography[$variant]};

  ${textColorMixin(theme, $color)}
  ${shouldFontBeTrimmed && trimFont($variant)}
`;

export const Typography = styled.div<Omit<Props, "theme">>(getTypographyStyles);
export const Slot =
  styled(RadixSlot)<Omit<Props, "theme">>(getTypographyStyles);
