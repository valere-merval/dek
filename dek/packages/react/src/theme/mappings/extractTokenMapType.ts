import * as tokens from "@fair/tokens";

type Value<
  T extends string,
  Prefix extends string
> = T extends `${Prefix}${infer Suffix}` ? Suffix : never;

export type ExtractTokenMapType<Prefix extends string, Return = string> = {
  [Property in keyof typeof tokens & `${Prefix}${string}` as Value<
    Property,
    Prefix
  >]: Return;
};
