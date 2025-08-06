import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const CheckBox = ({ options, checkedValues, onChange, }) => {

    let UpdatecheckedValues = [...checkedValues];
    return (
        <View>
            {options.map((option) => {
                let active = UpdatecheckedValues.includes(option.value);

                return (
                    <TouchableOpacity style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}
                        onPress={() => {
                            if (active) {
                                UpdatecheckedValues = UpdatecheckedValues.
                                    filter((checkedValue) => checkedValue !== option.value)
                                return onChange(UpdatecheckedValues);
                            }
                            UpdatecheckedValues.push(option.value);
                            onChange(UpdatecheckedValues);

                        }}
                        key={option.value}
                    >
                        <MaterialIcons name={active ? "check-box" : "check-box-outline-blank"} size={20} color={active ? "green" : "black"} />
                        <Text>{option.label}</Text>
                    </TouchableOpacity>
                )

            })}
        </View>
    )
}

export default CheckBox

const styles = StyleSheet.create({})