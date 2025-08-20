import { Video } from 'expo-av'
import { useState } from 'react'
import { ActivityIndicator, Alert, Dimensions, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import ExpertTeam from '../../../../components/ExpertTeam'
import Footer from '../../../../components/Footer'
import ImageViewer from '../../../../components/ImageViewer'
import WhyChooseComponent from '../../../../components/WhyChooseComponent'
import { TextData } from '../../../../data'
const Links = TextData.Links;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100, backgroundColor: "#F5F5F5" }}>
        <View style={styles.imageConatiner}>
          {isLoading && <ActivityIndicator size={"large"} />}
          <Video
            source={require('../../../../assets/video/space.mp4')}
            style={styles.video}
            shouldPlay
            isLooping
            resizeMode='cover'
            onLoadStart={() => setIsLoading(true)} // Set loading to true when loading starts
            onReadyForDisplay={() => setIsLoading(false)}
          />
          <Text style={styles.title}>
            {`Launch Your Career with SpaceSkool!`}
          </Text>
          <Text style={styles.subTitle}>{`Explore the Wonders of the Universe \nwith SpaceSkool!`}</Text>
          {/* <View style={styles.ButtonContainer}> */}
          <Pressable style={[styles.aboutButton, { marginTop: 100 }]} onPress={() => Alert.alert("About page")}>
            <Text style={styles.aboutButtontext}>About Us</Text>
          </Pressable>
          <Pressable style={[styles.aboutButton, { backgroundColor: "#f5f5f5" }]} onPress={() => Alert.alert("Program page")}>
            <Text style={[styles.aboutButtontext, { color: "#14079c" }]}>Explore our programs </Text>
          </Pressable>
          {/* </View> */}

        </View>
        <View style={{
          width: "100%",
          height: "5500",
          paddingHorizontal: 40,
          backgroundColor: "#fff"
          // backgroundColor:"red"


        }}>
          <Text style={styles.AboutHeading}>ABOUT</Text>
          <Text style={styles.Empowering}>{TextData.Empowering_text}</Text>
          <Image
            source={require('../../../../assets/images/empower.jpg')}
            resizeMode='contain'
            style={{
              width: Dimensions.get("window").width - 80,
              height: Dimensions.get("window").width - 80,
              borderRadius: 10,
              elevation: 12,
              alignSelf: "center",
              marginTop: 15

            }}
          />
          <Text style={{
            fontSize: 12,
            fontWeight: "600",
            color: "#192A88",
            fontSize: 24,
            marginTop: 20,
            marginBottom: 15

          }}>Our Programs :
          </Text>
          <ExpertTeam title={"Expert Team"} />
          <ExpertTeam title={"Cutting Edge Curriculum"} />
          <ExpertTeam title={"Real world experience "} />
          <ExpertTeam title={"Research oriented education"} />
          <Text style={styles.Numericvalue}> 3000+</Text>
          <Text style={styles.heading}>Trained</Text>
          <Text style={styles.Numericvalue}> 2200+</Text>
          <Text style={styles.heading}>Projects</Text>
          <Text style={styles.Numericvalue}> 14000+</Text>
          <Text style={styles.heading}>Aplications</Text>
          <Pressable style={styles.KnowMore} onPress={() => Alert.alert("Know More Button")}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }} >Know More</Text>
          </Pressable>

          {/* OUR PROGRAMS */}
          <View>
            <Text style={styles.AboutHeading}>OUR PROGRAMS</Text>
            <Text style={[styles.Empowering, { fontSize: 26 }]}>Grade Programs</Text>


            {/* Space Kiddo */}
            <ImageViewer source={require('../../../../assets/images/ASTRO.avif')} />
            <Text style={[styles.Empowering, { marginTop: 20, fontWeight: "700" }]}>SpaceKiddo</Text>
            <Text style={{ textAlign: "center" }}>{TextData.Discover_text}</Text>


            {/* Space Food */}
            <ImageViewer source={require('../../../../assets/images/food.avif')} />
            <Text style={[styles.Empowering, { marginTop: 20, fontWeight: "700" }]}>Space Foods</Text>
            <Text style={{ textAlign: "center" }}>{TextData.Food_text}</Text>

            {/* Space Biotechnology */}
            <ImageViewer source={require('../../../../assets/images/Biotechnology.avif')} />
            <Text style={[styles.Empowering, { marginTop: 20, fontSize: 24, fontWeight: "700" }]}>Space Biotechnology</Text>
            <Text style={{ textAlign: "center" }}>{TextData.Biotechnology_text}</Text>
          </View>
          {/* WHY CHOOSE US */}
          <View>

            <Text style={styles.AboutHeading}>WHY CHOOSE US?</Text>
            <Text style={styles.Empowering}>{TextData.WhyChooseHeading}</Text>
            <WhyChooseComponent title={'Expert Instructors'} paragarph={TextData.Expert_Instructors} />
            <WhyChooseComponent title={'Innovative Curriculum'} paragarph={TextData.Innovative_Curriculum} />
            <WhyChooseComponent title={'Commitment to Excellence'} paragarph={TextData.Commitment_to_Excellence} />
            <View style={{
              width: Dimensions.get("window").width - 80,
              height: Dimensions.get("window").width - 80,
              borderRadius: 12,
              elevation: 15,
              alignSelf: "center",
              overflow: "hidden",
              marginTop: 20
            }}>
              <Image
                source={require('../../../../assets/images/why_choose_image.avif')}
                style={{ width: "101%", height: "100%" }}
                resizeMode='cover'

              />
            </View>
          </View>

          {/* OUR JOURNEY */}
          <View>
            <Text style={styles.AboutHeading}>OUR JOURNEY</Text>
            <Text style={[styles.Empowering, { fontSize: 26, textAlign: "center" }]}>{TextData.Our_jerney_heading}</Text>
            <Text style={{
              textAlign: "center",
              marginTop: 20,
              color: "#000"

            }}>{TextData.Our_jerney_paragraph}</Text>
            <Text style={styles.Numericvalue}> 50,000+</Text>
            <Text style={styles.heading}>Students Reached</Text>
            <Text style={{ marginTop: 30, alignSelf: "center", fontWeight: "600" }}>Students from</Text>
            <Text style={[styles.Numericvalue, { marginTop: 0 }]}> 3000+</Text>
            <Text style={styles.heading}>Universities</Text>
            <Text style={styles.Numericvalue}> 3000+</Text>
            <Text style={styles.heading}>Student Projects</Text>
            <Text style={styles.Numericvalue}> 15+</Text>
            <Text style={styles.heading}>Domains to choose from</Text>

          </View>

          {/* PAST GUEST LECTURES */}

          <View style={{
            // width: Dimensions.get('window').width,
            height: 300,
            // backgroundColor: "#f9f9f9",
            backgroundColor: "#fff"

            // backgroundColor: "red",

          }}>
            <Text style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 24,
              fontWeight: "800",
              color: "#8747CC"
            }}>PAST GUEST LECTURES</Text>
            <Image
              source={require('../../../../assets/images/Landscape_Event_Creatives.avif')}
              style={{
                width: "100%",
                height: 260
              }}
              resizeMode='contain'
            />

          </View>
          {/* Featured in */}
          <View style={{ paddingBottom: 20, }}>
            <Text style={{
              alignSelf: "center",
              marginTop: 10,
              fontSize: 24,
              fontWeight: "800",
              color: "#8747CC"
            }}>Featured in</Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Image source={require('../../../../assets/images/eenadulogo.avif')}
                style={{
                  width: "50%",
                  height: 80
                }}
                resizeMode='stretch'

              />
              <Image source={require('../../../../assets/images/Sakshi_np.avif')}
                style={{
                  width: "50%",
                  height: 80
                }}
                resizeMode='stretch'

              />
            </View>
            <View style={{ flexDirection: "row", gap: 20, marginTop: 10 }}>
              <Image source={require('../../../../assets/images/BottomLogo_1.avif')}
                style={{
                  width: "50%",
                  height: 80
                }}
                resizeMode='stretch'

              />
              <Image source={require('../../../../assets/images/BottomLogo_2.avif')}
                style={{
                  width: "50%",
                  height: 80
                }}
                resizeMode='stretch'

              />
            </View>
            <Image
              source={require('../../../../assets/images/KaroStartup.avif')}
              style={{
                width: "100%",
                height: 100,
                marginTop: 0
              }}
            />


          </View>

        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <ImageBackground
            source={require('../../../../assets/images/Last_Bottom_Image.avif')}
            style={{
              // width: "100%",
              height: 300,
              marginTop: 150,
              backgroundColor: "red",
              // alignSelf:'center'
              // paddingVertical: 18
            }}
            resizeMode='cover'
          >
            <View style={{
              flex: 1,

              backgroundColor: "rgba(0, 0, 0, 0.72)",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Text style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: "700",
                marginHorizontal: 20,
                lineHeight: 25
              }}>
                “Earth is the cradle of humanity, but one cannot live in a cradle forever.”
              </Text>
              <Text style={{
                color: "#fff",
                fontSize: 10,
                fontWeight: "600",
                marginTop: 20
              }}>- Konstantin Tsiolkovsky

              </Text>
              <Text style={{
                color: "#fff",
                fontSize: 7
              }}>
                ( One of the founding fathers of modern rocketry)
              </Text>

            </View>
          </ImageBackground>
          <Footer/>
          
        </View>


      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  imageConatiner: {
    width: "100%",
    backgroundColor: "#fff",
    height: vs(700),
    justifyContent: "center",
    alignItems: "center",

  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    right: 0
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "900",
    color: "rgba(255,220,33,1)",
    marginHorizontal: 30,
    textAlign: "center"

  },
  subTitle: {
    fontSize: s(14),
    fontWeight: "600",
    color: "#fff",
    marginTop: vs(15),
    marginHorizontal: 30,
    textAlign: "center"
  },
  aboutButton: {
    paddingHorizontal: 45,
    backgroundColor: "transparent",
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 20

  },
  aboutButtontext: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500"
  },
  ButtonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignSelf: "flex-start",
    marginStart: 30,
    gap: 12
  },
  Empowering: {
    fontSize: 30,
    fontWeight: "900",
    color: "#192A88",
    textAlign: "center"
  },
  KnowMore: {
    width: 190,
    backgroundColor: '#2757beff',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 30
  },
  Numericvalue: {
    fontSize: 38,
    fontWeight: "900",
    alignSelf: "center",
    marginTop: 30,
    lineHeight: 38
  },
  heading: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "600"
  },
  AboutHeading: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 70,
    alignSelf: "center",
    fontWeight: "900"
  },
  ContactDeatils: {
    fontSize: 18,
    fontWeight: "800",
    marginStart: 20
  }

})