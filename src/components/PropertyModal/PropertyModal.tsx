import React, { useEffect, useState } from "react";
import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import { Property } from "@/types/properties";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/themes/theme";
import { styles } from "./PropertyModal.styles";
import Toast from "react-native-toast-message";
import { useBidStore } from "@/store/bidStore";

interface PropertyModalProps {
  property: Property;
  visible: boolean;
  onClose: () => void;
}

export const PropertyModal = ({
  property,
  visible,
  onClose,
}: PropertyModalProps) => {
  const { addToBid } = useBidStore();

  const [imageError, setImageError] = useState(false);

  // Reset imageError when product changes
  useEffect(() => {
    setImageError(false);
  }, [property]);

  const trendIcon =
    property.lastBidDifference >= 0 ? "trending-up" : "trending-down";
  const trendColor =
    property.lastBidDifference >= 0 ? COLORS.success : COLORS.error;

  const AddBid = () => {
    addToBid({
      id: property.id,
      address: property.address,
      currentWinningBid: property.currentWinningBid,
      lastBidDifference: property.lastBidDifference,
      images: property.images,
      bids: {
        your_bids: {
          winning: 0,
          active: 0,
          outbid: 0,
        },
        your_bid_amounts: {
          winning: 0,
          active: 0,
          outbid: 0,
        },
      },
      status: "active",
      price: property.currentWinningBid,
      quantity: 1,
    });
    Toast.show({
      type: "success",
      text1: "Bid Added",
      text2: `${property.address} has been added to your bids.`,
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>

          <Image
            source={{
              uri:
                imageError || !property.images[0]
                  ? require("@/assets/fallback_img.jpg")
                  : property.images[0],
            }}
            style={styles.modalImage}
          />

          <View style={styles.modalContent}>
            <Text style={styles.address}>{property.address}</Text>

            <View style={styles.bidSection}>
              <Text style={styles.sectionTitle}>Current Bid</Text>
              <View style={styles.bidRow}>
                <MaterialIcons name="attach-money" size={24} color="gold" />
                <Text style={styles.bidAmount}>
                  ${property.currentWinningBid.toLocaleString()}
                </Text>
                <MaterialIcons name={trendIcon} size={24} color={trendColor} />
                <Text style={[styles.trend, { color: trendColor }]}>
                  ${Math.abs(property.lastBidDifference).toLocaleString()}
                </Text>
              </View>
            </View>

            <View style={styles.yourBidsSection}>
              <Text style={styles.sectionTitle}>Your Bids</Text>

              <View style={styles.bidStatsRow}>
                <BidStatCard
                  icon="check-circle"
                  value={property.bids.your_bids.winning}
                  amount={property.bids.your_bid_amounts.winning}
                  label="Winning"
                  color="green"
                />
                <BidStatCard
                  icon="pending"
                  value={property.bids.your_bids.active}
                  amount={property.bids.your_bid_amounts.active}
                  label="Active"
                  color="orange"
                />
                <BidStatCard
                  icon="cancel"
                  value={property.bids.your_bids.outbid}
                  amount={property.bids.your_bid_amounts.outbid}
                  label="Outbid"
                  color="red"
                />
              </View>
            </View>

            <TouchableOpacity style={styles.bidButton} onPress={AddBid}>
              <Text style={styles.bidButtonText}>Place New Bid</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const BidStatCard = ({ icon, value, amount, label, color }: any) => (
  <View style={styles.bidStatCard}>
    <MaterialIcons name={icon} size={20} color={color} />
    <Text style={styles.bidStatValue}>{value}</Text>
    <Text style={styles.bidStatLabel}>{label}</Text>
    <Text style={styles.bidStatAmount}>${amount.toLocaleString()}</Text>
  </View>
);
