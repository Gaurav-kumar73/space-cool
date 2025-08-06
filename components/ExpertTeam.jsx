import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native';

const ExpertTeam = ({title}) => {
    return (
        <View style={{ flexDirection: "row" ,justifyContent:"flex-start",alignItems:"center",gap:10,marginBottom:15}}>
            <FontAwesome6 name="circle-arrow-right" size={30} color="black" />
            <Text style={{fontSize:20}}>{title}</Text>
        </View>
    )
}

export default ExpertTeam

const styles = StyleSheet.create({})