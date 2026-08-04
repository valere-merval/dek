import { addons, types, useGlobals, useParameter } from "storybook/manager-api";
import { Select } from "storybook/internal/components";
import {
  AllowedBackgroundColors,
  BackgroundColor,
  backgroundColorMapping,
  Brand,
  brandBackgroundColorMap,
} from "../src/theme/theme";
import { color } from "../src/theme/mappings/color.js";
import fairTheme from "./fairTheme";
import React from "react";

addons.setConfig({
  theme: fairTheme,
  toolbar: {
    zoom: { hidden: true },
  },
});

const DEFAULT_BRAND: Brand = "congstarWeb";

const brands = Object.keys(brandBackgroundColorMap) as Brand[];

const brandTitle = (brand: Brand): string => `Brand: ${brand}`;

type AllowedBackgroundColorsParam = Partial<AllowedBackgroundColors>;

const useAllowedBackgroundColorParameter = () =>
  useParameter<AllowedBackgroundColorsParam>("allowedBackgroundColors");

const useAllowedBrands = (): Brand[] => {
  const allowedForComponent = useAllowedBackgroundColorParameter();

  const allowedBrands = allowedForComponent
    ? (Object.keys(allowedForComponent) as Brand[]).filter(
        (brand) => allowedForComponent[brand]?.[0],
      )
    : [];
  return allowedBrands.length > 0 ? allowedBrands : brands;
};

const useAllowedBackgroundColors = (brand: Brand): BackgroundColor[] => {
  const allowedForComponent = useAllowedBackgroundColorParameter();

  const allowedForBrand = allowedForComponent?.[brand];
  return allowedForBrand && allowedForBrand.length > 0
    ? allowedForBrand
    : brandBackgroundColorMap[brand];
};

const ColorIndicator = ({
  backgroundColor,
}: {
  backgroundColor: BackgroundColor;
}) => {
  const colorValue = color[backgroundColorMapping[backgroundColor]];
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        minWidth: "14px",
        minHeight: "14px",
        borderRadius: "50%",
        marginRight: 6,
        border: `1px solid contrast-color(${colorValue})`,
        backgroundColor: colorValue,
      }}
    />
  );
};

const BrandSelection = () => {
  const [globals, updateGlobals] = useGlobals();
  const allowedBrands = useAllowedBrands();

  const selectedBrand = globals.brand as Brand | undefined;
  const currentBrand =
    selectedBrand && allowedBrands.includes(selectedBrand)
      ? selectedBrand
      : allowedBrands[0];

  React.useEffect(() => {
    if (selectedBrand !== currentBrand) {
      updateGlobals({ brand: currentBrand });
    }
  }, [selectedBrand, currentBrand, updateGlobals]);

  return (
    <Select
      key={`fair-brand-${currentBrand}`}
      ariaLabel="Brand"
      defaultOptions={currentBrand}
      options={allowedBrands.map((value) => ({
        title: brandTitle(value),
        value,
      }))}
      onSelect={(value) => {
        updateGlobals({ brand: value as Brand });
      }}
    >
      Brand
    </Select>
  );
};

/**
 * A toolbar control for the background color whose selectable options depend on
 * the brand currently selected in the "Brand" toolbar. Only background colors
 * that are allowed for the selected brand are offered, and the selection is
 * automatically corrected whenever the brand changes to an incompatible value.
 */
const BackgroundColorSelection = () => {
  const [globals, updateGlobals] = useGlobals();

  const selectedBrand: Brand = (globals.brand as Brand) || DEFAULT_BRAND;
  const selectedBackgroundColor = globals.backgroundColor as
    | BackgroundColor
    | undefined;
  const allowedBackgroundColors = useAllowedBackgroundColors(selectedBrand);

  const currentBackgroundColor =
    selectedBackgroundColor &&
    allowedBackgroundColors.includes(selectedBackgroundColor)
      ? selectedBackgroundColor
      : allowedBackgroundColors[0];

  React.useEffect(() => {
    if (selectedBackgroundColor !== currentBackgroundColor) {
      updateGlobals({ backgroundColor: currentBackgroundColor });
    }
  }, [selectedBackgroundColor, currentBackgroundColor, updateGlobals]);

  return (
    <Select
      key={`fair-background-color-${currentBackgroundColor}`}
      ariaLabel="Background Color"
      icon={<ColorIndicator backgroundColor={currentBackgroundColor} />}
      defaultOptions={currentBackgroundColor}
      options={allowedBackgroundColors.map((value) => ({
        title: value,
        value,
        icon: <ColorIndicator backgroundColor={value} />,
      }))}
      onSelect={(value) => {
        updateGlobals({ backgroundColor: value as BackgroundColor });
      }}
    >
      Background Color
    </Select>
  );
};

addons.register("fair/brand", () => {
  addons.add("fair/brand/selection", {
    type: types.TOOL,
    title: "Brand",
    render: () => <BrandSelection />,
  });
  addons.add("fair/background-color/selection", {
    type: types.TOOL,
    title: "Background Color",
    render: () => <BackgroundColorSelection />,
  });
});
