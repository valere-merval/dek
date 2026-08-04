import { AnchorHTMLAttributes, FC } from "react";

export const OptionalLink: FC<
  { checkoutUrl?: string } & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ checkoutUrl, children, ...props }) => {
  if (!checkoutUrl) {
    return <>{children}</>;
  }

  return (
    <a {...props} href={checkoutUrl} target="_self">
      {children}
    </a>
  );
};
