export interface Bid {
  id: string;
  address: string;
  currentWinningBid: number;
  lastBidDifference: number;
  images: string[];
  status: "active" | "closed";
  bids: {
    your_bids: {
      outbid: number;
      active: number;
      winning: number;
    };
    your_bid_amounts: {
      outbid: number;
      active: number;
      winning: number;
    };
  };
}

export interface BidSummary {
  outbid: number;
  active: number;
  winning: number;
}
