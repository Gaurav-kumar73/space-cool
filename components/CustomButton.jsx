import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { s, vs } from 'react-native-size-matters'

const CustomButton = ({title,onPress,Loader}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            {
                Loader ? <ActivityIndicator color="#fff" size={'small'} /> : <Text style={styles.ButtonText}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        backgroundColor: "#090344",
        paddingVertical: 12,
        borderRadius: s(8),
        alignItems: "center",
        justifyContent: "center",
        height:vs(40)
    },
    ButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700"
    }
})