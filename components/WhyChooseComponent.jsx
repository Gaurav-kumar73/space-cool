import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native';

const WhyChooseComponent = ({title,paragarph}) => {
    return (
        <View style={{ alignItems: "center",gap:20,marginTop:40 }}>
            <View style={{
                width: 60, height: 60,
                borderRadius: 70,
                backgroundColor: '#152040',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FontAwesome6 name="check" size={35} color="#fff" />
            </View>
            <Text style={{
                fontSize: 27,
                color: "black",
                fontWeight: "600",
                textAlign:"center"
            }}>{title}
            </Text>
            <Text
            style={{textAlign:"center",color:"black"}}
            >{paragarph}</Text>
        </View>
    )
}

export default WhyChooseComponent

const styles = StyleSheet.create({})