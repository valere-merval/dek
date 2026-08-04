import { useContext } from "react";
import { BonusBucketInfo } from "../PriceSummary.types";
import { HeadlineContext } from "../Base";
import { getNextHeadlineTag } from "../utils";
import { sideHeadlineMapping } from "../mappings";
import * as Styled from "../Base/PriceSummaryBase.styles";
import { MessageInfo } from "../../../Message/MessageInfo";
import { Headline } from "../../../Typography/Headline";

interface BonusBucketSectionProps {
  bonusBucketInfo: BonusBucketInfo;
}

export const BonusBucketSection = ({
  bonusBucketInfo,
}: BonusBucketSectionProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  return (
    <Styled.ListContainer>
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping["congstarWeb"]}
        variant="bold"
        id="bonus"
      >
        Dein Bonus
      </Headline>
      <MessageInfo
        {...bonusBucketInfo.messageInfo}
        variant="outlined"
        fullWidth
      />
    </Styled.ListContainer>
  );
};
