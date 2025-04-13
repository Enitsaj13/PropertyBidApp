// change this file for bidding app property details

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "House" | "Land" | "Apartment";
  distanceInKm: number;
  postedAt: string;
  dealType: "SALE" | "REGULAR";
  imageUrl: string;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export class PropertyBiddingApi {
  private products: Product[] = [
    {
      id: "prod_001",
      name: "Chair",
      price: 999,
      category: "Apartment",
      distanceInKm: 2.5,
      postedAt: "2024-02-10T10:00:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_001/400/200",
    },
    {
      id: "prod_002",
      name: "Couch",
      price: 1299,
      category: "Apartment",
      distanceInKm: 3.8,
      postedAt: "2024-02-11T09:30:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_002/400/200",
    },
    {
      id: "prod_003",
      name: "T-Shirt name",
      price: 199,
      category: "Land",
      distanceInKm: 1.2,
      postedAt: "2024-02-12T08:45:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_003/400/200",
    },
    {
      id: "prod_004",
      name: "Sprinkler",
      price: 299,
      category: "House",
      distanceInKm: 5.0,
      postedAt: "2024-02-09T14:20:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_004/400/200",
    },
    {
      id: "prod_005",
      name: "Tree",
      price: 79,
      category: "House",
      distanceInKm: 4.2,
      postedAt: "2024-02-10T16:15:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_005/400/200",
    },
    {
      id: "prod_006",
      name: "Dining Table",
      price: 49,
      category: "Apartment",
      distanceInKm: 3.1,
      postedAt: "2024-02-11T11:30:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_006/400/200",
    },
    {
      id: "prod_007",
      name: "Jeans",
      price: 899,
      category: "Land",
      distanceInKm: 8.5,
      postedAt: "2024-02-08T13:00:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_007/400/200",
    },
    {
      id: "prod_008",
      name: "Cardigan",
      price: 129,
      category: "Land",
      distanceInKm: 6.7,
      postedAt: "2024-02-09T15:45:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_008/400/200",
    },
    {
      id: "prod_009",
      name: "Flower Pot",
      price: 159,
      category: "House",
      distanceInKm: 4.9,
      postedAt: "2024-02-10T12:20:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_009/400/200",
    },
    {
      id: "prod_010",
      name: "Fridge",
      price: 299,
      category: "Apartment",
      distanceInKm: 2.8,
      postedAt: "2024-02-12T10:10:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_010/400/200",
    },
    {
      id: "prod_011",
      name: "Lawnmower",
      price: 499,
      category: "House",
      distanceInKm: 3.3,
      postedAt: "2024-02-12T11:20:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_011/400/200",
    },
    {
      id: "prod_012",
      name: "Lether Boots",
      price: 799,
      category: "Land",
      distanceInKm: 7.1,
      postedAt: "2024-02-11T13:45:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_012/400/200",
    },
    {
      id: "prod_013",
      name: "Canvas Bag",
      price: 89,
      category: "Apartment",
      distanceInKm: 2.9,
      postedAt: "2024-02-12T09:15:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_013/400/200",
    },
    {
      id: "prod_014",
      name: "Hedge Trimmers",
      price: 79,
      category: "House",
      distanceInKm: 5.4,
      postedAt: "2024-02-11T14:30:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_014/400/200",
    },
    {
      id: "prod_015",
      name: "Swing Chair",
      price: 449,
      category: "House",
      distanceInKm: 4.0,
      postedAt: "2024-02-12T12:00:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_015/400/200",
    },
    {
      id: "prod_016",
      name: "Desk",
      price: 199,
      category: "Apartment",
      distanceInKm: 3.7,
      postedAt: "2024-02-11T15:20:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_016/400/200",
    },
    {
      id: "prod_017",
      name: "Singlet",
      price: 39,
      category: "Land",
      distanceInKm: 2.2,
      postedAt: "2024-02-12T13:10:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_017/400/200",
    },
    {
      id: "prod_018",
      name: "Bed",
      price: 129,
      category: "Apartment",
      distanceInKm: 4.5,
      postedAt: "2024-02-11T16:40:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_018/400/200",
    },
    {
      id: "prod_019",
      name: "Bedsheet name",
      price: 29,
      category: "Apartment",
      distanceInKm: 1.8,
      postedAt: "2024-02-12T14:25:00Z",
      dealType: "SALE",
      imageUrl: "https://picsum.photos/seed/prod_019/400/200",
    },
    {
      id: "prod_020",
      name: "Mug",
      price: 159,
      category: "Apartment",
      distanceInKm: 6.2,
      postedAt: "2024-02-11T17:55:00Z",
      dealType: "REGULAR",
      imageUrl: "https://picsum.photos/seed/prod_020/400/200",
    },
  ];

  async getProducts(
    options: {
      page?: number;
      category?: Product["category"];
    } = {}
  ): Promise<PaginatedResponse<Product>> {
    const { page = 1, category } = options;
    const pageSize = 5;

    let filteredProducts = [...this.products];

    if (category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === category
      );
    }

    filteredProducts.sort(
      (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      data: paginatedProducts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredProducts.length / pageSize),
        totalItems: filteredProducts.length,
        itemsPerPage: pageSize,
      },
    };
  }
}

// Example usage
const api = new PropertyBiddingApi();

async function example() {
  const data = await api.getProducts({
    page: 1,
    category: "Land",
  });
  console.log(data);
}
example();
