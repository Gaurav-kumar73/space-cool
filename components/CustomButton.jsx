import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { s } from 'react-native-size-matters'

const CustomButton = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.ButtonText}>
                {title}
            </Text>
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
        justifyContent: "center"
    },
    ButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700"
    }
})