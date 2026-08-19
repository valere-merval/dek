import styled, { css } from "styled-components";
import { StepperContent, StepperList } from "../shared/Stepper.styles";
import { getSeparatorColor, itemSizeMap } from "../shared/mappings";
import { up } from "../../../theme/mappings/mediaBreakpoints";
import { StepperItemProps } from "../shared";
import { ConvertToTransient } from "../../propTypes";
import { highContrast } from "../../../utils/accessibility";
import { colorMapping as dividerColorMapping } from "../../Divider/Divider.styles";

export const Root = styled(StepperList)`
  flex-direction: column;
`;

export const Item = styled.li<ConvertToTransient<StepperItemProps, "state">>(
  ({ theme, size }) => {
    const largeIndicatorDimension =
      theme.size[itemSizeMap[size || "large"].indicatorDimension];
    const mediumIndicatorDimension =
      theme.size[itemSizeMap[size || "medium"].indicatorDimension];
    const separatorColor =
      theme.color[dividerColorMapping[getSeparatorColor(theme)]];

    return css`
      all: unset;
      display: flex;
      position: relative;
      gap: ${theme.space["20"]};
      z-index: 1;

      // Lines between Indicators
      &:not(:last-child):before {
        content: "";
        position: absolute;
        left: calc((${mediumIndicatorDimension} / 2) - 1px);
        width: 2px;
        background-color: ${separatorColor};
        bottom: -1px;
        top: 1px;
        z-index: -1;
        ${highContrast()} {
          background-color: CanvasText;
        }

        ${up("md")} {
          left: calc((${largeIndicatorDimension} / 2) - 1px);
        }
      }

      & ${StepperContent} {
        padding-top: calc(
          (${mediumIndicatorDimension} / 2) - ${theme.space["08"]}
        );
        ${up("md")} {
          padding-top: calc(
            (${largeIndicatorDimension} / 2) - ${theme.space["08"]} - 1px
          );
        }
        padding-bottom: ${theme.size[itemSizeMap[size || "medium"].padding]};
        ${up("md")} {
          padding-bottom: ${theme.size[itemSizeMap[size || "large"].padding]};
        }
      }
      &:last-child ${StepperContent} {
        padding-bottom: 0;
      }
    `;
  },
);

export const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
