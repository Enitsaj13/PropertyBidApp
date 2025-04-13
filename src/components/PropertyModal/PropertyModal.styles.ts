import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONTSIZE, BORDERRADIUS } from "@/themes/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    maxHeight: "80%",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 20,
    padding: 4,
  },
  modalImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalContent: {
    padding: 20,
  },
  address: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: COLORS.primaryBlack,
  },
  bidSection: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryLightGray,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.primaryDarkGray,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  bidRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  bidAmount: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 8,
    marginRight: 16,
    color: COLORS.primaryBlue,
  },
  trend: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
  },
  yourBidsSection: {
    marginBottom: 24,
  },
  bidStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  bidStatCard: {
    alignItems: "center",
    backgroundColor: COLORS.primarySecondaryWhite,
    borderRadius: 8,
    padding: 12,
    width: "30%",
  },
  bidStatValue: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 4,
    color: COLORS.primaryBlack,
  },
  bidStatLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.primaryDarkGray,
    marginBottom: 4,
  },
  bidStatAmount: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primaryBlue,
  },
  bidButton: {
    backgroundColor: COLORS.primaryBlue,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  bidButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
