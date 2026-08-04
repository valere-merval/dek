import { useContext } from "react";
import { BringbackInfo } from "../PriceSummary.types";
import { HeadlineContext } from "../Base";
import * as BaseStyled from "../Base/PriceSummaryBase.styles";
import * as Styled from "../PriceSummary.styles";
import { Headline } from "../../../Typography/Headline";
import { IconTile } from "../../../IconTile";
import { getNextHeadlineTag } from "../utils";
import { Bringback as BringbackIcon } from "@fair/icons";
import { Text } from "../../../Typography/Text";
import { Tag } from "../../../Typography/Tag";
import { formatPrice } from "../../../../utils/pricing";

interface BringbackSectionProps {
  bringbackInfo: BringbackInfo;
}

export const BringbackSection = ({ bringbackInfo }: BringbackSectionProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const bringBackHeadlineSize = getNextHeadlineTag(startingHeadline);
  const bringBackSubHeadlineSize = getNextHeadlineTag(bringBackHeadlineSize);

  return (
    <BaseStyled.ListContainer>
      <Styled.HeadlineWrapper>
        <Headline as={bringBackHeadlineSize} size="medium" variant="bold">
          {bringbackInfo.sectionHeader}
        </Headline>
        <IconTile
          size={{
            minAvailableSpace: "extraSmall",
            maxAvailableSpace: "extraSmall",
          }}
          icon={<BringbackIcon />}
          variant="outlined"
          color="black"
        />
      </Styled.HeadlineWrapper>
      <Headline as={bringBackSubHeadlineSize} size="small" variant="bold">
        {bringbackInfo.mainTitle}
      </Headline>

      <Styled.UnorderedList>
        <BaseStyled.ListItem>
          <Text size="large" variant="bold" id="bringback-price-requirement">
            {bringbackInfo.subTitle}
          </Text>
          <Styled.OrderedList>
            {bringbackInfo.priceOptions.map((option) => (
              <BaseStyled.ListItem key={option.title}>
                <Styled.PriceInLineText size="large" variant="light">
                  {option.title}
                  <Tag size="medium" as="span">
                    {typeof option.amount === "number"
                      ? formatPrice(option.amount)
                      : option.amount}
                  </Tag>
                </Styled.PriceInLineText>
              </BaseStyled.ListItem>
            ))}
          </Styled.OrderedList>
        </BaseStyled.ListItem>
        <BaseStyled.ListItem>
          <Styled.PriceInLineText size="large" variant="bold">
            {bringbackInfo.lastBoldOption.title}
            <Tag size="medium" as="span">
              {typeof bringbackInfo.lastBoldOption.amount === "number"
                ? formatPrice(bringbackInfo.lastBoldOption.amount)
                : bringbackInfo.lastBoldOption.amount}
            </Tag>
          </Styled.PriceInLineText>
        </BaseStyled.ListItem>
      </Styled.UnorderedList>
    </BaseStyled.ListContainer>
  );
};
