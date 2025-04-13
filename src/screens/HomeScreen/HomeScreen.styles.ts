import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

const screenWidth = Dimensions.get("window").width;
const itemMargin = SPACING.space_10;
const itemWidth = (screenWidth - 1.5 * itemMargin) / 2.15;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  settingsAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.space_10,
    paddingHorizontal: SPACING.space_4,
  },
  searchContainer: {
    flex: 1,
    marginRight: SPACING.space_10,
  },
  cartIcon: {
    padding: SPACING.space_10,
    paddingLeft: 0,
  },
  filterContainer: {
    padding: SPACING.space_16,
    backgroundColor: COLORS.primaryWhite,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.primaryWhite,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryWhite,
  },
  filterButton: {
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryBlack,
  },
  activeFilter: {
    backgroundColor: COLORS.primaryBlue,
    borderRadius: BORDERRADIUS.radius_20,
  },
  filterText: {
    fontSize: FONTSIZE.size_16,
    color: "red",
  },
  activeFilterText: {
    color: COLORS.primaryWhite,
  },
  propertyItem: {
    width: itemWidth,
    margin: itemMargin,
    backgroundColor: COLORS.primarySecondaryWhite,
    borderRadius: BORDERRADIUS.radius_10,
    overflow: "hidden",
  },
  propertyImage: {
    width: itemWidth,
    height: itemWidth * 0.75,
  },
  propertyInfo: {
    padding: SPACING.space_4,
  },
  propertyAddress: {
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
    marginBottom: SPACING.space_4,
  },
  bidInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  bidAmount: {
    fontSize: 16,
    marginLeft: 4,
    marginRight: 12,
  },
  trend: {
    fontSize: 14,
    marginLeft: 4,
  },
  statusBadge: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primaryBlue,
  },
  statusText: {
    color: COLORS.primaryWhite,
    fontSize: FONTSIZE.size_12,
  },
});
