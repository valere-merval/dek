import { ReactNode } from "react";

const Headline1 = ({ children, ...props }: { children: ReactNode }) => (
  <h1 {...props}>{children}</h1>
);

const Headline2 = ({ children, ...props }: { children: ReactNode }) => (
  <h2 {...props}>{children}</h2>
);

const Headline3 = ({ children, ...props }: { children: ReactNode }) => (
  <h3 {...props}>{children}</h3>
);

/**
 * TODO: use them if the following bug is resolved: https://github.com/storybookjs/storybook/issues/25870
 */
export const overrides = {
  h2: Headline1,
  h3: Headline2,
  h4: Headline3,
};
