import { Pressable, StyleSheet } from 'react-native'
import { s } from 'react-native-size-matters'

const SocialCircle = ({bg,icon,onPress}) => {
  return (
    <Pressable onPress={onPress} style={[styles.SocialCircle,{backgroundColor:bg}]}>
     {icon}
    </Pressable>
  )
}

export default SocialCircle

const styles = StyleSheet.create({
    SocialCircle:{
        width:s(50),
        height:s(50),
        borderRadius:s(50),
        justifyContent:"center",
        alignItems:"center",
        elevation:10
    }
})