import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "@/themes/theme";
import { HomeScreen, MyBid, Profile } from "@/screens";
import { useBidStore } from "@/store/bidStore";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { bid } = useBidStore();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primaryDarkGray,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons
              name="home"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bid"
        component={MyBid}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons
              name="bookmark"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
          tabBarBadge: bid.length > 0 ? bid.length : undefined, // Add badge with cart count
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons
              name="person"
              size={22}
              color={`${
                focused ? COLORS.primaryBlue : COLORS.primaryLightGray
              }`}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    position: "absolute",
    backgroundColor: COLORS.primaryWhite,
    borderTopWidth: 0.2,
    elevation: 0,
    borderTopColor: "#e2e8f0",
  },
});
