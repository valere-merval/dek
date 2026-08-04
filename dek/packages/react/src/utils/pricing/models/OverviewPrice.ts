export type OverviewRecurringDisplayPriceItem = {
  title: string;
  amount: number;
  descriptions: string[];
};

export interface OverviewRecurringDisplayPrice {
  title: string;
  amount: number;
  items: OverviewRecurringDisplayPriceItem[];
}

export type OverviewOneTimeDisplayPriceItem = {
  title: string;
  amount: number;
};

export type OverviewOneTimeDisplayPrice = {
  amount: number;
  shipping?: number;
  items: OverviewOneTimeDisplayPriceItem[];
};

interface OverviewBonusDisplayPriceItem {
  title: string;
  amount: number;
}

export interface OverviewBonusDisplayPrice {
  amount: number;
  detailTexts: string[] | null;
  footnoteText: string | null;
  items: OverviewBonusDisplayPriceItem[];
}
