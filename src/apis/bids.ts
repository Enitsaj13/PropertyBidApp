import { apiClient } from "./client";

export const fetchBidSummary = async () => {
  const response = await apiClient.get("/bids");
  console.log("Bid Summary:", response.data); // 👈 logs in console
  return response.data;
};
