import styled, { css } from "styled-components";
import { up } from "../../theme/mappings/mediaBreakpoints";
import { highContrast } from "../../utils/accessibility";
import { ProgressBarColor, ProgressBarSize } from "./ProgressBar.types";
import { progressBarBackgroundColorMap, progressBarColorMap } from "./mapping";

export const Root = styled.div<{ $size?: ProgressBarSize }>(
  ({ $size, theme }) => css`
    all: unset;
    display: revert;
    appearance: progress-bar;
    background-color: ${theme.color[
      progressBarBackgroundColorMap[theme.contextSpecific.backgroundColor]
        .backgroundColor
    ]};
    width: 100%;
    overflow: hidden;

    height: ${theme.space["12"]};
    border-radius: ${theme.borderRadius["06"]};

    ${$size
      ? css`
          ${$size == "large" &&
          css`
            height: ${theme.space["20"]};
            border-radius: ${theme.borderRadius["12"]};
          `}
        `
      : css`
          ${up("md")} {
            height: ${theme.space["20"]};
            border-radius: ${theme.borderRadius["12"]};
          }
        `}

    ${highContrast()} {
      outline: 1px solid transparent;
    }
  `,
);

export const Fill = styled.div<{ $progress: number; $color: ProgressBarColor }>(
  ({ theme, $progress = 0, $color = "yellow" }) => css`
    height: 100%;
    width: ${$progress}%;
    background-color: ${theme.color[progressBarColorMap[$color]]};
    border-radius: inherit;

    ${highContrast()} {
      outline: 1px solid transparent;
      background-color: canvastext;
    }
  `,
);
