import { ElementRef, forwardRef } from "react";
import * as Styled from "../ShoppingCart/Base/ShoppingCart.styles";
import * as PrepaidStyled from "./Activation.styles";
import { List } from "../../List";
import { ActivationProps } from "./Activation.types";
import { BoldText } from "./Activation.styles";

export const Root = forwardRef<ElementRef<"div">, ActivationProps>(
  ({ header, listItems, headlineLevel, ...rest }: ActivationProps, ref) => {
    return (
      <div {...rest} ref={ref}>
        <Styled.TextContainer>
          <PrepaidStyled.Headline as={headlineLevel}>
            {header}
          </PrepaidStyled.Headline>
          <PrepaidStyled.ListRoot size="medium" decorativeColor="yellow">
            {listItems.map((item) => (
              <List.Item key={item.key}>{item}</List.Item>
            ))}
          </PrepaidStyled.ListRoot>
        </Styled.TextContainer>
      </div>
    );
  },
);
Root.displayName = "Activation.Root";

const ListItem = List.Description;
ListItem.displayName = "Activation.ListItem";

BoldText.displayName = "Activation.BoldText";

export const Activation = {
  Root,
  ListItem,
  BoldText,
};
