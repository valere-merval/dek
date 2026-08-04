import styled, { css } from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { SizeVariant } from "../../../theme/mappings/size";
import { backgroundColorMapping } from "./mapping";
import { highContrast } from "../../../utils/accessibility";
import { rgba } from "polished";

export const selectionThumbnailWidth: SizeVariant = "80";

export const Root = styled(ToggleGroup.Root)(
  ({ theme }) => css`
    all: unset;

    display: flex;
    flex-direction: column;
    gap: ${theme.space["08"]};
  `,
);

export const Item = styled(ToggleGroup.Item)(
  ({ theme }) => css`
    all: unset;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.size["80"]};
    width: ${theme.size[selectionThumbnailWidth]};
    border-radius: ${theme.borderRadius["08"]};
    border: ${theme.size["02"]} solid ${theme.color["NeutralSecondary40"]};

    & img {
      max-height: 75%;
      max-width: 75%;
    }

    background-color: ${theme.color[
      backgroundColorMapping[theme.contextSpecific.backgroundColor]
        ?.backgroundColor || "NeutralPrimaryBlack"
    ]};

    ${highContrast()} {
      border: 2px solid transparent;
    }

    &[data-state="on"] {
      background-color: ${theme.color.InteractiveBlue};
      border-color: ${theme.color.InteractiveBlue};
      ${highContrast()} {
        background-color: SelectedItem;
      }
    }

    &:focus-visible {
      ${theme.contextSpecific.focusStyles}
      ${highContrast()} {
        outline: solid 2px transparent;
      }
    }

    &:hover {
      cursor: pointer;

      &[data-state="off"] {
        background-color: ${rgba(
          theme.color[
            backgroundColorMapping[theme.contextSpecific.backgroundColor]
              ?.backgroundColorHover || "NeutralShape20"
          ],
          0.75,
        )};
      }
    }
  `,
);
