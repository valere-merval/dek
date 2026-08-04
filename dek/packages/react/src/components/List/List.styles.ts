import styled, { css, DefaultTheme } from "styled-components";
import {
  bodyFont,
  bulletColor,
  descriptionFont,
  spacingVariables,
  supportedBulletColors,
  textColor,
} from "./mappings";
import {
  ListBodyProps,
  ListColor,
  ListRootProps,
  ListSize,
} from "./List.types";
import { ConvertToTransient } from "../propTypes";
import { up } from "../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../utils/accessibility";
import { ColorVariant } from "../../theme/mappings/color";

export const ItemContent = styled.div<{
  $size?: ListSize;
}>(({ theme, $size }) => {
  const innerItemGapMedium =
    theme.space[
      spacingVariables[theme.contextSpecific.brand][$size || "medium"]
        .innerItemGap
    ];
  const innerItemGapLarge =
    theme.space[
      spacingVariables[theme.contextSpecific.brand][$size || "large"]
        .innerItemGap
    ];

  return css`
    all: unset;
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: ${innerItemGapMedium};
    ${up("md")} {
      gap: ${innerItemGapLarge};
    }
  `;
});

const getBodyFont = ({
  theme,
  $size,
}: {
  theme: DefaultTheme;
  $size?: ListSize;
}) => css`
  font: ${theme.typography[
    bodyFont[theme.contextSpecific.brand][$size || "medium"]
  ]};
  ${up("md")} {
    font: ${theme.typography[
      bodyFont[theme.contextSpecific.brand][$size || "large"]
    ]};
  }
`;

const getDescriptionFont = ({
  theme,
  $size,
}: {
  theme: DefaultTheme;
  $size?: ListSize;
}) => css`
  font: ${theme.typography[
    descriptionFont[theme.contextSpecific.brand][$size || "medium"]
  ]};
  ${up("md")} {
    font: ${theme.typography[
      descriptionFont[theme.contextSpecific.brand][$size || "large"]
    ]};
  }
`;

export const Body = styled.div<ListBodyProps & { $size?: ListSize }>(
  (props) => css`
    ${getBodyFont(props)}
  `,
);

const getBulletColor = (
  theme: DefaultTheme,
  $decorativeColor?: ListColor,
): ColorVariant => {
  const brand = theme.contextSpecific.brand;
  const backgroundColor = theme.contextSpecific.backgroundColor;
  const supportedBulletColorsForBrand = supportedBulletColors[brand];

  if (
    (brand === "congstarWeb" || brand === "congstarApp") &&
    backgroundColor === "blue"
  ) {
    return bulletColor["black"];
  }

  if ($decorativeColor) {
    const decorativeColorValue = bulletColor[$decorativeColor];
    const isDecorativeColorSupportedForBrand =
      supportedBulletColorsForBrand.includes(decorativeColorValue);

    if (isDecorativeColorSupportedForBrand) {
      return decorativeColorValue;
    }
  }

  if (supportedBulletColorsForBrand.includes(textColor[backgroundColor])) {
    return textColor[backgroundColor];
  }

  return supportedBulletColorsForBrand.at(0)!;
};

export const BulletPoint = styled.div<{
  $size?: ListSize;
  $decorativeColor?: ListColor;
}>(({ theme, $size, $decorativeColor }) => {
  const bulletPointSizeMedium =
    spacingVariables[theme.contextSpecific.brand][$size || "medium"]
      .bulletPointSize;
  const bulletPointSizeLarge =
    spacingVariables[theme.contextSpecific.brand][$size || "large"]
      .bulletPointSize;

  return css`
    all: unset;
    border-radius: 50%;
    display: block;
    background-color: ${theme.color[getBulletColor(theme, $decorativeColor)]};

    width: ${bulletPointSizeMedium};
    height: ${bulletPointSizeMedium};
    min-width: ${bulletPointSizeMedium};
    min-height: ${bulletPointSizeMedium};

    ${up("md")} {
      width: ${bulletPointSizeLarge};
      height: ${bulletPointSizeLarge};
      min-width: ${bulletPointSizeLarge};
      min-height: ${bulletPointSizeLarge};
    }

    ${highContrast()} {
      background-color: CanvasText;
    }
  `;
});

export const Description = styled.div<{ $size?: ListSize }>(
  ({ theme, $size }) => css`
    ${getDescriptionFont({ theme, $size })}
  `,
);

export const BulletPointContainer = styled.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  // font will be set in root container to align bulletPoint with the first line of the item content
  height: 1lh;
  align-items: center;
`;

export const Item = styled.li<{ $size?: ListSize }>(({ theme, $size }) => {
  const bulletPointGapMedium =
    theme.space[
      spacingVariables[theme.contextSpecific.brand][$size || "medium"]
        .bulletPointGap
    ];
  const bulletPointGapLarge =
    theme.space[
      spacingVariables[theme.contextSpecific.brand][$size || "large"]
        .bulletPointGap
    ];

  return css`
    all: unset;
    display: flex;

    gap: ${bulletPointGapMedium};
    ${up("md")} {
      gap: ${bulletPointGapLarge};
    }
  `;
});

export const Root = styled.ul<ConvertToTransient<ListRootProps, "size">>(
  ({ theme, $size }) => {
    const itemGapMedium =
      theme.space[
        spacingVariables[theme.contextSpecific.brand][$size || "medium"].itemGap
      ];
    const itemGapLarge =
      theme.space[
        spacingVariables[theme.contextSpecific.brand][$size || "large"].itemGap
      ];

    return css`
      all: unset;
      display: flex;
      list-style: none;
      flex-direction: column;
      color: ${theme.color[textColor[theme.contextSpecific.backgroundColor]]};

      gap: ${itemGapMedium};
      ${up("md")} {
        gap: ${itemGapLarge};
      }

      //  With the following statements the bulletPoint can be centered to the first line of the item content, which can be a body or description
      ${BulletPointContainer} {
        ${getBodyFont({ theme, $size })}
      }
      :not(:has(${Body})) {
        ${BulletPointContainer} {
          ${getDescriptionFont({ theme, $size })}
        }
      }
    `;
  },
);
