import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from '../../../components/CheckBox';
import Footer from '../../../components/Footer';
import Card from '../../../components/card';
import { TextData } from '../../../data';


const dropDownData = [
  { label: 'Grade 6', value: 'Grade 6' },
  { label: 'Grade 7', value: 'Grade 7' },
  { label: 'Grade 8', value: 'Grade 8' },
  { label: 'Grade 9', value: 'Grade 9' },
  { label: 'Grade 10', value: 'Grade 10' },
  { label: 'Grade 11', value: 'Grade 11' },
  { label: 'Grade 12', value: 'Grade 12' },
];

const InteretedData = [
  { label: 'Model Rocketry', value: 'Model Rocketry' },
  { label: 'CubeSat Building', value: 'CubeSat Building' },
  { label: 'Drone Building', value: 'Drone Building' },
  { label: 'Star Gazing', value: 'Star Gazing' },
  { label: 'Space Tinkering', value: 'Space Tinkering' },
]

export default function summerCamp() {
  const [name, setName] = useState('');
  const [Lastname, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [PhoneNo, setPhoneNo] = useState('')
  const [StudentName, setStudentName] = useState('')
  const [CubeSatsActive, setCubeSatsActive] = useState('')
  const [DronActive, setDronActive] = useState('')
  const [StargazingActive, setStargazingActive] = useState('')
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [instruments, setInstruments] = useState([])
  const [TermCondition, setTermCondition] = useState('')



  const SendData = () => {
    Alert.alert("send data ")
    console.log("Parent First name:", name)
    console.log("Parent Last name:", Lastname)
    console.log("Parent email:", Email)
    console.log("Parent Phone NO :", PhoneNo)
    console.log("Student name :", StudentName)
    console.log("Intrested in :", `${CubeSatsActive}, ${DronActive},${StargazingActive}`)
    console.log("Greade :", value)
    console.log("Interested in :", instruments)
    console.log("Term & Condition :", TermCondition)

    setName('');
    setLastName('');
    setEmail('');
    setPhoneNo('');
    setStudentName('');
    setCubeSatsActive('');
    setDronActive('');
    setStargazingActive('');
    setValue(null);
    setInstruments([]);
    setTermCondition('')


  }
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "purple", paddingBottom: 100 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/76c345_985554d3724b4dd9ae29abfd67d17384~mv2.png/v1/fill/w_241,h_53,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(A2%20(Landscape))%20(17)_edited.png' }}
              style={{
                width: 150, height: 80
              }}
              resizeMode='contain'
            />
            <Image
              source={{ uri: 'https://static.wixstatic.com/media/76c345_e0d899679aa949259ca9aac145481912~mv2.png/v1/crop/x_29,y_0,w_2545,h_524/fill/w_412,h_85,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Landscape%20Event%20Creatives%20(3)_edited.png' }}
              style={{
                width: 150, height: 80
              }}
              resizeMode='contain'
            />
          </View>
          <View style={{
            backgroundColor: "rgba(255, 251, 251, 0.57)",
            paddingHorizontal: 10,
            paddingVertical: 6,
            marginTop: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            alignSelf: "center"
          }}>
            <Text style={{
              color: "#fff",
              fontSize: 10,
              fontWeight: "500"
            }}>Summer 2025 - 3 Day immersive Program</Text>

          </View>
          <Text style={{
            alignSelf: "center",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "900",
            color: "#fff",
            marginTop: 20
          }}>{`Explore the\n`}<Text style={{ color: "#f7e500" }}>Wonders of Space!</Text></Text>
          <Text style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 10,
            marginTop: 20
          }}>
            Hands- on experience with rocketry, satellites (cubesats), drones and stargazing for students in grades 6-12. Launch your passion for space exploration in our immersive three day programme!
          </Text>
          <View style={{ alignSelf: "center", marginTop: 30, flexDirection: "row", gap: 10 }}>
            <View style={{
              backgroundColor: "#fff",
              paddingHorizontal: 30,
              paddingVertical: 7,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#0d4193"


            }}>
              <Text style={{
                color: "#116dff",
                fontSize: 14,
                fontWeight: "700"
              }}>Registor Now</Text>
            </View>
            <View style={{
              backgroundColor: "#0d4193",
              paddingHorizontal: 30,
              paddingVertical: 7,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#fff"


            }}>
              <Text style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: "700"
              }}>Explor Program</Text>
            </View>
          </View>

          <Text style={{
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "700",
            color: "#f7e500",
            marginTop: 100
          }}>Institutional Partner</Text>
          <Image
            source={{ uri: 'https://static.wixstatic.com/media/76c345_44960472aacd46fda4e8c01aaf7c4df8~mv2.png/v1/crop/x_34,y_0,w_2810,h_986/fill/w_228,h_80,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(A2%20(Landscape))%20(19)_edited.png' }}
            style={{
              width: 200,
              height: 80,
              // backgroundColor:"red",
              alignSelf: "center",

            }}
            resizeMode='contain'
          />

        </View>
        <View style={{ paddingHorizontal: 0 }}>
          <Text style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: '700',
            marginTop: 20
          }}>A Three- Day <Text style={{ color: "#8747CC" }}>Immersive Experience</Text> </Text>
          <Text
            style={{
              color: "#000",
              alignSelf: "center",
              fontSize: 8,
              textAlign: "center",
              lineHeight: 15
            }}>Our carefully designed program takes students on a journey through different aspects of space exploration with hands-on activities led by experts.</Text>

          <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: 20 }}>
            <Card title={'Rocketry'} pargraph={TextData.Rocket_text} onPress={() => Alert.alert("Rocketry")} />
            <Card title={'CubeSats'} pargraph={TextData.CubeSats_Text} onPress={() => Alert.alert("CubeSats")} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginTop: 10 }}>
            <Card title={'Stargazing'} pargraph={TextData.Stargazing_Text} onPress={() => Alert.alert("Stargazing")} />
            <Card title={'SpaceSciences'} pargraph={TextData.space_Text} onPress={() => Alert.alert("SpaceSciences")} />
          </View>
          <View style={{
            backgroundColor: "#fff",
            width: "90%",
            // height: 00,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 12,
            paddingHorizontal: 20,
            paddingBottom: 40,
            elevation: 12,
            marginBottom: 20
          }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: "600",
                color: "#000",
                alignSelf: "center",
                marginTop: 30,
              }}
            >Registration Form</Text>
            <Text style={styles.Label}>First name</Text>
            <TextInput style={styles.TextInput}
              placeholder='Parent First name'
              value={name}
              onChangeText={(txt) => setName(txt)}
              placeholderTextColor={'gray'} />
            <Text style={styles.Label}>Last name</Text>
            <TextInput style={styles.TextInput}
              placeholder='Parent Last name'
              value={Lastname}
              onChangeText={(txt) => setLastName(txt)}
              placeholderTextColor={'gray'} />
            <Text style={styles.Label}>Parent's Email</Text>
            <TextInput style={styles.TextInput}
              placeholder='Parent@email.com'
              value={Email}
              onChangeText={(txt) => setEmail(txt)}
              placeholderTextColor={'gray'} />


            <Text style={styles.Label}>Phone</Text>
            <TextInput style={styles.TextInput}
              value={PhoneNo}
              onChangeText={(txt) => setPhoneNo(txt)}
              placeholderTextColor={'gray'} />


            <Text style={styles.Label}>Student Full Name</Text>
            <TextInput style={styles.TextInput}
              value={StudentName}
              onChangeText={(txt) => setStudentName(txt)}
              placeholderTextColor={'gray'} />

            <Text style={styles.Label}>Interested in(Optional)</Text>
            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <Text
                onPress={() => {
                  if (CubeSatsActive == '') {
                    setCubeSatsActive('CubeSats')
                  }
                  else {
                    setCubeSatsActive('')
                  }
                }}
                style={[styles.InterestedOption, CubeSatsActive !== '' && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>CubeSats</Text>


              <Text onPress={() => {
                if (DronActive == '') {
                  setDronActive('Drone Building')
                }
                else {
                  setDronActive('')
                }
              }}
                style={[styles.InterestedOption, DronActive !== '' && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>Drone Building</Text>
            </View>


            <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
              <Text onPress={() => {
                if (StargazingActive == '') {
                  setStargazingActive('Stargazing')
                }
                else {
                  setStargazingActive('')
                }
              }}
                style={[styles.InterestedOption, StargazingActive !== '' && {
                  backgroundColor: 'rgba(216, 48, 238, 0.07)',
                  borderColor: 'rgba(169, 25, 182, 1)',
                }]}>Stargazing</Text>
            </View>

            <Text style={styles.Label}>Select Grade *</Text>
            {renderLabel()}
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dropDownData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              renderLeftIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={isFocus ? 'blue' : 'black'}
                  name="Safety"
                  size={20}
                />
              )}
            />
            <Text style={[styles.Label,{marginBottom:20}]}>Interested In</Text>
            <CheckBox options={InteretedData}
              checkedValues={instruments}
              onChange={setInstruments}
            />
            <Pressable style={{ flexDirection: "row", gap: 10, marginTop: 20 }}
              onPress={() => {
                if (TermCondition == '') {
                  setTermCondition('agree')

                }
                else {
                  setTermCondition('')
                }
              }}
            >
              <MaterialIcons name={TermCondition ? 'check-box' : "check-box-outline-blank"} size={20} color={TermCondition ? 'green' : "black"} />
              <Text style={{ fontWeight: "700" }}>I agree to the Term & Condition
                <Text style={{ fontWeight: "400" }}> and acknowledge that the SpaceSkool team may Contact me regarding the Space Simmer Camp. *</Text></Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => SendData()}
              style={{
                alignSelf: "center",
                backgroundColor: "rgba(4, 73, 138, 1)",
                paddingHorizontal: 100,
                paddingVertical: 10,
                borderRadius: 50,
                marginTop: 40
              }}>
              <Text style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "600"
              }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>


        <Footer />
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  Label: {
    fontSize: 14,
    color: '#000',
    marginTop: 20

  },
  TextInput: {
    width: "100%",
    borderRadius: 7,
    marginTop: 8,
    borderWidth: 0.7,
    borderColor: "#000",
    paddingStart: 10,
    fontSize: 16
  },
  InterestedOption: {
    borderRadius: 7,
    borderColor: "#000",
    borderWidth: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 5

  },
  dropdown: {
    marginTop: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})