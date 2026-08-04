// declare modules for typescript to understand the file types

declare module "*.css?inline" {
  const contents: string;
  export = contents;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.avif";

declare module "turndown-plugin-gfm" {
  export const strikethrough: unknown;
  export const tables: unknown;
  export const taskListItems: unknown;
}
