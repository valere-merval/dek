import { ParagraphTransformer } from "./ParagraphTransformer";
import { HtmlTransformer } from "./BaseTransformer";
import { HeadlineTransformer } from "./HeadlineTransformer";
import { ListItemTransformer, ListTransformer } from "./ListTransformer";
import { DividerTransformer } from "./DividerTransformer";
import { FootnoteTransformer } from "./FootnoteTransformer";
import { LinkTransformer } from "./LinkTransformer";
import { LinkTransformerOptions } from "../HtmlParser.types";
import { CuiFootnoteTransformer } from "./CuiFootnoteTransformer";
import { SpacerTransformer } from "./SpacerTransformer";

export const getTransformers = (
  linkTransformerOptions?: LinkTransformerOptions,
): HtmlTransformer[] => {
  return [
    new ParagraphTransformer(),
    new HeadlineTransformer(),
    new DividerTransformer(),
    new ListTransformer(),
    new ListItemTransformer(),
    new FootnoteTransformer(),
    new CuiFootnoteTransformer(),
    new LinkTransformer(linkTransformerOptions),
    new SpacerTransformer(),
  ];
};
