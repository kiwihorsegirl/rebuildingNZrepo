import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Heading from "./components/Heading";
import SelectionButton from "./components/SelectionButton";

export default function Resources() {

    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <Heading title="Resources"></Heading>

            <View style={styles.left}>
                <SelectionButton title="Request" />
            </View>


            <View style={styles.right}>
                <SelectionButton title="Provide" />
            </View>

            <View>
            <TextInput 
                placeholder="Enter input here"
                value={text}
                onChangeText={setText}
                style={styles.txtInput}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // padding: 20
        width: "100%",
    },

    txtInput: {
        backgroundColor: "#77ade4ff",
        padding: 10,
        height: 50,
        fontSize: 20,
        fontFamily: "Overpass"
    },

    left: {
        marginBottom: 20
    },

    right: {
        alignItems: "flex-end",
        marginBottom: 20
    }

    

    // provideButton: {
    //     marginLeft: "auto"
    // }
})