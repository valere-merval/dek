const isNumberArray = (arr: number[] | string[]): arr is number[] => {
  return typeof arr.at(0) === "number";
};

export const generateMemorySizeString = (
  memorySizes: number[] | string[],
): string => {
  if (isNumberArray(memorySizes)) {
    return memorySizes
      .map((size) => (size <= 8 ? `${size} TB` : `${size} GB`))
      .join(" | ");
  }

  return memorySizes.join(" | ");
};
