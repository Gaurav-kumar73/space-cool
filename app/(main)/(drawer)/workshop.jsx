import { Alert, Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'
import Footer from '../../../components/Footer'

export default function workshop() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f4f5f5" }}>
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/images/ProgramPageImage.avif')}

          style={{
            width: "100%",
            height: 300
          }}
          resizeMode='cover'
        >
          <View style={{ flex: 1, backgroundColor: "rgba(140, 80, 250, 0.44)", justifyContent: "center", alignItems: "center" }}>
            <Text style={{
              color: "#fff",
              fontSize: 35,
              fontWeight: "800"
            }}>WORKSHPS</Text>
          </View>
        </ImageBackground>
        <Text style={
          {
            fontSize: 25,
            color: "#8747CC",
            fontWeight: "800",
            alignSelf: "center",
            marginVertical: 30
          }
        }>Upcoming Workshops</Text>
        <Pressable onPress={()=>Alert.alert("Upcoimg Workshop")}>
          <Image
            source={require('../../../assets/images/UpcomingWorkshopImages.avif')}
            style={{
              width: "80%",
              height: 500,
              alignSelf: "center",
            }}
            resizeMode='contain'

          />
        </Pressable>
        <Footer />
      </ScrollView>
    </View>
  )
}