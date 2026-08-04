export const containerUp = (
  containerName: string,
  minWidth: number | string,
) => `
  @container ${containerName} (min-width: ${typeof minWidth === "string" ? minWidth : `${minWidth}px`}) 
`;
