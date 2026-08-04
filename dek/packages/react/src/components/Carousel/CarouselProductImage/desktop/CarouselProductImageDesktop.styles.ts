import styled, { css } from "styled-components";
import { ImageContainer as ImageContainerDefault } from "../CarouselProductImage.styles";
import { selectionThumbnailWidth } from "../../../Selection/SelectionThumbnail/SelectionThumbnail.styles";
import { SpaceVariant } from "../../../../theme/mappings/space";

const desktopWrapperGap: SpaceVariant = "12";

export const DesktopWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space[desktopWrapperGap]};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
);

export const ImageContainer = styled(ImageContainerDefault)(
  ({ theme }) => css`
    width: calc(
      100% - ${theme.space[desktopWrapperGap]} -
        ${theme.size[selectionThumbnailWidth]}
    );
  `,
);
