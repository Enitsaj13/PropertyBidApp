import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import { PropertyBiddingApi } from "@/apis/propertyBiddingApi";
import { Property } from "@/types/properties";
import { COLORS } from "@/themes/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, PropertyModal } from "@/components";
import { styles } from "./HomeScreen.styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const api = new PropertyBiddingApi();

const HomeScreen = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [statusFilter, setStatusFilter] = useState<
    "active" | "closed" | undefined
  >(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [imageError, setImageError] = useState(false);

  const fetchProperties = async (page: number, reset = false) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await api.getProperties(page, statusFilter);
      if (reset) {
        setProperties(response.data);
      } else {
        setProperties((prev) => [...prev, ...response.data]);
      }
      setHasMore(page < response.pagination.totalPages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage(1);
    fetchProperties(1, true);
  }, [statusFilter]);

  // Reset imageError when product changes
  useEffect(() => {
    if (selectedProperty) {
      setImageError(false);
    }
  }, [selectedProperty]);

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    await fetchProperties(1, true);
    setRefreshing(false);
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
      fetchProperties(page + 1);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filteredProperties = properties.filter((property) =>
      property.address.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  // Handle settings icon press
  const handleSettingsPress = () => {
    console.log("Settings icon pressed");
  };

  // get badge color based on status
  const getBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return COLORS.success;
      case "closed":
        return COLORS.error;
      default:
        return COLORS.success;
    }
  };

  const renderPropertyItem = ({ item }: { item: Property }) => {
    const trendIcon =
      item.lastBidDifference >= 0 ? "trending-up" : "trending-down";
    const trendColor =
      item.lastBidDifference >= 0 ? COLORS.success : COLORS.error;

    return (
      <TouchableOpacity onPress={() => setSelectedProperty(item)}>
        <View style={styles.propertyItem}>
          <Image
            source={
              imageError || !item.images[0]
                ? require("@/assets/fallback_img.jpg")
                : { uri: item.images[0] }
            }
            style={styles.propertyImage}
            resizeMode="cover"
            onError={() => setImageError(true)}
          />
          <View style={styles.propertyInfo}>
            <Text style={styles.propertyAddress}>{item.address}</Text>

            <View style={styles.bidInfo}>
              <MaterialIcons name="attach-money" size={16} color="gold" />
              <Text style={styles.bidAmount}>
                ${item.currentWinningBid.toLocaleString()}
              </Text>

              <MaterialIcons name={trendIcon} size={16} color={trendColor} />
              <Text style={[styles.trend, { color: trendColor }]}>
                ${Math.abs(item.lastBidDifference).toLocaleString()}
              </Text>
            </View>

            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor: getBadgeColor(item.status),
                },
              ]}
            >
              <Text style={styles.statusText}>{item.status.toUpperCase()}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search and Settings Container */}
      <View style={styles.settingsAndCartContainer}>
        {/* Search Component */}
        <View style={styles.searchContainer}>
          <Search searchQuery={searchQuery} onSearchChange={handleSearch} />
        </View>

        {/* Settings Icon */}
        <TouchableOpacity onPress={handleSettingsPress} style={styles.cartIcon}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[styles.filterButton, !statusFilter && styles.activeFilter]}
          onPress={() => setStatusFilter(undefined)}
        >
          <Text style={styles.activeFilterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            statusFilter === "active" && styles.activeFilter,
          ]}
          onPress={() => setStatusFilter("active")}
        >
          <Text style={styles.activeFilterText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            statusFilter === "closed" && styles.activeFilter,
          ]}
          onPress={() => setStatusFilter("closed")}
        >
          <Text style={styles.activeFilterText}> Closed</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={properties}
        renderItem={renderPropertyItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        numColumns={2}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          visible={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

// import React, { useState } from "react";
// import {
//   View,
//   FlatList,
//   ActivityIndicator,
//   Text,
//   TouchableOpacity,
//   RefreshControl,
// } from "react-native";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPaginatedProperties } from "@/apis/properties";
// import { PropertyCard } from "@/components/PropertyCard/PropertyCard";
// import { styles } from "./HomeScreen.styles";

// const HomeScreen = () => {
//   const [page, setPage] = useState(1);
//   const [statusFilter, setStatusFilter] = useState<
//     "active" | "closed" | undefined
//   >(undefined);

//   const { data, isLoading, isError, refetch, isRefetching } = useQuery({
//     queryKey: ["properties", page, statusFilter],
//     queryFn: () => fetchPaginatedProperties(page, statusFilter),
//     staleTime: 5000, // Keeps previous data for 5 seconds
//   });

//   // console.log("Data:", data); // Ensure fetchPaginatedProperties returns { data: [], pagination: { totalPages: number } }

//   const onRefresh = () => {
//     setPage(1);
//     refetch();
//   };

//   const loadMore = () => {
//     if (data?.pagination && page < data.pagination.totalPages) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   if (isLoading && page === 1) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (isError) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Error loading properties</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Filter controls */}
//       <View style={styles.filterContainer}>
//         <TouchableOpacity
//           style={[styles.filterButton, !statusFilter && styles.activeFilter]}
//           onPress={() => setStatusFilter(undefined)}
//         >
//           <Text>All</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             statusFilter === "active" && styles.activeFilter,
//           ]}
//           onPress={() => setStatusFilter("active")}
//         >
//           <Text>Active</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.filterButton,
//             statusFilter === "closed" && styles.activeFilter,
//           ]}
//           onPress={() => setStatusFilter("closed")}
//         >
//           <Text>Closed</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Property list */}
//       <FlatList
//         data={data?.data || []}
//         renderItem={({ item }) => <PropertyCard property={item} />}
//         keyExtractor={(item) => item.id}
//         refreshControl={
//           <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
//         }
//         onEndReached={loadMore}
//         onEndReachedThreshold={0.5}
//         ListFooterComponent={
//           isLoading && page > 1 ? <ActivityIndicator /> : null
//         }
//       />
//     </View>
//   );
// };

// export default HomeScreen;
