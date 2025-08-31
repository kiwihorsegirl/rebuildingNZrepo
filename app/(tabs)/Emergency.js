import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Heading from "./components/Heading";

const options = ["Wounds", "CPR", "Other"]

export default function Emergency() {

    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState("First Aid");

    const onSelect = (item) => {
        setSelected(item);
        setVisible(false);
    };

    return (
        <View>
        <Heading title="Emergency"></Heading>
        <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>{selected}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        padding: 10,
        backgroundColor: "#a5e037ff",
        width: "70%"
    },
     buttonText: {
        fontSize: 20,
        fontFamily: "Overpass"
    }
})