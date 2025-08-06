import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import Footer from '../../../../components/Footer'

export default function programs() {
  return (
    <View style={styles.Container}>
      <ScrollView contentContainerStyle={{ backgroundColor: "#fff", paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../../../assets/images/ProgramTitleImage.avif')}
          style={{
            width: "100%",
            height: 200
          }}
          resizeMode='cover'
        >
          <View style={{ flex: 1, backgroundColor: '#04020894', justifyContent: "center", alignItems: "center" }}>
            <Text style={{
              fontSize: 24,
              fontWeight: "800",
              color: "#fff"
            }}>OUR PROGRAMS</Text>

          </View>
        </ImageBackground>
        <Text style={styles.Heading}>{`Embrace a journey of exploration,\ninnovation, and discovery in space science.`}</Text>
        <Image source={require('../../../../assets/images/School.avif')}
        style={{
          width:"63%",
          height:250,
          borderRadius:12,
          marginTop:25,
          alignSelf:"center"
        }}
        />
         <Image source={require('../../../../assets/images/College.avif')}
        style={{
          width:"63%",
          height:250,
          borderRadius:12,
          marginTop:25,
          alignSelf:"center"
        }}
        />
         <Image source={require('../../../../assets/images/Online.avif')}
        style={{
          width:"63%",
          height:250,
          borderRadius:12,
          marginTop:25,
          alignSelf:"center"
        }}
        />
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Heading: {
    textAlign: "center",
    color: "#004193",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 20
  }

})