import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Footer from '../../../../components/Footer';
import JobBox from '../../../../components/JobBox';

const jobs = [
  {
    title: `Sr. Business Development Executives`,
    country: 'india'
  },
  {
    title: `Jr. Executives Space Foods`,
    country: 'india'
  },
  {
    title: `University Coordinator`,
    country: 'india'
  }
]

export default function carrers() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{backgroundColor:"#fff",paddingBottom:100}} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: "https://static.wixstatic.com/media/76c345_6b0acd4c79a449be8c49f17c12ab304e~mv2.jpg/v1/fill/w_1585,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/76c345_6b0acd4c79a449be8c49f17c12ab304e~mv2.jpg" }}
          style={{
            width: "100%",
            height: 250
          }}
          resizeMode='cover'
        />
        <Text style={styles.Heading}>Vacant Positions</Text>
        {
          jobs.map((item) => (
            <JobBox key={item.title} title={item.title} country={item.country} onPress={() => Alert.alert("called")} />

          ))
        }
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Heading: {
    alignSelf: "center",
    fontSize: 26,
    marginVertical: 40,
    fontWeight: "600",
    color: "#8747CC",
    borderBottomWidth: 3,
    lineHeight: 20,
    borderBottomColor: "#8747CC"
  }

})