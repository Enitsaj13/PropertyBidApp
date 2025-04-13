import { apiClient } from "./client";
import { Property, PaginatedResponse } from "../types/properties";

export const fetchProperties = async (): Promise<Property[]> => {
  const { data } = await apiClient.get<Property[]>("/properties");
  console.log("Fetched properties:", data);

  if (!data) {
    console.error("No data received from API.");
    throw new Error("Failed to fetch properties.");
  }
  return data;
};

export const fetchPropertyDetails = async (id: string): Promise<Property> => {
  const { data } = await apiClient.get(`/properties/${id}`);
  if (!data) {
    console.error(`No data received for property ID: ${id}`);
    throw new Error(`Failed to fetch property details for ID: ${id}`);
  }
  return data as Property;
};

export const fetchPaginatedProperties = async (
  page: number = 1,
  status?: string
): Promise<PaginatedResponse<Property>> => {
  const { data } = await apiClient.get<PaginatedResponse<Property>>(
    "/properties",
    {
      params: { page, status },
    }
  );

  console.log("Paginated properties:", data);
  // Check if data is defined and has the expected structure
  if (data && !data.data) {
    throw new Error("Invalid data structure received.");
  }

  if (!data) {
    throw new Error("Failed to fetch paginated properties.");
  }
  return data;
};
