export type MediaBreakpoint = keyof typeof mediaBreakpoints;
type PixelValue = `${number}px`;
export const mediaBreakpoints: Record<"sm" | "md" | "lg", PixelValue> = {
  sm: "0px",
  md: "768px",
  lg: "1160px",
};

export const up = (mediaBreakpoint: MediaBreakpoint) => `
  @media (min-width: ${mediaBreakpoints[mediaBreakpoint]})
`;

export const getBreakpointAsNumber = (mediaBreakpoint: MediaBreakpoint) =>
  Number(mediaBreakpoints[mediaBreakpoint].split("px")[0]);
