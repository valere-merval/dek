import styled, { css, DefaultTheme } from "styled-components";
import { up } from "../../theme/mappings/mediaBreakpoints";
import { SpaceVariant } from "../../theme/mappings/space";
import { disableUserSelect } from "../../utils/userSelect";
import { RadioGroup } from "../Input/RadioGroup";
import { CheckboxGroup as BaseCheckboxGroup } from "../Input/Checkbox/CheckboxGroup";
import { ItemContainer } from "../Input/Checkbox/CheckboxGroup/CheckboxGroup.styles";
import { CheckboxLabel } from "../Input/Checkbox/Checkbox/Checkbox.styles";
import { textColorMixin } from "../Typography/themeBackgroundColorMapping";
import { typoMap } from "../Input/Checkbox/shared/mappings";

export const ITEM_PADDING_Y: SpaceVariant = "12";
export const ITEM_PADDING_X: SpaceVariant = "16";

export const hoverMixin = (theme: DefaultTheme) => css`
  ${up("md")} {
    // 01.03.2024 im Daily entschieden der hover betrifft nur noch die Desktop variation.
    //Die mobile version erzwingt für den Hover eine unverständliche Wrapper Komponente,
    //da der hover über die Box des ModalContents hinausragen soll und damit einen Horizontalen Scrollbalken erzeugt.
    padding: ${theme.space[ITEM_PADDING_Y]} ${theme.space[ITEM_PADDING_X]};
    margin: -${theme.space[ITEM_PADDING_Y]} -${theme.space[ITEM_PADDING_X]};
    border-radius: ${theme.borderRadius["12"]};

    &:hover {
      background-color: ${theme.color.NeutralShape80} !important;
    }

    &[data-selected]:after {
      top: calc(${theme.size[24]} / 2 + ${theme.space[ITEM_PADDING_Y]});
      left: calc(${theme.size[24]} / 2 + ${theme.space[ITEM_PADDING_X]});
    }

    &[data-hovered] {
      background-color: ${theme.color.NeutralShape80} !important;
    }

    cursor: pointer;
    ${disableUserSelect()};
  }
`;

export const RadioItem = styled(RadioGroup.Item)(
  ({ theme }) => css`
    ${hoverMixin(theme)}
  `,
);

export const CheckboxGroup = styled(BaseCheckboxGroup.Root)(
  () => css`
    ${ItemContainer} {
      ${CheckboxLabel} {
        flex-grow: 1;
        align-self: center;
      }
    }
  `,
);

export const CheckboxGroupItem = styled(BaseCheckboxGroup.Item)(
  ({ theme }) => css`
    ${hoverMixin(theme)}
  `,
);

export const CheckboxLabelContainer = styled.span(({ theme }) => {
  const brand = theme.contextSpecific.brand;
  return css`
    all: unset;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

    ${textColorMixin(theme)};
    font: ${theme.typography[typoMap[brand].mobile]};
    ${up("md")} {
      font: ${theme.typography[typoMap[brand].desktop]};
    }
  `;
});

export const CheckboxCounter = styled.span(
  ({ theme }) => css`
    color: ${theme.color.NeutralSecondary40};
    font: ${theme.typography.BodyLight14};

    ${up("md")} {
      font: ${theme.typography.BodyLight16};
    }
  `,
);
