import { ArgTypes } from "@storybook/react-vite";

export const disableControls = <Props>(
  propNames: Array<keyof Props>,
): {
  [T: string]: {
    table: {
      disable: boolean;
    };
  };
} =>
  propNames.reduce(
    (accumulator, propName) => ({
      ...accumulator,
      [propName]: {
        table: {
          disable: true,
        },
      },
    }),
    {},
  ) satisfies Partial<ArgTypes<Props>>;
