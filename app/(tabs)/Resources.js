import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import BackgroundStyling from "./components/BackgroundStyling";
import Heading from "./components/Heading";
import SelectionButton from "./components/SelectionButton";

export default function Resources() {

    const [text, setText] = useState("")

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (

        <BackgroundStyling>
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

                <Button title="Select a resource image" onPress={pickImage} color="#8a8a8aff" />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 20 }} />}
            </View>
        </BackgroundStyling>
        
    )
}

const styles = StyleSheet.create({

    container: {
        // padding: 20
        width: "100%",
    },

    txtInput: {
        backgroundColor: "#6d6d6dff",
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