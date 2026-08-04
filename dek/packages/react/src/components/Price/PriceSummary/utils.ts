import { HeadlineTag } from "../../Typography/Headline";

export const getNextHeadlineTag = (
  startingHeadline: HeadlineTag,
  levelskipped?: number,
): HeadlineTag => {
  return `h${Math.min(Number(startingHeadline.slice(1)) + 1 + (levelskipped || 0), 6)}` as HeadlineTag;
};
