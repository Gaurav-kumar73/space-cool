import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Footer from '../../../../components/Footer'
import { TextData } from '../../../../data'

export default function about() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, backgroundColor: "#F5F5F5" }}>
        <View style={{ backgroundColor: "#fff" }}>
          <Text style={styles.Heading}>
            Our Vision
          </Text>
          <Text style={styles.Paragraph}>{TextData.Our_Vision_Text}</Text>
          <Text style={styles.SubHeading}>{TextData.Our_Vision_SubHeading}</Text>
          <Text style={styles.Heading}>
            Our Mission is to
          </Text>
          <Text style={styles.Paragraph}>{TextData.Our_Mission_Text}</Text>
          <Text style={styles.SubHeading}>{TextData.Our_Mission_SubHeading}</Text>
          <Text style={styles.Heading}>
            About Us
          </Text>
          <Text style={styles.Paragraph}>{TextData.About_Us_Text}</Text>
          <Text style={styles.Heading}>
            Our Specializations
          </Text>
          <Text style={[styles.SubHeading, { color: "#000", fontSize: 14 }]}>{TextData.Our_Specializations_Text}</Text>
          <Text style={styles.Heading}>
            Supported by
          </Text>
          <View style={{
            paddingVertical: 20,
            // borderWidth:1,
            borderBottomWidth: 1,
            borderBottomColor: "#000",
            marginHorizontal: 20
          }}>
            <Image
              source={{ uri: "https://static.wixstatic.com/media/76c345_a1503b29c32c42a99434287fcd662f46~mv2.png/v1/fill/w_228,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/red_vdc%20(1).png" }}
              style={{
                width: 200,
                height: 80,
                alignSelf: "center",
                // marginTop: 20
              }}
              resizeMode='contain'
            />
          </View>
          <Image
            source={{ uri: "https://static.wixstatic.com/media/76c345_1353b518e93a40c082374a89722464c4~mv2.png/v1/fill/w_206,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GITAM_logo.png" }}
            style={{
              width: 180,
              height: 60,
              alignSelf: "center",
              marginTop: 20
            }}
            resizeMode='contain'
          />
          <Image
            source={{ uri: "https://static.wixstatic.com/media/76c345_8046825dc5f047c49c27fa214b588e57~mv2.png/v1/fill/w_245,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DERBI-Logo_Updated.png" }}
            style={{
              width: 200,
              height: 100,
              alignSelf: "center",
              marginTop: 20
            }}
            resizeMode='contain'
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "900",
              color: "#000",
              alignSelf: "center",
              textDecorationLine: "underline",
              textDecorationStyle: "900",

            }}
          >Logos</Text>
          <Image
            source={{uri:'https://static.wixstatic.com/media/76c345_917d4415ae8240dfa6896263a4f26099~mv2.png/v1/fill/w_419,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Minimalist%20Green%20Watercolor%20Circle%20Logo%20(2)_edited.png'}}
            style={{
              width: "90%",
              height: 70,
              alignSelf: "center",
              marginTop: 20,
              // backgroundColor:"red"
            }}
            resizeMode='contain'
          />
           <Image
            source={{uri:'https://static.wixstatic.com/media/76c345_354b2cc7a9a94df395f891c13d081866~mv2.png/v1/crop/x_0,y_1329,w_6000,h_717/fill/w_569,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/School%20of%20Spae%20Education%20%26%20Research%20(2).png'}}
            style={{
              width: "90%",
              height: 70,
              alignSelf: "center",
              // marginTop: 20,
              // backgroundColor:"red"
            }}
            resizeMode='contain'
          />





        </View>

        <Footer />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"red",
  },
  Heading: {
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "700",
    color: "#8747CC",
    marginTop: 20
  },
  Paragraph: {
    alignSelf: "center",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 30,
    color: 'rgba(110, 107, 107, 1)',
    marginHorizontal: 20,
    marginTop: 20

  },
  SubHeading: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 30,
    marginTop: 20,
    lineHeight: 30,
    color: "#004193"
  }
})