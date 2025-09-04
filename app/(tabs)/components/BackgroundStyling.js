import { StyleSheet, View } from "react-native";

export default function BackgroundStyling({ children }) {
    return <View style={styles.bgContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: "#53a542ff", // your shared background
  },
});