import { Alert, Dimensions, Image, Pressable, StyleSheet } from 'react-native'

const ImageViewer = ({ImageTitle,ImageSubheading,source}) => {
    return (
        <Pressable 
        onPress={()=>Alert.alert("Space kidoo pagr open")}
        style={{
            width: Dimensions.get("window").width - 80,
            height: Dimensions.get("window").width - 80,
            marginTop: 30,
            borderRadius: 10,
            overflow: "hidden",

        }}>
            <Image
            source={source}
            style={{
                width:"100%",
                height:"100%"
            }}
            resizeMode="cover"
            />
        </Pressable >
    )
}

export default ImageViewer

const styles = StyleSheet.create({

})