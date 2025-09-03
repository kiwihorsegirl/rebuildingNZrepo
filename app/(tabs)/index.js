// import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native"; //Button
import Rucksack from "../../assets/images/rucksack.svg";
import Heading from "./components/Heading";
import HomepageButton from "./components/HomepageButton";

import Community from "./Community";
import Emergency from "./Emergency";
import Rebuilding from "./Rebuilding";
import Resources from "./Resources";



const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      

    <View 
    style={styles.img}
    >
      {/* <Svg width={150} height={150}> */}
        {/* <Rucksack width={150} height={150} /> */}
        <Rucksack />
    {/* </Svg> */}
    
    {/* <Svg width={150} height={150}>
    <Image href={require("../../assets/images/rucksack.svg")} width={150} height={150} />
  </Svg> */}

  
    </View>

      <Heading title=""></Heading>
      
      <View style={styles.headingBox}>
        <Text style={{ color: "black", fontFamily: "Boogaloo", fontSize: 36}}>{"Rebuilding New Zealand"}</Text>
      </View>
        {/* <View style={styles.center}> */}
          <HomepageButton title="Emergency" onPress={()=> navigation.navigate("Emergency")} />
          <HomepageButton title="Resources" onPress={()=> navigation.navigate("Resources")} />
          <HomepageButton title="Rebuilding" onPress={()=> navigation.navigate("Rebuilding")} />
          <HomepageButton title="Community" onPress={()=> navigation.navigate("Community")} />
        {/* </View> */}
    </View>
    
  );
}

export default function Index() {
    
     const [fontsLoaded] = useFonts({
    Boogaloo: require("../../assets/fonts/Boogaloo-Regular.ttf"),
    Overpass: require("../../assets/fonts/Overpass-Regular.ttf")
    });    


    if (!fontsLoaded) {
      return null; // Or a loading spinner
    }    

  return (
    
    <View style={{ flex: 1 }}>

      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="Rebuilding" component={Rebuilding} />
        <Stack.Screen name="Community" component={Community} />
      </Stack.Navigator>

      </View>
  );
}

const styles = StyleSheet.create({
    center: {
      justifyContent: "center"
    },
    headingBox: {
      backgroundColor: "#838383ff",
      padding: 30
    },
    img: {
      width: 150,
      height: 150,
      marginBottom: 20
    }
})