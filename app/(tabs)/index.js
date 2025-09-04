import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Rucksack from "../../assets/images/rucksack.svg";
import BackgroundStyling from "./components/BackgroundStyling";
import HomepageButton from "./components/HomepageButton";

const { width } = Dimensions.get("window");

// SVG natural viewBox
const viewBoxWidth = 1127.14;
const viewBoxHeight = 799.97;
const aspectRatio = viewBoxWidth / viewBoxHeight;

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Boogaloo: require("../../assets/fonts/Boogaloo-Regular.ttf"),
    Overpass: require("../../assets/fonts/Overpass-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <BackgroundStyling>
      <SafeAreaView style={styles.container}>
        {/* ScrollView ensures content can scroll if needed */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Top SVG */}
          <Rucksack
            width={width}             // full screen width
            height={width / aspectRatio} // dynamic height
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Heading */}
          <View style={styles.headingBox}>
            <Text style={styles.headingText}>Rebuilding New Zealand</Text>
          </View>

          {/* Buttons */}
          <View style={styles.headingBoxBtm}>
            <HomepageButton title="Emergency" onPress={() => router.push("/Emergency")} />
            <HomepageButton title="Resources" onPress={() => router.push("/Resources")} />
            <HomepageButton title="Rebuilding" onPress={() => router.push("/Rebuilding")} />
            <HomepageButton title="Community" onPress={() => router.push("/Community")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </BackgroundStyling>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#3d2515ff",
  },
  scrollContainer: {
    alignItems: "center",      // center horizontally
  },
  headingBox: {
    backgroundColor: "#838383ff",
    padding: 30,
    // marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 40,
    width: "90%",              // optional, keeps it responsive
  },
  headingBoxBtm: {
    backgroundColor: "#838383ff",
    padding: 30,
    marginTop: 60,
    // marginBottom: 10,
    marginHorizontal: 40,
    width: "90%",              // optional, keeps it responsive
  },

  headingText: {
    color: "black",
    fontFamily: "Boogaloo",
    fontSize: 48,
    textAlign: "center",
  },
});
