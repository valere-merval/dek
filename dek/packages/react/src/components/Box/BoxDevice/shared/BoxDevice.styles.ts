import styled, { css } from "styled-components";
import { Box as BoxComponent, BoxProps } from "../../shared/Box";
import { backgroundColorMapping } from "../../../../theme/theme";
import { textColorMixin } from "../../../Typography/themeBackgroundColorMapping";
import { up } from "../../../../theme/mappings/mediaBreakpoints";
import { DecorationLabel } from "../../shared/Box/Box.styles";
import { LoaderSkeleton as SkeletonComponent } from "../../../Loader/LoaderSkeleton";
import { BoxDeviceBackgroundColor } from "./BoxDevice.types";
import { highContrastBorder } from "../../../../utils/accessibility";

export const VERTICAL_DEVICE_BOX_MIN_WIDTH = "256px";
export const HORIZONTAL_DEVICE_BOX_MIN_WIDTH = "480px";
export const CONTENT_MAX_WIDTH = "340px";
export const BOX_DEVICE_LIST_CONTAINER_NAME = "device-list";
export const BOX_DEVICE_ITEM_CONTAINER_NAME = "device-item-container";

export const Skeleton = styled(SkeletonComponent)(
  () => css`
    width: 100%;

    height: 450px;
    @container ${BOX_DEVICE_LIST_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      height: 300px;
    }
  `,
);

export const GridContainer = styled.div`
  container-type: inline-size;
  container-name: ${BOX_DEVICE_LIST_CONTAINER_NAME};
`;

export const Grid = styled.div(({ theme }) => {
  const DEVICE_LIST_GAP = theme.space[24];

  return css`
    a {
      text-decoration: unset;
      cursor: pointer;
    }

    gap: ${DEVICE_LIST_GAP};
    flex-direction: column;
    display: flex;

    @container ${BOX_DEVICE_LIST_CONTAINER_NAME} (width >= calc(2 * ${VERTICAL_DEVICE_BOX_MIN_WIDTH} + ${DEVICE_LIST_GAP})) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  `;
});

export const ItemContainer = styled.div(
  ({ theme }) => css`
    all: unset;
    display: revert;

    container-type: inline-size;
    container-name: ${BOX_DEVICE_ITEM_CONTAINER_NAME};
    height: 100%;
    max-width: 650px;

    border-radius: ${theme.borderRadius["16"]};
    ${up("md")} {
      border-radius: ${theme.borderRadius["24"]};
    }
  `,
);

export const Box = styled(BoxComponent)<
  BoxProps & { $backgroundColor: BoxDeviceBackgroundColor }
>(
  ({ theme, $backgroundColor }) => css`
    /**
      increase css specificity adding the same class multiple times
    */
    &&& {
      background-color: ${theme.color[
        backgroundColorMapping[$backgroundColor]
      ]};

      ${textColorMixin(theme)}

      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      border-radius: ${theme.borderRadius["16"]};
      ${up("md")} {
        border-radius: ${theme.borderRadius["24"]};
      }

      & ${DecorationLabel} {
        right: ${theme.space["16"]};
        ${up("md")} {
          right: ${theme.space["24"]};
        }
      }

      ${highContrastBorder()}

      height: 100%;
      min-width: ${VERTICAL_DEVICE_BOX_MIN_WIDTH};
      gap: ${theme.space["20"]};
      padding: ${theme.space["40"]} ${theme.space["20"]} ${theme.space["20"]};

      @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
        padding: ${theme.space["40"]} ${theme.space["48"]} ${theme.space["40"]}
          ${theme.space["20"]};
        flex-direction: row;
        justify-content: center;
      }
    }
  `,
);

export const ImageWrapper = styled.span(
  ({ theme }) => css`
    & img {
      width: auto;
      max-width: 100%;
      max-height: 16rem;
    }

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      // Ohne Diese Angabe würde der Content das Bild beim skallieren zu sehr verkleinern
      min-width: 150px;

      & img {
        // Ist nötig um in Relation zum Content nicht zu groß zu sein
        max-height: 24rem;
        margin-top: ${theme.space["16"]};
      }
    }
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    max-width: ${CONTENT_MAX_WIDTH};
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: ${theme.space["16"]};
    align-items: center;

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      align-items: flex-start;
      // Eine feste Breite ist nötig, dass der Content das Bild nicht verkleinert und somit die Kacheln unterschiedlich skallieren
      width: 320px;
      align-self: flex-end;
    }
  `,
);

export const ProductSpecs = styled.div(
  ({ theme }) => css`
    display: flex;
    row-gap: ${theme.space["04"]};
    column-gap: ${theme.space["16"]};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @container ${BOX_DEVICE_ITEM_CONTAINER_NAME} (inline-size > ${HORIZONTAL_DEVICE_BOX_MIN_WIDTH}) {
      justify-content: flex-start;
    }
  `,
);

export const MemorySizes = styled.p(
  ({ theme }) => css`
    all: unset;
    font: ${theme.typography.BodyLight14};
    ${textColorMixin(theme)};

    white-space: nowrap;
  `,
);

export const BoxDeviceButtonWrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${CONTENT_MAX_WIDTH};

    margin-top: ${theme.space["08"]};

    display: flex;
    flex-direction: column;
    align-items: start;
  `,
);

export const EnergyLabelContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.space["16"]};
    left: ${theme.space["16"]};
  `,
);
