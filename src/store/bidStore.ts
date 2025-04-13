import { create } from "zustand";

export interface BidItem {
  id: string;
  address: string;
  currentWinningBid: number;
  lastBidDifference: number;
  images: string[];
  status: string;
  price: number;
  quantity: number;
  bids: {
    your_bids: {
      winning: number;
      active: number;
      outbid: number;
    };
    your_bid_amounts: {
      winning: number;
      active: number;
      outbid: number;
    };
  };
}

interface BidStore {
  bid: BidItem[];
  addToBid: (product: BidItem) => void;
  removeFromBid: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBid: () => void;
}

export const useBidStore = create<BidStore>((set) => ({
  bid: [],
  addToBid: (product) =>
    set((state) => {
      const existingItem = state.bid.find((item) => item.id === product.id);
      if (existingItem) {
        // If item already exists, increase quantity
        return {
          bid: state.bid.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If item doesn't exist, add it to the bid
        return { bid: [...state.bid, { ...product, quantity: 1 }] };
      }
    }),
  removeFromBid: (id) =>
    set((state) => ({
      bid: state.bid.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      bid: state.bid.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })),
  clearBid: () => set({ bid: [] }),
}));
