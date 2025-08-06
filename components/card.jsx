import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { JupiterIcon, RocketIcon, TelescopIcon } from '../constant/Icons'


const icon = {
    Rocketry: () => <RocketIcon height={35} width={35} />,
    CubeSats: () => <Image source={{ uri: 'https://static.wixstatic.com/media/76c345_c29884d0f2a8448eb10eb7a131bf1ce9~mv2.png/v1/crop/x_0,y_63,w_1024,h_898/fill/w_63,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cubesat.png' }}
        style={{ width: 50, height: 50, backgroundColor: "#fff" }} />,
    Stargazing: () => <TelescopIcon height={35} width={35} />,
    SpaceSciences: () => <JupiterIcon height={35} width={35} />
}

const Card = ({ onPress, title, pargraph }) => {
    return (
        <View style={{ justifyContent: "space-between" }}>
            <Pressable onPress={onPress} style={{
                width: Dimensions.get('window').width / 2 - 20,
                // height: 220,
                flex: 1,
                backgroundColor: "#fff",
                elevation: 12,
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginBottom: 10
            }}>

                {
                    icon[title]({})
                }

                <Text style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginTop: 5
                }}>{title}</Text>
                <Text style={{
                    fontSize: 8,
                    lineHeight: 15,
                    margin: 5,
                    fontWeight: "500"
                }}>{pargraph}</Text>
            </Pressable>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})