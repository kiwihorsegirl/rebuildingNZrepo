import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomepageButton({ title, onPress }) {
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
        backgroundColor: "#777777ff",
        width: "70%",
    },
    container: {
        // padding: 20
        width: "100%",
        alignItems: "center"
    },
     text: {
        fontSize: 20,
        fontFamily: "Overpass"
    }
})