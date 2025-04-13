import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useBidStore } from "@/store/bidStore";
import LottieView from "lottie-react-native";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { styles } from "./MyBid.styles";

const MyBid = ({ navigation }: any) => {
  const { bid, removeFromBid, clearBid } = useBidStore();

  const handleRemoveBid = (id: string) => {
    removeFromBid(id);
    Toast.show({
      type: "error",
      text1: "Bid Removed",
    });
  };

  const handleClearBid = () => {
    Alert.alert("Clear All Bids", "Are you sure you want to clear all bids?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          clearBid();
          Toast.show({
            type: "error",
            text1: "All Bids Cleared",
          });
        },
      },
    ]);
  };

  const renderItem = ({ item }: any) => {
    return (
      <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleRemoveBid(item.id)}
          >
            <Ionicons name="trash" size={24} color="white" />
          </TouchableOpacity>
        )}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: item.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.details}>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.bidAmount}>
              ${item.currentWinningBid.toLocaleString()}
            </Text>
          </View>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      {bid.length === 0 ? (
        <View style={styles.emptyContainer}>
          <LottieView
            source={require("@/assets/empty-bid.json")}
            autoPlay
            loop
            style={styles.emptyAnimation}
          />
          <Text style={styles.emptyText}>No Bids Yet</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.emptyButton}>Start Bidding</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={bid}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />
          <TouchableOpacity style={styles.clearButton} onPress={handleClearBid}>
            <Text style={styles.clearButtonText}>Clear All Bids</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default MyBid;
