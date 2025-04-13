import { Property, PaginatedResponse } from "@/types/properties";

export class PropertyBiddingApi {
  private properties: Property[] = [
    {
      id: "prop_001",
      address: "123 Main St, Anytown",
      currentWinningBid: 250000,
      lastBidDifference: 5000,
      images: ["https://picsum.photos/seed/prop_001/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 3 },
        your_bid_amounts: { outbid: 450000, active: 250000, winning: 750000 },
      },
    },
    {
      id: "prop_002",
      address: "456 Elm St, Othertown",
      currentWinningBid: 300000,
      lastBidDifference: 10000,
      images: ["https://picsum.photos/seed/prop_002/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 1 },
        your_bid_amounts: { outbid: 350000, active: 300000, winning: 400000 },
      },
    },
    {
      id: "prop_003",
      address: "789 Oak St, Sometown",
      currentWinningBid: 150000,
      lastBidDifference: 2000,
      images: ["https://picsum.photos/seed/prop_003/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 150000 },
      },
    },
    {
      id: "prop_004",
      address: "101 Pine St, Anycity",
      currentWinningBid: 400000,
      lastBidDifference: 15000,
      images: ["https://picsum.photos/seed/prop_004/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 3, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 500000, active: 400000, winning: 0 },
      },
    },
    {
      id: "prop_005",
      address: "202 Maple St, Anycity",
      currentWinningBid: 200000,
      lastBidDifference: 3000,
      images: ["https://picsum.photos/seed/prop_005/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 1, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 250000, active: 0, winning: 200000 },
      },
    },
    {
      id: "prop_006",
      address: "303 Birch St, Anycity",
      currentWinningBid: 350000,
      lastBidDifference: 12000,
      images: ["https://picsum.photos/seed/prop_006/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 400000, active: 350000, winning: 0 },
      },
    },
    {
      id: "prop_007",
      address: "404 Cedar St, Anycity",
      currentWinningBid: 450000,
      lastBidDifference: 8000,
      images: ["https://picsum.photos/seed/prop_007/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 450000 },
      },
    },
    {
      id: "prop_008",
      address: "505 Spruce St, Anycity",
      currentWinningBid: 500000,
      lastBidDifference: 20000,
      images: ["https://picsum.photos/seed/prop_008/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 550000, active: 500000, winning: 0 },
      },
    },
    {
      id: "prop_009",
      address: "606 Fir St, Anycity",
      currentWinningBid: 600000,
      lastBidDifference: 25000,
      images: ["https://picsum.photos/seed/prop_009/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 600000 },
      },
    },
    {
      id: "prop_010",
      address: "707 Willow St, Anycity",
      currentWinningBid: 700000,
      lastBidDifference: 30000,
      images: ["https://picsum.photos/seed/prop_010/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 750000, active: 700000, winning: 0 },
      },
    },
    {
      id: "prop_011",
      address: "808 Poplar St, Anycity",
      currentWinningBid: 800000,
      lastBidDifference: 35000,
      images: ["https://picsum.photos/seed/prop_011/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 800000 },
      },
    },
    {
      id: "prop_012",
      address: "909 Chestnut St, Anycity",
      currentWinningBid: 900000,
      lastBidDifference: 40000,
      images: ["https://picsum.photos/seed/prop_012/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 950000, active: 900000, winning: 0 },
      },
    },
    {
      id: "prop_013",
      address: "1010 Ash St, Anycity",
      currentWinningBid: 1000000,
      lastBidDifference: 45000,
      images: ["https://picsum.photos/seed/prop_013/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 1000000 },
      },
    },
    {
      id: "prop_014",
      address: "1111 Alder St, Anycity",
      currentWinningBid: 1100000,
      lastBidDifference: 50000,
      images: ["https://picsum.photos/seed/prop_014/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 1150000, active: 1100000, winning: 0 },
      },
    },
    {
      id: "prop_015",
      address: "1212 Birch St, Anycity",
      currentWinningBid: 1200000,
      lastBidDifference: 55000,
      images: ["https://picsum.photos/seed/prop_015/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 1200000 },
      },
    },
    {
      id: "prop_016",
      address: "1313 Cedar St, Anycity",
      currentWinningBid: 1300000,
      lastBidDifference: 60000,
      images: ["https://picsum.photos/seed/prop_016/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 1350000, active: 1300000, winning: 0 },
      },
    },
    {
      id: "prop_017",
      address: "1414 Fir St, Anycity",
      currentWinningBid: 1400000,
      lastBidDifference: 65000,
      images: ["https://picsum.photos/seed/prop_017/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 1400000 },
      },
    },
    {
      id: "prop_018",
      address: "1515 Spruce St, Anycity",
      currentWinningBid: 1500000,
      lastBidDifference: 70000,
      images: ["https://picsum.photos/seed/prop_018/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 1550000, active: 1500000, winning: 0 },
      },
    },
    {
      id: "prop_019",
      address: "1616 Poplar St, Anycity",
      currentWinningBid: 1600000,
      lastBidDifference: 75000,
      images: ["https://picsum.photos/seed/prop_019/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 1600000 },
      },
    },
    {
      id: "prop_020",
      address: "1717 Chestnut St, Anycity",
      currentWinningBid: 1700000,
      lastBidDifference: 80000,
      images: ["https://picsum.photos/seed/prop_020/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 1750000, active: 1700000, winning: 0 },
      },
    },
    {
      id: "prop_021",
      address: "1818 Alder St, Anycity",
      currentWinningBid: 1800000,
      lastBidDifference: 85000,
      images: ["https://picsum.photos/seed/prop_021/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 1800000 },
      },
    },
    {
      id: "prop_022",
      address: "1919 Birch St, Anycity",
      currentWinningBid: 1900000,
      lastBidDifference: 90000,
      images: ["https://picsum.photos/seed/prop_022/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 1950000, active: 1900000, winning: 0 },
      },
    },
    {
      id: "prop_023",
      address: "2020 Cedar St, Anycity",
      currentWinningBid: 2000000,
      lastBidDifference: 95000,
      images: ["https://picsum.photos/seed/prop_023/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 2000000 },
      },
    },
    {
      id: "prop_024",
      address: "2121 Fir St, Anycity",
      currentWinningBid: 2100000,
      lastBidDifference: 100000,
      images: ["https://picsum.photos/seed/prop_024/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 2150000, active: 2100000, winning: 0 },
      },
    },
    {
      id: "prop_025",
      address: "2222 Spruce St, Anycity",
      currentWinningBid: 2200000,
      lastBidDifference: 105000,
      images: ["https://picsum.photos/seed/prop_025/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 2200000 },
      },
    },
    {
      id: "prop_026",
      address: "2323 Poplar St, Anycity",
      currentWinningBid: 2300000,
      lastBidDifference: 110000,
      images: ["https://picsum.photos/seed/prop_026/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 2350000, active: 2300000, winning: 0 },
      },
    },
    {
      id: "prop_027",
      address: "2424 Chestnut St, Anycity",
      currentWinningBid: 2400000,
      lastBidDifference: 115000,
      images: ["https://picsum.photos/seed/prop_027/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 2400000 },
      },
    },
    {
      id: "prop_028",
      address: "2525 Alder St, Anycity",
      currentWinningBid: 2500000,
      lastBidDifference: 120000,
      images: ["https://picsum.photos/seed/prop_028/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 1, active: 2, winning: 0 },
        your_bid_amounts: { outbid: 2550000, active: 2500000, winning: 0 },
      },
    },
    {
      id: "prop_029",
      address: "2626 Birch St, Anycity",
      currentWinningBid: 2600000,
      lastBidDifference: 125000,
      images: ["https://picsum.photos/seed/prop_029/400/300"],
      status: "closed",
      bids: {
        your_bids: { outbid: 0, active: 0, winning: 1 },
        your_bid_amounts: { outbid: 0, active: 0, winning: 2600000 },
      },
    },
    {
      id: "prop_030",
      address: "2727 Cedar St, Anycity",
      currentWinningBid: 2700000,
      lastBidDifference: 130000,
      images: ["https://picsum.photos/seed/prop_030/400/300"],
      status: "active",
      bids: {
        your_bids: { outbid: 2, active: 1, winning: 0 },
        your_bid_amounts: { outbid: 2750000, active: 2700000, winning: 0 },
      },
    },
  ];

  async getProperties(
    page: number = 1,
    status?: Property["status"]
  ): Promise<PaginatedResponse<Property>> {
    const pageSize = 5;
    let filtered = [...this.properties];

    if (status) {
      filtered = filtered.filter((p) => p.status === status);
    }

    const startIndex = (page - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);

    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      data: paginated,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filtered.length / pageSize),
        totalItems: filtered.length,
        itemsPerPage: pageSize,
      },
    };
  }

  async submitBid(propertyId: string, amount: number): Promise<Property> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const property = this.properties.find((p) => p.id === propertyId);
    if (!property) throw new Error("Property not found");

    // Simulate bid submission
    property.currentWinningBid = amount;
    property.lastBidDifference = amount - property.currentWinningBid;

    return property;
  }
}
