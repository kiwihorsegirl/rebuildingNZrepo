import { StyleSheet, Text, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";

export default function Heading({title}) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.containerTrapezoid}></View> */}
                <Svg height="150" width="300" style={styles.trapezoid}>
                    <Polygon points="0,150 300,150 250,0 50, 0" fill="#bde6deff" />
                </Svg>
            {/* <View style={styles.containerHeading}> */}
                <Text style={styles.headingText}>{title}</Text>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    // containerHeading: {
    //     alignItems: "center",
    //     paddingTop: 40
    // },
        container: {
        alignItems: "center",
        paddingTop: 0,
        position: "relative"
    }, 
    // containerTrapezoid: {
    //     alignItems: "center",
    //     paddingTop: 0
    // },
    headingText: {
        color: "black", 
        fontFamily: "Boogaloo", 
        fontSize: 48,
        position: "absolute",
        paddingTop: 50
    },
    trapezoid: {
        transform: [{rotate: "180deg"}],
        marginBottom: 20
    }

})