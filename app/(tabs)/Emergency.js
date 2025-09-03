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
        {visible && (
            <View style={{ backgroundColor: "#e0e0e0", width: "70%" }}>
                {options.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => onSelect(item)} style={{ padding: 10 }}>
                    <Text>{item}</Text>
                </TouchableOpacity>
                ))}
            </View>
        )}
      </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        padding: 10,
        backgroundColor: "#c9c9c9ff",
        width: "70%"
    },
     buttonText: {
        fontSize: 20,
        fontFamily: "Overpass"
    }
})