import { useContext } from "react";
import { PrepaidInfo } from "../PriceSummary.types";
import { Brand } from "../../../../theme/theme";
import { HeadlineContext } from "../Base";
import { getNextHeadlineTag } from "../utils";
import { sideHeadlineMapping } from "../mappings";
import * as Styled from "../Base/PriceSummaryBase.styles";
import { MessageInfo } from "../../../Message/MessageInfo";
import { Headline } from "../../../Typography/Headline";

interface PrepaidSectionProps {
  prepaidInfo: PrepaidInfo;
  brand: Brand;
}

export const PrepaidSection = ({ prepaidInfo, brand }: PrepaidSectionProps) => {
  const { startingHeadline } = useContext(HeadlineContext);
  const nextHeadline = getNextHeadlineTag(startingHeadline);

  return (
    <Styled.ListContainer>
      <Headline
        as={nextHeadline}
        size={sideHeadlineMapping[brand]}
        variant="bold"
        id="guthaben"
      >
        Guthaben
      </Headline>
      <MessageInfo {...prepaidInfo.messageInfo} variant="outlined" fullWidth />
    </Styled.ListContainer>
  );
};
