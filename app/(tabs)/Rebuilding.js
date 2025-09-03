import { StyleSheet, View } from "react-native";
// import { WebView } from "react-native-webview";
import Heading from "./components/Heading";
import SelectionButton from "./components/SelectionButton";

export default function Rebuilding() {

    const videoId = "0JICAx3FcBg";
    const embedUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <View style={styles.container}>
        <Heading title="Rebuilding"></Heading>
        <SelectionButton title="Home Repair" />
        <SelectionButton title="Agriculture" />

        {/* <WebView style={styles.video} 
            
            source={{ uri:embedUrl }}
            allowsFullscreenVideo
        /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 20
        width: "100%",
        flex: 1,
    }
    // ,
    // video: {
    //     width: "100%",
    //     height: 200,
    // }
})