import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/themes/theme";
import { Property } from "@/types/properties";

interface PropertyCardProps {
  property: Property;
  onPress?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onPress,
}) => {
  const trendIcon =
    property.lastBidDifference >= 0 ? "trending-up" : "trending-down";
  const trendColor =
    property.lastBidDifference >= 0 ? COLORS.success : COLORS.error;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: property.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.address}>{property.address}</Text>

        <View style={styles.bidInfo}>
          <MaterialIcons name="attach-money" size={16} color="gold" />
          <Text style={styles.bidAmount}>
            ${property.currentWinningBid.toLocaleString()}
          </Text>

          <MaterialIcons name={trendIcon} size={16} color={trendColor} />
          <Text style={[styles.trend, { color: trendColor }]}>
            ${Math.abs(property.lastBidDifference).toLocaleString()}
          </Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                property.status === "active"
                  ? COLORS.primaryBlue
                  : COLORS.error,
            },
          ]}
        >
          <Text style={styles.statusText}>{property.status.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: COLORS.primaryWhite,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    padding: 16,
  },
  address: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bidInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bidAmount: {
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  trend: {
    fontSize: 16,
    marginLeft: 4,
  },
  statusBadge: {
    padding: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  statusText: {
    color: COLORS.primaryWhite,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
