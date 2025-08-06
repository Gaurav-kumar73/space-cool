import { Image, StyleSheet, Text, View } from 'react-native';
import { TextData } from '../data';

const Links = TextData.Links;

const Footer = () => {
    return (
        <View style={{backgroundColor:"#fff"}}>
            <Text style={{
                alignSelf: "center",
                fontSize: 35,
                fontWeight: "900",
                letterSpacing: 6,
                marginVertical: 100,
                color: "#8747CC"
            }}>
                SpaceSkool
            </Text>
            <Text
                style={{
                    textAlign: "left",
                    marginHorizontal: 18,
                    color: '#004193',
                    fontWeight: "800",
                    fontSize: 12,
                    lineHeight: 20
                }}
            >{TextData.SpaceSkool_Description}</Text>
            <View style={{
                alignSelf: "center",
                flexDirection: "row",
                gap: 20,
                marginVertical: 30
            }}>
                <Image
                    source={require('../assets/images/LinkedI_Logo.png')}
                    style={{
                        width: 40, height: 40,

                    }}
                />
                <Image
                    source={require('../assets/images/Insta_logo.png')}
                    style={{
                        width: 40, height: 40,

                    }}
                />
            </View>
            <Text style={styles.ContactDeatils}>info@thespaceskool.com</Text>
            <Text style={styles.ContactDeatils}>888 666 3640</Text>
            {/* Important links */}
            <View>
                <Text style={{
                    marginTop: 50,
                    fontSize: 20,
                    fontWeight: "800",
                    color: "#8747CC",
                    marginStart: 20
                }}>Important Links</Text>

                {
                    Links.map((item) => <Text key={item}
                        onPress={() => Alert.alert(item + ' Page')}
                        style={{
                            marginTop: 10,
                            fontSize: 13,
                            marginStart: 20,
                            color: '#05244F'
                        }}
                    >{item}</Text>)
                }
            </View>

            {/* Basic Logos */}
            <View style={{
                flexDirection: "row",
                // paddingHorizontal: 20,
                // backgroundColor: "red",
                marginTop: 20,
                alignItems: "center", alignSelf: "center"
            }}>
                <Image
                    source={require('../assets/images/Msme.png')}
                    style={{
                        width: "35%",
                        height: 100,
                    }}
                    resizeMode='contain'
                />
                <Image
                    source={require('../assets/images/Azadi.png')}
                    style={{
                        width: "30%",
                        // backgroundColor: "yellow",
                        height: 100,
                    }}
                    resizeMode='cover'

                />
                <Image
                    source={require('../assets/images/ISO.png')}
                    style={{
                        width: "18%",

                        height: 70,
                    }}
                    resizeMode='contain'

                />
            </View>
            <View style={{
                flexDirection: "row",
                // paddingHorizontal: 20,
                // backgroundColor: "yellow",
                //  marginTop:20,
                alignSelf: "center",
                // marginRight:20
            }}>
                <Image
                    source={require('../assets/images/startup.png')}
                    style={{
                        width: 200,
                        height: 70,
                        // backgroundColor:"red"
                    }}
                    resizeMode='contain'
                />
                <Image
                    source={require('../assets/images/Digital.png')}
                    style={{
                        width: 130,
                        // backgroundColor: "pink",
                        height: 70,
                    }}
                    resizeMode='contain'

                />

            </View>
            <View style={{
                width: "100%",
                height: 100,
                backgroundColor: " rgb(135, 71, 204)"
            }}>
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 12,
                        marginTop: 10,
                        textAlign: "center"
                    }}>{TextData.FooterText}</Text>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
     ContactDeatils: {
    fontSize: 18,
    fontWeight: "800",
    marginStart: 20
  }
})