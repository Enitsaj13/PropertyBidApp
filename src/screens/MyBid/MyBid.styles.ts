import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: SPACING.space_36 * 2,
    paddingBottom: SPACING.space_20 * 4,
    paddingHorizontal: SPACING.space_16,
    backgroundColor: COLORS.primaryWhite,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyAnimation: {
    width: 200,
    height: 200,
  },
  emptyText: {
    fontSize: FONTSIZE.size_16,
    marginVertical: 10,
  },
  emptyButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: BORDERRADIUS.radius_8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  details: {
    padding: 10,
  },
  address: {
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
  bidAmount: {
    fontSize: FONTSIZE.size_14,
    color: "#555",
  },
  list: {
    padding: 10,
  },
  deleteButton: {
    marginTop: SPACING.space_18,
    backgroundColor: COLORS.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: "60%",
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    borderTopRightRadius: BORDERRADIUS.radius_10,
  },
  clearButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontSize: FONTSIZE.size_16,
    fontWeight: "bold",
  },
  toast: {
    backgroundColor: COLORS.primaryRed,
    padding: 10,
    borderRadius: 5,
  },
});
