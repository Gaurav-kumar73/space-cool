import { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Footer from '../../../components/Footer';
import { useAuth } from '../../../context/DataProvider';

export default function contact() {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const { addQearyHandle } = useAuth();


  const SendHandle = async () => {
    if (!Validation()) return Alert.alert("Error", "Please fill all the fields correctly.");
    setLoader(true);
    // Alert.alert("Name",email)
    let addQeary = {
      email: email,
      subject: subject,
      message: message
    }
    let result = await addQearyHandle(addQeary);
    // console.log("Result:", result);
    ClearFields();
    setLoader(false);
  }

  const Validation = () => {
    if (email === '' || subject === '' || message === '') {
      setError('All fields are required');
      return false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;

  }


  const ClearFields = () => {
    setEmail('');
    setMessage('');
    setSubject('');
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.Heading}>Contact Us</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.SubHeading}>info@spaceskool.com</Text>
            <Text style={styles.SubHeading}>hr@spaceskool.com</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.SubHeading}>ASTRO School of Space Education & Research  Private Limited.</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.SubHeading}>CIN : U80901AP2022PTC122602</Text>
            <Text style={styles.SubHeading}>MSME : UDYAM-AP-11-0008515</Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={[styles.SubHeading, { textDecorationLine: "underline" }]}>Registered Address :</Text>
            <Text style={styles.SubHeading}>Gangammapeta Vill, Jiyymmavalasa Mand, Vizianagaram Vizianagaram Ap 535526.</Text>
          </View>

          <View style={{
            width: "100%",
            // height: 500,
            marginBottom: 20,
            backgroundColor: "#fff",
            marginTop: 40,
            paddingHorizontal: 15,
            paddingTop: 10
          }}>
            <Text style={[styles.title, { marginStart: 0 }]}>{`Send us a message\nand we’ll get back to you shortly.`}</Text>

            <Text style={{
              alignSelf: "center",
              color: "red"
            }}>{error}</Text>
            <Text style={[styles.title, { fontWeight: "500" }]}>Email *</Text>
            <TextInput
            
              value={email}
              onChangeText={(txt) => {setEmail(txt),setError('')}}
              placeholder='e.g., email@example.com'
              placeholderTextColor={'#004193'}
              style={styles.Input}
              editable={!loader}
            />
            <Text style={[styles.title, { fontWeight: "500" }]}>Subject *</Text>
            <TextInput
            
              value={subject}
              onChangeText={(txt) => {setSubject(txt),setError('')}}
              placeholder='e.g., Support'
              placeholderTextColor={'#004193'}
              style={styles.Input}
              editable={!loader}
            />
            <Text style={[styles.title, { fontWeight: "500" }]}>Your message *</Text>
            <TextInput
              value={message}
              onChangeText={(txt) => {setMessage(txt),setError('')}}
              placeholder='Enter text here'
              placeholderTextColor={'#004193'}
              style={[styles.Input, { height: 120, textAlignVertical: "top" }]}
              editable={!loader}
            />
            <Pressable style={styles.SendButton} onPress={SendHandle}>
              {
                loader ?
                  <ActivityIndicator color="#fff" size={'small'} />
                  :
                  <Text style={styles.ButtonText}>Send</Text>

              }
            </Pressable>


          </View>



        </View>
        <Footer />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    fontWeight: "700",
    color: '#004193',
    marginTop: 20
  },
  SubHeading: {
    fontSize: 18,
    fontWeight: "600"
  },
  title: {
    color: "#1D67CD",
    fontSize: 16,
    fontWeight: "250",
    lineHeight: 30,
    marginStart: 20,
    marginTop: 5
  },
  Input: {
    backgroundColor: "#1274fd25",
    borderRadius: 16,
    fontWeight: "300",
    paddingStart: 20,
    paddingVertical: 20,
    color: '#004193'
  },
  SendButton: {
    alignSelf: "center",
    backgroundColor: "rgb(29,103,205)",

    height: 50,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 30,

  },
  ButtonText: {
    color: "#fff",
    fontSize: 16
  }
})