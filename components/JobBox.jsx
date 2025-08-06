import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const JobBox = ({ title, country, onPress }) => {
    const [textColor, setTextColor] = useState('rgb(95,122,203)');
    return (
        <View style={styles.Container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.Country}>{country}</Text>
            <TouchableHighlight style={[styles.Button]} onPress={onPress}
                onPressIn={() => setTextColor('#fff')} // Change color on press
                onPressOut={() => setTextColor('rgb(95,122,203)')}
                underlayColor={"rgb(95,122,203)"}

            >
                <Text style={[styles.ButtonText, { color: textColor }]}>View Job</Text>
            </TouchableHighlight>

        </View>
    )
}

export default JobBox

const styles = StyleSheet.create({
    Container: {
        width: "95%",
        backgroundColor: "#fff",
        // elevation: 12,
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignSelf: "center",
        gap: 10,
        borderWidth: 0.5,
        borderColor: "rgb(95,122,203)",
        marginTop: 15
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: "#000",
        alignSelf: "center",
        lineHeight: 30


    },
    Country: {
        fontSize: 20,
        color: "#000",
        textAlign: "left"

    },
    Button: {
        borderWidth: 1,
        borderColor: "rgb(95,122,203)",
        alignSelf: 'center',
        paddingHorizontal: 60,
        paddingVertical: 10,
        marginTop: 10
    },
    ButtonText: {
        fontSize: 16,
        color: "rgb(95,122,203)",

    }
})