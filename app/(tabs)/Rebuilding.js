import { StyleSheet, View } from "react-native";
import Heading from "./components/Heading";
import SelectionButton from "./components/SelectionButton";

export default function Rebuilding() {
    return (
        <View style={styles.container}>
        <Heading title="Rebuilding"></Heading>
        <SelectionButton title="Home Repair" />
        <SelectionButton title="Agriculture" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 20
        width: "100%",
    }
})