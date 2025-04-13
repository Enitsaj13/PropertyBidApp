import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Search = ({ searchQuery, onSearchChange }: SearchProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search properties..."
        placeholderTextColor={COLORS.primaryLightGray}
        value={searchQuery}
        onChangeText={onSearchChange}
      />
      <Ionicons
        name="search"
        size={20}
        color={COLORS.primaryDarkGray}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: SPACING.space_12,
    backgroundColor: COLORS.primarySecondaryWhite,
    borderRadius: BORDERRADIUS.radius_20,
    margin: SPACING.space_10,
  },
  searchInput: {
    flex: 1,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryDarkGray,
    marginLeft: SPACING.space_8,
  },
  searchIcon: {
    marginRight: SPACING.space_8,
  },
});
