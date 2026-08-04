import styled, { css } from "styled-components";
import { ConvertToTransient } from "../../propTypes";
import { LoaderSkeletonProps } from "./LoaderSkeleton.types";
import { skeletonBackgroundMapping, skeletonColorMapping } from "./mapping";

export const SKELETON_CONTAINER_NAME = "skeleton";

export const SkeletonContainer = styled.div<
  ConvertToTransient<LoaderSkeletonProps, "height" | "width">
>(
  ({ $height, $width }) => css`
    all: unset;
    display: revert;

    container-type: inline-size;
    container-name: ${SKELETON_CONTAINER_NAME};
    height: ${$height};
    width: min(100%, ${$width});
  `,
);

export const Root = styled.div(({ theme }) => {
  return css`
    height: 100%;
    width: 100%;
    background-color: ${theme.color[
      skeletonBackgroundMapping[theme.contextSpecific.backgroundColor]
    ]};
    border: 2px solid
      ${theme.color[
        skeletonColorMapping[theme.contextSpecific.backgroundColor].borderColor
      ]};
    position: relative;
    overflow: hidden;

    border-radius: ${theme.borderRadius["24"]};
    @container ${SKELETON_CONTAINER_NAME} (inline-size > 768px) {
      border-radius: ${theme.borderRadius["32"]};
    }
  `;
});

export const SkeletonBoxWrapper = styled.div`
  ${() => {
    return css`
      position: absolute;
      bottom: calc(50% - 120px);
      left: calc(8% - 280px);
    `;
  }}
`;

export const SkeletonRotate = styled.div`
  ${() => {
    return css`
      transform: rotate(-35deg);
    `;
  }}
`;

export const BoxBasis = styled.div(
  ({ theme }) => css`
    position: absolute;
    border-radius: ${theme.borderRadius[16]};
    background-color: ${theme.color[
      skeletonColorMapping[theme.contextSpecific.backgroundColor]
        .backgroundColor
    ]};
    background: linear-gradient(
      305deg,
      ${theme.color[
          skeletonColorMapping[theme.contextSpecific.backgroundColor].colorStop1
        ]}
        15%,
      ${theme.color[
          skeletonColorMapping[theme.contextSpecific.backgroundColor].colorStop2
        ]}
        30%,
      ${theme.color[
          skeletonColorMapping[theme.contextSpecific.backgroundColor]
            .backgroundColor
        ]}
        40%
    );
    background-size: 1200px 350px;

    animation: wave-squares 2s infinite ease-out;

    @keyframes wave-squares {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 1200px 0;
      }
    }
  `,
);

export const SkeletonBox1 = styled(BoxBasis)`
  width: 330px;
  height: 170px;
  left: 115px;
`;
export const SkeletonBox2 = styled(BoxBasis)`
  width: 160px;
  height: 335px;
  top: 175px;
`;
export const SkeletonBox3 = styled(BoxBasis)`
  width: 160px;
  height: 335px;
  top: 175px;
  left: 165px;
`;
