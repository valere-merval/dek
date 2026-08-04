import styled from "styled-components";

export const CAROUSEL_PRODUCT_IMAGE_CONTAINER_NAME = "carousel-product-image";

export const CarouselContainer = styled.div`
  container-type: inline-size;
  container-name: ${CAROUSEL_PRODUCT_IMAGE_CONTAINER_NAME};
`;

const containerQueryBreakpoint = "512px";

export const DesktopWrapper = styled.div`
  display: none;

  @container ${CAROUSEL_PRODUCT_IMAGE_CONTAINER_NAME} (inline-size >= ${containerQueryBreakpoint}) {
    display: revert;
  }
`;

export const MobileWrapper = styled.div`
  @container ${CAROUSEL_PRODUCT_IMAGE_CONTAINER_NAME} (inline-size >= ${containerQueryBreakpoint}) {
    display: none;
  }
`;

export const ImageContainer = styled.div<{ $hide?: boolean }>`
  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  justify-content: center;
  width: 100%;

  img {
    object-fit: contain;
    max-height: 400px;
  }
`;
