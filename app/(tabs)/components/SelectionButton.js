import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SelectionButton({ title, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={ styles.button }>
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "#73bdb0ff",
        width: "70%"
    },
    container: {
        // padding: 20
        width: "100%",
    },
     text: {
        fontSize: 20,
        fontFamily: "Overpass"
    }
})